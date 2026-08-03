# Testing

## Runner

- **Vitest** with **jsdom**, configured in [`vitest.config.ts`](../vitest.config.ts)
- Setup: [`client/test/setup.ts`](../client/test/setup.ts) (jest-dom, ResizeObserver stub, navigation mock)
- Helpers: [`client/test/test-utils.tsx`](../client/test/test-utils.tsx) (`renderWithProviders` with Router + QueryClient + Tooltip)

```bash
npm test
```

## Conventions

- Co-locate specs as `*.spec.ts` / `*.spec.tsx` next to the source
- Prefer Testing Library queries (`getByRole`, `getByLabelText`) over CSS selectors
- Cover **app** logic: feature components, key pages, Express routes
- Do not exhaustively test every file under `client/components/ui/`

## Current coverage (baseline)

- Utils: `cn()`
- Components: Navigation, PromoBanner, Footer, HeroSection, ProductGrid, CollectionsShowcase, FeaturesSection, CallToActionSection
- Pages: Index, Collections, Blog, NotFound, Admin
- Server: `/api/ping`, `/api/demo`, `/api/agent/docs-tests`

When adding product features, add or extend specs in the same PR. The docs/tests Cursor agent also updates tests for PR diffs automatically.
