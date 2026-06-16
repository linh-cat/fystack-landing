import { Building2,  Layers, TrendingUp } from "lucide-react";

export const ROLES = [
  "Founder / CEO",
  "CTO / Engineering",
  "Compliance / Legal",
  "BD / Partnerships",
  "Others",
];

export const SOLUTIONS = [
  "On/Off Ramp",
  "Crypto payment gateway",
  "Stablecoin payment rails",
  "Exchange",
  "Embedded wallet infrastructure",
  "Treasury automation",
  "White-label custody",
  "MPC / key management",
  "Multi-chain wallet API",
  "Not sure yet — need guidance",
];

export const EXPECTED_VOLUMES = [
  "Exploring / pre-launch",
  "Under $100K / month",
  "$100K – $1M / month",
  "$1M – $10M / month",
  "$10M – $100M / month",
  "$100M+ / month",
];

export const GUIDES = [
  { value: "sea", label: "SEA", comingSoon: false },
  { value: "apac", label: "APAC", comingSoon: false },
  { value: "middle_east", label: "Middle East", comingSoon: true, disabled: true },
  { value: "latam", label: "LATAM", comingSoon: true, disabled: true },
  { value: "central_asia", label: "Central Asia", comingSoon: true, disabled: true },
];

export const CALENDLY_URL = "https://calendly.com/thi-fystack/fystack-wallet-custody-infrastructure-for-fintechs";


export const TRUST_BULLETS = [
  { icon: Building2, text: "Speak directly with our engineering team" },
  { icon: Layers, text: "We map Fystack to your stack and your use case" },
  { icon: TrendingUp, text: "Trusted by fintechs, PSPs, and neobanks across emerging markets" },
];

export const NEXT_STEPS = [
  { label: "Review", description: "We read your message and assess your use case" },
  { label: "Tailored response", description: "You get a direct reply matched to your stack and goals" },
  { label: "Architecture call", description: "If it's a good fit, we jump on a call to go deeper" },
];