# Docs and tests agent workflow

Two entry points share one Cursor cloud-agent prompt (docs + unit tests only).

```
PR opened/synced  →  GitHub Action  →  @cursor/sdk cloud agent  →  commits to PR head
Admin button      →  POST /api/agent/docs-tests  →  Cloud Agents REST API  →  new PR from main
```

## Automatic (every PR)

Workflow: [`.github/workflows/docs-tests-agent.yml`](../.github/workflows/docs-tests-agent.yml)

1. On `pull_request` (`opened`, `synchronize`, `reopened`)
2. Skips if the latest commit message contains `[agent-docs-tests]` (loop prevention)
3. Runs [`scripts/run-docs-tests-agent.mjs`](../scripts/run-docs-tests-agent.mjs) with Node 22
4. Cloud agent attaches via `prUrl` + `workOnCurrentBranch: true` and updates docs/tests on the PR head

**GitHub secret**

- `CURSOR_API_KEY` — user or service-account key from [Cursor Dashboard](https://cursor.com/dashboard/api)

The Cursor account that owns the key must have GitHub linked to this repository.

## Manual (admin page)

1. Open `/admin` (person icon in the nav)
2. Enter the admin token
3. Click **Run docs & tests agent**
4. Agent starts from `main`, refreshes docs/tests, and opens a new PR (`autoCreatePR`)

**Server / Netlify env**

| Variable | Purpose |
|---|---|
| `CURSOR_API_KEY` | Auth for Cursor Cloud Agents API |
| `ADMIN_TOKEN` | Required value of `x-admin-token` |
| `GITHUB_REPO_URL` | Optional; defaults to `https://github.com/jonjaffe/jmac-demo` |
| `GITHUB_DEFAULT_BRANCH` | Optional; defaults to `main` |

## Shared prompt

- Markdown (CI): [`scripts/prompts/docs-and-tests.md`](../scripts/prompts/docs-and-tests.md)
- TypeScript constant (server fallback): [`shared/docs-tests-agent-prompt.ts`](../shared/docs-tests-agent-prompt.ts)

Agents must only touch docs, README/AGENTS, and `*.spec`/`*.test` files, and must include `[agent-docs-tests]` in commit messages.
