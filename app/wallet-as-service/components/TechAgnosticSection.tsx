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
                <div className="relative min-h-[300px] lg:min-h-[400px] overflow-hidden flex items-center justify-center p-8">
                  {/* Subtle grid bg */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  <div className="relative w-full max-w-sm">
                    {/* Center Fystack hub */}
                    <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center shadow-sm mb-6">
                      <Image
                        src="/svg/wallet_as_service/fystack-mini.svg"
                        alt="Fystack"
                        width={32}
                        height={32}
                      />
                    </div>

                    {/* Connector lines from center */}
                    <svg className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[320px] h-[200px] pointer-events-none" viewBox="0 0 320 200">
                      {/* Left line */}
                      <line x1="160" y1="10" x2="50" y2="80" stroke="#c7dcf4" strokeWidth="1.5" strokeDasharray="4 3"/>
                      {/* Center line */}
                      <line x1="160" y1="10" x2="160" y2="80" stroke="#c7dcf4" strokeWidth="1.5" strokeDasharray="4 3"/>
                      {/* Right line */}
                      <line x1="160" y1="10" x2="270" y2="80" stroke="#c7dcf4" strokeWidth="1.5" strokeDasharray="4 3"/>
                    </svg>

                    {/* Three tech cards */}
                    <div className="grid grid-cols-3 gap-3 relative z-10">
                      {/* MPC */}
                      <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                        <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="6" cy="10" r="3" stroke="#3b82f6" strokeWidth="1.5" fill="#eff6ff"/>
                            <circle cx="14" cy="10" r="3" stroke="#3b82f6" strokeWidth="1.5" fill="#eff6ff"/>
                            <circle cx="10" cy="5" r="3" stroke="#3b82f6" strokeWidth="1.5" fill="#eff6ff"/>
                            <line x1="7.5" y1="7.5" x2="9" y2="6.5" stroke="#3b82f6" strokeWidth="0.8"/>
                            <line x1="12.5" y1="7.5" x2="11" y2="6.5" stroke="#3b82f6" strokeWidth="0.8"/>
                            <line x1="9" y1="10" x2="11" y2="10" stroke="#3b82f6" strokeWidth="0.8"/>
                          </svg>
                        </div>
                        <p className="text-xs font-bold text-slate-900">MPC</p>
                        <p className="text-[9px] text-slate-500 mt-0.5">Multi-Party</p>
                      </div>

                      {/* HSM */}
                      <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                        <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="3" y="5" width="14" height="10" rx="2" stroke="#7c3aed" strokeWidth="1.5" fill="#f5f3ff"/>
                            <rect x="7" y="8" width="6" height="4" rx="1" stroke="#7c3aed" strokeWidth="1"/>
                            <circle cx="10" cy="10" r="1" fill="#7c3aed"/>
                          </svg>
                        </div>
                        <p className="text-xs font-bold text-slate-900">HSM</p>
                        <p className="text-[9px] text-slate-500 mt-0.5">Hardware</p>
                      </div>

                      {/* Hardware Wallets */}
                      <div className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                        <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="6" y="3" width="8" height="14" rx="2" stroke="#059669" strokeWidth="1.5" fill="#ecfdf5"/>
                            <rect x="8" y="6" width="4" height="5" rx="0.5" stroke="#059669" strokeWidth="0.8"/>
                            <circle cx="10" cy="14" r="1" fill="#059669"/>
                          </svg>
                        </div>
                        <p className="text-xs font-bold text-slate-900">HW</p>
                        <p className="text-[9px] text-slate-500 mt-0.5">Cold Storage</p>
                      </div>
                    </div>

                    {/* Swap indicator */}
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <div className="h-px w-8 bg-slate-200" />
                      <span className="text-[10px] font-medium text-slate-400 bg-white px-2">Swap anytime</span>
                      <div className="h-px w-8 bg-slate-200" />
                    </div>
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
