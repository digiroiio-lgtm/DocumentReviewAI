import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { DefinitionBox } from "@/components/DefinitionBox";
import { buildMetadata } from "@/lib/metadata";
import { pageList } from "@/lib/pages";
import { siteConfig } from "@/lib/site-config";

// noindex, follow, and intentionally absent from sitemap.ts.
export const metadata = buildMetadata({
  title: "Acquire DocumentReviewAI.com",
  description:
    "DocumentReviewAI.com is available for acquisition. Details about the domain name and associated informational website.",
  path: "/domain",
  noindex: true,
});

const applications = [
  "Document review SaaS",
  "Legal technology",
  "Contract analysis",
  "Compliance automation",
  "Claims technology",
  "Insurance technology",
  "Due diligence software",
  "Document intelligence",
  "Enterprise workflow automation",
  "RegTech",
  "Document AI platforms",
];

export default function DomainPage() {
  const { sale } = siteConfig;
  return (
    <>
      <section className="hero hero--page">
        <div className="container hero__inner">
          <div className="hero__copy">
            <Breadcrumbs
              crumbs={[
                { name: "Home", path: "/" },
                { name: "Acquire DocumentReviewAI.com", path: "/domain" },
              ]}
            />
            <h1 className="hero__title">Acquire DocumentReviewAI.com</h1>
            <DefinitionBox label="About the domain">
              DocumentReviewAI.com is a premium category domain for companies
              building at the intersection of artificial intelligence, document
              analysis and review automation.
            </DefinitionBox>
            <div className="hero__actions">
              {sale.isConfigured ? (
                <a
                  className="btn btn--primary"
                  href={sale.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Make an Inquiry
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <span className="btn btn--disabled" aria-disabled="true">
                  Make an Inquiry (link not yet available)
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <ArticleSection
        id="potential-applications"
        title="Who Is This Domain For?"
        shortAnswer="The name fits any product or company that reviews, analyzes or automates work on documents using AI."
      >
        <p>Potential applications include:</p>
        <ul>
          {applications.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <p>
          The site already covers the main search topics in this category:{" "}
          {pageList
            .filter((p) => p.key !== "home")
            .map((p, i, arr) => (
              <span key={p.key}>
                <Link href={p.path}>{p.label}</Link>
                {i < arr.length - 1 ? ", " : "."}
              </span>
            ))}
        </p>
      </ArticleSection>

      <ArticleSection id="what-is-included" title="What Is Being Acquired?" tone="tint">
        <p>
          The buyer is acquiring the domain name and the associated
          informational website asset. Terms of any transfer would be agreed
          separately between the parties.
        </p>
        <DisclaimerBox title="Not an operating company">
          DocumentReviewAI.com is not represented as an operating legal,
          compliance or document-review software company unless separately
          agreed. The site publishes general educational content only, and
          has no customers, products or services to transfer.
        </DisclaimerBox>
      </ArticleSection>
    </>
  );
}
