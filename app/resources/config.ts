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
      "What regulators in SEA, Middle East, LATAM and beyond actually require from your custody infrastructure,  before you apply for a license.",
    bullets: [
      "The exact requirements per market: cold storage ratios, key control, data residency ",
      "Which markets are open, which are paused, which will fine you first",
      "Common infrastructure mistakes that delay or kill license applications",
      "Self-hosted vs. SaaS - what regulators actually prefer",
    ],
  },
};
