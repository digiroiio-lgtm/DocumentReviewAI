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

const page = pages.contract;
export const metadata = metadataForPage(page);

export default function ContractDocumentReviewPage() {
  const crumbs = crumbsFor(page);
  return (
    <>
      <JsonLd data={articleGraph(page, crumbs)} />

      <Hero
        title={page.h1}
        crumbs={crumbs}
        updated={updatedParts(page)}
        definition="Contract document review is the examination of an agreement to understand its terms, compare them with an expected standard and identify issues for negotiation or approval. AI can assist by extracting clauses, comparing versions and flagging deviations. Interpreting what a clause means, and deciding whether to accept it, requires qualified human legal or commercial judgment."
      />

      <TableOfContents
        items={[
          { id: "what-is-contract-document-review", label: "Definition" },
          { id: "what-can-be-reviewed", label: "What is reviewed" },
          { id: "workflow", label: "Workflow" },
          { id: "ai-assistance", label: "AI assistance" },
          { id: "human-legal-judgment", label: "Human legal judgment" },
        ]}
      />

      <ArticleSection
        id="what-is-contract-document-review"
        title="What Is Contract Document Review?"
        shortAnswer="Contract document review is a specialized form of document review in which the documents are agreements and the review asks what each party has committed to and whether that is acceptable."
      >
        <p>
          It sits within the broader field of{" "}
          <Link href={pages.whatIs.path}>document review</Link> and relies on
          the same steps: collect, classify, extract, compare, identify issues,
          escalate and decide. What distinguishes contract review is the
          reference standard. Reviewers compare an agreement with a template,
          a negotiating playbook, a prior version or a set of required terms.
        </p>
        <p>
          Contract review happens before signing, at renewal, during due
          diligence, after a dispute arises and when a portfolio of agreements
          must be understood at once, for example to find every agreement with a
          particular renewal date.
        </p>
      </ArticleSection>

      <ArticleSection
        id="what-can-be-reviewed"
        title="What Can Be Reviewed in a Contract?"
        tone="tint"
        shortAnswer="Reviewers examine the identity of the parties, what each must do, the money and time terms, and the provisions that allocate risk."
      >
        <ComparisonTable
          caption="Contract elements and the question a reviewer asks about each"
          columns={["Element", "Question a reviewer asks"]}
          rows={[
            ["Parties", "Are the correct legal entities named, and do signatories appear to have the right role?"],
            ["Obligations", "What must each side deliver, and by when?"],
            ["Payment terms", "What is payable, when, and what happens if payment is late?"],
            ["Renewal terms", "Does the agreement renew automatically, and what notice is needed to stop it?"],
            ["Termination", "Who may end the agreement, on what grounds and with what notice?"],
            ["Liability", "Are there limits or exclusions, and who bears which risks?"],
            ["Indemnity", "Which losses does each party promise to cover?"],
            ["Confidentiality", "What information is protected, for how long, with what exceptions?"],
            ["Data protection", "Does the contract address how personal data is handled?"],
            ["Service levels", "Which performance commitments exist, and what are the consequences of missing them?"],
            ["Governing law", "Which law and forum apply to disputes?"],
            ["Change control", "How can scope, price or terms be amended?"],
          ]}
        />
        <p>
          This page describes what reviewers look at. It does not say what any
          particular clause means or whether it is enforceable, because that
          depends on jurisdiction, facts and the full agreement. Questions like
          those belong with a qualified lawyer.
        </p>
      </ArticleSection>

      <ArticleSection
        id="workflow"
        title="What Is the Contract Review Workflow?"
        shortAnswer="A contract moves from clause extraction through comparison and issue identification to human legal or commercial review, and ends in negotiation or approval."
      >
        <ProcessSteps
          label="Contract document review workflow"
          steps={[
            { label: "Contract", detail: "Agreement and attachments" },
            { label: "Clause Extraction", detail: "Key terms located" },
            { label: "Comparison", detail: "Against playbook or template" },
            { label: "Risk / Issue Identification", detail: "Deviations and gaps" },
            { label: "Human Legal or Commercial Review", detail: "Interpretation and judgment" },
            { label: "Negotiation / Approval", detail: "Accountable outcome" },
          ]}
        />
        <p>
          The inputs are the contract, its exhibits and the review standard.
          The outputs are a list of issues, each tied to a clause, and a
          recommendation prepared for the person who approves the agreement.
        </p>
      </ArticleSection>

      <ArticleSection
        id="ai-assistance"
        title="How Can AI Assist Contract Review?"
        tone="tint"
        shortAnswer="AI can find, tag and compare contract language faster than reading each page, producing a first pass that lawyers or commercial reviewers then verify."
      >
        <ComparisonTable
          caption="Ways AI can assist contract review"
          columns={["Assistance", "What it does", "Reviewer still decides"]}
          rows={[
            ["Clause extraction", "Locates and labels clauses such as termination or indemnity", "Whether the extracted text is complete and in context"],
            ["Clause comparison", "Compares clause wording with an approved version", "Whether differences matter"],
            ["Playbook matching", "Checks terms against preferred, acceptable and unacceptable positions", "Whether to depart from the playbook for this deal"],
            ["Missing-clause detection", "Flags expected provisions that do not appear", "Whether the omission is a problem"],
            ["Summarization", "Produces a short overview of key terms", "Whether the summary is accurate and sufficient"],
            ["Deviation detection", "Highlights wording that differs from the standard", "Whether the deviation is acceptable"],
            ["Version comparison", "Shows changes between drafts", "Whether changes were agreed and what they imply"],
          ]}
        />
        <p>
          The same techniques are described in more detail in{" "}
          <Link href={pages.ai.path}>AI document review</Link>. If you are
          evaluating tools, see{" "}
          <Link href={pages.software.path}>document review software</Link> for
          features and evaluation criteria. A tool&apos;s output is only as
          reliable as its source text, so scanned contracts should be checked
          for OCR errors, and generated summaries should be checked against the
          clause text.
        </p>
      </ArticleSection>

      <ArticleSection
        id="human-legal-judgment"
        title="What Requires Human Legal Judgment?"
        shortAnswer="Interpreting clauses, assessing risk, advising on enforceability and deciding whether to accept terms all require qualified human legal or commercial judgment. AI does not replace lawyers."
      >
        <DisclaimerBox title="AI is not a substitute for legal advice">
          Contract review involves legal interpretation that depends on the
          full agreement, the facts and the governing law. AI-assisted
          document review should support qualified reviewers, not replace
          accountable legal, compliance, claims or business judgment.
        </DisclaimerBox>
        <ul>
          <li><strong>Interpretation:</strong> what the language means in context, including how defined terms and other clauses interact.</li>
          <li><strong>Enforceability and governing law:</strong> whether and how a term operates under the applicable law.</li>
          <li><strong>Risk allocation:</strong> whether the balance of liability, indemnity and remedies is acceptable.</li>
          <li><strong>Negotiation strategy:</strong> what to concede, what to hold and what the counterparty will accept.</li>
          <li><strong>Unusual or bespoke terms:</strong> drafting that departs from standard forms.</li>
          <li><strong>Approval and sign-off:</strong> accepting the agreement on the organization&apos;s behalf.</li>
        </ul>
        <p>
          Professional bodies have addressed lawyers&apos; responsibilities when
          using AI. The American Bar Association&apos;s Formal Opinion 512 is one
          such primary source, and it discusses competence, confidentiality
          and supervision. Requirements differ by jurisdiction, so consult
          the rules that apply to you.
        </p>
      </ArticleSection>

      <FAQ
        items={[
          {
            q: "Can AI review a contract by itself?",
            a: "AI can produce a first-pass extraction, comparison and summary, but it should not be the final word. A qualified person must verify the output and make decisions.",
          },
          {
            q: "What is a contract review playbook?",
            a: "A playbook is an organization's documented preferred, acceptable and unacceptable positions for common clauses. Reviewers, and tools configured with it, compare contracts against it.",
          },
          {
            q: "Is contract review the same as contract management?",
            a: "No. Review examines an agreement's terms and issues. Contract management covers the broader lifecycle, including storage, obligations tracking and renewals.",
          },
        ]}
      />

      <RelatedLinks
        links={[
          { page: "ai", text: "AI document review", description: "The wider set of AI techniques behind clause detection and comparison." },
          { page: "whatIs", text: "What is document review?", description: "The general process that contract review specializes." },
          { page: "software", text: "Document review software", description: "How to evaluate tools for contract and document review." },
        ]}
      />

      <SourceCitation ids={["abaOpinion512", "nistGenAiProfile"]} />
    </>
  );
}
