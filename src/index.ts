import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";

type Toolkit = "googlesuper" | "github";

type RawTool = Record<string, unknown>;

type ToolParameter = {
  name: string;
  required: boolean;
  type?: string;
  description?: string;
};

type ToolSummary = {
  id: string;
  name: string;
  toolkit: Toolkit;
  description: string;
  parameters: ToolParameter[];
  requiredParameters: ToolParameter[];
};

type DependencyEdge = {
  from: string;
  to: string;
  input: string;
  confidence: number;
  reason: string;
  source: "heuristic" | "llm";
};

type Graph = {
  generatedAt: string;
  toolkits: Toolkit[];
  nodes: ToolSummary[];
  edges: DependencyEdge[];
  unresolvedInputs: Array<{
    tool: string;
    input: string;
    reason: string;
  }>;
};

const TOOLKITS: Toolkit[] = ["googlesuper", "github"];
const OUT_DIR = "artifacts";
const RAW_DIR = `${OUT_DIR}/raw`;
const GRAPH_JSON = `${OUT_DIR}/dependency-graph.json`;
const GRAPH_MD = `${OUT_DIR}/dependency-graph.md`;
const GRAPH_HTML = `${OUT_DIR}/dependency-graph.html`;

const PARAMETER_STOPWORDS = new Set([
  "a",
  "an",
  "and",
  "by",
  "for",
  "from",
  "id",
  "ids",
  "in",
  "is",
  "of",
  "on",
  "the",
  "to",
  "with",
]);

const GENERIC_ENTITY_TOKENS = new Set([
  "access",
  "branch",
  "calendar",
  "file",
  "id",
  "issue",
  "list",
  "message",
  "migration",
  "name",
  "org",
  "package",
  "permission",
  "project",
  "repo",
  "repository",
  "team",
  "token",
  "user",
]);

const TOOL_REFERENCE_STOPWORDS = new Set([
  "AFTER_ENRICHMENT_ITEM",
  "AFTER_MEDIA_ITEM",
  "BOTTOM_LEGEND",
  "CARIBBEAN_GREEN",
  "CATEGORY_FORUMS",
  "CATEGORY_PERSONAL",
  "CATEGORY_PROMOTIONS",
  "CATEGORY_SOCIAL",
  "CATEGORY_UPDATES",
  "COMPATIBILITY_UNSPECIFIED",
  "COMPATIBLE",
  "CONSTRAINT",
  "CRITICAL",
  "DATA_SOURCE",
  "DELETED",
  "EXISTING",
  "FIRST_IN_ALBUM",
  "FORMATTED_STRING",
  "FORMATTED_VALUE",
  "IMPORTANT",
  "INCOMPATIBLE",
  "INPUT_VALUE_OPTION_UNSPECIFIED",
  "INVALID_ARGUMENT",
  "LAST_IN_ALBUM",
  "LEFT_LEGEND",
  "LIMITATION",
  "NO_LEGEND",
  "REPORT_COMPATIBLE",
  "REQUIRED",
  "REQUIRES",
  "RFC3339",
  "RFC5545",
  "RIGHT_LEGEND",
  "ROYAL_BLUE",
  "SERIAL_NUMBER",
  "SPREADSHEET_ID",
  "TOP_LEGEND",
  "USER_ENTERED",
  "WITHOUT",
  "YYYYMMDD",
  "YYYYMMDDTHHMMSSZ",
]);

await main();

async function main() {
  await loadDotEnv();
  await mkdir(RAW_DIR, { recursive: true });

  const rawToolsByToolkit = await fetchOrLoadTools();
  const tools = TOOLKITS.flatMap((toolkit) =>
    rawToolsByToolkit[toolkit].map((tool) => summarizeTool(tool, toolkit)),
  ).sort((a, b) => a.id.localeCompare(b.id));

  const heuristicEdges = inferHeuristicEdges(tools);
  const semanticEdges = inferSemanticEdges(tools);
  const coveredKeys = new Set(
    [...heuristicEdges, ...semanticEdges].map((e) => `${e.to}:${e.input}`),
  );
  const llmEdges = await inferLlmEdges(tools, coveredKeys).catch(
    (error: unknown) => {
      console.warn(`LLM refinement skipped: ${formatError(error)}`);
      return [];
    },
  );
  const edges = mergeEdges(
    [...heuristicEdges, ...semanticEdges, ...llmEdges],
    tools,
  );
  const unresolvedInputs = findUnresolvedInputs(tools, edges);

  const graph: Graph = {
    generatedAt: new Date().toISOString(),
    toolkits: TOOLKITS,
    nodes: tools,
    edges,
    unresolvedInputs,
  };

  await writeFile(GRAPH_JSON, `${JSON.stringify(graph, null, 2)}\n`, "utf-8");
  await writeFile(GRAPH_MD, renderMarkdown(graph), "utf-8");
  await writeFile(GRAPH_HTML, renderHtml(graph), "utf-8");

  console.log(`Wrote ${GRAPH_JSON}`);
  console.log(`Wrote ${GRAPH_MD}`);
  console.log(`Wrote ${GRAPH_HTML}`);
  console.log(
    `Graph contains ${graph.nodes.length} tools, ${graph.edges.length} dependencies, and ${graph.unresolvedInputs.length} unresolved required inputs.`,
  );
}

