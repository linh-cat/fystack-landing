"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function DeveloperExperienceSection() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  const supportedChains = [
    { name: "Ethereum", logo: "/logo/Ethereum.png" },
    { name: "Base", logo: "/logo/Base.png" },
    { name: "Tron", logo: "/logo/Tron.png" },
    { name: "Solana", logo: "/logo/Solana1.png" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 2xl:px-0">
        <div
          ref={scrollRef}
          className={`${
            isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
                Developer Experience
              </h2>

              {/* Subtitle */}
              <p className="text-base text-slate-600 mb-8">
                Built for Engineering Teams
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1 h-12 bg-[#3b82f6] rounded-full group-hover:h-14 transition-all" />
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-slate-900 font-medium">
                      SDKs: TypeScript · Go · Python
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1 h-12 bg-[#3b82f6] rounded-full group-hover:h-14 transition-all" />
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-slate-900 font-medium">
                      APIs: REST + Webhooks
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Supported Chains */}
              <div className="mb-8">
                <p className="text-xs font-semibold text-slate-500 tracking-wider uppercase mb-4">
                  SUPPORTED CHAINS
                </p>
                <div className="flex items-center gap-4">
                  {supportedChains.map((chain, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-[#3b82f6] hover:shadow-lg transition-all"
                    >
                      <Image
                        src={chain.logo}
                        alt={chain.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold bg-[#3b82f6] hover:bg-[#3b82f6]/90 transition-all shadow-lg shadow-[#3b82f6]/20"
                  asChild
                >
                  <Link
                    href="https://app.fystack.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base font-semibold border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-all"
                  asChild
                >
                  <Link
                    href="https://docs.fystack.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Documentation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Code Editor Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 blur-3xl -z-10" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/svg/wallet_as_service/develop_config.svg"
                  alt="Developer Code Example"
                  width={600}
                  height={400}
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
