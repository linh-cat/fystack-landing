export type Resource = {
  title: string;
  description: string;
  pdfUrl?: string;
  coverImage?: string;
  bullets?: string[];
};

export const RESOURCES: Record<string, Resource> = {
  "custody-compliance-guide": {
    title: "The Crypto Custody Compliance Guide",
    description:
      "What regulators in SEA, Middle East, LATAM and beyond actually require from your custody infrastructure, before you apply for a license.",
    bullets: [
      "The exact requirements per market: cold storage ratios, key control, data residency",
      "Which markets are open, which are paused, which will fine you first",
      "Common infrastructure mistakes that delay or kill license applications",
      "Self-hosted vs. SaaS - what regulators actually prefer",
    ],
  },
  "sea-compliance-guide": {
    title: "Crypto Custody and Compliance Guide — SEA",
    description:
      "Practical insights for secure digital asset custody and regulatory compliance across Southeast Asia.",
    coverImage: "/images/sea-guide.png",
    bullets: [
      "Country-by-country regulatory overview",
      "Licensing requirements",
      "Custody infrastructure standards",
      "Risk management framework",
    ],
  },
  "apac-compliance-guide": {
    title: "Crypto Custody and Compliance Guide — APAC",
    description:
      "Understand the regulatory landscape and operational expectations for institutional custody providers throughout APAC markets.",
    coverImage: "/images/apac-guide.png",
    bullets: [
      "APAC regulatory landscape",
      "Institutional custody requirements",
      "Operational resilience",
      "Cross-border compliance",
    ],
  },
};