async function loadDotEnv() {
  if (!existsSync(".env")) return;

  const contents = await readFile(".env", "utf-8");
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator);
    const value = trimmed.slice(separator + 1);
    process.env[key] ??= value;
  }
}

async function fetchOrLoadTools(): Promise<Record<Toolkit, RawTool[]>> {
  if (!process.env.COMPOSIO_API_KEY) {
    const cached = await loadCachedTools();
    if (cached) return cached;

    throw new Error(
      "COMPOSIO_API_KEY is required to fetch tools. Run COMPOSIO_API_KEY=... sh scaffold.sh, then bun run generate.",
    );
  }

  const { Composio } = (await import("@composio/core")) as {
    Composio: new () => {
      tools: {
        getRawComposioTools: (options: {
          toolkits: Toolkit[];
          limit: number;
        }) => Promise<RawTool[]>;
      };
    };
  };
  const composio = new Composio();
  const result = {} as Record<Toolkit, RawTool[]>;

  for (const toolkit of TOOLKITS) {
    const tools = (await composio.tools.getRawComposioTools({
      toolkits: [toolkit],
      limit: 1000,
    })) as RawTool[];

    result[toolkit] = tools;
    await writeFile(
      `${RAW_DIR}/${toolkit}_tools.json`,
      `${JSON.stringify(tools, null, 2)}\n`,
      "utf-8",
    );
  }

  return result;
}

async function loadCachedTools(): Promise<Record<Toolkit, RawTool[]> | null> {
  const result = {} as Record<Toolkit, RawTool[]>;

  for (const toolkit of TOOLKITS) {
    const file = `${RAW_DIR}/${toolkit}_tools.json`;
    if (!existsSync(file)) return null;
    result[toolkit] = JSON.parse(await readFile(file, "utf-8")) as RawTool[];
  }

  return result;
}

function summarizeTool(raw: RawTool, toolkit: Toolkit): ToolSummary {
  const name =
    firstString(raw, [
      "slug",
      "name",
      "toolName",
      "tool_name",
      "function.name",
    ]) ?? "UNKNOWN_TOOL";
  const description =
    firstString(raw, [
      "description",
      "displayDescription",
      "function.description",
      "meta.description",
    ]) ?? "";
  const parameters = extractParameters(raw);

  return {
    id: `${toolkit}:${name}`,
    name,
    toolkit,
    description,
    parameters,
    requiredParameters: parameters.filter((parameter) => parameter.required),
  };
}

function firstString(value: unknown, paths: string[]) {
  for (const path of paths) {
    const candidate = getByPath(value, path);
    if (typeof candidate === "string" && candidate.trim())
      return candidate.trim();
  }
  return undefined;
}

function getByPath(value: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => {
    if (!isRecord(current)) return undefined;
    return current[key];
  }, value);
}

function extractParameters(raw: RawTool): ToolParameter[] {
  const schema =
    getByPath(raw, "inputSchema") ??
    getByPath(raw, "input_schema") ??
    getByPath(raw, "inputParameters") ??
    getByPath(raw, "input_parameters") ??
    getByPath(raw, "parameters") ??
    getByPath(raw, "function.parameters") ??
    getByPath(raw, "schema");

  if (!isRecord(schema)) return [];

  const properties = findPropertiesObject(schema);
  const required = new Set(findRequiredFields(schema));

  return Object.entries(properties)
    .map(([name, value]) => {
      const field = isRecord(value) ? value : {};
      return {
        name,
        required: required.has(name),
        type: typeof field.type === "string" ? field.type : undefined,
        description:
          typeof field.description === "string" ? field.description : undefined,
      };
    })
    .sort(
      (a, b) =>
        Number(b.required) - Number(a.required) || a.name.localeCompare(b.name),
    );
}

function findPropertiesObject(
  schema: Record<string, unknown>,
): Record<string, unknown> {
  if (isRecord(schema.properties)) return schema.properties;
  if (isRecord(schema.inputSchema) && isRecord(schema.inputSchema.properties)) {
    return schema.inputSchema.properties;
  }
  if (isRecord(schema.schema) && isRecord(schema.schema.properties)) {
    return schema.schema.properties;
  }
  return {};
}

function findRequiredFields(schema: Record<string, unknown>): string[] {
  if (Array.isArray(schema.required)) {
    return schema.required.filter(
      (field): field is string => typeof field === "string",
    );
  }
  if (isRecord(schema.inputSchema))
    return findRequiredFields(schema.inputSchema);
  if (isRecord(schema.schema)) return findRequiredFields(schema.schema);
  return [];
}

