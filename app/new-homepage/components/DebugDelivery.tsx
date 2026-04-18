"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/DashboardMockup";
import {
  ArrowUpRight,
  Layers,
  Sparkles,
  Fuel,
  RefreshCw,
  Unlock,
  Activity,
  Terminal,
  Code,
} from "lucide-react";
import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative p-6 lg:p-8 border-t border-l border-slate-200 bg-gradient-to-b from-slate-50/40 to-transparent overflow-hidden"
    >
      {/* Cursor-following spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(59, 130, 246, 0.10), transparent 70%)",
        }}
      />

      <div className="relative">
        {icon}
        <h3 className="text-base lg:text-lg font-bold text-slate-900 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}

export function DebugDelivery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div ref={ref} className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto  relative ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Section Title + Demo Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 md:mb-16 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
            One Stack for Every Stablecoin Rail
          </h2>

          <Button
            size="lg"
            className="self-start md:self-auto shrink-0 rounded-full px-8 py-6 text-sm font-semibold bg-[#3b82f6] hover:bg-[#3b82f6]/90 transition-all"
            asChild
          >
            <Link
              href="https://www.youtube.com/watch?v=X5nqO33ngVg&list=PLU9E1W4GqwHGmFhSF2HXKYzbFZNYgBQBR&index=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Intro
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Feature Cards Grid */}
        <div className="mb-8 md:mb-12 mx-4 overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mt-px -ml-px">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <FeatureCard
                  key={feature.title}
                  icon={<Icon className="w-6 h-6 text-slate-600 mb-5 group-hover:text-[#3b82f6] transition-colors" strokeWidth={1.5} />}
                  title={feature.title}
                  description={feature.description}
                />
              );
            })}
          </div>
        </div>

        {/* Full-width Dashboard Mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}

const features = [
  {
    icon: Layers,
    title: "Unified Multi-Chain Management",
    description:
      "Manage wallets across multiple blockchains from a single dashboard. No switching between tools.",
  },
  {
    icon: Sparkles,
    title: "Familiar Fintech Experience",
    description:
      "Blockchain infrastructure that feels like traditional fintech. Clean, intuitive, and familiar.",
  },
  {
    icon: Fuel,
    title: "Gas Sponsor",
    description:
      "Let your users transact without holding native tokens — sponsor their gas in the background.",
  },
  {
    icon: RefreshCw,
    title: "Auto Sweep",
    description:
      "Automate stablecoin movement across wallets seamlessly, with scheduled and threshold-based rules.",
  },
  {
    icon: Unlock,
    title: "No Vendor Lock-In",
    description:
      "Own your data and keep full control. Portable architecture, flexible commercial terms, no forced dependencies.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring & Alerts",
    description:
      "Track balances, transactions, and anomalies in real-time with Telegram and Slack notifications.",
  },
  {
    icon: Terminal,
    title: "Built for Developers",
    description:
      "Go live in days, not weeks. Clean REST API, SDKs, and docs built for engineers who need control and flexibility.",
  },
  {
    icon: Code,
    title: "Self-hosted & Open Core",
    description:
      "Open-core codebase with full self-hosting capabilities — transparency and sovereignty you can audit.",
  },
];
