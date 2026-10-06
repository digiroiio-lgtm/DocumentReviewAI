/**
 * Reusable citation registry. Only cite sources for externally verifiable
 * claims, and prefer primary sources. Add new entries here, then render them
 * with <SourceCitation ids={[...]} />.
 */

export interface Source {
  id: string;
  title: string;
  publisher: string;
  year?: number;
  url: string;
  /** One line on what the source is used to support. */
  note: string;
}

export const sources = {
  nistAiRmf: {
    id: "nistAiRmf",
    title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0)",
    publisher: "National Institute of Standards and Technology (NIST)",
    year: 2023,
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    note: "Voluntary framework for identifying and managing risks of AI systems.",
  },
  nistGenAiProfile: {
    id: "nistGenAiProfile",
    title:
      "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)",
    publisher: "National Institute of Standards and Technology (NIST)",
    year: 2024,
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
    note: "Describes generative AI risks, including confabulation (often called hallucination) and data privacy.",
  },
  stanfordLegalAi: {
    id: "stanfordLegalAi",
    title:
      "Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools",
    publisher: "Magesh et al., Stanford RegLab and Stanford HAI (arXiv:2405.20362)",
    year: 2024,
    url: "https://arxiv.org/abs/2405.20362",
    note: "Empirical evaluation reporting that AI legal research tools still produced incorrect or misgrounded answers.",
  },
  edrm: {
    id: "edrm",
    title: "EDRM Reference Model",
    publisher: "EDRM",
    url: "https://edrm.net/resources/frameworks-and-standards/edrm-model/",
    note: "Widely used conceptual model of the stages of electronic discovery, including identification, collection, processing, review and analysis.",
  },
  abaOpinion512: {
    id: "abaOpinion512",
    title: "Formal Opinion 512: Generative Artificial Intelligence Tools",
    publisher: "American Bar Association, Standing Committee on Ethics and Professional Responsibility",
    year: 2024,
    url: "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
    note: "Discusses lawyers' duties of competence, confidentiality, communication and supervision when using generative AI tools.",
  },
  hhsHipaaPrivacy: {
    id: "hhsHipaaPrivacy",
    title: "The HIPAA Privacy Rule",
    publisher: "U.S. Department of Health & Human Services (HHS)",
    url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
    note: "Primary source on U.S. federal privacy requirements for protected health information.",
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof sources;