function inferHeuristicEdges(tools: ToolSummary[]): DependencyEdge[] {
  const edges: DependencyEdge[] = [];
  const toolLookup = createToolLookup(tools);

  for (const target of tools) {
    for (const input of target.requiredParameters) {
      const explicitEdges = explicitDependencyEdges(target, input, toolLookup);
      edges.push(...explicitEdges);

      if (explicitEdges.length > 0) continue;
      if (isPrimitiveUserInput(input.name)) continue;

      const candidates = tools
        .filter((source) => source.id !== target.id)
        .filter((source) => source.toolkit === target.toolkit)
        .filter((source) => producerVerbScore(source) > 0)
        .map((source) => scoreDependency(source, target, input))
        .filter((candidate) => candidate.confidence >= 0.68)
        .sort((a, b) => b.confidence - a.confidence)
        .slice(0, 1);

      for (const candidate of candidates) {
        edges.push({
          from: candidate.source.id,
          to: target.id,
          input: input.name,
          confidence: candidate.confidence,
          reason: candidate.reason,
          source: "heuristic",
        });
      }
    }
  }

  return edges;
}

function createToolLookup(tools: ToolSummary[]) {
  const byToolkit = new Map<Toolkit, ToolSummary[]>();
  for (const tool of tools) {
    byToolkit.set(tool.toolkit, [...(byToolkit.get(tool.toolkit) ?? []), tool]);
  }
  return byToolkit;
}

function explicitDependencyEdges(
  target: ToolSummary,
  input: ToolParameter,
  toolLookup: Map<Toolkit, ToolSummary[]>,
): DependencyEdge[] {
  const description = input.description ?? "";
  const referencedTools = extractReferencedTools(
    description,
    target.toolkit,
    toolLookup,
  );

  return referencedTools
    .filter((source) => source.id !== target.id)
    .filter((source) => isProducerTool(source))
    .slice(0, 3)
    .map((source) => ({
      from: source.id,
      to: target.id,
      input: input.name,
      confidence: 0.98,
      reason: `input description explicitly references ${source.name}`,
      source: "heuristic" as const,
    }));
}

function isProducerTool(tool: ToolSummary): boolean {
  if (producerVerbScore(tool) > 0) return true;
  const name = tool.name.toUpperCase();
  return /(^|_)(CREATE|INSERT|GENERATE|MAKE|ADD)(_|$)/.test(name);
}

function extractReferencedTools(
  description: string,
  toolkit: Toolkit,
  toolLookup: Map<Toolkit, ToolSummary[]>,
) {
  const tools = toolLookup.get(toolkit) ?? [];
  const seen = new Set<string>();
  const matches = description.match(/\b[A-Z][A-Z0-9_]{5,}\b/g) ?? [];
  const resolved: ToolSummary[] = [];

  for (const match of matches) {
    if (!match.includes("_")) continue;
    if (TOOL_REFERENCE_STOPWORDS.has(match)) continue;

    const suffix = normalizeReferencedTool(match);
    if (!suffix || suffix.length < 4) continue;

    const candidates = tools
      .filter((tool) => tool.name.endsWith(suffix))
      .sort((a, b) => a.name.length - b.name.length);
    const candidate = candidates[0];
    if (!candidate || seen.has(candidate.id)) continue;

    seen.add(candidate.id);
    resolved.push(candidate);
  }

  return resolved;
}

function normalizeReferencedTool(reference: string) {
  const vendorPrefixes = [
    "ADS",
    "ANALYTICS",
    "CALENDAR",
    "DOCS",
    "DRIVE",
    "GMAIL",
    "GOOGLE",
    "GOOGLEADS",
    "GOOGLEANALYTICS",
    "GOOGLECALENDAR",
    "GOOGLEDOCS",
    "GOOGLEDRIVE",
    "GOOGLEMEET",
    "GOOGLEPHOTOS",
    "GOOGLESHEETS",
    "GOOGLESLIDES",
    "GOOGLETASKS",
    "MEET",
    "PHOTOS",
    "SHEETS",
    "SLIDES",
    "TASKS",
    "GITHUB",
  ];
  const parts = reference.split("_");
  while (parts.length > 1 && vendorPrefixes.includes(parts[0] ?? "")) {
    parts.shift();
  }
  if (parts.length < 2) return "";
  return parts.join("_");
}

