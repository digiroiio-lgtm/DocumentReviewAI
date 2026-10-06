# DocumentReviewAI.com

Informational category-authority site about AI-assisted document review. Next.js (App Router) + TypeScript, statically rendered, no client JS beyond the mobile menu.

This site does **not** operate document-review software, and the domain is for sale. Do not add product, pricing, customer, accuracy or compliance claims.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck
BASE_URL=http://localhost:3000 npm run verify   # against a running server
```

`npm run verify` checks every route: one H1, unique title/description, canonicals, robots meta, OG/Twitter tags, JSON-LD validity and match with visible content, internal links and anchors, sitemap, robots.txt, 404, banner and disclaimer.

## Configuration (all optional, see `.env.example`)

| Variable | Effect |
| --- | --- |
| `NEXT_PUBLIC_DOMAIN_SALE_URL` | Target for the sale banner, header CTA, hero CTA and "Make an Inquiry". Empty routes to `/domain`. |
| `NEXT_PUBLIC_GA_ID` | Loads GA4 (`G-XXXXXXXXXX`) after interaction. Invalid values are ignored. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Adds the Search Console verification meta tag. |

The canonical origin (`https://documentreviewai.com`), nav, default metadata and disclaimer live in `lib/site-config.ts`.

## Structure

- `app/`: the six indexable pages, `/domain` (noindex, not in sitemap), `robots.ts`, `sitemap.ts`, `not-found.tsx`
- `components/`: reusable UI (Header, Footer, DomainSaleBanner, Hero, DefinitionBox, ComparisonTable, ProcessSteps, UseCaseCard, FAQ, SourceCitation, ...)
- `lib/pages.ts`: titles, descriptions, H1s and "last updated" dates (also drive sitemap and JSON-LD)
- `lib/metadata.ts`, `lib/jsonld.ts`, `lib/sources.ts`: metadata helper, JSON-LD builders, citation registry
- `public/og-default.png`: Open Graph image, rendered from `scripts/og.html`

## Editorial rules

Educational content only; source externally verifiable claims (add them to `lib/sources.ts`); prefer primary sources for legal/regulatory points; no individualized advice; review AI-assisted drafts before publishing. When content changes materially, update `updated` in `lib/pages.ts`.
