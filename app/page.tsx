import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { CardGrid } from "@/components/CardGrid";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { DocumentTypeGrid } from "@/components/DocumentTypeGrid";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HeroVisual } from "@/components/HeroVisual";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SaleLink } from "@/components/SaleLink";
import { SourceCitation } from "@/components/SourceCitation";
import { homeGraph } from "@/lib/jsonld";
import { metadataForPage } from "@/lib/metadata";
import { pages, updatedParts } from "@/lib/pages";
import { siteConfig } from "@/lib/site-config";

const page = pages.home;
export const metadata = metadataForPage(page);

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph(page)} />

      <Hero
        variant="home"
        title={page.h1}
        definition="AI document review uses artificial intelligence to help teams extract information, classify documents, summarize content, compare clauses, identify inconsistencies and surface potentially relevant issues. It can accelerate high-volume review workflows, but final legal, compliance, claims or business decisions should remain under appropriate human oversight."
        subheading="Understand how AI can help extract, classify, compare and summarize documents while keeping accountable human reviewers in control."
        updated={updatedParts(page)}
        actions={
          <>
            <Link href={pages.whatIs.path} className="btn btn--primary">
              Explore Document Review
            </Link>
            <SaleLink className="btn btn--outline">Domain for Sale</SaleLink>
          </>
        }
        visual={<HeroVisual />}
      />

      <ArticleSection
        id="what-is-document-review"
        title="What Is Document Review?"
        shortAnswer="Document review is the structured examination of documents to understand what they contain, check them against a purpose or standard, and support a decision."
      >
        <p>
          The purpose varies. A legal team may review a contract before
          signing, a compliance team may check whether evidence supports a
          policy, and a claims team may confirm that a file is complete before
          a decision. In each case, the work moves from collecting documents to
          extracting key information, comparing it with a standard, flagging
          issues and recording a decision.
        </p>
        <p>
          Document review is closely related to <strong>document analysis</strong>{" "}
          and <strong>information extraction</strong>, and it is the umbrella
          for specialized forms such as <strong>contract review</strong>,{" "}
          <strong>compliance review</strong>, <strong>claims review</strong>,{" "}
          <strong>due diligence</strong> and <strong>evidence review</strong>.
        </p>
        <p>
          <Link href={pages.whatIs.path}>
            Read the full guide: what document review is, how the process works
            and who performs it
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection
        id="what-can-ai-assist-with"
        title="What Can AI Assist With?"
        tone="tint"
        shortAnswer="AI can take on repetitive reading and sorting tasks so reviewers can spend more time on judgment. Its output is a set of suggestions to verify, not a conclusion."
      >
        <p>
          AI document review combines several techniques. Each one produces an
          intermediate output that a person can check:
        </p>
        <CardGrid
          items={[
            { title: "Text Extraction", text: "OCR and parsing turn scans, PDFs and images into searchable text." },
            { title: "Classification", text: "Sorts documents by type, such as contract, invoice, policy or correspondence." },
            { title: "Clause Detection", text: "Locates clauses like termination, indemnity or confidentiality inside long agreements." },
            { title: "Summarization", text: "Condenses long documents into short overviews that point back to source passages." },
            { title: "Comparison", text: "Highlights differences between versions, or between a document and a template." },
            { title: "Missing Information", text: "Flags expected fields, signatures or attachments that appear to be absent." },
            { title: "Issue Flagging", text: "Surfaces passages that match review criteria so a reviewer can examine them." },
            { title: "Review Prioritization", text: "Orders documents so that likely-relevant or unusual items are seen first." },
          ]}
        />
        <p>
          <Link href={pages.ai.path}>
            See how AI document review works, including its workflow and limits
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection
        id="document-review-workflow"
        title="What Does an AI-Assisted Document Review Workflow Look Like?"
        shortAnswer="Documents move through extraction, classification and analysis to produce findings. A human reviewer then evaluates those findings and makes the decision."
      >
        <ProcessSteps
          label="AI-assisted document review workflow"
          steps={[
            { label: "Documents", detail: "Collected and ingested" },
            { label: "Extraction", detail: "Text and fields pulled out" },
            { label: "Classification", detail: "Sorted by type and relevance" },
            { label: "Analysis", detail: "Compared with criteria" },
            { label: "Findings", detail: "Issues and gaps listed" },
            { label: "Human Review", detail: "Qualified reviewer evaluates" },
            { label: "Decision", detail: "Accountable approval" },
          ]}
        />
        <p>
          The inputs are documents and review criteria. The outputs are
          structured findings and follow-up items, and the final output is a
          documented human decision. Keeping the reviewer between findings and
          decision is what makes the workflow defensible.
        </p>
      </ArticleSection>

      <ArticleSection
        id="common-document-types"
        title="What Document Types Are Commonly Reviewed?"
        tone="tint"
      >
        <DocumentTypeGrid
          items={[
            { name: "Contracts", examples: "Master agreements, NDAs, order forms, amendments, statements of work." },
            { name: "Policies and Procedures", examples: "Internal policies, standard operating procedures, codes of conduct." },
            { name: "Claims Files", examples: "Claim forms, policy documents, supporting records, correspondence." },
            { name: "Financial Records", examples: "Invoices, statements, approvals, supporting schedules." },
            { name: "Regulatory Filings", examples: "Submissions, reports and supporting exhibits prepared for a regulator." },
            { name: "Evidence and Correspondence", examples: "Emails, memos, attachments and records collected for an inquiry." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="key-use-cases"
        title="What Are the Key Use Cases?"
        shortAnswer="Any workflow that depends on reading many documents against a standard is a candidate for AI-assisted review."
      >
        <CardGrid
          columns={3}
          items={[
            { title: "Contracts", text: "Extract clauses, compare them with a playbook and prepare issues for legal or commercial review.", href: pages.contract.path },
            { title: "Compliance", text: "Check whether documents contain the information a structured compliance review requires.", href: `${pages.useCases.path}#compliance-document-review` },
            { title: "Claims", text: "Confirm that a claim file is complete and internally consistent before an adjuster decides.", href: `${pages.useCases.path}#claims-document-review` },
            { title: "Due Diligence", text: "Organize data-room documents and surface items for the deal team to escalate.", href: `${pages.useCases.path}#due-diligence-document-review` },
            { title: "Audit", text: "Locate and compare supporting records while preparing for an audit.", href: `${pages.useCases.path}#audit-preparation-document-review` },
            { title: "Procurement", text: "Compare vendor submissions and agreements against stated requirements.", href: `${pages.useCases.path}#procurement-document-review` },
          ]}
        />
        <p>
          Each use case follows the same pattern of goal, documents, AI-assisted
          task, human reviewer and output. The{" "}
          <Link href={pages.useCases.path}>AI document review use cases guide</Link>{" "}
          covers thirteen of them in that format.
        </p>
      </ArticleSection>

      <ArticleSection
        id="ai-assisted-vs-manual-review"
        title="How Does AI-Assisted Review Compare With Manual Review?"
        tone="tint"
        shortAnswer="AI assistance helps most with volume, extraction, search and comparison. Context, judgment and approval remain human responsibilities."
      >
        <ComparisonTable
          caption="AI-assisted review compared with manual review"
          columns={["Dimension", "AI-assisted review", "Manual review"]}
          rows={[
            ["Document volume", "Can work through large collections quickly once set up; results depend on document quality.", "Limited by reviewer time; scales mainly by adding reviewers."],
            ["Information extraction", "Pulls fields, entities and clauses into structured form that still needs verification.", "Reviewer reads and records details by hand; flexible but slower."],
            ["Consistency", "Applies the same criteria each run, though a systematic error is repeated too.", "Can vary between reviewers and over a long review without calibration."],
            ["Search", "Supports keyword and meaning-based search across a collection.", "Relies on reading or keyword search; coverage depends on the reviewer."],
            ["Comparison", "Surfaces differences between versions or against a template.", "Side-by-side reading; time-consuming across many documents."],
            ["Context", "Limited to what appears in the text and the configured criteria.", "Reviewers bring knowledge of the parties, the business and the history."],
            ["Legal/commercial judgment", "Not a substitute. Can point attention to items that need judgment.", "Exercised by qualified legal, compliance or business professionals."],
            ["Final approval", "Not delegated. Stays with accountable people.", "Made by accountable people."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="review-by-business-function"
        title="How Does Document Review Differ by Business Function?"
        shortAnswer="The mechanics are similar across functions. The documents, review criteria and decision-makers are different."
      >
        <ComparisonTable
          caption="Typical document review focus by business function"
          columns={["Function", "Typical documents", "Typical review question"]}
          rows={[
            ["Legal", "Contracts, NDAs, amendments, side letters", "Do the clauses match agreed standard positions, and which need negotiation?"],
            ["Compliance", "Policies, procedures, attestations, evidence files", "Is the information required for the review present and consistent?"],
            ["Claims and insurance", "Claim forms, policy documents, supporting records", "Is the file complete and consistent enough for a claims decision?"],
            ["Procurement", "Vendor proposals, agreements, certificates, questionnaires", "Do vendor submissions meet the stated requirements?"],
            ["Audit and finance", "Invoices, statements, approvals, supporting schedules", "Does supporting documentation exist and agree with the records?"],
            ["Transactions", "Data-room contracts, corporate records, disclosures", "Which items need escalation before signing?"],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="risks-and-limitations"
        title="What Are the Risks and Limitations of AI Document Review?"
        tone="tint"
        shortAnswer="AI can misread, omit or invent information, and it can be used in ways that expose confidential data. These risks are managed with verification and governance, not ignored."
      >
        <ul>
          <li><strong>OCR and extraction errors:</strong> poor scans can produce wrong text and wrong fields.</li>
          <li><strong>Hallucination and missing context:</strong> generative systems can produce plausible but unsupported statements.</li>
          <li><strong>False positives and false negatives:</strong> a tool can flag irrelevant passages and miss relevant ones.</li>
          <li><strong>Confidentiality and privacy:</strong> documents often hold personal, privileged or commercially sensitive information.</li>
          <li><strong>Over-reliance:</strong> treating a summary or flag as a finding can let errors pass unchecked.</li>
        </ul>
        <p>
          Public frameworks such as the NIST AI Risk Management Framework and
          its generative AI profile describe how organizations can identify
          and manage these risks. The{" "}
          <Link href={`${pages.ai.path}#risks-and-limitations`}>
            full list of risks and limitations
          </Link>{" "}
          is covered in the AI document review guide.
        </p>
        <DisclaimerBox title="Human oversight">
          AI-assisted document review should support qualified reviewers, not
          replace accountable legal, compliance, claims or business judgment.
        </DisclaimerBox>
      </ArticleSection>

      <FAQ
        items={[
          {
            q: "What is AI document review?",
            a: "AI document review is the use of artificial intelligence to help extract information, classify, summarize and compare documents, and flag potential issues for a human reviewer to evaluate.",
          },
          {
            q: "What is the difference between document review and document analysis?",
            a: "Document analysis examines what a document says and how it is structured. Document review applies that analysis to a purpose, such as checking against a standard, and ends in a decision or recommendation.",
          },
          {
            q: "Can AI replace human document reviewers?",
            a: "No. AI can speed up reading, sorting and comparison, but interpretation, materiality and final approval require accountable human judgment.",
          },
          {
            q: "How accurate is AI document review?",
            a: "It depends on the document quality, the task, the tool and how results are validated. No single accuracy figure applies to all situations, so outputs should be sampled and verified.",
          },
          {
            q: "Is DocumentReviewAI.com a software product?",
            a: (
              <>
                No. This site is an educational resource about AI-assisted
                document review. It does not currently operate document-review
                software or offer review services, and the domain is{" "}
                <Link href={siteConfig.sale.internalPath}>available for acquisition</Link>.
              </>
            ),
          },
        ]}
      />

      <RelatedLinks
        title="Explore the Document Review Guides"
        links={[
          { page: "whatIs", text: "What Is Document Review?", description: "Definition, purpose, process, reviewers and how review differs from audit and due diligence." },
          { page: "ai", text: "AI Document Review", description: "What AI can assist with, the workflow, what still needs human judgment and the main risks." },
          { page: "contract", text: "Contract Document Review", description: "Clause review, workflow and where AI assists contract review without replacing legal judgment." },
          { page: "useCases", text: "Document Review Use Cases", description: "Thirteen use cases from compliance to claims, each with goal, documents, task, reviewer and output." },
          { page: "software", text: "Document Review Software", description: "Features to look for and criteria for evaluating document review software." },
        ]}
      />

      <SourceCitation ids={["nistAiRmf", "nistGenAiProfile"]} />
    </>
  );
}