function scoreDependency(
  source: ToolSummary,
  target: ToolSummary,
  input: ToolParameter,
) {
  if (!isResourceLikeInput(input.name)) {
    return {
      source,
      confidence: 0,
      reason: "fallback inference only links resource-like identifiers",
    };
  }

  const inputTokens = tokens(input.name);
  const entityTokens = inputTokens.filter(
    (token) => !PARAMETER_STOPWORDS.has(token),
  );
  const sourceText = tokens(`${source.name} ${source.description}`).join(" ");
  const targetText = tokens(`${target.name} ${target.description}`).join(" ");
  const sourceVerbScore = producerVerbScore(source);
  const exactInputPhrase = inputTokens.join(" ");
  let score = 0;
  const reasons: string[] = [];

  if (sourceVerbScore > 0) {
    score += sourceVerbScore;
    reasons.push("source is a retrieval/list/search style tool");
  }

  if (sourceText.includes(exactInputPhrase)) {
    score += 0.45;
    reasons.push(`source mentions exact input '${exactInputPhrase}'`);
  }

  const nonGenericTokens = entityTokens.filter(
    (token) => !GENERIC_ENTITY_TOKENS.has(token),
  );
  let matchedNonGeneric = false;
  const tokensWorthMatching =
    nonGenericTokens.length > 0 || entityTokens.length > 1
      ? entityTokens
      : nonGenericTokens;

  for (const token of tokensWorthMatching) {
    if (sourceText.includes(token)) {
      score += token === "id" ? 0.08 : 0.22;
      reasons.push(`source mentions '${token}'`);
      if (nonGenericTokens.includes(token)) matchedNonGeneric = true;
    }
    if (targetText.includes(token)) score += token === "id" ? 0.03 : 0.06;
  }

  if (nonGenericTokens.length > 0 && !matchedNonGeneric) {
    return {
      source,
      confidence: 0,
      reason: "source did not match the specific input entity",
    };
  }

  const base = entityTokens.filter((token) => token !== "id").join("_");
  if (
    base &&
    entityTokens.length > 1 &&
    sourceText.includes(base.replaceAll("_", " "))
  ) {
    score += 0.24;
    reasons.push(`source matches the input entity '${base}'`);
  }

  if (source.name.includes("DELETE") || source.name.includes("CREATE"))
    score -= 0.18;
  if (source.name.includes("SEND") || source.name.includes("UPDATE"))
    score -= 0.12;

  return {
    source,
    confidence: Math.min(0.95, Number(score.toFixed(2))),
    reason: reasons.slice(0, 3).join("; ") || "input/source names are related",
  };
}

function isResourceLikeInput(input: string) {
  const normalized = input.toLowerCase();
  return (
    normalized.includes("id") ||
    normalized.includes("number") ||
    normalized.includes("sha") ||
    normalized === "ref" ||
    normalized === "branch" ||
    normalized === "path" ||
    normalized.endsWith("_url")
  );
}

function producerVerbScore(tool: ToolSummary) {
  const normalized = tool.name.toUpperCase();
  const descriptionStart = tool.description
    .trim()
    .split(/\s+/)[0]
    ?.toUpperCase();
  if (/(^|_)(LIST|SEARCH|FIND|LOOKUP|QUERY)(_|$)/.test(normalized)) return 0.34;
  if (/(^|_)(GET|FETCH|READ|RETRIEVE)(_|$)/.test(normalized)) return 0.28;
  if (
    ["LIST", "SEARCH", "FIND", "LOOKUP", "QUERY"].includes(
      descriptionStart ?? "",
    )
  ) {
    return 0.3;
  }
  if (["GET", "FETCH", "READ", "RETRIEVE"].includes(descriptionStart ?? "")) {
    return 0.24;
  }
  return 0;
}

function isPrimitiveUserInput(input: string) {
  const normalized = input.toLowerCase();
  return (
    [
      "access_token",
      "action",
      "account",
      "address_query",
      "body",
      "color",
      "content",
      "description",
      "email",
      "labels",
      "limit",
      "message",
      "name",
      "names",
      "operation",
      "org",
      "owner",
      "package_name",
      "package_type",
      "permission",
      "permissions",
      "q",
      "query",
      "repo",
      "requests",
      "sql",
      "state",
      "text",
      "title",
      "type",
      "userid",
      "username",
      "visibility",
    ].includes(normalized) ||
    normalized.endsWith("_name") ||
    normalized.endsWith("Name") ||
    normalized.includes("token") ||
    normalized.includes("secret")
  );
}

