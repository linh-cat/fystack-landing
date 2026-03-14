"use client";

import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/DashboardMockup";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function DebugDelivery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div ref={ref} className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto  relative ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12 md:mb-16 lg:mb-24 px-4">
          One Dashboard, Every Blockchain
        </h2>

        {/* Text + CTA Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 md:mb-12 px-4">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-[#3b82f6] rounded-full" />
                <h3 className="text-lg font-bold text-slate-800">
                  Unified Multi-Chain Management
                </h3>
              </div>
              <p className="text-slate-500 leading-relaxed pl-4 text-sm max-w-sm">
                Manage wallets across multiple blockchains from a single dashboard. No switching between tools.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-[#3b82f6] rounded-full" />
                <h3 className="text-lg font-bold text-slate-800">
                  Familiar Fintech Experience
                </h3>
              </div>
              <p className="text-slate-500 leading-relaxed pl-4 text-sm max-w-sm">
                Blockchain infrastructure that feels like traditional fintech. Clean, intuitive, and familiar.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-sm font-semibold bg-[#3b82f6] hover:bg-[#3b82f6]/90 transition-all"
            asChild
          >
            <Link
              href="https://www.youtube.com/watch?v=Ii9LuCfMU4I&list=PLU9E1W4GqwHGmFhSF2HXKYzbFZNYgBQBR&index=4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Demo
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Full-width Dashboard Mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}
