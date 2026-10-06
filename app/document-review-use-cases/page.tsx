import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourceCitation } from "@/components/SourceCitation";
import { UseCaseCard } from "@/components/UseCaseCard";
import { articleGraph, crumbsFor } from "@/lib/jsonld";
import { metadataForPage } from "@/lib/metadata";
import { pages, updatedParts } from "@/lib/pages";

const page = pages.useCases;
export const metadata = metadataForPage(page);

interface UseCase {
  id: string;
  title: string;
  goal: string;
  documents: string;
  task: string;
  reviewer: string;
  output: string;
}

const useCases: UseCase[] = [
  {
    id: "contract-review",
    title: "Contract Review",
    goal: "Understand an agreement's terms and identify where they depart from an expected standard.",
    documents: "Agreements, amendments, exhibits, order forms and the organization's templates or playbook.",
    task: "Extract clauses, compare them with the approved standard, detect missing clauses and summarize key terms.",
    reviewer: "Legal or commercial professionals interpret the terms and decide what to negotiate.",
    output: "Clause-level issue list and an approval or negotiation recommendation.",
  },
  {
    id: "compliance-document-review",
    title: "Compliance Document Review",
    goal: "Identify whether documents contain the information required for a structured compliance review.",
    documents: "Policies, procedures, attestations, evidence files and supporting records.",
    task: "Extract relevant information, summarize content, identify missing evidence and compare documents against predefined review criteria.",
    reviewer: "Compliance or legal professionals evaluate context and materiality.",
    output: "Structured review findings and follow-up items.",
  },
  {
    id: "claims-document-review",
    title: "Claims Document Review",
    goal: "Confirm that a claim file is complete and internally consistent before a handling decision.",
    documents: "Claim forms, policy documents, supporting records, correspondence and notes.",
    task: "Classify documents, extract claim details, flag missing items and highlight inconsistencies between records.",
    reviewer: "Claims professionals assess the file and decide how to proceed.",
    output: "Completeness checklist and a summary of items needing follow-up.",
  },
  {
    id: "due-diligence-document-review",
    title: "Due Diligence Document Review",
    goal: "Organize a large set of transaction documents and surface items the deal team should examine.",
    documents: "Data-room contracts, corporate records, disclosures, policies and financial documents.",
    task: "Classify documents, extract key terms, compare contracts against a checklist and flag unusual provisions.",
    reviewer: "Transaction lawyers, finance and business teams judge significance for the deal.",
    output: "Issue log and a summary organized by topic for the deal team.",
  },
  {
    id: "audit-preparation-document-review",
    title: "Audit Preparation",
    goal: "Locate and check the records that will support an upcoming audit.",
    documents: "Control descriptions, approvals, reports, logs and supporting schedules.",
    task: "Find relevant records, extract dates and approvers, flag gaps and compare records to what the control states.",
    reviewer: "Audit, finance or compliance staff assess whether evidence is sufficient.",
    output: "Evidence index and a list of gaps to resolve before the audit.",
  },
  {
    id: "policy-review",
    title: "Policy Review",
    goal: "Check that policies are consistent, current and aligned with related documents.",
    documents: "Policies, standards, procedures and training materials.",
    task: "Compare versions, detect conflicting statements, find outdated references and summarize changes.",
    reviewer: "Policy owners and compliance or legal professionals decide what to revise.",
    output: "Change summary and a list of inconsistencies to resolve.",
  },
  {
    id: "procurement-document-review",
    title: "Procurement Document Review",
    goal: "Compare supplier submissions against stated requirements.",
    documents: "Requests for proposal, vendor responses, draft agreements and supporting certificates.",
    task: "Extract answers, map them to requirements, flag missing responses and compare commercial terms.",
    reviewer: "Procurement, legal and business owners evaluate suitability and negotiate.",
    output: "Requirement-by-requirement comparison for the evaluation team.",
  },
  {
    id: "vendor-review",
    title: "Vendor Review",
    goal: "Assess whether an existing or prospective vendor has supplied the documentation required for onboarding or renewal.",
    documents: "Questionnaire responses, policies, insurance and compliance documents, agreements.",
    task: "Classify submitted documents, extract validity dates, identify missing or expired items and summarize responses.",
    reviewer: "Vendor-risk, security, legal or procurement professionals judge acceptability.",
    output: "Vendor documentation status and follow-up requests.",
  },
  {
    id: "financial-document-review",
    title: "Financial Document Review",
    goal: "Check that supporting documents exist for financial records and agree with them.",
    documents: "Invoices, statements, purchase orders, approvals and schedules.",
    task: "Extract amounts, dates and counterparties, match related documents, detect duplicates and flag mismatches.",
    reviewer: "Finance or audit professionals investigate exceptions and conclude.",
    output: "Exception list with references to source documents.",
  },
  {
    id: "healthcare-document-review",
    title: "Healthcare Document Review",
    goal: "Organize and check administrative or record documents against a defined, non-clinical review purpose.",
    documents: "Forms, consent documents, administrative records and correspondence, handled under applicable privacy rules.",
    task: "Classify documents, extract administrative fields and flag missing or inconsistent items.",
    reviewer: "Qualified healthcare, privacy or compliance professionals decide. Clinical judgment is outside the scope of document tools.",
    output: "Administrative completeness findings and follow-up items.",
  },
  {
    id: "insurance-documentation-review",
    title: "Insurance Documentation Review",
    goal: "Review policy and related documents to understand the terms and check supporting documentation.",
    documents: "Policy wordings, endorsements, applications, certificates and supporting records.",
    task: "Extract coverage terms, compare wording between versions and flag missing or inconsistent documentation.",
    reviewer: "Underwriting, claims or legal professionals interpret the terms and decide.",
    output: "Terms summary and a list of documentation questions.",
  },
  {
    id: "evidence-organization",
    title: "Evidence Organization",
    goal: "Arrange a large collection of records so reviewers can find what is relevant to an inquiry.",
    documents: "Emails, memoranda, reports, logs and attachments collected for an investigation or dispute.",
    task: "Deduplicate, classify, extract names and dates, build a timeline and prioritize likely-relevant items.",
    reviewer: "Legal, compliance or investigation professionals determine relevance and significance.",
    output: "Organized, searchable collection with a prioritized review queue.",
  },
  {
    id: "regulatory-filing-review",
    title: "Regulatory Filing Review",
    goal: "Check a draft filing for completeness and internal consistency before submission.",
    documents: "Draft reports, forms, exhibits and the source records they rely on.",
    task: "Extract figures and statements, compare them with source records and flag missing sections or mismatches.",
    reviewer: "Compliance, legal and subject-matter professionals confirm accuracy and approve.",
    output: "Pre-submission checklist and a list of discrepancies to fix.",
  },
];

