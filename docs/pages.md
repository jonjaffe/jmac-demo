# Pages and routes

Routes are defined in [`client/main.tsx`](../client/main.tsx).

| Path | Component | Purpose |
|---|---|---|
| `/` | `Index` | Home: hero, featured products, collections, CTA, features |
| `/collections/:category` | `Collections` | Category product listing with filters |
| `/blog` | `Blog` | Blog post index |
| `/blog/:slug` | `BlogPost` | Individual blog post |
| `/style-guide` | `StyleGuide` | Brand style guide |
| `/kitchen-sink` | `KitchenSink` | UI component showcase |
| `/admin` | `Admin` | Manual docs/tests agent kickoff |
| `*` | `BuilderPage` | Builder.io CMS catch-all |
| `*` (unreachable) | `NotFound` | 404 fallback (declared after Builder catch-all) |

## Notes

- Custom routes must be registered **above** the Builder `*` catch-all.
- The Lucide `User` icon in the nav links to `/admin`.
- Secondary nav links (New Arrivals, Blog, Kitchen Sink, etc.) are hardcoded in `Navigation`.
