import { Building2,  Layers, TrendingUp } from "lucide-react";

export const ROLES = [
  "Founder / CEO",
  "CTO / Engineering",
  "Compliance / Legal",
  "BD / Partnerships",
  "Others",
];

export const GUIDES = [
  { value: "sea", label: "SEA", comingSoon: false },
  { value: "apac", label: "APAC", comingSoon: false },
  { value: "middle_east", label: "Middle East", comingSoon: true },
  { value: "latam", label: "LATAM", comingSoon: true },
  { value: "central_asia", label: "Central Asia", comingSoon: true },
];

export const CALENDLY_URL = "https://calendly.com/thi-fystack/fystack-wallet-custody-infrastructure-for-fintechs";


export const TRUST_BULLETS = [
  { icon: Building2, text: "We respond within one business day" },
  { icon: Layers, text: "No sales pitch — just a direct conversation about your infrastructure needs" },
  { icon: TrendingUp, text: "Trusted by fintechs, PSPs, and neobanks across emerging markets" },
];

export const NEXT_STEPS = [
  { label: "Review", description: "We read your message and assess your use case" },
  { label: "Tailored response", description: "You get a direct reply matched to your stack and goals" },
  { label: "Architecture call", description: "If it's a good fit, we jump on a call to go deeper" },
];