export default function UseCasesPage() {
  const crumbs = crumbsFor(page);
  return (
    <>
      <JsonLd data={articleGraph(page, crumbs)} />

      <Hero
        title={page.h1}
        crumbs={crumbs}
        updated={updatedParts(page)}
        definition="AI document review use cases are the business situations in which AI helps people examine many documents against a standard. Common examples include contract, compliance, claims, due diligence, audit, procurement and evidence review. In each, AI assists with extraction, comparison and flagging, while qualified reviewers evaluate findings and decide."
      />

      <ArticleSection
        id="how-to-read"
        title="How Is Each Use Case Structured?"
        shortAnswer="Every use case below follows the same chain: goal, documents, AI-assisted task, human reviewer and output."
      >
        <p>
          The pattern makes the division of labor explicit. The goal and
          documents define what is reviewed. The AI-assisted task is the part
          software can speed up, such as extraction, comparison or
          classification. The human reviewer is the person who interprets the
          result and is accountable. The output is what the review produces for
          the next step. For the underlying techniques, see{" "}
          <Link href={pages.ai.path}>AI document review</Link>, and for the
          general process see{" "}
          <Link href={pages.whatIs.path}>what document review is</Link>.
        </p>
      </ArticleSection>

      <section className="section section--tint" aria-labelledby="use-cases-title">
        <div className="container">
          <div className="prose">
            <h2 id="use-cases-title">What Are Common AI Document Review Use Cases?</h2>
          </div>
          <div className="usecase-list">
            {useCases.map((u) => (
              <UseCaseCard key={u.id} {...u} />
            ))}
          </div>
        </div>
      </section>

      <ArticleSection
        id="sensitive-domains"
        title="What Should Teams Consider in Regulated or Sensitive Domains?"
        shortAnswer="Legal, healthcare, insurance and financial documents often carry confidentiality, privacy and professional obligations that apply regardless of the tool used."
      >
        <p>
          In the United States, health information may be subject to the HIPAA
          Privacy Rule, and other sectors have their own rules. Requirements
          vary by country, state and industry, so check the primary source
          that applies to you before processing sensitive documents with any
          tool. This site does not describe regulatory requirements and does
          not say that any workflow is compliant.
        </p>
        <DisclaimerBox title="Human oversight">
          AI-assisted document review should support qualified reviewers, not
          replace accountable legal, compliance, claims or business judgment.
          Use cases here are illustrative, not a statement that any specific
          product or service performs them.
        </DisclaimerBox>
      </ArticleSection>

      <FAQ
        items={[
          {
            q: "Which use case is the best starting point for AI document review?",
            a: "Start where documents are plentiful, the review criteria are clear and errors are easy to catch, such as completeness checks or document classification.",
          },
          {
            q: "Do all use cases need the same level of human review?",
            a: "No. The level depends on the stakes. Claims, legal and regulatory decisions warrant closer verification than low-risk sorting or search tasks.",
          },
        ]}
      />

      <RelatedLinks
        links={[
          { page: "contract", text: "Contract document review", description: "A closer look at the highest-volume legal use case." },
          { page: "software", text: "Document review software", description: "Features and criteria for choosing tools to support these use cases." },
          { page: "ai", text: "AI document review", description: "The techniques behind each AI-assisted task." },
        ]}
      />

      <SourceCitation ids={["hhsHipaaPrivacy", "nistAiRmf"]} />
    </>
  );
}
