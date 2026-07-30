# API

Express routes are registered in [`server/index.ts`](../server/index.ts). Shared response types live in [`shared/api.ts`](../shared/api.ts).

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/ping` | Health/greeting JSON |
| `GET` | `/api/demo` | Demo message (`DemoResponse`) |
| `POST` | `/api/agent/docs-tests` | Kick off Cursor cloud agent for docs + tests |

## `POST /api/agent/docs-tests`

Starts a Cursor cloud agent against `GITHUB_REPO_URL` (default `https://github.com/jonjaffe/jmac-demo`) from `main`, with `autoCreatePR: true`.

**Headers**

- `x-admin-token`: must match server `ADMIN_TOKEN`

**Success (`202`)** — `DocsTestsAgentResponse`:

```json
{
  "agentId": "bc-…",
  "runId": "run-…",
  "url": "https://cursor.com/agents/bc-…"
}
```

**Errors**

- `401` — missing/invalid admin token
- `500` — missing `CURSOR_API_KEY` or unexpected failure
- `502` — Cursor API error

See [agent-workflow.md](./agent-workflow.md) for env vars and dual-trigger setup.
