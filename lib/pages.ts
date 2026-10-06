/**
 * Registry of the six indexable pages. Titles and descriptions are the
 * unique metadata for each route; `updated` is shown visibly on the page
 * and reused in the sitemap and Article JSON-LD so all three always agree.
 */

export type PageKey =
  | "home"
  | "whatIs"
  | "ai"
  | "contract"
  | "useCases"
  | "software";

export interface PageEntry {
  key: PageKey;
  path: string;
  /** <title> */
  title: string;
  /** meta description */
  description: string;
  /** The page's single H1 */
  h1: string;
  /** Short label for breadcrumbs and internal-link text */
  label: string;
  /** ISO date (YYYY-MM-DD) of the last substantive content update */
  updated: string;
}

const UPDATED = "2026-10-06";

export const pages: Record<PageKey, PageEntry> = {
  home: {
    key: "home",
    path: "/",
    title: "AI Document Review | DocumentReviewAI.com",
    description:
      "Learn how AI can assist document review through extraction, classification, comparison, summarization and structured human review workflows.",
    h1: "AI Document Review for Faster, More Consistent Analysis",
    label: "Home",
    updated: UPDATED,
  },
  whatIs: {
    key: "whatIs",
    path: "/what-is-document-review",
    title: "What Is Document Review? Process, Uses & Examples",
    description:
      "Learn how document review works, what documents are examined, common review steps and how AI can assist structured document analysis.",
    h1: "What Is Document Review?",
    label: "What Is Document Review?",
    updated: UPDATED,
  },
  ai: {
    key: "ai",
    path: "/ai-document-review",
    title: "AI Document Review: Workflow, Uses & Limitations",
    description:
      "Explore how AI can assist document review through text extraction, classification, clause detection, comparison, summarization and issue flagging.",
    h1: "AI Document Review: How Artificial Intelligence Can Assist Review Teams",
    label: "AI Document Review",
    updated: UPDATED,
  },
  contract: {
    key: "contract",
    path: "/contract-document-review",
    title: "Contract Document Review: Clauses, Process & AI",
    description:
      "Learn how contract document review works and how AI can assist clause extraction, comparison, deviation detection and structured human review.",
    h1: "Contract Document Review: Workflow, Clauses and AI Assistance",
    label: "Contract Document Review",
    updated: UPDATED,
  },
  useCases: {
    key: "useCases",
    path: "/document-review-use-cases",
    title: "AI Document Review Use Cases Across Business Functions",
    description:
      "Explore AI document review use cases across contracts, compliance, claims, due diligence, policies, procurement, audit and evidence review.",
    h1: "AI Document Review Use Cases",
    label: "Document Review Use Cases",
    updated: UPDATED,
  },
  software: {
    key: "software",
    path: "/document-review-software",
    title: "Document Review Software: Features & Buyer Guide",
    description:
      "Learn how to evaluate document review software for extraction, classification, comparison, annotations, audit trails, permissions and AI-assisted review.",
    h1: "Document Review Software: Features, Workflows and Evaluation Criteria",
    label: "Document Review Software",
    updated: UPDATED,
  },
};

export const pageList: PageEntry[] = Object.values(pages);

/** { iso, label } for the visible "Last updated" line. */
export function updatedParts(page: PageEntry): { iso: string; label: string } {
  const label = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${page.updated}T00:00:00Z`));
  return { iso: page.updated, label };
}
