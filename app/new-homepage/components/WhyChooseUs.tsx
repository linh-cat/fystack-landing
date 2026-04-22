"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { WhyChooseUsTable } from "./WhyChooseUsTable";

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] 2xl:max-w-[1728px] px-4 lg:px-16 2xl:px-16 mx-auto ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
      >
        {/* Wrapper with corner squares */}
        <div className="relative">
          <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />

          <div className="border border-slate-200">
            {/* Top Section - Two columns (header) */}
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                  Ship your product,
                  <br />
                  not wallet infrastructure
                </h2>
              </div>

              <div className="p-6 md:p-8 lg:p-12">
                <p className="text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide">
                  /SHIP FASTER, CUT COSTS/
                </p>
                <p className="text-slate-600 text-lg lg:text-xl leading-relaxed">
                  Focus on your product while we handle the infrastructure.
                  <br className="hidden sm:block" />
                  While others take weeks to months, we get you live in days.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="border-t border-slate-200">
              <WhyChooseUsTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