// Semantic rules that bridge the gap between heuristic text-matching and full LLM inference.
// Handles cases where the non-generic token in a parameter name (e.g. "slug" in "team_slug")
// does not appear verbatim in source tool descriptions, and cross-domain relationships like
// contacts → email where no naming overlap exists.
function inferSemanticEdges(tools: ToolSummary[]): DependencyEdge[] {
  const edges: DependencyEdge[] = [];
  const byId = new Map(tools.map((t) => [t.id, t]));

  type SemanticRule = {
    // matches the required input name of the target tool
    inputPattern: RegExp;
    // toolkit the rule applies to
    toolkit: Toolkit;
    // regex against source tool NAME — all matching producer tools become sources
    sourcePattern: RegExp;
    // optional: only apply when target name also matches this
    targetPattern?: RegExp;
    confidence: number;
    reason: string;
  };

  const RULES: SemanticRule[] = [
    // ── GitHub ──────────────────────────────────────────────────────────────
    {
      inputPattern: /^team_slug$/,
      toolkit: "github",
      sourcePattern: /LIST_TEAMS/,
      confidence: 0.82,
      reason: "team_slug is a team identifier; LIST_TEAMS enumerates teams with slug fields",
    },
    {
      inputPattern: /^run_id$/,
      toolkit: "github",
      sourcePattern: /LIST_WORKFLOW_RUNS/,
      confidence: 0.84,
      reason: "run_id is a workflow run identifier; LIST_WORKFLOW_RUNS returns run IDs",
    },
    {
      inputPattern: /^runner_id$/,
      toolkit: "github",
      sourcePattern: /LIST_SELF_HOSTED_RUNNERS/,
      confidence: 0.82,
      reason: "runner_id is a self-hosted runner identifier; LIST_SELF_HOSTED_RUNNERS enumerates runners",
    },
    {
      inputPattern: /^role_id$/,
      toolkit: "github",
      sourcePattern: /LIST_ORGANIZATION_ROLES/,
      confidence: 0.82,
      reason: "role_id is an org role identifier; LIST_ORGANIZATION_ROLES enumerates roles",
    },
    {
      inputPattern: /^reaction_id$/,
      toolkit: "github",
      sourcePattern: /LIST_REACTIONS/,
      confidence: 0.80,
      reason: "reaction_id is a reaction identifier; LIST_REACTIONS_FOR_* tools enumerate reactions",
    },
    {
      inputPattern: /^pat_id$|^pat_request_id$/,
      toolkit: "github",
      sourcePattern: /LIST_ORG_RESOURCE_ACCESS_TOKENS|LIST_PAT|LIST_FINE_GRAINED/,
      confidence: 0.80,
      reason: "pat_id is a fine-grained PAT identifier; org PAT listing tools provide these IDs",
    },
    {
      inputPattern: /^invitation_id$/,
      toolkit: "github",
      sourcePattern: /LIST_PENDING.*INVITATION|LIST_INVITATION/,
      confidence: 0.80,
      reason: "invitation_id is an org invitation identifier; LIST_PENDING_ORGANIZATION_INVITATIONS provides IDs",
    },
    // ── Google Super ────────────────────────────────────────────────────────
    {
      inputPattern: /^spreadsheet_id$/,
      toolkit: "googlesuper",
      sourcePattern: /GET_SPREADSHEET_INFO|LIST_SPREADSHEET/,
      confidence: 0.84,
      reason: "spreadsheet_id is a Google Sheets identifier; GET_SPREADSHEET_INFO retrieves spreadsheet metadata including ID",
    },
    {
      inputPattern: /^document_id$/,
      toolkit: "googlesuper",
      sourcePattern: /CREATE_DOCUMENT|GET_DOCUMENT_BY_ID|LIST_DOCUMENTS/,
      confidence: 0.82,
      reason: "document_id is a Google Docs identifier; CREATE_DOCUMENT returns it, GET_DOCUMENT_BY_ID accepts it",
    },
    // Contacts → email sending: the explicit task example from the readme
    {
      inputPattern: /^recipient_email$|^extra_recipients$/,
      toolkit: "googlesuper",
      sourcePattern: /GET_CONTACTS/,
      confidence: 0.85,
      reason: "recipient email address can be looked up by name using GET_CONTACTS before sending",
    },
  ];

  for (const rule of RULES) {
    const toolkitTools = tools.filter((t) => t.toolkit === rule.toolkit);
    const sources = toolkitTools
      .filter((t) => isProducerTool(t) && rule.sourcePattern.test(t.name));

    if (sources.length === 0) continue;

    for (const target of toolkitTools) {
      if (rule.targetPattern && !rule.targetPattern.test(target.name)) continue;

      // Check required params first, then important optional params
      const matchingParams = [
        ...target.requiredParameters,
        ...target.parameters.filter((p) => !p.required),
      ].filter((p) => rule.inputPattern.test(p.name));

      for (const param of matchingParams) {
        for (const source of sources) {
          if (source.id === target.id) continue;
          const existing = byId.get(source.id);
          if (!existing) continue;
          edges.push({
            from: source.id,
            to: target.id,
            input: param.name,
            confidence: rule.confidence,
            reason: rule.reason,
            source: "heuristic",
          });
        }
      }
    }
  }

  // General entity-prefix matching for 5+ char entity tokens not caught above
  for (const target of tools) {
    for (const input of target.requiredParameters) {
      if (isPrimitiveUserInput(input.name)) continue;

      const entity = extractEntityToken(input.name);
      if (!entity || entity.length < 5) continue;

      const entityUpper = entity.toUpperCase();
      const candidates = tools
        .filter((t) => t.id !== target.id && t.toolkit === target.toolkit)
        .filter((t) => isProducerTool(t))
        .filter((t) => t.name.toUpperCase().includes(entityUpper))
        .sort((a, b) => {
          // Prefer tools whose name ends with the entity plural form (closest semantic match)
          const aEnds = a.name.toUpperCase().endsWith(entityUpper + "S") ? 1 : 0;
          const bEnds = b.name.toUpperCase().endsWith(entityUpper + "S") ? 1 : 0;
          return bEnds - aEnds || producerVerbScore(b) - producerVerbScore(a);
        })
        .slice(0, 1);

      for (const source of candidates) {
        edges.push({
          from: source.id,
          to: target.id,
          input: input.name,
          confidence: 0.76,
          reason: `entity '${entity}' from ${input.name} resolved via source tool name match`,
          source: "heuristic",
        });
      }
    }
  }

  return edges;
}

function extractEntityToken(inputName: string): string {
  // Strip common identifier suffixes to get the entity noun
  return inputName
    .replace(/_(id|ids|slug|number|sha|key|ref|url)$/i, "")
    .toLowerCase();
}

