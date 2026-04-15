"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw,
  Bell,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Hero() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.1);
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const words = ["Stablecoin", "Digital Asset"];

  useEffect(() => {
    let currentIndex = 0;
    const currentWord = words[wordIndex];

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setTypedText(currentWord.slice(0, currentIndex));
        setIsTypingDone(false);
        currentIndex++;
      } else {
        setIsTypingDone(true);
        clearInterval(typingInterval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordIndex]);

  return (
    <section className="overflow-hidden py-4 lg:py-10">
      <div className="max-w-[1440px] flex items-center justify-center px-4 lg:px-16 2xl:px-0 mx-auto">
      {/* Wrapper for corner squares outside the box */}
      <div ref={scrollRef} className={`relative w-full  ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Corner squares - outside the box */}
        <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
        <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
        <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
        <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />

        <div className="relative w-full h-full border border-slate-100 lg:min-h-[630px] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 h-full lg:min-h-[630px]">
            {/* Left Content - with gradient background */}
            <div className="bg-gradient-to-t from-white to-[#3b82f6]/10 px-5 sm:px-8 lg:px-16 flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 py-8 sm:py-10 lg:py-12 relative order-1">
              <div className="absolute top-10 left-10 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gradient-to-t from-white to-[#3b82f6]/80 blur-3xl -z-10" />
              <div className="absolute top-10 right-10 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gradient-to-t from-white to-[#3b82f6]/80 blur-3xl -z-10" />
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/changelog"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 hover:from-[#3b82f6]/15 hover:to-[#8b5cf6]/15 transition-colors border border-[#3b82f6]/20"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-[#3b82f6] opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3b82f6]" />
                  </span>
                  <span className="text-xs sm:text-sm bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
                    v0.1.12 is here
                  </span>
                  <span className="text-[#8b5cf6] text-xs transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight">
                <div className="flex flex-col gap-1 leading-[1.1]">
                  <span className="text-slate-800">
                    Self-Hosted
                  </span>

                  <span className="text-[#3b82f6]">
                    {"{"}
                    {typedText}
                    {"}"}
                    {!isTypingDone && <span className="animate-pulse">_</span>}
                  </span>

                  <span className="text-slate-800">
                    Wallet Infrastructure
                  </span>
                </div>
              </h1>


              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 max-w-xl leading-relaxed">
                Multi-chain infrastructure for fintechs, payment platforms, and
                crypto businesses to automate digital asset operations securely.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
                <Button
                  size="lg"
                  className="rounded-full px-5 sm:px-7 py-5 sm:py-6 text-xs sm:text-sm font-semibold bg-[#3b82f6] hover:bg-[#3b82f6]/90 transition-all"
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
                  className="rounded-full px-5 sm:px-7 py-5 sm:py-6 text-xs sm:text-sm font-semibold border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-all"
                  asChild
                >
                  <Link href="https://selfhost.fystack.io/" target="_blank" rel="noopener noreferrer">Deploy Self-Hosted</Link>
                </Button>
              </div>

              <style jsx>{`
                @keyframes demo-flash {
                  0%, 100% {
                    box-shadow: 0 0 14px rgba(59, 130, 246, 0.7), 0 0 0 0 rgba(59, 130, 246, 0.5);
                    filter: brightness(1);
                  }
                  50% {
                    box-shadow: 0 0 22px rgba(139, 92, 246, 0.9), 0 0 0 4px rgba(139, 92, 246, 0.15);
                    filter: brightness(1.2);
                  }
                }
              `}</style>
            </div>

            {/* Right Content - Grid border pattern */}
            <div className="relative flex items-center justify-center bg-white order-1 lg:order-2 min-h-[280px] sm:min-h-[350px] lg:min-h-0">
              {/* Grid pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #eff5fa 1px, transparent 1px),
                    linear-gradient(to bottom, #eff5fa 1px, transparent 1px)
                  `,
                  backgroundSize: '60px 60px'
                }}
              />

              {/* Labels around the image */}
              <div className="hidden lg:block absolute top-8 left-8 text-sm text-slate-500 z-10 font-geist-mono">
                {"{Save Time}"}
              </div>
              <div className="hidden lg:block absolute top-8 right-8 text-sm text-slate-500 z-10 font-geist-mono">
                {"{Developer first}"}
              </div>
              <div className="hidden lg:block absolute bottom-8 left-8 text-sm text-slate-500 z-10" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                {"{Prevent Key Breaches}"}
              </div>
              <div className="hidden lg:block absolute bottom-8 right-8 text-sm text-slate-500 z-10" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                {"{Save Cost}"}
              </div>
              {/* Orbital Wallet Engine Visualization */}
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
                  <Image src="/logo/crypto/eth.png" alt="ETH" width={28} height={28} />
                </div>

                {/* BTC - right */}
                <div className="absolute top-1/2 right-2 -translate-y-1/2 w-14 h-14 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform">
                  <Image src="/logo/Bitcoin.png" alt="BTC" width={28} height={28} />
                </div>

                {/* USDC - bottom */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform">
                  <Image src="/logo/crypto/usdc.png" alt="USDC" width={28} height={28} />
                </div>

                {/* USDT - left */}
                <div className="absolute top-1/2 left-2 -translate-y-1/2 w-14 h-14 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform">
                  <Image src="/logo/crypto/usdt.png" alt="USDT" width={28} height={28} />
                </div>

                {/* Connector lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 480">
                  <line x1="240" y1="72" x2="240" y2="170" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                  <line x1="408" y1="240" x2="310" y2="240" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                  <line x1="240" y1="408" x2="240" y2="310" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                  <line x1="72" y1="240" x2="170" y2="240" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
                </svg>

                {/* Floating action cards */}
                {/* Top right - Receive */}
                <div className="absolute top-12 right-4 bg-white rounded-lg shadow-lg shadow-slate-200/50 border border-slate-200 px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <ArrowDownLeft className="w-3 h-3 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-900">Receive</p>
                    <p className="text-[9px] text-slate-500">1.2 ETH</p>
                  </div>
                </div>

                {/* Bottom left - Send */}
                <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-lg shadow-slate-200/50 border border-slate-200 px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-900">Send</p>
                    <p className="text-[9px] text-slate-500">5,000 USDC</p>
                  </div>
                </div>

                {/* Bottom right - Webhook */}
                <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg shadow-slate-200/50 border border-slate-200 px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                    <Bell className="w-3 h-3 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-900">Webhook</p>
                    <p className="text-[9px] text-slate-500">tx confirmed</p>
                  </div>
                </div>

                {/* Top left - Sweep */}
                <div className="absolute top-16 left-0 bg-white rounded-lg shadow-lg shadow-slate-200/50 border border-slate-200 px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
                    <RefreshCw className="w-3 h-3 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-900">Auto Sweep</p>
                    <p className="text-[9px] text-slate-500">→ Treasury</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-black border-slate-800">
          <DialogTitle className="sr-only">Fystack Product Demo</DialogTitle>
          <div className="relative aspect-video w-full">
            {isDemoOpen && (
              <video
                className="absolute inset-0 h-full w-full"
                src="/videos/fystack-demo.webm"
                autoPlay
                controls
                playsInline
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
