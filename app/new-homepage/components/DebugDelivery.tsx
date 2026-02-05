"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function DebugDelivery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div ref={ref} className={`max-w-[1536px] px-4 2xl:px-0 mx-auto  relative ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12 md:mb-16 lg:mb-24 px-4">
          One Dashboard, Every Blockchain
        </h2>

        {/* Two Column Layout */}
        <div className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center max-w-full w-full bg-slate-100/50">
            {/* Left Column - Text Content */}
            <div className="space-y-10 px-6 lg:px-12 py-10 lg:py-12 max-w-xl">
              {/* Unified Multi-Chain */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-[#3b82f6] rounded-full" />
                  <h3 className="text-xl font-bold text-slate-800">
                    Unified Multi-Chain Management
                  </h3>
                </div>
                <p className="text-slate-500 leading-relaxed pl-4">
                  Manage wallets across multiple blockchains from a single dashboard. No switching between tools.
                </p>
              </div>

              {/* Fintech Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-[#3b82f6] rounded-full" />
                  <h3 className="text-xl font-bold text-slate-800">
                    Familiar Fintech Experience
                  </h3>
                </div>
                <p className="text-slate-500 leading-relaxed pl-4">
                  Blockchain infrastructure that feels like traditional fintech. Clean, intuitive, and familiar.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pl-4 pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-sm font-semibold bg-[#3b82f6] hover:bg-[#3b82f6]/90 transition-all"
                  asChild
                >
                  <Link
                    href="https://www.youtube.com/watch?v=Am206C2Grxo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Demo
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              {/* Image container with shadow */}
              <div className="relative overflow-hidden border border-slate-200">
                <Image
                  src="/svg/debug_delivery/debug-delivery.svg"
                  alt="Debug Delivery Dashboard"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
