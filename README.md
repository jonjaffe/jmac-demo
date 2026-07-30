# McLaughlin & Co.

Fashion e-commerce demo built on the Fusion Starter stack: React 18, Vite, Express, TailwindCSS, and Builder.io CMS.

## Quick start

```bash
npm install
npm run dev          # http://localhost:8080
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Vite + Express on port 8080 |
| `npm run build` | Client + server production build |
| `npm start` | Serve the production build |
| `npm test` | Run Vitest unit tests |
| `npm run typecheck` | TypeScript check |

## Documentation

- [Architecture](docs/architecture.md)
- [Pages & routes](docs/pages.md)
- [Components](docs/components.md)
- [API](docs/api.md)
- [Testing](docs/testing.md)
- [Docs & tests agent workflow](docs/agent-workflow.md)

Agent-oriented setup notes live in [AGENTS.md](AGENTS.md).

## Admin

Open `/admin` (nav person icon) to manually kick off the Cursor cloud agent that refreshes docs and unit tests. Requires `ADMIN_TOKEN` and `CURSOR_API_KEY` on the server. See [docs/agent-workflow.md](docs/agent-workflow.md).
