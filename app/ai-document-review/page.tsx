import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourceCitation } from "@/components/SourceCitation";
import { TableOfContents } from "@/components/TableOfContents";
import { articleGraph, crumbsFor } from "@/lib/jsonld";
import { metadataForPage } from "@/lib/metadata";
import { pages, updatedParts } from "@/lib/pages";

const page = pages.ai;
export const metadata = metadataForPage(page);

export default function AiDocumentReviewPage() {
  const crumbs = crumbsFor(page);
  return (
    <>
      <JsonLd data={articleGraph(page, crumbs)} />

      <Hero
        title={page.h1}
        crumbs={crumbs}
        updated={updatedParts(page)}
        definition="AI document review is the use of artificial intelligence to assist reviewers in examining documents. Typical tasks include OCR and text extraction, classification, entity and clause extraction, comparison, summarization and issue flagging. The software produces suggestions and structured findings. Qualified human reviewers verify them, apply judgment and make the final decision."
      />

      <TableOfContents
        items={[
          { id: "what-is-ai-document-review", label: "Definition" },
          { id: "what-can-ai-assist-with", label: "What AI assists with" },
          { id: "workflow", label: "Workflow" },
          { id: "human-judgment", label: "Human judgment" },
          { id: "risks-and-limitations", label: "Risks and limitations" },
          { id: "faq", label: "FAQ" },
        ]}
      />

      <ArticleSection
        id="what-is-ai-document-review"
        title="What Is AI Document Review?"
        shortAnswer="AI document review applies machine learning and language models to the repetitive parts of reviewing documents, so that people can focus on the parts that need judgment."
      >
        <p>
          It builds on <Link href={pages.whatIs.path}>document review</Link>, the
          structured examination of documents against a purpose, and adds
          software that reads, sorts and compares at scale. The core components
          relate to each other like this:
        </p>
        <ComparisonTable
          caption="Components of AI document review and how each feeds the next"
          columns={["Component", "Role in the review", "Typical output"]}
          rows={[
            ["OCR", "Converts scans and images into machine-readable text", "Searchable text"],
            ["Classification", "Identifies document type and relevance", "Labels and groupings"],
            ["Entity extraction", "Finds people, organizations, dates, amounts and references", "Structured fields"],
            ["Clause detection", "Locates and categorizes contract or policy provisions", "Tagged passages"],
            ["Summarization", "Condenses documents or sections", "Short overviews linked to source text"],
            ["Comparison", "Compares versions, templates or documents against each other", "Difference lists"],
            ["Issue flagging", "Marks passages that match review criteria", "Flagged items for review"],
            ["Human review", "Verifies, interprets and decides", "Documented decision"],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="what-can-ai-assist-with"
        title="What Can AI Assist With?"
        tone="tint"
        shortAnswer="AI can assist with thirteen common review tasks, from reading scanned pages to ordering documents by priority. Each produces output that a reviewer can check against the source."
      >
        <ComparisonTable
          caption="Review tasks AI can assist with"
          columns={["Task", "What it does", "What the reviewer checks"]}
          rows={[
            ["OCR and text extraction", "Turns scans, PDFs and images into text", "That the text matches the page, especially numbers and names"],
            ["Document classification", "Assigns each document a type or category", "That unusual documents were not mislabeled"],
            ["Metadata extraction", "Captures dates, authors, versions and file properties", "That key dates and versions are correct"],
            ["Entity extraction", "Identifies parties, people, places, amounts and identifiers", "That entities are correctly resolved and attributed"],
            ["Clause detection", "Finds specific provisions inside long documents", "That the clause was captured in full and in context"],
            ["Keyword identification", "Surfaces terms and phrases relevant to the review", "That relevant documents without those terms were not skipped"],
            ["Summarization", "Condenses content into a short overview", "That the summary reflects the source and omits nothing material"],
            ["Cross-document comparison", "Compares terms or facts across documents", "That differences are real and meaningful"],
            ["Missing-information detection", "Flags expected fields, signatures or attachments that appear absent", "That the item is actually missing rather than missed"],
            ["Anomaly detection", "Highlights content that departs from a pattern or standard", "Whether the departure is significant or benign"],
            ["Duplicate detection", "Groups identical or near-identical documents", "That near-duplicates do not hide meaningful differences"],
            ["Issue flagging", "Marks passages that match defined criteria", "Whether each flag is a real issue and not a false alarm"],
            ["Review prioritization", "Orders documents so likely-relevant items come first", "That low-ranked items are sampled, not ignored"],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="workflow"
        title="What Does an AI Document Review Workflow Involve?"
        shortAnswer="A typical workflow runs from documents through extraction, classification, comparison and findings to human review and a decision."
      >
        <ProcessSteps
          label="AI document review workflow"
          steps={[
            { label: "Documents", detail: "Input set" },
            { label: "Extraction", detail: "Text and fields" },
            { label: "Classification", detail: "Type and relevance" },
            { label: "Relevant Information", detail: "Entities, clauses, dates" },
            { label: "Comparison", detail: "Against criteria" },
            { label: "Findings", detail: "Flags and gaps" },
            { label: "Human Review", detail: "Verify and interpret" },
            { label: "Decision", detail: "Accountable approval" },
          ]}
        />
        <p>
          The inputs are the documents and the review criteria. The outputs at
          each stage are intermediate: extracted text, labels, fields and
          flags. Only the last step, a documented human decision, is a
          conclusion. Reviewers should be able to click from any finding back to
          the passage it came from.
        </p>
      </ArticleSection>

      <ArticleSection
        id="human-judgment"
        title="What Still Requires Human Judgment?"
        tone="tint"
        shortAnswer="Anything that depends on interpretation, context or accountability still requires a qualified person."
      >
        <ul>
          <li><strong>Legal interpretation:</strong> what a provision means and how it applies to specific facts.</li>
          <li><strong>Commercial context:</strong> whether a term is acceptable given the relationship, price and alternatives.</li>
          <li><strong>Regulatory interpretation:</strong> how rules apply, which should be checked against primary sources.</li>
          <li><strong>Unusual clauses:</strong> drafting that does not resemble anything the tool or its templates anticipated.</li>
          <li><strong>Materiality:</strong> whether a difference or gap is important enough to act on.</li>
          <li><strong>Final approval:</strong> accepting risk and signing off, which is an accountability decision.</li>
          <li><strong>Disputed facts:</strong> resolving conflicts between documents or between documents and testimony.</li>
        </ul>
        <p>
          Professional guidance reflects this. The American Bar Association&apos;s
          Formal Opinion 512, for example, discusses lawyers&apos; duties of
          competence, confidentiality, communication and supervision when
          using generative AI tools.
        </p>
        <DisclaimerBox title="Human oversight">
          AI-assisted document review should support qualified reviewers, not
          replace accountable legal, compliance, claims or business judgment.
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection
        id="risks-and-limitations"
        title="What Are the Risks and Limitations of AI Document Review?"
        shortAnswer="The main risks are inaccurate input, inaccurate output and inappropriate handling of sensitive data. Each can be reduced with validation, controls and human review, but not eliminated."
      >
        <ul>
          <li><strong>OCR errors:</strong> low-quality scans can turn a number or name into a different one, and downstream steps inherit the error.</li>
          <li><strong>Incomplete source documents:</strong> a tool cannot find what was never provided, such as a missing exhibit or amendment.</li>
          <li><strong>Hallucinations:</strong> generative models can produce fluent statements that are unsupported by the document or invented outright.</li>
          <li><strong>Missing context:</strong> a clause may only make sense alongside definitions, schedules or other agreements the tool did not connect.</li>
          <li><strong>Stale templates and playbooks:</strong> comparison against outdated standards produces misleading deviations.</li>
          <li><strong>False positives:</strong> flagged items that are not issues waste reviewer time and can erode trust.</li>
          <li><strong>False negatives:</strong> missed issues are harder to notice because nothing was flagged.</li>
          <li><strong>Confidentiality:</strong> documents may include privileged, commercially sensitive or regulated content.</li>
          <li><strong>Data privacy:</strong> personal data may be subject to privacy laws that limit how it is processed and where it is sent.</li>
          <li><strong>Over-reliance on automation:</strong> accepting summaries and flags without checking source text lets errors become decisions.</li>
        </ul>
        <h3>How Teams Reduce These Risks</h3>
        <ul>
          <li>Define review criteria in writing before the review starts.</li>
          <li>Verify findings against source text, and sample documents the tool did not flag.</li>
          <li>Test the process on a representative set before relying on it.</li>
          <li>Restrict access, and review how any tool stores, retains and shares data.</li>
          <li>Keep records of criteria, findings and decisions.</li>
        </ul>
        <p>
          The NIST AI Risk Management Framework and its generative AI profile
          describe approaches to governing and measuring such risks. An
          academic evaluation of commercial AI legal research tools, published
          in 2024, found that they still produced incorrect or unsupported
          answers, which is a reminder to verify output even from specialized
          products.
        </p>
        <DisclaimerBox title="Important">
          AI-assisted document review should support qualified reviewers, not
          replace accountable legal, compliance, claims or business judgment.
        </DisclaimerBox>
      </ArticleSection>

      <FAQ
        items={[
          {
            q: "Is automated document review the same as AI document review?",
            a: "The terms overlap. Automated review can include rule-based or keyword methods, while AI document review typically refers to machine learning or language models. Both still need human verification.",
          },
          {
            q: "Does AI document review work on scanned documents?",
            a: "Yes, when OCR first converts scans into text. Output quality depends on scan quality, so extracted values should be checked against the page.",
          },
          {
            q: "Which review tasks are best suited to AI assistance?",
            a: "High-volume, repetitive tasks such as classification, extraction, search and comparison. Tasks needing interpretation or approval are best left to people.",
          },
        ]}
      />

      <RelatedLinks
        links={[
          { page: "contract", text: "Contract document review", description: "How these AI tasks apply to clauses, playbooks and negotiation." },
          { page: "software", text: "Document review software", description: "Features and evaluation criteria for tools that provide these capabilities." },
          { page: "useCases", text: "AI document review use cases", description: "The same tasks applied in compliance, claims, audit and other functions." },
        ]}
      />

      <SourceCitation ids={["nistAiRmf", "nistGenAiProfile", "stanfordLegalAi", "abaOpinion512"]} />
    </>
  );
}
