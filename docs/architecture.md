# Architecture

McLaughlin & Co. is a single-page React application with an integrated Express API.

## Stack

- **Frontend**: React 18, React Router 6 (SPA), TypeScript, Vite, TailwindCSS 3, Radix UI, Lucide
- **CMS**: Builder.io (`@builder.io/react`) for dynamic pages and header nav content
- **Backend**: Express mounted in Vite during development; Netlify Functions in production
- **Shared types**: `shared/` imported via `@shared/*`

## Runtime shapes

```
Development (npm run dev)
  Browser → Vite :8080 → React SPA
                     ↘ Express middleware (/api/*)

Production (Node)
  npm run build → dist/spa + dist/server
  npm start → Express serves SPA + /api/*

Production (Netlify)
  Client → dist/spa
  /api/* → netlify/functions/api (serverless-http wrapping createServer())
```

## Key directories

| Path | Role |
|---|---|
| `client/` | React SPA (pages, components, hooks) |
| `client/main.tsx` | App entry and route table |
| `server/` | Express `createServer()` and route handlers |
| `shared/` | Types and shared constants used by client + server |
| `builder-page.tsx` / `builder-registry.ts` | Builder.io CMS pages and registered components |
| `docs/` | Application documentation |
| `scripts/` | CI / agent automation |

## Data

Most product, blog, and collection content is hardcoded in page components for the demo. Main navigation items are fetched from the Builder.io Content API (`header-links` model) with a hardcoded fallback.