async function inferLlmEdges(
  tools: ToolSummary[],
  coveredKeys: Set<string>,
): Promise<DependencyEdge[]> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return [];

  const allEdges: DependencyEdge[] = [];

  for (const toolkit of TOOLKITS) {
    const toolkitTools = tools.filter((t) => t.toolkit === toolkit);

    // Only producer tools go into the catalog — reduces token cost and noise
    const producerCatalog = toolkitTools
      .filter((t) => isProducerTool(t))
      .map((t) => `${t.id}: ${t.description.slice(0, 90)}`)
      .join("\n");

    // Target tools: those with uncovered required params OR important optional params
    const targetTools = toolkitTools.filter((tool) => {
      const hasUncoveredRequired = tool.requiredParameters.some(
        (p) =>
          !coveredKeys.has(`${tool.id}:${p.name}`) &&
          !isPrimitiveUserInput(p.name),
      );
      const hasImportantOptional = tool.parameters.some(
        (p) => !p.required && isEmailOrContactParam(p.name),
      );
      return hasUncoveredRequired || hasImportantOptional;
    });

    if (targetTools.length === 0) continue;

    const BATCH_SIZE = 40;
    for (let i = 0; i < targetTools.length; i += BATCH_SIZE) {
      const batch = targetTools.slice(i, i + BATCH_SIZE);
      const batchNum = Math.floor(i / BATCH_SIZE) + 1;
      const totalBatches = Math.ceil(targetTools.length / BATCH_SIZE);
      console.log(
        `  LLM batch ${batchNum}/${totalBatches} (${toolkit}, ${batch.length} tools)…`,
      );

      const targets = batch
        .map((tool) => ({
          id: tool.id,
          inputs: [
            ...tool.requiredParameters
              .filter(
                (p) =>
                  !coveredKeys.has(`${tool.id}:${p.name}`) &&
                  !isPrimitiveUserInput(p.name),
              )
              .map((p) => ({
                name: p.name,
                required: true,
                description: p.description?.slice(0, 80),
              })),
            ...tool.parameters
              .filter((p) => !p.required && isEmailOrContactParam(p.name))
              .map((p) => ({
                name: p.name,
                required: false,
                description: p.description?.slice(0, 80),
              })),
          ],
        }))
        .filter((t) => t.inputs.length > 0);

      if (targets.length === 0) continue;

      const requestBody = JSON.stringify({
        model: "google/gemma-3-12b-it:free",
        messages: [
          {
            role: "system",
            content:
              "You are a dependency analyst for API tools. Return only JSON. For each target tool input, identify which source tool from the producer catalog can supply that value. Only return edges with confidence >= 0.72. Use list/get/search/find/create tools as sources. Never suggest delete/send/update tools as sources.",
          },
          {
            role: "user",
            content: JSON.stringify({
              toolkit,
              producerCatalog,
              targets,
              outputShape: {
                edges: [
                  {
                    from: "source tool id (e.g. googlesuper:GOOGLESUPER_LIST_FILES)",
                    to: "target tool id",
                    input: "input parameter name",
                    confidence: 0.8,
                    reason: "short explanation",
                  },
                ],
              },
            }),
          },
        ],
        response_format: { type: "json_object" },
        temperature: 0.1,
        max_tokens: 3000,
      });

      let response: Response | undefined;
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
              },
              body: requestBody,
            },
          );
        } catch (err) {
          console.warn(
            `  LLM batch ${batchNum} attempt ${attempt} request failed: ${formatError(err)}`,
          );
          if (attempt < 3)
            await new Promise((resolve) => setTimeout(resolve, 10000));
          continue;
        }

        if (response.status === 429) {
          console.warn(
            `  LLM batch ${batchNum} attempt ${attempt} rate-limited, waiting 20s…`,
          );
          if (attempt < 3)
            await new Promise((resolve) => setTimeout(resolve, 20000));
          response = undefined;
          continue;
        }
        break;
      }

      if (!response?.ok) {
        if (response) {
          console.warn(
            `  LLM batch ${batchNum} (${toolkit}) HTTP ${response.status}: ${await response.text()}`,
          );
        }
        continue;
      }

      const body = (await response.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const content = body.choices?.[0]?.message?.content;
      if (!content) continue;

      let parsed: unknown;
      try {
        parsed = JSON.parse(content);
      } catch {
        console.warn(`  LLM batch ${batchNum} (${toolkit}) returned non-JSON`);
        continue;
      }

      const result = parseOpenRouterEdges(parsed);
      const batchEdges = result.edges.map((edge) => ({
        ...edge,
        confidence: Number(edge.confidence.toFixed(2)),
        source: "llm" as const,
      }));
      console.log(`    → ${batchEdges.length} edges`);
      allEdges.push(...batchEdges);

      // Pace requests to stay within free-tier rate limits
      if (i + BATCH_SIZE < targetTools.length) {
        await new Promise((resolve) => setTimeout(resolve, 10000));
      }
    }
  }

  return allEdges;
}

function isEmailOrContactParam(name: string): boolean {
  const n = name.toLowerCase();
  return (
    n === "to" ||
    n.includes("email") ||
    n.includes("recipient") ||
    n.includes("contact")
  );
}

