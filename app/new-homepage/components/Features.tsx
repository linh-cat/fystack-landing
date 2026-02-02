"use client";

import {
  Shield,
  Wallet,
  Code,
  Users,
  Lock,
  Zap,
  Globe,
  Key,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "MPC Security",
    description:
      "Multi-party computation ensures no single point of failure. Keys are distributed across multiple parties for maximum security.",
    color: "blue",
  },
  {
    icon: Wallet,
    title: "Multi-Chain Wallets",
    description:
      "Create and manage wallets across Ethereum, Solana, Tron, and 10+ blockchains with a unified API.",
    color: "purple",
  },
  {
    icon: Code,
    title: "Developer-First API",
    description:
      "Clean REST APIs and SDKs for JavaScript, Python, and Go. Build wallet features in hours, not weeks.",
    color: "green",
  },
  {
    icon: Users,
    title: "Team Controls",
    description:
      "Role-based access, approval workflows, and spend limits. Give your team the right level of access.",
    color: "orange",
  },
  {
    icon: Lock,
    title: "Self-Hosted Option",
    description:
      "Deploy on your own infrastructure for complete data sovereignty. Keys never leave your environment.",
    color: "red",
  },
  {
    icon: Zap,
    title: "Automated Operations",
    description:
      "Auto-sweep deposits, rebalance funds, and route payments based on custom rules and policies.",
    color: "yellow",
  },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    icon: "text-blue-500",
    border: "group-hover:border-blue-500/50",
  },
  purple: {
    bg: "bg-purple-500/10",
    icon: "text-purple-500",
    border: "group-hover:border-purple-500/50",
  },
  green: {
    bg: "bg-green-500/10",
    icon: "text-green-500",
    border: "group-hover:border-green-500/50",
  },
  orange: {
    bg: "bg-orange-500/10",
    icon: "text-orange-500",
    border: "group-hover:border-orange-500/50",
  },
  red: {
    bg: "bg-red-500/10",
    icon: "text-red-500",
    border: "group-hover:border-red-500/50",
  },
  yellow: {
    bg: "bg-yellow-500/10",
    icon: "text-yellow-500",
    border: "group-hover:border-yellow-500/50",
  },
};

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-slate-950">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-medium text-sm tracking-wider uppercase">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Everything you need for{" "}
            <span className="text-slate-400">digital asset operations</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From secure key management to automated treasury operations,
            Fystack provides the complete toolkit for modern crypto infrastructure.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900 transition-all duration-300 ${colors.border}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6`}
                >
                  <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-slate-800">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
            <div className="text-slate-500 text-sm uppercase tracking-wider">
              Blockchains
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
            <div className="text-slate-500 text-sm uppercase tracking-wider">
              Uptime SLA
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">0</div>
            <div className="text-slate-500 text-sm uppercase tracking-wider">
              Keys Exposed
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">&lt;1s</div>
            <div className="text-slate-500 text-sm uppercase tracking-wider">
              Transaction Signing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
