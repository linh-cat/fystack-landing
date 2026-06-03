export type Resource = {
  title: string;
  description: string;
  pdfUrl?: string;
  coverImage?: string;
  bullets?: string[];
};

export const RESOURCES: Record<string, Resource> = {
  "mpc-security-guide": {
    title: "MPC Security Guide",
    description:
      "A practical guide to Multi-Party Computation (MPC) wallets — how they work, why they matter for enterprise custody, and what to look for when evaluating a provider.",
    pdfUrl: "/downloads/mpc-security-guide.pdf",
    bullets: [
      "How MPC eliminates single points of failure in key management",
      "Threshold signatures vs. multi-sig — key differences explained",
      "Compliance and audit considerations for regulated environments",
      "Self-hosted vs. cloud deployment trade-offs",
    ],
  },
};
