"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield } from "lucide-react";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function Hero() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient and grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f1fc] via-[#f0f4f8] to-white">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, #cbd5e1 1px, transparent 1px),
              linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-10 left-0 w-[1000px] h-[50px] sm:h-[200px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-3xl"></div>
      <div className="absolute top-10 right-0 w-[1000px] h-[50px] sm:h-[200px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-3xl"></div>
    

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 lg:px-16 2xl:px-0">
        <div
          ref={scrollRef}
          className={`py-20 lg:py-32 ${
            isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          <div className="max-w-3xl">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Wallet Infrastructure
              <br />
              for Financial Operations
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              The fastest way to go on-chain. We help fintechs, web3 teams
              automate stablecoin, digital asset workflows across multiple
              chains securely at scale with maximum security.
            </p>

            {/* Features Badge */}
            <div className="flex items-center gap-2 mb-8 text-slate-600">
              <Shield className="w-5 h-5 text-[#3b82f6]" />
              <span className="text-sm sm:text-base">
                Payments • Treasury • Exchanges • Embedded Wallets
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                size="lg"
                className="rounded-full px-6 sm:px-8 py-6 text-sm sm:text-base font-semibold bg-[#3b82f6] hover:bg-[#3b82f6]/90 transition-all shadow-lg shadow-[#3b82f6]/20"
                asChild
              >
                <Link
                  href="https://app.fystack.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Demo
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 py-6 text-sm sm:text-base font-semibold border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-all"
                asChild
              >
                <Link href="#contact">Talk to an Architect</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
