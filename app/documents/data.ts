export type Document = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  // Either an absolute URL (opens in a new tab) or a path under /public/documents
  // (e.g. "/documents/my-file.pdf") for a file hosted directly in this repo.
  fileUrl: string;
  category?: string;
};

export { isExternalFileUrl } from "@/lib/utils";

export const DOCUMENTS: Document[] = [
  {
    slug: "apac-compliance-guide-2026",
    title: "APAC Compliance Guide 2026",
    description:
      "Fystack's guide to crypto custody regulations, licensing requirements, and operational expectations across APAC markets.",
    keywords: ["APAC", "compliance", "custody", "licensing", "regulation", "2026"],
    fileUrl: "/documents/apac-compliance-guide-2026.pdf",
  },
  {
    slug: "crypto-custody-compliance-guide-sea",
    title: "Crypto Custody and Compliance Guide — SEA",
    description:
      "Fystack's guide to secure digital asset custody and regulatory compliance across Southeast Asia.",
    keywords: ["SEA", "Southeast Asia", "custody", "compliance", "regulation", "licensing"],
    fileUrl: "/documents/crypto-custody-compliance-guide-sea.pdf",
  },
  {
    slug: "middle-east-virtual-asset-licensing-guide",
    title: "Middle East Virtual Asset Licensing Guide for Fintechs",
    description:
      "Fystack's guide to virtual asset licensing requirements for fintechs operating across Middle East markets.",
    keywords: ["Middle East", "virtual asset", "licensing", "fintech", "custody", "compliance"],
    fileUrl: "/documents/middle-east-virtual-asset-licensing-guide.pdf",
  },
  {
    slug: "compliance-latam-stablecoin-operators-custody",
    title: "Compliance in LATAM: Stablecoin Operators and Custody",
    description:
      "Fystack's guide to compliance requirements for stablecoin operators and custody providers across Latin America.",
    keywords: ["LATAM", "Latin America", "stablecoin", "custody", "compliance", "regulation"],
    fileUrl: "/documents/compliance-latam-stablecoin-operators-custody.pdf",
  },
];