function parseOpenRouterEdges(value: unknown): {
  edges: Array<{
    from: string;
    to: string;
    input: string;
    confidence: number;
    reason: string;
  }>;
} {
  if (!isRecord(value) || !Array.isArray(value.edges)) return { edges: [] };

  return {
    edges: value.edges.flatMap((edge) => {
      if (!isRecord(edge)) return [];
      if (
        typeof edge.from !== "string" ||
        typeof edge.to !== "string" ||
        typeof edge.input !== "string" ||
        typeof edge.reason !== "string" ||
        typeof edge.confidence !== "number"
      ) {
        return [];
      }

      return [
        {
          from: edge.from,
          to: edge.to,
          input: edge.input,
          confidence: Math.max(0, Math.min(1, edge.confidence)),
          reason: edge.reason,
        },
      ];
    }),
  };
}

function mergeEdges(edges: DependencyEdge[], tools: ToolSummary[]) {
  const toolIds = new Set(tools.map((tool) => tool.id));
  const merged = new Map<string, DependencyEdge>();

  for (const edge of edges) {
    if (
      !toolIds.has(edge.from) ||
      !toolIds.has(edge.to) ||
      edge.from === edge.to
    )
      continue;
    const key = `${edge.from}->${edge.to}:${edge.input}`;
    const existing = merged.get(key);
    if (!existing || edge.confidence > existing.confidence) {
      merged.set(key, edge);
    }
  }

  return [...merged.values()].sort(
    (a, b) => b.confidence - a.confidence || a.from.localeCompare(b.from),
  );
}

function findUnresolvedInputs(tools: ToolSummary[], edges: DependencyEdge[]) {
  const covered = new Set(edges.map((edge) => `${edge.to}:${edge.input}`));

  return tools.flatMap((tool) =>
    tool.requiredParameters
      .filter((input) => !covered.has(`${tool.id}:${input.name}`))
      .map((input) => ({
        tool: tool.id,
        input: input.name,
        reason: isPrimitiveUserInput(input.name)
          ? "Likely needs a user-provided value."
          : "No confident upstream tool was found.",
      })),
  );
}

function renderMarkdown(graph: Graph) {
  const topEdges = graph.edges
    .slice(0, 80)
    .map(
      (edge) =>
        `| ${edge.from} | ${edge.to} | \`${edge.input}\` | ${edge.confidence.toFixed(
          2,
        )} | ${edge.source} | ${edge.reason.replaceAll("|", "\\|")} |`,
    )
    .join("\n");

  const unresolved = graph.unresolvedInputs
    .slice(0, 120)
    .map((input) => `| ${input.tool} | \`${input.input}\` | ${input.reason} |`)
    .join("\n");

  return `# Composio Tool Dependency Graph

Generated at: ${graph.generatedAt}

Toolkits: ${graph.toolkits.join(", ")}

## Summary

- Tools analyzed: ${graph.nodes.length}
- Dependency edges: ${graph.edges.length}
- Required inputs without confident upstream tools: ${graph.unresolvedInputs.length}

## Highest-confidence edges

| Source | Target | Input | Confidence | Source | Reason |
| --- | --- | --- | ---: | --- | --- |
${topEdges}

## Unresolved required inputs

| Tool | Input | Reason |
| --- | --- | --- |
${unresolved}
`;
}

