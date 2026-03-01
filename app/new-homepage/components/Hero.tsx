"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Hero() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.1);
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
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
                  href="https://docs.fystack.io/changelog/v0.1.8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 hover:from-[#3b82f6]/15 hover:to-[#8b5cf6]/15 transition-colors border border-[#3b82f6]/20"
                >
                  <span className="text-xs sm:text-sm bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
                    v0.1.8 is here
                  </span>
                  <span className="text-[#8b5cf6] text-xs">→</span>
                </Link>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight">
                <div className="flex flex-col gap-1 leading-[1.1]">
                  <span className="text-slate-800">
                    Enterprise-grade
                  </span>

                  <span className="text-[#3b82f6]">
                    {"{"}
                    {typedText}
                    {"}"}
                    {!isTypingDone && <span className="animate-pulse">_</span>}
                  </span>

                  <span className="text-slate-800">
                    Custody For Teams
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
              <div className="relative w-full mx-auto py-12 sm:py-16 lg:py-20 overflow-visible">
                {/* 3D perspective container */}
                <div className="relative">
                  <Image
                    src="/png/hero/hero.png"
                    alt="Digital asset custody layer"
                    width={350}
                    height={350}
                    className="absolute -bottom-32 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out w-[280px] lg:w-[450px] h-auto"
                  />
                  {/* <Image
                    src="/svg/hero/wallet.svg"
                    alt="Digital asset custody layer"
                    width={350}
                    height={350}
                    className="absolute -bottom-32 left-1/2 -translate-x-1/2
                    translate-y-6
                    drop-shadow-2xl
                    transition-all duration-700 ease-out
                    w-[200px] sm:w-[280px] lg:w-[350px] h-auto"
                  />
                  <Image
                    src="/svg/hero/custody.svg"
                    alt="MPC & HSM infrastructure"
                    width={350}
                    height={350}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2
                    translate-y-20
                    drop-shadow-3xl
                    transition-all duration-700 ease-out
                    w-[200px] sm:w-[280px] lg:w-[350px] h-auto"
                  />
                  <Image
                    src="/svg/hero/application.svg"
                    alt="Applications layer"
                    width={350}
                    height={350}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2
                    drop-shadow-xl
                    transition-all duration-700 ease-out
                    w-[200px] sm:w-[280px] lg:w-[350px] h-auto"
                  /> */}
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
