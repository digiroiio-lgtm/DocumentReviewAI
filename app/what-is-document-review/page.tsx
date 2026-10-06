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

const page = pages.whatIs;
export const metadata = metadataForPage(page);

export default function WhatIsDocumentReviewPage() {
  const crumbs = crumbsFor(page);
  return (
    <>
      <JsonLd data={articleGraph(page, crumbs)} />

      <Hero
        title={page.h1}
        crumbs={crumbs}
        updated={updatedParts(page)}
        definition="Document review is the structured examination of documents to understand their content, check them against a purpose or standard, and support a decision. It involves collecting documents, classifying them, extracting key information, comparing it with criteria, identifying issues and recording an outcome. AI can assist several of these steps, but accountable people make the decision."
      />

      <TableOfContents
        items={[
          { id: "purpose", label: "Purpose" },
          { id: "documents", label: "Documents reviewed" },
          { id: "process", label: "Process" },
          { id: "reviewers", label: "Who reviews" },
          { id: "vs-document-analysis", label: "vs. document analysis" },
          { id: "vs-audit", label: "vs. audit" },
          { id: "vs-due-diligence", label: "vs. due diligence" },
          { id: "ai-assistance", label: "AI assistance" },
        ]}
      />

      <ArticleSection
        id="purpose"
        title="What Is the Purpose of Document Review?"
        shortAnswer="The purpose of document review is to turn a body of documents into a reliable basis for a decision, such as whether to sign, approve, pay, escalate or investigate."
      >
        <p>
          Documents hold the facts, obligations and representations that
          organizations act on. Reading them one at a time does not scale, and
          reading them without a standard produces inconsistent results.
          Document review addresses both problems by defining what to look for,
          checking each document against it and recording what was found.
        </p>
        <h3>Common Review Triggers</h3>
        <p>Reviews usually begin because an event requires an informed decision:</p>
        <ul>
          <li>A contract is being negotiated, renewed or terminated.</li>
          <li>A transaction, investment or acquisition requires due diligence.</li>
          <li>A regulator, auditor or internal control requires evidence.</li>
          <li>A claim or application arrives and needs a completeness check.</li>
          <li>A vendor is being onboarded or re-evaluated.</li>
          <li>A policy or procedure changes and related documents must be reconciled.</li>
          <li>A dispute or investigation requires collecting and examining records.</li>
        </ul>
        <p>
          In litigation, document review is one stage of electronic discovery.
          The EDRM Reference Model, which many practitioners use to describe
          that lifecycle, places review alongside identification, collection
          and processing.
        </p>
      </ArticleSection>

      <ArticleSection
        id="documents"
        title="What Documents Can Be Reviewed?"
        tone="tint"
        shortAnswer="Almost any record can be reviewed. What matters is that the reviewer knows which question the document is meant to answer."
      >
        <ComparisonTable
          caption="Common document categories and the question each review asks"
          columns={["Category", "Examples", "Typical review question"]}
          rows={[
            ["Contracts", "Master agreements, NDAs, order forms, amendments", "What do the terms say, and do they match the expected position?"],
            ["Policies and procedures", "Policies, SOPs, codes of conduct, attestations", "Are required topics covered and are documents consistent with each other?"],
            ["Financial documents", "Invoices, statements, approvals, supporting schedules", "Does the support exist and agree with the record?"],
            ["Claims and case files", "Claim forms, policy documents, supporting records", "Is the file complete enough for the next decision?"],
            ["Regulatory submissions", "Reports, filings, exhibits", "Is the required content present and consistent?"],
            ["Correspondence and evidence", "Emails, memos, attachments, logs", "Which items are relevant, and what do they show?"],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="process"
        title="What Is the Document Review Process?"
        shortAnswer="The document review process moves from collecting documents to classifying them, extracting information, comparing it with criteria, identifying issues, escalating, supporting a decision and keeping a record."
      >
        <ProcessSteps
          label="Document review process"
          emphasizeLast={false}
          steps={[
            { label: "Collection" },
            { label: "Classification" },
            { label: "Information extraction" },
            { label: "Comparison" },
            { label: "Issue identification" },
            { label: "Escalation" },
            { label: "Decision support" },
            { label: "Record keeping" },
          ]}
        />
        <h3>1. Document Collection</h3>
        <p>
          Reviewers gather the documents in scope and confirm that nothing
          obvious is missing. Poor collection limits everything that follows.
        </p>
        <h3>2. Classification</h3>
        <p>
          Documents are sorted by type, relevance or priority so that each one
          receives the right questions.
        </p>
        <h3>3. Information Extraction</h3>
        <p>
          Key facts are pulled out: parties, dates, amounts, obligations,
          clauses and references. Structured extraction makes later comparison
          possible.
        </p>
        <h3>4. Comparison</h3>
        <p>
          Extracted information is compared with a standard, a template, a
          prior version or other documents in the set.
        </p>
        <h3>5. Issue Identification</h3>
        <p>
          Gaps, inconsistencies, deviations and unusual terms are noted along
          with a pointer to the source passage.
        </p>
        <h3>6. Escalation</h3>
        <p>
          Items that exceed the first reviewer&apos;s authority or expertise go
          to a specialist, such as counsel, a compliance officer or a senior
          adjuster.
        </p>
        <h3>7. Decision Support</h3>
        <p>
          Findings are summarized so the decision-maker can approve, reject,
          negotiate or request more information.
        </p>
        <h3>8. Record Keeping</h3>
        <p>
          The criteria used, findings made and decision taken are recorded so
          the review can be explained and repeated later.
        </p>
      </ArticleSection>

      <ArticleSection
        id="reviewers"
        title="Who Performs Document Reviews?"
        tone="tint"
        shortAnswer="Document reviews are performed by whoever is accountable for the decision, or by people working under their direction. Titles and responsibilities differ by organization."
      >
        <ComparisonTable
          caption="Typical reviewers by function"
          columns={["Reviewer", "Typically reviews", "Decision supported"]}
          rows={[
            ["Legal professionals", "Contracts, disclosures, evidence", "Negotiation, risk acceptance, legal position"],
            ["Compliance professionals", "Policies, attestations, control evidence", "Whether review criteria are met"],
            ["Claims professionals", "Claim files and supporting records", "Claim handling decisions"],
            ["Auditors and finance teams", "Financial records and support", "Audit findings, approvals"],
            ["Procurement teams", "Vendor proposals and agreements", "Vendor selection and onboarding"],
            ["Transaction teams", "Data-room documents", "Deal terms, issue escalation"],
          ]}
        />
        <p>
          Large reviews are often organized in tiers, with first-pass
          reviewers, subject-matter specialists and a final approver. Software,
          including AI, can assist these people but is not an accountable
          reviewer.
        </p>
      </ArticleSection>

      <ArticleSection
        id="vs-document-analysis"
        title="Document Review vs Document Analysis"
        shortAnswer="Document analysis examines what a document says. Document review applies that analysis to a purpose and ends in a decision or recommendation."
      >
        <ComparisonTable
          caption="Document review compared with document analysis"
          columns={["Dimension", "Document review", "Document analysis"]}
          rows={[
            ["Focus", "Whether documents meet a purpose or standard", "What the documents contain and how they are structured"],
            ["Typical output", "Findings, issues and a recommendation", "Extracted data, themes, summaries"],
            ["Decision involved", "Yes, it supports one", "Not necessarily"],
            ["Relationship", "Uses document analysis as a step", "Can stand alone or feed a review"],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="vs-audit"
        title="Document Review vs Audit"
        tone="tint"
        shortAnswer="An audit is a broader, usually independent evaluation against defined criteria. Document review is often one technique used within it."
      >
        <ComparisonTable
          caption="Document review compared with audit"
          columns={["Dimension", "Document review", "Audit"]}
          rows={[
            ["Scope", "A defined set of documents", "Processes, controls, records and evidence"],
            ["Independence", "Not required", "Typically expected, depending on the audit type"],
            ["Methods", "Reading, extraction, comparison", "Documents plus testing, inquiry and observation"],
            ["Output", "Findings for a decision-maker", "A formal report or opinion, depending on the audit"],
          ]}
        />
        <p>
          Standards for audits vary by type and jurisdiction, so rely on the
          relevant primary source for any formal audit requirement.
        </p>
      </ArticleSection>

      <ArticleSection
        id="vs-due-diligence"
        title="Document Review vs Due Diligence"
        shortAnswer="Due diligence is a broader investigation of a transaction or counterparty. Document review is its core activity, alongside interviews, financial analysis and other inquiries."
      >
        <ComparisonTable
          caption="Document review compared with due diligence"
          columns={["Dimension", "Document review", "Due diligence"]}
          rows={[
            ["Scope", "The documents provided", "The whole target, including people, finances and operations"],
            ["Trigger", "Any decision needing documents checked", "Typically a transaction, investment or partnership"],
            ["Sources", "Documents", "Documents, interviews, public records, site visits"],
            ["Output", "Document-level findings", "Overall risk assessment and deal recommendations"],
          ]}
        />
        <p>
          See how this plays out in{" "}
          <Link href={`${pages.useCases.path}#due-diligence-document-review`}>
            due diligence document review
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection
        id="ai-assistance"
        title="Can AI Assist Document Review?"
        tone="tint"
        shortAnswer="Yes. AI can assist with extraction, classification, comparison, summarization and issue flagging, while people retain interpretation and final approval."
      >
        <p>
          Within the process above, AI can read scanned pages through OCR,
          classify documents, pull out entities and clauses, compare versions,
          draft summaries and flag passages that match review criteria. These
          outputs speed up collection-heavy steps and make comparison more
          systematic.
        </p>
        <p>
          AI does not decide what a clause means for a particular business,
          whether an issue is material or whether to approve. Those remain
          human responsibilities. For the details, read{" "}
          <Link href={pages.ai.path}>AI document review: workflow, uses and limitations</Link>
          . For clause-level work, see{" "}
          <Link href={pages.contract.path}>contract document review</Link>, and
          for tooling, see{" "}
          <Link href={pages.software.path}>document review software</Link>.
        </p>
        <DisclaimerBox title="Human oversight">
          AI-assisted document review should support qualified reviewers, not
          replace accountable legal, compliance, claims or business judgment.
        </DisclaimerBox>
      </ArticleSection>

      <FAQ
        items={[
          {
            q: "Is document review the same as document analysis?",
            a: "No. Document analysis describes what documents contain. Document review uses that understanding to check documents against a purpose and support a decision.",
          },
          {
            q: "Who is accountable for the result of a document review?",
            a: "The person or team that makes the decision. Tools, including AI, can assist but do not carry accountability.",
          },
          {
            q: "How long does a document review take?",
            a: "It depends on document volume, quality, the number of criteria and reviewer expertise. No standard duration applies.",
          },
        ]}
      />

      <RelatedLinks
        links={[
          { page: "ai", text: "AI document review", description: "What AI can assist with at each step of the process, and the limits." },
          { page: "contract", text: "Contract document review", description: "How the process applies to clauses and agreements." },
          { page: "useCases", text: "Document review use cases", description: "Review in compliance, claims, audit, procurement and more." },
        ]}
      />

      <SourceCitation ids={["edrm"]} />
    </>
  );
}
