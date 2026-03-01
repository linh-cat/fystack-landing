"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw,
} from "lucide-react";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function Hero() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient and grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f1fc] via-[#f0f4f8] to-white">
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
      <div className="absolute top-10 left-0 w-[1000px] h-[50px] sm:h-[200px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-3xl" />
      <div className="absolute top-10 right-0 w-[1000px] h-[50px] sm:h-[200px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-3xl" />

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 lg:px-16 2xl:px-0">
        <div
          ref={scrollRef}
          className={`py-20 lg:py-32 ${
            isVisible
              ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Launch Wallet Operations
                <br />
                in Days, Not Months
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                Hybrid custody architecture with MPC vaults for long-term storage
                and Hyper Wallets for speed and scale. One API, multi-chain,
                production-ready.
              </p>

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
                    Start Building
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6 sm:px-8 py-6 text-sm sm:text-base font-semibold border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-all"
                  asChild
                >
                  <Link href="https://docs.fystack.io" target="_blank" rel="noopener noreferrer">API Documentation</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Visualization */}
            <div className="hidden lg:block relative">
              {/* Central Hub */}
              <div className="relative w-full aspect-square max-w-[480px] mx-auto">
                {/* Outer ring */}
                <div className="absolute inset-8 rounded-full border border-dashed border-blue-200/60 animate-[spin_60s_linear_infinite]" />
                {/* Middle ring */}
                <div className="absolute inset-20 rounded-full border border-blue-200/40" />

                {/* Center card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-200 flex flex-col items-center justify-center gap-2 z-10">
                  <Image
                    src="/svg/wallet_as_service/fystack-mini.svg"
                    alt="Fystack"
                    width={36}
                    height={36}
                  />
                  <span className="text-sm font-bold text-slate-900">
                    Fystack
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    Wallet Engine
                  </span>
                </div>

                {/* Floating chain icons on the orbit */}
                {/* ETH - top */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform">
                  <Image
                    src="/logo/crypto/eth.png"
                    alt="ETH"
                    width={28}
                    height={28}
                  />
                </div>

                {/* SOL - right */}
                <div className="absolute top-1/2 right-2 -translate-y-1/2 w-14 h-14 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform">
                  <Image
                    src="/logo/crypto/sol.png"
                    alt="SOL"
                    width={28}
                    height={28}
                  />
                </div>

                {/* USDC - bottom */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform">
                  <Image
                    src="/logo/crypto/usdc.png"
                    alt="USDC"
                    width={28}
                    height={28}
                  />
                </div>

                {/* USDT - left */}
                <div className="absolute top-1/2 left-2 -translate-y-1/2 w-14 h-14 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform">
                  <Image
                    src="/logo/crypto/usdt.png"
                    alt="USDT"
                    width={28}
                    height={28}
                  />
                </div>

                {/* Connector lines (SVG) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 480 480"
                >
                  {/* Top to center */}
                  <line
                    x1="240" y1="72" x2="240" y2="170"
                    stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3"
                  />
                  {/* Right to center */}
                  <line
                    x1="408" y1="240" x2="310" y2="240"
                    stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3"
                  />
                  {/* Bottom to center */}
                  <line
                    x1="240" y1="408" x2="240" y2="310"
                    stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3"
                  />
                  {/* Left to center */}
                  <line
                    x1="72" y1="240" x2="170" y2="240"
                    stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3"
                  />
                </svg>

                {/* Floating action cards */}
                {/* Top right - Send */}
                <div className="absolute top-12 right-4 bg-white rounded-lg shadow-lg shadow-slate-200/50 border border-slate-200 px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-900">
                      Send
                    </p>
                    <p className="text-[9px] text-slate-500">5,000 USDC</p>
                  </div>
                </div>

                {/* Bottom left - Receive */}
                <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-lg shadow-slate-200/50 border border-slate-200 px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <ArrowDownLeft className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-900">
                      Receive
                    </p>
                    <p className="text-[9px] text-slate-500">1.2 ETH</p>
                  </div>
                </div>

                {/* Top left - Sweep */}
                <div className="absolute top-16 left-0 bg-white rounded-lg shadow-lg shadow-slate-200/50 border border-slate-200 px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
                    <RefreshCw className="w-3 h-3 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-900">
                      Auto Sweep
                    </p>
                    <p className="text-[9px] text-slate-500">→ Treasury</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
