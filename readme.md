# build a tool dependency graph (60-120 mins)

we care about the quality and structure of the dependency relationships you discover

some actions need precursor actions before being able to execute them

a concrete example

1. the tool `GMAIL_REPLY_TO_THREAD` which needs a `thread_id`
2. which can be got by `GMAIL_LIST_THREADS` as an example, there could be other ways to get a `thread_id` too

a second more dense exmaple
the send email tool needs an email, if you give a name it should fetch the name from contacts and then you can send the email



when we agentically execute actions inside composio, we need to know either what info to get from the user or what other action we should take before we execute the action.

you are supposed to build a dependency graph for this

to keep this limited in scope, we expect you to only do it for [Google Super](https://docs.composio.dev/toolkits/googlesuper) and [Github](https://docs.composio.dev/toolkits/github)

the final submission should be a visualized dependency graph where i can see connection (this is not super important just should exist for me to see if graph with edges and nodes)

## get started

1. go to https://platform.composio.dev and get an api key
2. run `COMPOSIO_API_KEY=PUT_YOUR_KEY_HERE sh scaffold.sh` will give you an **openrouter-key**
3. check `src/index.ts` to see how to fetch full google raw tools (fastest way to run is https://bun.sh/)

you can implement this with whatever language you want, feel free to use language models and coding tools

## submit

once you are done use `sh upload.sh <your_email> [--skip-session]`

## agent session tracing (required by default)

- `upload.sh` collects recent local agent sessions into `agent-sessions/` before creating your submission zip.
- It includes recent activity from this task folder for Codex, Claude Code, OpenCode, and Cursor (90-minute window).
- If no recent sessions are found, interactive runs prompt you before continuing.
- Use `--skip-session` only if you explicitly want to upload without session tracing.

examples:

- `sh upload.sh your_email@example.com`
- `sh upload.sh your_email@example.com --skip-session`

NOTE:  Feel free to use LLM, you will be judged by the quality of output, eval...

## implemented approach

This submission builds a dependency graph for the Google Super and GitHub
toolkits by:

1. fetching raw Composio tools for both toolkits
2. extracting tool names, descriptions, required inputs, and input schemas
3. inferring prerequisite edges where one retrieval/search/list tool can provide
   a required input for another tool
4. optionally asking an LLM through OpenRouter to add high-confidence edges when
   `OPENROUTER_API_KEY` is available and has credits
5. writing machine-readable and human-readable graph artifacts

Generated outputs are written to `artifacts/`:

- `artifacts/raw/googlesuper_tools.json`
- `artifacts/raw/github_tools.json`
- `artifacts/dependency-graph.json`
- `artifacts/dependency-graph.md`
- `artifacts/dependency-graph.html`

Run:

```sh
bun install
COMPOSIO_API_KEY=PUT_YOUR_KEY_HERE sh scaffold.sh
bun run generate
```

Open `artifacts/dependency-graph.html` in a browser to inspect the visual graph.
