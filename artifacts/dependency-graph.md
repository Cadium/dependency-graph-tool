# Composio Tool Dependency Graph

Generated at: 2026-04-28T15:43:55.409Z

Toolkits: googlesuper, github

## Summary

- Tools analyzed: 1304
- Dependency edges: 1393
- Required inputs without confident upstream tools: 1730

## Highest-confidence edges

| Source | Target | Input | Confidence | Source | Reason |
| --- | --- | --- | ---: | --- | --- |
| github:GITHUB_FIND_PULL_REQUESTS | github:GITHUB_LIST_PULL_REQUESTS | `owner` | 0.98 | heuristic | input description explicitly references GITHUB_FIND_PULL_REQUESTS |
| github:GITHUB_FIND_PULL_REQUESTS | github:GITHUB_LIST_PULL_REQUESTS | `repo` | 0.98 | heuristic | input description explicitly references GITHUB_FIND_PULL_REQUESTS |
| github:GITHUB_GET_A_RELEASE_BY_TAG_NAME | github:GITHUB_GET_A_COMMIT | `ref` | 0.98 | heuristic | input description explicitly references GITHUB_GET_A_RELEASE_BY_TAG_NAME |
| github:GITHUB_GET_A_RELEASE_BY_TAG_NAME | github:GITHUB_GET_COMMIT_STATUSES | `ref` | 0.98 | heuristic | input description explicitly references GITHUB_GET_A_RELEASE_BY_TAG_NAME |
| github:GITHUB_GET_A_RELEASE_BY_TAG_NAME | github:GITHUB_LIST_CHECK_SUITES_FOR_A_GIT_REFERENCE | `ref` | 0.98 | heuristic | input description explicitly references GITHUB_GET_A_RELEASE_BY_TAG_NAME |
| github:GITHUB_GET_A_TREE | github:GITHUB_GET_RAW_REPOSITORY_CONTENT | `path` | 0.98 | heuristic | input description explicitly references GITHUB_GET_A_TREE |
| github:GITHUB_LIST_APP_INSTALLATIONS | github:GITHUB_LIST_ACCESSIBLE_REPOSITORIES | `installation_id` | 0.98 | heuristic | input description explicitly references GITHUB_LIST_APP_INSTALLATIONS |
| github:GITHUB_LIST_ARTIFACTS_FOR_A_REPOSITORY | github:GITHUB_DOWNLOAD_AN_ARTIFACT | `artifact_id` | 0.98 | heuristic | input description explicitly references GITHUB_LIST_ARTIFACTS_FOR_A_REPOSITORY |
| github:GITHUB_LIST_ORG_RESOURCE_ACCESS_TOKENS | github:GITHUB_UPDATE_TOKEN_ORG_ACCESS | `pat_id` | 0.98 | heuristic | input description explicitly references GITHUB_LIST_ORG_RESOURCE_ACCESS_TOKENS |
| github:GITHUB_LIST_WORKFLOW_RUN_ARTIFACTS | github:GITHUB_DOWNLOAD_AN_ARTIFACT | `artifact_id` | 0.98 | heuristic | input description explicitly references GITHUB_LIST_WORKFLOW_RUN_ARTIFACTS |
| googlesuper:GOOGLESUPER_ADD_LABEL_TO_EMAIL | googlesuper:GOOGLESUPER_DELETE_LABEL | `label_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_ADD_LABEL_TO_EMAIL |
| googlesuper:GOOGLESUPER_CREATE_COMMENT | googlesuper:GOOGLESUPER_DELETE_COMMENT | `comment_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_CREATE_COMMENT |
| googlesuper:GOOGLESUPER_CREATE_DOCUMENT | googlesuper:GOOGLESUPER_UPDATE_DOCUMENT_SECTION_MARKDOWN | `document_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_CREATE_DOCUMENT |
| googlesuper:GOOGLESUPER_CREATE_EMAIL_DRAFT | googlesuper:GOOGLESUPER_DELETE_DRAFT | `draft_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_CREATE_EMAIL_DRAFT |
| googlesuper:GOOGLESUPER_CREATE_EMAIL_DRAFT | googlesuper:GOOGLESUPER_SEND_DRAFT | `draft_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_CREATE_EMAIL_DRAFT |
| googlesuper:GOOGLESUPER_CREATE_EMAIL_DRAFT | googlesuper:GOOGLESUPER_UPDATE_DRAFT | `draft_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_CREATE_EMAIL_DRAFT |
| googlesuper:GOOGLESUPER_CREATE_FOOTER | googlesuper:GOOGLESUPER_DELETE_FOOTER | `footer_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_CREATE_FOOTER |
| googlesuper:GOOGLESUPER_EVENTS_LIST | googlesuper:GOOGLESUPER_EVENTS_GET | `event_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_EVENTS_LIST |
| googlesuper:GOOGLESUPER_EVENTS_LIST | googlesuper:GOOGLESUPER_EVENTS_INSTANCES | `eventId` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_EVENTS_LIST |
| googlesuper:GOOGLESUPER_EVENTS_LIST | googlesuper:GOOGLESUPER_PATCH_EVENT | `event_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_EVENTS_LIST |
| googlesuper:GOOGLESUPER_EVENTS_LIST | googlesuper:GOOGLESUPER_UPDATE_EVENT | `event_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_EVENTS_LIST |
| googlesuper:GOOGLESUPER_FETCH_EMAILS | googlesuper:GOOGLESUPER_ADD_LABEL_TO_EMAIL | `message_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FETCH_EMAILS |
| googlesuper:GOOGLESUPER_FETCH_EMAILS | googlesuper:GOOGLESUPER_BATCH_DELETE_MESSAGES | `messageIds` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FETCH_EMAILS |
| googlesuper:GOOGLESUPER_FETCH_EMAILS | googlesuper:GOOGLESUPER_BATCH_MODIFY_MESSAGES | `messageIds` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FETCH_EMAILS |
| googlesuper:GOOGLESUPER_FETCH_EMAILS | googlesuper:GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID | `thread_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FETCH_EMAILS |
| googlesuper:GOOGLESUPER_FETCH_EMAILS | googlesuper:GOOGLESUPER_LIST_HISTORY | `start_history_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FETCH_EMAILS |
| googlesuper:GOOGLESUPER_FETCH_EMAILS | googlesuper:GOOGLESUPER_REPLY_TO_THREAD | `thread_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FETCH_EMAILS |
| googlesuper:GOOGLESUPER_FETCH_MESSAGE_BY_MESSAGE_ID | googlesuper:GOOGLESUPER_GET_ATTACHMENT | `attachment_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FETCH_MESSAGE_BY_MESSAGE_ID |
| googlesuper:GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID | googlesuper:GOOGLESUPER_ADD_LABEL_TO_EMAIL | `message_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID |
| googlesuper:GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID | googlesuper:GOOGLESUPER_FETCH_MESSAGE_BY_MESSAGE_ID | `message_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID |
| googlesuper:GOOGLESUPER_FIND_EVENT | googlesuper:GOOGLESUPER_EVENTS_INSTANCES | `eventId` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FIND_EVENT |
| googlesuper:GOOGLESUPER_FIND_EVENT | googlesuper:GOOGLESUPER_PATCH_EVENT | `event_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FIND_EVENT |
| googlesuper:GOOGLESUPER_FIND_EVENT | googlesuper:GOOGLESUPER_UPDATE_EVENT | `event_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FIND_EVENT |
| googlesuper:GOOGLESUPER_FIND_FILE | googlesuper:GOOGLESUPER_ADD_FILE_SHARING_PREFERENCE | `file_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FIND_FILE |
| googlesuper:GOOGLESUPER_FIND_FILE | googlesuper:GOOGLESUPER_EDIT_FILE | `file_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FIND_FILE |
| googlesuper:GOOGLESUPER_FIND_FILE | googlesuper:GOOGLESUPER_GET_FILE_METADATA | `fileId` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FIND_FILE |
| googlesuper:GOOGLESUPER_FIND_FILE | googlesuper:GOOGLESUPER_UPDATE_FILE_REVISION_METADATA | `file_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_FIND_FILE |
| googlesuper:GOOGLESUPER_GET_DOCUMENT_BY_ID | googlesuper:GOOGLESUPER_DELETE_FOOTER | `footer_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_GET_DOCUMENT_BY_ID |
| googlesuper:GOOGLESUPER_GET_DOCUMENT_BY_ID | googlesuper:GOOGLESUPER_UPDATE_EXISTING_DOCUMENT | `edit_docs` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_GET_DOCUMENT_BY_ID |
| googlesuper:GOOGLESUPER_GET_METADATA | googlesuper:GOOGLESUPER_CREATE_AUDIENCE_LIST | `dimensions` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_GET_METADATA |
| googlesuper:GOOGLESUPER_GET_PROFILE | googlesuper:GOOGLESUPER_LIST_HISTORY | `start_history_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_GET_PROFILE |
| googlesuper:GOOGLESUPER_GET_SPREADSHEET_INFO | googlesuper:GOOGLESUPER_MUTATE_CONDITIONAL_FORMAT_RULES | `sheet_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_GET_SPREADSHEET_INFO |
| googlesuper:GOOGLESUPER_GET_SPREADSHEET_INFO | googlesuper:GOOGLESUPER_SET_DATA_VALIDATION_RULE | `sheet_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_GET_SPREADSHEET_INFO |
| googlesuper:GOOGLESUPER_GET_SPREADSHEET_INFO | googlesuper:GOOGLESUPER_VALUES_UPDATE | `range` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_GET_SPREADSHEET_INFO |
| googlesuper:GOOGLESUPER_LIST_ACCOUNTS | googlesuper:GOOGLESUPER_LIST_PROPERTIES | `account` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_ACCOUNTS |
| googlesuper:GOOGLESUPER_LIST_CALENDARS | googlesuper:GOOGLESUPER_CALENDAR_LIST_UPDATE | `calendar_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_CALENDARS |
| googlesuper:GOOGLESUPER_LIST_CALENDARS | googlesuper:GOOGLESUPER_PATCH_CALENDAR | `calendar_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_CALENDARS |
| googlesuper:GOOGLESUPER_LIST_COMMENTS | googlesuper:GOOGLESUPER_DELETE_COMMENT | `comment_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_COMMENTS |
| googlesuper:GOOGLESUPER_LIST_CONFERENCE_RECORDS | googlesuper:GOOGLESUPER_LIST_PARTICIPANTS | `parent` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_CONFERENCE_RECORDS |
| googlesuper:GOOGLESUPER_LIST_DRAFTS | googlesuper:GOOGLESUPER_DELETE_DRAFT | `draft_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_DRAFTS |
| googlesuper:GOOGLESUPER_LIST_DRAFTS | googlesuper:GOOGLESUPER_GET_DRAFT | `draft_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_DRAFTS |
| googlesuper:GOOGLESUPER_LIST_DRAFTS | googlesuper:GOOGLESUPER_SEND_DRAFT | `draft_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_DRAFTS |
| googlesuper:GOOGLESUPER_LIST_DRAFTS | googlesuper:GOOGLESUPER_UPDATE_DRAFT | `draft_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_DRAFTS |
| googlesuper:GOOGLESUPER_LIST_FILES | googlesuper:GOOGLESUPER_ADD_FILE_SHARING_PREFERENCE | `file_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_FILES |
| googlesuper:GOOGLESUPER_LIST_FILES | googlesuper:GOOGLESUPER_GET_FILE_METADATA | `fileId` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_FILES |
| googlesuper:GOOGLESUPER_LIST_FILES | googlesuper:GOOGLESUPER_UPDATE_FILE_REVISION_METADATA | `file_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_FILES |
| googlesuper:GOOGLESUPER_LIST_FILTERS | googlesuper:GOOGLESUPER_DELETE_FILTER | `filter_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_FILTERS |
| googlesuper:GOOGLESUPER_LIST_LABELS | googlesuper:GOOGLESUPER_CREATE_LABEL | `label_name` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_LABELS |
| googlesuper:GOOGLESUPER_LIST_PARTICIPANT_SESSIONS | googlesuper:GOOGLESUPER_GET_PARTICIPANT_SESSION | `name` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_PARTICIPANT_SESSIONS |
| googlesuper:GOOGLESUPER_LIST_PERMISSIONS | googlesuper:GOOGLESUPER_DELETE_PERMISSION | `permission_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_PERMISSIONS |
| googlesuper:GOOGLESUPER_LIST_PERMISSIONS | googlesuper:GOOGLESUPER_GET_PERMISSION | `permission_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_PERMISSIONS |
| googlesuper:GOOGLESUPER_LIST_PERMISSIONS | googlesuper:GOOGLESUPER_PATCH_PERMISSION | `permission_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_PERMISSIONS |
| googlesuper:GOOGLESUPER_LIST_PROPERTIES | googlesuper:GOOGLESUPER_RUN_REALTIME_REPORT | `property` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_PROPERTIES |
| googlesuper:GOOGLESUPER_LIST_REVISIONS | googlesuper:GOOGLESUPER_DELETE_REVISION | `revision_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_REVISIONS |
| googlesuper:GOOGLESUPER_LIST_REVISIONS | googlesuper:GOOGLESUPER_UPDATE_FILE_REVISION_METADATA | `revision_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_REVISIONS |
| googlesuper:GOOGLESUPER_LIST_TABLES | googlesuper:GOOGLESUPER_GET_TABLE_SCHEMA | `table_name` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_TABLES |
| googlesuper:GOOGLESUPER_LIST_TABLES | googlesuper:GOOGLESUPER_QUERY_TABLE | `sql` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_TABLES |
| googlesuper:GOOGLESUPER_LIST_TASK_LISTS | googlesuper:GOOGLESUPER_CLEAR_TASKS | `tasklist` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_TASK_LISTS |
| googlesuper:GOOGLESUPER_LIST_TASK_LISTS | googlesuper:GOOGLESUPER_INSERT_TASK | `tasklist_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_TASK_LISTS |
| googlesuper:GOOGLESUPER_LIST_THREADS | googlesuper:GOOGLESUPER_ADD_LABEL_TO_EMAIL | `message_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_THREADS |
| googlesuper:GOOGLESUPER_LIST_THREADS | googlesuper:GOOGLESUPER_BATCH_DELETE_MESSAGES | `messageIds` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_THREADS |
| googlesuper:GOOGLESUPER_LIST_THREADS | googlesuper:GOOGLESUPER_BATCH_MODIFY_MESSAGES | `messageIds` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_THREADS |
| googlesuper:GOOGLESUPER_LIST_THREADS | googlesuper:GOOGLESUPER_FETCH_MESSAGE_BY_THREAD_ID | `thread_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_THREADS |
| googlesuper:GOOGLESUPER_LIST_THREADS | googlesuper:GOOGLESUPER_REPLY_TO_THREAD | `thread_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_THREADS |
| googlesuper:GOOGLESUPER_LIST_TRANSCRIPT_ENTRIES | googlesuper:GOOGLESUPER_GET_TRANSCRIPT_ENTRY | `name` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_LIST_TRANSCRIPT_ENTRIES |
| googlesuper:GOOGLESUPER_NEARBY_SEARCH | googlesuper:GOOGLESUPER_GET_PLACE_DETAILS | `name` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_NEARBY_SEARCH |
| googlesuper:GOOGLESUPER_SEARCH_DOCUMENTS | googlesuper:GOOGLESUPER_CREATE_COMMENT | `file_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_SEARCH_DOCUMENTS |
| googlesuper:GOOGLESUPER_SEARCH_DOCUMENTS | googlesuper:GOOGLESUPER_GET_DOCUMENT_BY_ID | `id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_SEARCH_DOCUMENTS |
| googlesuper:GOOGLESUPER_SEARCH_SPREADSHEETS | googlesuper:GOOGLESUPER_GET_TABLE_SCHEMA | `spreadsheet_id` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_SEARCH_SPREADSHEETS |
| googlesuper:GOOGLESUPER_TEXT_SEARCH | googlesuper:GOOGLESUPER_GET_PLACE_DETAILS | `name` | 0.98 | heuristic | input description explicitly references GOOGLESUPER_TEXT_SEARCH |

## Unresolved required inputs

| Tool | Input | Reason |
| --- | --- | --- |
| github:GITHUB_ABORT_REPOSITORY_MIGRATION | `migrationId` | No confident upstream tool was found. |
| github:GITHUB_ADD_A_REPOSITORY_COLLABORATOR | `owner` | Likely needs a user-provided value. |
| github:GITHUB_ADD_A_REPOSITORY_COLLABORATOR | `repo` | Likely needs a user-provided value. |
| github:GITHUB_ADD_A_REPOSITORY_COLLABORATOR | `username` | Likely needs a user-provided value. |
| github:GITHUB_ADD_APP_ACCESS_RESTRICTIONS | `apps` | No confident upstream tool was found. |
| github:GITHUB_ADD_APP_ACCESS_RESTRICTIONS | `owner` | Likely needs a user-provided value. |
| github:GITHUB_ADD_APP_ACCESS_RESTRICTIONS | `repo` | Likely needs a user-provided value. |
| github:GITHUB_ADD_ASSIGNEES_TO_AN_ISSUE | `owner` | Likely needs a user-provided value. |
| github:GITHUB_ADD_ASSIGNEES_TO_AN_ISSUE | `repo` | Likely needs a user-provided value. |
| github:GITHUB_ADD_FIELD_TO_USER_PROJECT | `data_type` | No confident upstream tool was found. |
| github:GITHUB_ADD_FIELD_TO_USER_PROJECT | `name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_FIELD_TO_USER_PROJECT | `username` | Likely needs a user-provided value. |
| github:GITHUB_ADD_ITEM_TO_USER_PROJECT | `type` | Likely needs a user-provided value. |
| github:GITHUB_ADD_ITEM_TO_USER_PROJECT | `username` | Likely needs a user-provided value. |
| github:GITHUB_ADD_LABELS_TO_AN_ISSUE | `labels` | Likely needs a user-provided value. |
| github:GITHUB_ADD_LABELS_TO_AN_ISSUE | `owner` | Likely needs a user-provided value. |
| github:GITHUB_ADD_LABELS_TO_AN_ISSUE | `repo` | Likely needs a user-provided value. |
| github:GITHUB_ADD_OR_UPDATE_TEAM_MEMBERSHIP_FOR_USER | `org` | Likely needs a user-provided value. |
| github:GITHUB_ADD_OR_UPDATE_TEAM_MEMBERSHIP_FOR_USER | `username` | Likely needs a user-provided value. |
| github:GITHUB_ADD_OR_UPDATE_TEAM_PROJECT_PERMISSIONS | `org` | Likely needs a user-provided value. |
| github:GITHUB_ADD_OR_UPDATE_TEAM_REPOSITORY_PERMISSIONS | `org` | Likely needs a user-provided value. |
| github:GITHUB_ADD_OR_UPDATE_TEAM_REPOSITORY_PERMISSIONS | `owner` | Likely needs a user-provided value. |
| github:GITHUB_ADD_OR_UPDATE_TEAM_REPOSITORY_PERMISSIONS | `repo` | Likely needs a user-provided value. |
| github:GITHUB_ADD_ORG_RUNNER_LABELS | `labels` | Likely needs a user-provided value. |
| github:GITHUB_ADD_ORG_RUNNER_LABELS | `org` | Likely needs a user-provided value. |
| github:GITHUB_ADD_PROJECT_COLLABORATOR | `username` | Likely needs a user-provided value. |
| github:GITHUB_ADD_REPO_TO_ORG_SECRET_WITH_SELECTED_ACCESS | `org` | Likely needs a user-provided value. |
| github:GITHUB_ADD_REPO_TO_ORG_SECRET_WITH_SELECTED_ACCESS | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_REPO_TO_ORG_SECRET_WITH_SELECTED_VISIBILITY | `org` | Likely needs a user-provided value. |
| github:GITHUB_ADD_REPO_TO_ORG_SECRET_WITH_SELECTED_VISIBILITY | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_RUNNER_LABELS | `labels` | Likely needs a user-provided value. |
| github:GITHUB_ADD_RUNNER_LABELS | `owner` | Likely needs a user-provided value. |
| github:GITHUB_ADD_RUNNER_LABELS | `repo` | Likely needs a user-provided value. |
| github:GITHUB_ADD_SELECTED_REPOSITORY_TO_ORGANIZATION_SECRET | `org` | Likely needs a user-provided value. |
| github:GITHUB_ADD_SELECTED_REPOSITORY_TO_ORGANIZATION_SECRET | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_SELECTED_REPOSITORY_TO_ORGANIZATION_VARIABLE | `name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_SELECTED_REPOSITORY_TO_ORGANIZATION_VARIABLE | `org` | Likely needs a user-provided value. |
| github:GITHUB_ADD_SELECTED_REPOSITORY_TO_USER_SECRET | `secret_name` | Likely needs a user-provided value. |
| github:GITHUB_ADD_SOCIAL_ACCOUNTS_FOR_AUTHENTICATED_USER | `account_urls` | No confident upstream tool was found. |
| github:GITHUB_ADD_STATUS_CHECK_CONTEXTS | `owner` | Likely needs a user-provided value. |
| github:GITHUB_ADD_STATUS_CHECK_CONTEXTS | `repo` | Likely needs a user-provided value. |
| github:GITHUB_ADD_TEAM_ACCESS_RESTRICTIONS | `owner` | Likely needs a user-provided value. |
| github:GITHUB_ADD_TEAM_ACCESS_RESTRICTIONS | `repo` | Likely needs a user-provided value. |
| github:GITHUB_ADD_USER_ACCESS_RESTRICTIONS | `owner` | Likely needs a user-provided value. |
| github:GITHUB_ADD_USER_ACCESS_RESTRICTIONS | `repo` | Likely needs a user-provided value. |
| github:GITHUB_ADD_USERS_TO_CODESPACES_ACCESS_FOR_ORGANIZATION | `org` | Likely needs a user-provided value. |
| github:GITHUB_ADD_USERS_TO_CODESPACES_ACCESS_FOR_ORGANIZATION | `selected_usernames` | No confident upstream tool was found. |
| github:GITHUB_APPROVE_WORKFLOW_RUN_FOR_FORK_PULL_REQUEST | `owner` | Likely needs a user-provided value. |
| github:GITHUB_APPROVE_WORKFLOW_RUN_FOR_FORK_PULL_REQUEST | `repo` | Likely needs a user-provided value. |
| github:GITHUB_ASSIGN_ORGANIZATION_ROLE_TO_TEAM | `org` | Likely needs a user-provided value. |
| github:GITHUB_ASSIGN_ORGANIZATION_ROLE_TO_USER | `org` | Likely needs a user-provided value. |
| github:GITHUB_ASSIGN_ORGANIZATION_ROLE_TO_USER | `username` | Likely needs a user-provided value. |
| github:GITHUB_BLOCK_USER | `username` | Likely needs a user-provided value. |
| github:GITHUB_BLOCK_USER_FROM_ORGANIZATION | `org` | Likely needs a user-provided value. |
| github:GITHUB_BLOCK_USER_FROM_ORGANIZATION | `username` | Likely needs a user-provided value. |
| github:GITHUB_CANCEL_GITHUB_PAGES_DEPLOYMENT | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CANCEL_GITHUB_PAGES_DEPLOYMENT | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CANCEL_WORKFLOW_RUN | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CANCEL_WORKFLOW_RUN | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_PULL_REQUEST_HAS_BEEN_MERGED | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_PULL_REQUEST_HAS_BEEN_MERGED | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_CAN_BE_ASSIGNED | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_CAN_BE_ASSIGNED | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_CAN_BE_ASSIGNED_TO_ISSUE | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_CAN_BE_ASSIGNED_TO_ISSUE | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_FOLLOWS_ANOTHER_USER | `target_user` | No confident upstream tool was found. |
| github:GITHUB_CHECK_IF_USER_FOLLOWS_ANOTHER_USER | `username` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_IS_BLOCKED_BY_AUTHENTICATED_USER | `username` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_IS_BLOCKED_BY_ORGANIZATION | `org` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_IS_BLOCKED_BY_ORGANIZATION | `username` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_IS_REPOSITORY_COLLABORATOR | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_IS_REPOSITORY_COLLABORATOR | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_IF_USER_IS_REPOSITORY_COLLABORATOR | `username` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_PERSON_FOLLOWED_BY_AUTH_USER | `username` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_PRIVATE_VULNERABILITY_REPORTING_STATUS | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_PRIVATE_VULNERABILITY_REPORTING_STATUS | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_PUBLIC_ORGANIZATION_MEMBERSHIP_FOR_USER | `org` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_PUBLIC_ORGANIZATION_MEMBERSHIP_FOR_USER | `username` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_TEAM_PERMISSIONS_FOR_A_PROJECT | `org` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_TEAM_PERMISSIONS_FOR_A_REPOSITORY | `org` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_TEAM_PERMISSIONS_FOR_A_REPOSITORY | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_TEAM_PERMISSIONS_FOR_A_REPOSITORY | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_TOKEN | `access_token` | Likely needs a user-provided value. |
| github:GITHUB_CHECK_TOKEN | `client_id` | No confident upstream tool was found. |
| github:GITHUB_CLEAR_PROJECT_V2_ITEM_FIELD_VALUE | `fieldId` | No confident upstream tool was found. |
| github:GITHUB_CLEAR_PROJECT_V2_ITEM_FIELD_VALUE | `itemId` | No confident upstream tool was found. |
| github:GITHUB_CLEAR_REPOSITORY_CACHE_BY_KEY | `key` | No confident upstream tool was found. |
| github:GITHUB_CLEAR_REPOSITORY_CACHE_BY_KEY | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CLEAR_REPOSITORY_CACHE_BY_KEY | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CLEAR_SELF_HOSTED_RUNNER_ORG_LABELS | `org` | Likely needs a user-provided value. |
| github:GITHUB_COMMIT_MULTIPLE_FILES | `message` | Likely needs a user-provided value. |
| github:GITHUB_COMMIT_MULTIPLE_FILES | `owner` | Likely needs a user-provided value. |
| github:GITHUB_COMMIT_MULTIPLE_FILES | `repo` | Likely needs a user-provided value. |
| github:GITHUB_COMPARE_TWO_COMMITS | `basehead` | No confident upstream tool was found. |
| github:GITHUB_COMPARE_TWO_COMMITS | `owner` | Likely needs a user-provided value. |
| github:GITHUB_COMPARE_TWO_COMMITS | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CONFIGURE_JIT_RUNNER_FOR_ORG | `labels` | Likely needs a user-provided value. |
| github:GITHUB_CONFIGURE_JIT_RUNNER_FOR_ORG | `name` | Likely needs a user-provided value. |
| github:GITHUB_CONFIGURE_JIT_RUNNER_FOR_ORG | `org` | Likely needs a user-provided value. |
| github:GITHUB_CONFIGURE_OIDC_SUBJECT_CLAIM_TEMPLATE | `include_claim_keys` | No confident upstream tool was found. |
| github:GITHUB_CONFIGURE_OIDC_SUBJECT_CLAIM_TEMPLATE | `org` | Likely needs a user-provided value. |
| github:GITHUB_CONVERT_ORG_MEMBER_TO_OUTSIDE_COLLABORATOR | `org` | Likely needs a user-provided value. |
| github:GITHUB_CONVERT_ORG_MEMBER_TO_OUTSIDE_COLLABORATOR | `username` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_BLOB | `content` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_BLOB | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_BLOB | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CHECK_RUN | `name` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CHECK_RUN | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CHECK_RUN | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CHECK_SUITE | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CHECK_SUITE | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CODESPACE_FROM_A_PULL_REQUEST | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CODESPACE_FROM_A_PULL_REQUEST | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CODESPACE_IN_A_REPOSITORY | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_CODESPACE_IN_A_REPOSITORY | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_COMMIT | `message` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_COMMIT | `owner` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_COMMIT | `repo` | Likely needs a user-provided value. |
| github:GITHUB_CREATE_A_COMMIT | `tree` | No confident upstream tool was found. |
| github:GITHUB_CREATE_A_COMMIT_COMMENT | `body` | Likely needs a user-provided value. |
