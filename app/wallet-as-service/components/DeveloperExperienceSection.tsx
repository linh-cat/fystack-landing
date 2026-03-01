"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Code2, Webhook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function DeveloperExperienceSection() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  const supportedChains = [
    { name: "Ethereum", logo: "/logo/Ethereum.png" },
    { name: "BSC", logo: "/logo/crypto/bnb.png" },
    { name: "Polygon", logo: "/logo/crypto/polygon.png" },
    { name: "Avalanche", logo: "/logo/crypto/avax.png" },
    { name: "Base", logo: "/logo/Base.png" },
    { name: "Tron", logo: "/logo/Tron.png" },
    { name: "Solana", logo: "/logo/Solana1.png" },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.1),_transparent_60%)]" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 lg:px-16 2xl:px-0">
        <div
          ref={scrollRef}
          className={`${
            isVisible
              ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm font-medium text-blue-300 tracking-wide">
                  Built for Engineering Teams
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5">
                <span className="text-white">Seamless Developer</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-violet-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-lg text-slate-400 mb-10 max-w-md leading-relaxed">
                Ship faster with production-ready SDKs and APIs designed for
                modern engineering workflows.
              </p>

              {/* Feature Cards */}
              <div className="space-y-3 mb-10">
                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:border-blue-500/20 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center border border-blue-500/20">
                    <Code2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-[15px]">
                      SDKs
                    </p>
                    <p className="text-sm text-slate-400">
                      TypeScript &middot; Go
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>

                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:border-violet-500/20 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 flex items-center justify-center border border-violet-500/20">
                    <Webhook className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-[15px]">APIs</p>
                    <p className="text-sm text-slate-400">REST + Webhooks</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>

              {/* Supported Chains */}
              <div className="mb-10">
                <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-4">
                  Supported Chains
                </p>
                <div className="flex items-center gap-3">
                  {supportedChains.map((chain, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] hover:border-blue-500/30 hover:scale-110 transition-all duration-300"
                      title={chain.name}
                    >
                      <Image
                        src={chain.logo}
                        alt={chain.name}
                        width={28}
                        height={28}
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
                  className="rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
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
                  className="rounded-full px-8 py-6 text-base font-semibold border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all hover:scale-[1.02]"
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
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-violet-500/15 to-blue-500/20 blur-3xl rounded-3xl opacity-60" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/[0.08]">
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
