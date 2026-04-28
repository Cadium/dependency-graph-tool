# Composio Tool Dependency Graph

Generated at: 2026-04-28T14:27:04.339Z

Toolkits: googlesuper, github

## Summary

- Tools analyzed: 1304
- Dependency edges: 4421
- Required inputs without confident upstream tools: 351

## Highest-confidence edges

| Source | Target | Input | Confidence | Source | Reason |
| --- | --- | --- | ---: | --- | --- |
| github:GITHUB_AUTH_USER_DOCKER_CONFLICT_PACKAGES_LIST | github:GITHUB_GET_A_PACKAGE_VERSION_FOR_A_USER | `package_version_id` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions 'package' |
| github:GITHUB_AUTH_USER_DOCKER_CONFLICT_PACKAGES_LIST | github:GITHUB_SET_WORKFLOW_EXTERNAL_ACCESS | `access_level` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions 'access' |
| github:GITHUB_CREATE_USER_LIST | github:GITHUB_ADD_USER_ACCESS_RESTRICTIONS | `users` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'users'; source mentions 'users' |
| github:GITHUB_CREATE_USER_LIST | github:GITHUB_REMOVE_USER_ACCESS_RESTRICTIONS | `users` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'users'; source mentions 'users' |
| github:GITHUB_CREATE_USER_LIST | github:GITHUB_SET_USER_ACCESS_RESTRICTIONS | `users` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'users'; source mentions 'users' |
| github:GITHUB_FIND_PULL_REQUESTS | github:GITHUB_GET_RAW_REPOSITORY_CONTENT | `repo` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'repo' |
| github:GITHUB_FIND_PULL_REQUESTS | github:GITHUB_LIST_PULL_REQUESTS | `repo` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'repo' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_ADD_A_REPOSITORY_COLLABORATOR | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_ADD_APP_ACCESS_RESTRICTIONS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_ADD_ASSIGNEES_TO_AN_ISSUE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_ADD_LABELS_TO_AN_ISSUE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_ADD_OR_UPDATE_TEAM_REPOSITORY_PERMISSIONS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_ADD_RUNNER_LABELS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_ADD_STATUS_CHECK_CONTEXTS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_ADD_TEAM_ACCESS_RESTRICTIONS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_ADD_USER_ACCESS_RESTRICTIONS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_APPROVE_WORKFLOW_RUN_FOR_FORK_PULL_REQUEST | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CANCEL_GITHUB_PAGES_DEPLOYMENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CANCEL_WORKFLOW_RUN | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CHECK_IF_PULL_REQUEST_HAS_BEEN_MERGED | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CHECK_IF_USER_CAN_BE_ASSIGNED | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CHECK_IF_USER_CAN_BE_ASSIGNED_TO_ISSUE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CHECK_IF_USER_IS_REPOSITORY_COLLABORATOR | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CHECK_PRIVATE_VULNERABILITY_REPORTING_STATUS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CHECK_TEAM_PERMISSIONS_FOR_A_REPOSITORY | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CLEAR_REPOSITORY_CACHE_BY_KEY | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_COMMIT_MULTIPLE_FILES | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_COMPARE_TWO_COMMITS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_BLOB | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_CHECK_RUN | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_CHECK_SUITE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_CODESPACE_FROM_A_PULL_REQUEST | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_CODESPACE_IN_A_REPOSITORY | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_COMMIT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_COMMIT_COMMENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_COMMIT_STATUS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_DEPLOY_KEY | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_DEPLOYMENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_DEPLOYMENT_BRANCH_POLICY | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_DEPLOYMENT_STATUS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_FORK | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_GITHUB_PAGES_DEPLOYMENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_GITHUB_PAGES_SITE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_LABEL | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_MILESTONE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_PULL_REQUEST | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REFERENCE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REGISTRATION_TOKEN_FOR_A_REPOSITORY | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_RELEASE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REMOVE_TOKEN_FOR_A_REPOSITORY | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REPLY_FOR_A_REVIEW_COMMENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REPOSITORY_DISPATCH_EVENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REPOSITORY_PROJECT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REPOSITORY_RULESET | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REPOSITORY_VARIABLE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REPOSITORY_WEBHOOK | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REVIEW_COMMENT_FOR_A_PULL_REQUEST | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_REVIEW_FOR_A_PULL_REQUEST | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_SNAPSHOT_OF_DEPENDENCIES_FOR_A_REPOSITORY | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_TAG_OBJECT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_TAG_PROTECTION_STATE_FOR_A_REPOSITORY | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_TEMPORARY_PRIVATE_FORK | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_TREE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_A_WORKFLOW_DISPATCH_EVENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_AN_AUTOLINK_REFERENCE_FOR_A_REPOSITORY | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_AN_ENVIRONMENT_VARIABLE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_AN_ISSUE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_AN_ISSUE_COMMENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_COMMIT_SIGNATURE_PROTECTION | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_DEPLOYMENT_PROTECTION_RULE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_JIT_RUNNER_CONFIG | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_OR_UPDATE_A_REPOSITORY_SECRET | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_OR_UPDATE_AN_ENVIRONMENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_OR_UPDATE_AN_ENVIRONMENT_SECRET | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_OR_UPDATE_FILE_CONTENTS | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_OR_UPDATE_GITHUB_PAGES_SITE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_OR_UPDATE_REPO_SECRET_WITH_ENCRYPTED_VALUE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_REACTION_FOR_A_COMMIT_COMMENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_REACTION_FOR_A_PULL_REQUEST_REVIEW_COMMENT | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |
| github:GITHUB_FIND_REPOSITORIES | github:GITHUB_CREATE_REACTION_FOR_A_RELEASE | `owner` | 0.95 | heuristic | source is a retrieval/list/search style tool; source mentions exact input 'owner'; source mentions 'owner' |

