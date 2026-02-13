"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function TechAgnosticSection() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
        <div
          ref={scrollRef}
          className={`relative w-full ${
            isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          {/* Corner squares */}
          <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />

          <div className="flex">
            {/* Left striped column */}
            <div
              className="hidden lg:block w-16 flex-shrink-0 border border-r-0 border-slate-200"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 8px,
                  #f1f5f9 8px,
                  #f1f5f9 9px
                )`,
              }}
            />

            {/* Main content */}
            <div className="flex-1 border border-slate-200">
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                {/* Left - Content */}
                <div className="p-8 sm:p-10 lg:p-14">
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 mb-5">
                    <div className="w-5 h-5 rounded bg-[#3b82f6] flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">A</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                      NO VENDOR LOCK IN
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-slate-900 mb-4 leading-tight">
                    Technology Agnostic
                  </h3>

                  {/* Description */}
                  <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-md">
                    No Vendor Lock-In. Swap security models without
                    re-architecting with Fystack
                  </p>

                  {/* CTA */}
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-base font-medium border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-all"
                    asChild
                  >
                    <Link href="https://docs.fystack.io" target="_blank" rel="noopener noreferrer">
                      Learn more
                    </Link>
                  </Button>
                </div>

                {/* Right - Visual */}
                <div className="relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
                  

                  {/* Floating rounded squares */}
                  <div className="absolute top-8 left-8 w-16 h-16 rounded-xl bg-white border border-slate-200 shadow-sm" />
                  <div className="absolute top-8 right-16 w-16 h-16 rounded-xl bg-white border border-slate-200 shadow-sm" />
                  <div className="absolute bottom-8 left-8 w-16 h-16 rounded-xl bg-white border border-slate-200 shadow-sm" />
                  <div className="absolute bottom-8 right-16 w-16 h-16 rounded-xl bg-white border border-slate-200 shadow-sm" />

                  {/* Center dark bar with tech-agnostic image */}
                  <div className="absolute inset-0 flex items-center justify-center px-8">
                    <Image
                      src="/svg/wallet_as_service/tech-agnostic.svg"
                      alt="MPC · HSM · Hardware Wallets"
                      width={562}
                      height={93}
                      className="w-full max-w-md h-auto relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right striped column */}
            <div
              className="hidden lg:block w-16 flex-shrink-0 border border-l-0 border-slate-200"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 8px,
                  #E9EAEB 8px,
                  #E9EAEB 9px
                )`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