function renderHtml(graph: Graph) {
  const graphData = JSON.stringify(graph);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Composio Tool Dependency Graph</title>
  <style>
    :root { color-scheme: light; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    body { margin: 0; background: #f7f5ef; color: #18211f; }
    header { padding: 20px 24px 14px; border-bottom: 1px solid #d9d4c8; background: #fffdf8; }
    h1 { margin: 0 0 8px; font-size: 22px; letter-spacing: 0; }
    .meta { display: flex; flex-wrap: wrap; gap: 10px; color: #52615d; font-size: 13px; }
    .toolbar { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; padding: 12px 24px; border-bottom: 1px solid #d9d4c8; background: #fbfaf6; }
    select, input { border: 1px solid #b9c2bd; border-radius: 6px; padding: 7px 9px; background: white; color: #18211f; }
    main { display: grid; grid-template-columns: minmax(0, 1fr) 360px; min-height: calc(100vh - 121px); }
    canvas { display: block; width: 100%; height: 100%; min-height: 680px; background: radial-gradient(circle at 20% 15%, #fff 0, #fff 20%, #f7f5ef 52%, #edf3f0 100%); }
    aside { border-left: 1px solid #d9d4c8; background: #fffdf8; padding: 16px; overflow: auto; max-height: calc(100vh - 121px); }
    h2 { margin: 0 0 12px; font-size: 15px; }
    .edge { border: 1px solid #d9d4c8; border-radius: 8px; padding: 10px; margin-bottom: 10px; background: white; }
    .edge strong { display: block; font-size: 12px; color: #29584f; overflow-wrap: anywhere; }
    .edge span { display: block; margin-top: 5px; font-size: 12px; color: #52615d; }
    @media (max-width: 860px) { main { grid-template-columns: 1fr; } aside { border-left: 0; border-top: 1px solid #d9d4c8; max-height: none; } canvas { min-height: 560px; } }
  </style>
</head>
<body>
  <header>
    <h1>Composio Tool Dependency Graph</h1>
    <div class="meta">
      <span id="toolCount"></span>
      <span id="edgeCount"></span>
      <span>Generated ${graph.generatedAt}</span>
    </div>
  </header>
  <section class="toolbar">
    <label>Toolkit <select id="toolkit"><option value="all">All</option><option value="googlesuper">Google Super</option><option value="github">GitHub</option></select></label>
    <label>Minimum confidence <input id="confidence" type="range" min="0" max="1" step="0.05" value="0.45" /></label>
    <span id="confidenceValue">0.45</span>
  </section>
  <main>
    <canvas id="graph"></canvas>
    <aside>
      <h2>Visible Edges</h2>
      <div id="edges"></div>
    </aside>
  </main>
  <script>
    const graph = ${graphData};
    const canvas = document.getElementById("graph");
    const ctx = canvas.getContext("2d");
    const toolkit = document.getElementById("toolkit");
    const confidence = document.getElementById("confidence");
    const confidenceValue = document.getElementById("confidenceValue");
    const edgesPanel = document.getElementById("edges");
    document.getElementById("toolCount").textContent = graph.nodes.length + " tools";
    document.getElementById("edgeCount").textContent = graph.edges.length + " edges";

    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(900, rect.width) * devicePixelRatio;
      canvas.height = Math.max(680, rect.height) * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      draw();
    }

    function selected() {
      const min = Number(confidence.value);
      const tk = toolkit.value;
      const nodes = graph.nodes.filter(node => tk === "all" || node.toolkit === tk);
      const nodeIds = new Set(nodes.map(node => node.id));
      const edges = graph.edges.filter(edge => edge.confidence >= min && nodeIds.has(edge.from) && nodeIds.has(edge.to));
      return { nodes, edges };
    }

    function layout(nodes) {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(900, rect.width);
      const height = Math.max(680, rect.height);
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.4;
      const byId = new Map();
      nodes.forEach((node, index) => {
        const angle = (index / Math.max(nodes.length, 1)) * Math.PI * 2;
        const ring = node.toolkit === "github" ? radius : radius * 0.68;
        byId.set(node.id, {
          ...node,
          x: centerX + Math.cos(angle) * ring,
          y: centerY + Math.sin(angle) * ring,
        });
      });
      return byId;
    }

    function drawArrow(from, to, edge) {
      const angle = Math.atan2(to.y - from.y, to.x - from.x);
      const startX = from.x + Math.cos(angle) * 16;
      const startY = from.y + Math.sin(angle) * 16;
      const endX = to.x - Math.cos(angle) * 18;
      const endY = to.y - Math.sin(angle) * 18;
      ctx.strokeStyle = edge.source === "llm" ? "rgba(26, 95, 122, 0.42)" : "rgba(89, 103, 97, 0.32)";
      ctx.lineWidth = 1 + edge.confidence * 2;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.fillStyle = ctx.strokeStyle;
      ctx.beginPath();
      ctx.moveTo(endX, endY);
      ctx.lineTo(endX - Math.cos(angle - 0.45) * 9, endY - Math.sin(angle - 0.45) * 9);
      ctx.lineTo(endX - Math.cos(angle + 0.45) * 9, endY - Math.sin(angle + 0.45) * 9);
      ctx.closePath();
      ctx.fill();
    }

    function shortName(id) {
      return id.split(":")[1].replace(/^(GMAIL|GOOGLE|GITHUB)_?/, "").replaceAll("_", " ").toLowerCase();
    }

    function draw() {
      const { nodes, edges } = selected();
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(900, rect.width);
      const height = Math.max(680, rect.height);
      ctx.clearRect(0, 0, width, height);
      const positions = layout(nodes);

      edges.forEach(edge => {
        const from = positions.get(edge.from);
        const to = positions.get(edge.to);
        if (from && to) drawArrow(from, to, edge);
      });

      positions.forEach(node => {
        ctx.fillStyle = node.toolkit === "github" ? "#245c83" : "#2f6b58";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#17211e";
        ctx.font = "12px Inter, system-ui, sans-serif";
        ctx.textAlign = "center";
        const label = shortName(node.id).slice(0, 26);
        ctx.fillText(label, node.x, node.y + 30);
      });

      edgesPanel.innerHTML = edges.slice(0, 80).map(edge =>
        '<div class="edge"><strong>' + shortName(edge.from) + ' -> ' + shortName(edge.to) + '</strong><span>input: ' + edge.input + ' | confidence: ' + edge.confidence.toFixed(2) + ' | ' + edge.source + '</span><span>' + edge.reason + '</span></div>'
      ).join("");
    }

    toolkit.addEventListener("change", draw);
    confidence.addEventListener("input", () => {
      confidenceValue.textContent = Number(confidence.value).toFixed(2);
      draw();
    });
    addEventListener("resize", resize);
    resize();
  </script>
</body>
</html>
`;
}

function tokens(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function formatError(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}
