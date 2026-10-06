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

const page = pages.software;
export const metadata = metadataForPage(page);

export default function DocumentReviewSoftwarePage() {
  const crumbs = crumbsFor(page);
  return (
    <>
      <JsonLd data={articleGraph(page, crumbs)} />

      <Hero
        title={page.h1}
        crumbs={crumbs}
        updated={updatedParts(page)}
        definition="Document review software helps teams upload, organize, search, analyze and annotate documents so reviewers can examine them against defined criteria. AI-enabled versions add capabilities such as OCR, classification, extraction, clause detection and summarization. Buyers should weigh review controls, security, auditability and integration alongside any AI features, and should verify claims through testing."
      />

      <TableOfContents
        items={[
          { id: "what-should-it-do", label: "What it should do" },
          { id: "software-workflow", label: "Workflow" },
          { id: "how-to-evaluate", label: "How to evaluate" },
          { id: "evaluation-process", label: "Evaluation process" },
          { id: "faq", label: "FAQ" },
        ]}
      />

      <ArticleSection
        id="what-should-it-do"
        title="What Should Document Review Software Do?"
        shortAnswer="At a minimum, document review software should let reviewers bring documents in, find and compare what matters, record their conclusions and show who did what."
      >
        <p>
          The features below are those commonly sought in document review and
          document analysis tools. Not every tool offers all of them, and not
          every team needs all of them. The right set depends on the
          documents, the review standard and who the reviewers are.
        </p>
        <ComparisonTable
          caption="Common document review software features and why they matter"
          columns={["Feature", "What it provides", "Why it matters"]}
          rows={[
            ["Document upload", "Bulk and single-file ingestion of common formats", "Review cannot start until documents are in"],
            ["OCR", "Converts scans and images to text", "Scanned documents are otherwise unsearchable"],
            ["Classification", "Labels documents by type or relevance", "Routes each document to the right questions"],
            ["Information extraction", "Pulls out entities, dates, amounts and fields", "Turns text into data that can be compared"],
            ["Search", "Keyword and meaning-based search across documents", "Lets reviewers find specifics quickly"],
            ["Clause detection", "Finds and tags provisions", "Speeds up contract and policy review"],
            ["Comparison", "Shows differences between versions or against a standard", "Highlights deviations for attention"],
            ["Summarization", "Generates short overviews", "Helps triage, if linked to source text"],
            ["Review queues", "Assigns and tracks documents among reviewers", "Supports tiers and workload management"],
            ["Human approval", "Requires a reviewer to confirm or override findings", "Keeps accountability with people"],
            ["Annotations", "Lets reviewers highlight and comment", "Records reasoning next to the text"],
            ["Audit trails", "Logs who viewed, changed or approved what and when", "Allows a review to be explained later"],
            ["Permissions", "Controls who can see and do what", "Protects confidential documents"],
            ["Version history", "Retains prior versions of documents and decisions", "Shows how conclusions evolved"],
            ["Export", "Produces findings and data in portable formats", "Avoids lock-in and supports reporting"],
            ["API integration", "Connects with other systems through documented interfaces", "Fits review into existing workflows"],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="software-workflow"
        title="What Workflow Should Software Support?"
        tone="tint"
        shortAnswer="Software should support the whole review path, not just the AI step, and should keep a person between findings and decision."
      >
        <ProcessSteps
          label="Workflow supported by document review software"
          steps={[
            { label: "Upload", detail: "Documents ingested" },
            { label: "Process", detail: "OCR, classify, extract" },
            { label: "Analyze", detail: "Search, compare, flag" },
            { label: "Review Queue", detail: "Assigned to reviewers" },
            { label: "Human Approval", detail: "Confirm or override" },
            { label: "Export", detail: "Findings and record" },
          ]}
        />
        <p>
          This mirrors the{" "}
          <Link href={pages.ai.path}>AI document review workflow</Link> and the
          general{" "}
          <Link href={pages.whatIs.path}>document review process</Link>.
          Software that only generates a summary leaves the harder parts, such
          as assignment, approval and record keeping, to other tools.
        </p>
      </ArticleSection>

      <ArticleSection
        id="how-to-evaluate"
        title="How to Evaluate Document Review Software"
        shortAnswer="Evaluate software against your own documents and review standard, using criteria you set before seeing demonstrations."
      >
        <ComparisonTable
          caption="Evaluation criteria and questions to ask"
          columns={["Criterion", "Questions to ask"]}
          rows={[
            ["Document types supported", "Which formats, languages and layouts are handled, and how does the tool treat low-quality scans?"],
            ["Extraction quality", "How was quality measured, and can it be tested on a sample of your own documents?"],
            ["AI transparency", "Can reviewers see the source passage behind each finding, and which parts use AI?"],
            ["Review controls", "Can reviewers confirm, edit or reject findings, and is that recorded?"],
            ["Security", "How is data encrypted, isolated and retained, and what independent assurance exists? Ask for documentation."],
            ["Permissions", "Can access be restricted by matter, team or role?"],
            ["Data residency", "Where is data stored and processed, and is it used to train models?"],
            ["Workflow customization", "Can criteria, queues and approval steps be configured without custom development?"],
            ["Integrations", "Which systems connect, and through what documented interfaces?"],
            ["Exportability", "Can findings and documents be exported in open formats if you leave?"],
            ["Auditability", "Does the audit trail capture views, edits, AI outputs and approvals?"],
            ["Pricing model", "How is pricing structured, what drives cost as volume grows and what is excluded? Obtain quotes in writing."],
          ]}
        />
        <p>
          This page does not rank vendors or quote prices. Both change often,
          and the right answer depends on your documents and risk tolerance.
        </p>
      </ArticleSection>

      <ArticleSection
        id="evaluation-process"
        title="How Should a Team Run an Evaluation?"
        tone="tint"
        shortAnswer="Define criteria first, test on representative documents, and involve the people who will use and be accountable for the results."
      >
        <ol>
          <li><strong>Write the review standard:</strong> what must the tool find, and what counts as a correct result?</li>
          <li><strong>Assemble a representative sample:</strong> include messy scans, unusual documents and known problem cases.</li>
          <li><strong>Measure against a human baseline:</strong> compare results with a reviewer&apos;s on the same documents, including what was missed and what was wrongly flagged.</li>
          <li><strong>Involve security, privacy and legal teams:</strong> they should review data handling before any real documents are uploaded.</li>
          <li><strong>Check the audit and export features:</strong> confirm that you can explain and keep what the tool produces.</li>
          <li><strong>Decide how humans stay in control:</strong> define who verifies output and who approves.</li>
        </ol>
        <p>
          For contract-specific criteria, see{" "}
          <Link href={pages.contract.path}>contract document review</Link>, and
          for the tasks tools are applied to, see{" "}
          <Link href={pages.useCases.path}>document review use cases</Link>.
        </p>
        <DisclaimerBox title="Human oversight">
          AI-assisted document review should support qualified reviewers, not
          replace accountable legal, compliance, claims or business judgment.
        </DisclaimerBox>
      </ArticleSection>

      <FAQ
        items={[
          {
            q: "What is the difference between document review software and a document management system?",
            a: "A document management system stores and organizes documents. Document review software adds analysis, annotation, queues and approval so that documents can be examined against criteria.",
          },
          {
            q: "Does document review software require AI?",
            a: "No. Some tools rely on search, rules and workflow alone. AI adds extraction, classification and summarization but also adds risks that need validation.",
          },
          {
            q: "Does DocumentReviewAI.com offer document review software?",
            a: "No. This site is an educational resource. It does not currently operate or sell document review software.",
          },
        ]}
      />

      <RelatedLinks
        links={[
          { page: "ai", text: "AI document review", description: "The AI capabilities that review software may include, and their limits." },
          { page: "useCases", text: "Document review use cases", description: "Where software is applied, from compliance to claims." },
          { page: "contract", text: "Contract document review", description: "A common reason teams look for review software." },
        ]}
      />

      <SourceCitation ids={["nistAiRmf", "nistGenAiProfile"]} />
    </>
  );
}
