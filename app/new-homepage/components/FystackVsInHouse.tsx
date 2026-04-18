"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export function FystackVsInHouse() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
      >
        {/* Section header */}
        <div className="mb-8 lg:mb-12 text-center">
          <p className="text-[#3b82f6] text-sm font-semibold mb-3 tracking-wide">
            /FYSTACK VS BUILDING IN-HOUSE/
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
            Save engineering years and ship in days
          </h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            Building a production-ready wallet stack in-house is expensive and slow.
            Fystack gives you the same infrastructure — without the team, the audits, or the wait.
          </p>
        </div>

        {/* Wrapper with corner squares */}
        <div className="relative">
          <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />

          <div className="border border-slate-200 grid md:grid-cols-2 gap-0">
            <div className="p-6 md:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-slate-200 bg-gradient-to-br from-blue-50/60 to-transparent">
              <h4 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-1">
                $100,000/year
              </h4>
              <p className="text-slate-700 font-medium text-sm mb-2">
                Saved vs building in-house
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Skip the 3–4 engineer team, ongoing maintenance, on-call, and security audits.
              </p>
            </div>
            <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-emerald-50/60 to-transparent">
              <h4 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-1">
                3–6 months
              </h4>
              <p className="text-slate-700 font-medium text-sm mb-2">
                Faster time to market
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Go live faster with production-ready infrastructure and SDKs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
