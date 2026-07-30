# Components

## Feature components

Located in `client/components/` (excluding `ui/`):

| Component | Role |
|---|---|
| `PromoBanner` | Dismissible top-of-page promotion bar with message and optional sale link |
| `Navigation` | Sticky header, Builder-driven main nav, account link to `/admin` |
| `Footer` | Shop / help / company links; optional newsletter |
| `HeroSection` | Marketing hero with CTAs and image |
| `HeroWithChildren` | Hero variant used with composed children |
| `ProductGrid` | Product cards in grid or list layout |
| `CollectionsShowcase` | Collection teasers with images |
| `FeaturesSection` | Icon + title + description feature row |
| `CallToActionSection` | Centered or side-by-side CTA band |
| `ColorPalette` / `StyleThemes` | Style guide helpers |

## UI kit

`client/components/ui/` is a Radix + Tailwind (shadcn-style) primitive library. Prefer these for interactive controls.

## Builder registry

[`builder-registry.ts`](../builder-registry.ts) registers feature components for use inside Builder.io pages (Button, Badge, Navigation, ProductGrid, etc.).