## Unresolved required inputs

| Tool | Input | Reason |
| --- | --- | --- |
| github:GITHUB_ABORT_REPOSITORY_MIGRATION | `migrationId` | No confident upstream tool was found. |
| github:GITHUB_ADD_FIELD_TO_USER_PROJECT | `name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_LABELS_TO_AN_ISSUE | `labels` | Likely needs a user-provided value. |
| github:GITHUB_ADD_ORG_RUNNER_LABELS | `labels` | Likely needs a user-provided value. |
| github:GITHUB_ADD_REPO_TO_ORG_SECRET_WITH_SELECTED_ACCESS | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_REPO_TO_ORG_SECRET_WITH_SELECTED_VISIBILITY | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_RUNNER_LABELS | `labels` | Likely needs a user-provided value. |
| github:GITHUB_ADD_SELECTED_REPOSITORY_TO_ORGANIZATION_SECRET | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_SELECTED_REPOSITORY_TO_ORGANIZATION_VARIABLE | `name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_SELECTED_REPOSITORY_TO_USER_SECRET | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_SUB_ISSUE | `issue_id` | No confident upstream tool was found. |
| github:GITHUB_CHECK_TOKEN | `access_token` | Likely needs a user-provided value. |
| github:GITHUB_COMMIT_MULTIPLE_FILES | `message` | Likely needs a user-provided value. |
| github:GITHUB_CONFIGURE_JIT_RUNNER_FOR_ORG | `labels` | Likely needs a user-provided value. |
| github:GITHUB_CONFIGURE_JIT_RUNNER_FOR_ORG | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_BLOB | `content` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CHECK_RUN | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_COMMIT | `message` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_COMMIT_COMMENT | `body` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_COMMIT_STATUS | `state` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CUSTOM_ORGANIZATION_ROLE | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CUSTOM_ORGANIZATION_ROLE | `permissions` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_DEPLOYMENT_BRANCH_POLICY | `environment_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_DEPLOYMENT_BRANCH_POLICY | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_DEPLOYMENT_STATUS | `state` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_DISCUSSION | `body` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_DISCUSSION | `title` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_DISCUSSION_COMMENT | `body` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_GIST_COMMENT | `body` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_GITHUB_PAGES_DEPLOYMENT | `oidc_token` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_LABEL | `color` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_LABEL | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_MILESTONE | `title` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_PROJECT_COLUMN | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_RELEASE | `tag_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_REPLY_FOR_A_REVIEW_COMMENT | `body` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_REPOSITORY_FOR_THE_AUTHENTICATED_USER | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_REPOSITORY_FROM_AN_UNPUBLISHED_CODESPACE | `codespace_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_REPOSITORY_PROJECT | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_REPOSITORY_RULESET | `enforcement` | No confident upstream tool was found. |
| github:GITHUB_CREATE_A_REPOSITORY_RULESET | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_REPOSITORY_USING_A_TEMPLATE | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_REPOSITORY_VARIABLE | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_REVIEW_COMMENT_FOR_A_PULL_REQUEST | `body` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_SCOPED_ACCESS_TOKEN | `access_token` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_SNAPSHOT_OF_DEPENDENCIES_FOR_A_REPOSITORY | `scanned` | No confident upstream tool was found. |
| github:GITHUB_CREATE_A_TAG_OBJECT | `message` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_TEAM | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_USER_PROJECT | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_AN_ENVIRONMENT_VARIABLE | `environment_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_AN_ENVIRONMENT_VARIABLE | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_AN_ISSUE | `title` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_AN_ISSUE_COMMENT | `body` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_AN_ORGANIZATION_PROJECT | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_AN_ORGANIZATION_REPOSITORY | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_AN_ORGANIZATION_VARIABLE | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_AN_ORGANIZATION_VARIABLE | `visibility` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_DEPLOYMENT_PROTECTION_RULE | `environment_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_DRAFT_ITEM_FOR_USER_PROJECT | `title` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_INFERENCE_CHAT_COMPLETIONS | `messages` | No confident upstream tool was found. |
| github:GITHUB_CREATE_INFERENCE_EMBEDDINGS | `input` | No confident upstream tool was found. |
| github:GITHUB_CREATE_ISSUE_TYPE | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_JIT_RUNNER_CONFIG | `labels` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_JIT_RUNNER_CONFIG | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_A_REPOSITORY_SECRET | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_A_SECRET_FOR_THE_AUTHENTICATED_USER | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_AN_ENVIRONMENT | `environment_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_AN_ENVIRONMENT_SECRET | `environment_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_AN_ENVIRONMENT_SECRET | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_AN_ORGANIZATION_SECRET | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_AN_ORGANIZATION_SECRET | `visibility` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_CUSTOM_PROPERTY_ORG | `custom_property_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_FILE_CONTENTS | `content` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_FILE_CONTENTS | `message` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_OR_UPDATE_REPO_SECRET_WITH_ENCRYPTED_VALUE | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_REACTION_FOR_A_COMMIT_COMMENT | `content` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_REACTION_FOR_A_PULL_REQUEST_REVIEW_COMMENT | `content` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_REACTION_FOR_A_RELEASE | `content` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_REACTION_FOR_A_TEAM_DISCUSSION | `content` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_REACTION_FOR_A_TEAM_DISCUSSION_COMMENT | `content` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_REACTION_FOR_AN_ISSUE | `content` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_REACTION_FOR_AN_ISSUE_COMMENT | `content` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_SPONSORS_TIER | `amount` | No confident upstream tool was found. |
| github:GITHUB_CREATE_SPONSORS_TIER | `description` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_SPONSORSHIP | `amount` | No confident upstream tool was found. |
| github:GITHUB_CREATE_UPDATE_ORG_SECRET_WITH_LIB_SODIUM | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_UPDATE_ORG_SECRET_WITH_LIB_SODIUM | `visibility` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_USER_LIST | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_VIEW_FOR_USER_PROJECT | `layout` | No confident upstream tool was found. |
| github:GITHUB_CREATE_VIEW_FOR_USER_PROJECT | `name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_A_FILE | `message` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_A_PACKAGE_VERSION_FOR_THE_AUTHENTICATED_USER | `package_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_A_PACKAGE_VERSION_FOR_THE_AUTHENTICATED_USER | `package_type` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_A_REPOSITORY_SECRET | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_A_REPOSITORY_VARIABLE | `name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_A_SECRET_FOR_THE_AUTHENTICATED_USER | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_APP_AUTHORIZATION | `access_token` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_APP_TOKEN | `access_token` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_CODESPACE | `codespace_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_DEPENDEBOT_SECRET_BY_NAME | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_DEPLOYMENT_BRANCH_POLICY | `environment_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_ENVIRONMENT | `environment_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_ENVIRONMENT_SECRET | `environment_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_ENVIRONMENT_SECRET | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_ENVIRONMENT_VARIABLE | `environment_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_ENVIRONMENT_VARIABLE | `name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_LABEL | `name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_ORG_CODESPACE | `codespace_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_ORG_PACKAGE | `package_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_ORG_PACKAGE | `package_type` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_ORGANIZATION_SECRET | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_ORGANIZATION_VARIABLE | `name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_PACKAGE | `package_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_PACKAGE | `package_type` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_PACKAGE_VERSION_FOR_A_USER | `package_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_PACKAGE_VERSION_FOR_A_USER | `package_type` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_PACKAGE_VERSION_FOR_AN_ORGANIZATION | `package_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_PACKAGE_VERSION_FOR_AN_ORGANIZATION | `package_type` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_REPO_CODESPACE_SECRET_BY_NAME | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_DELETE_USER_LIST | `listId` | No confident upstream tool was found. |
