/**
 * Single source of truth for site-wide configuration.
 * Everything environment-driven is read here and nowhere else.
 */

export const CANONICAL_ORIGIN = "https://documentreviewai.com";

/** Accept only http(s) and mailto targets so a bad env value can never produce a javascript: link. */
function parseLinkTarget(value: string | undefined): string | null {
  const v = value?.trim();
  if (!v) return null;
  try {
    const u = new URL(v);
    return ["http:", "https:", "mailto:"].includes(u.protocol) ? v : null;
  } catch {
    return null;
  }
}

/** GA4 measurement IDs look like G-XXXXXXXXXX. Anything else is ignored. */
function parseGaId(value: string | undefined): string | null {
  const v = value?.trim();
  return v && /^G-[A-Z0-9]{4,20}$/.test(v) ? v : null;
}

const configuredSaleUrl = parseLinkTarget(process.env.NEXT_PUBLIC_DOMAIN_SALE_URL);

export const siteConfig = {
  name: "DocumentReviewAI.com",
  shortName: "DocumentReviewAI",
  domain: "documentreviewai.com",
  url: CANONICAL_ORIGIN,
  locale: "en_US",
  description:
    "Educational resource on AI-assisted document review: how extraction, classification, comparison, summarization and human review fit together in structured review workflows.",
  /** Default Open Graph / Twitter image (1200x630) and its alt text. */
  ogImage: {
    path: "/og-default.png",
    width: 1200,
    height: 630,
    alt: "DocumentReviewAI.com: AI document review workflow from documents to human decision",
  },
  /** Where sale / inquiry links point. Falls back to the internal /domain page. */
  sale: {
    url: configuredSaleUrl ?? "/domain",
    isConfigured: configuredSaleUrl !== null,
    isExternal: configuredSaleUrl !== null,
    internalPath: "/domain",
  },
  analytics: {
    gaId: parseGaId(process.env.NEXT_PUBLIC_GA_ID),
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || null,
  },
  nav: [
    { label: "Document Review", href: "/what-is-document-review" },
    { label: "AI Review", href: "/ai-document-review" },
    { label: "Contract Review", href: "/contract-document-review" },
    { label: "Use Cases", href: "/document-review-use-cases" },
    { label: "Software", href: "/document-review-software" },
  ],
  disclaimer:
    "DocumentReviewAI.com provides general educational information about document review and AI-assisted review workflows. It does not provide legal, compliance, insurance, medical or other professional advice.",
} as const;

export function absoluteUrl(path: string): string {
  if (path === "/") return CANONICAL_ORIGIN;
  return `${CANONICAL_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
