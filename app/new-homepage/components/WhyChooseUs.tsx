"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();
  const fystackFeatures = [
    "Simple REST API",
    "Clear documentation",
    "Ready-to-use SDKs",
    "Responsive support",
  ];

  const othersFeatures = [
    "Complex APIs",
    "Fragmented docs",
    "Custom integration work",
    "Slow support cycles",
  ];

  return (
    <section className="py-16 lg:py-24 bg-white px-4">
      <div ref={ref} className={`container mx-auto max-w-[1440px] ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Wrapper with corner squares */}
        <div className="relative">
          {/* Corner squares - outside the box */}
          <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />

          <div className="border border-slate-200">
            {/* Top Section - Two columns */}
            <div className="grid lg:grid-cols-2">
              {/* Left - Main heading */}
              <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Focus on your product,
                  <br />
                  not 3rd integration
                </h2>
              </div>

              {/* Right - Subheading */}
              <div className="p-8 lg:p-12">
                <p className="text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide">
                  /SHIP FASTER & SAVE MONEY/
                </p>
                <p className="text-slate-600 text-lg lg:text-xl leading-relaxed">
                  Focus on your product while we handle the infrastructure.
                  <br className="hidden sm:block" />
                  While others take weeks to months, we get you live in days.
                </p>
              </div>
            </div>

            {/* Bottom Section - Three columns */}
            <div className="grid lg:grid-cols-3 border-t border-slate-200">
              {/* Fystack Column - Blue background */}
              <div className="bg-[#3b82f6] p-8 lg:p-10 text-white">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 mb-6">
                  <span className="text-sm font-medium">Fystack</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Why choose us?
                </h3>
                <p className="text-white/80 text-sm mb-8">( DAYS TO INTEGRATE )</p>

                {/* Features list */}
                <ul className="space-y-4">
                  {fystackFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Image src="/svg/why_choose/check.svg" alt="Check" width={12} height={12} className="w-4 h-4" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Others Column - White background */}
              <div className="bg-white p-8 lg:p-10 border-t lg:border-t-0 lg:border-l lg:border-r border-slate-200">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-gray-200 mb-6">
                  <span className="text-sm text-slate-700">Fireblocks, Cobo, Utila, Safeheron</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
                  Others
                </h3>
                <p className="text-slate-400 text-sm mb-8">( WEEKS TO MONTHS )</p>

                {/* Features list */}
                <ul className="space-y-4">
                  {othersFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="text-slate-700 flex-shrink-0 bg-gray-200 rounded-full p-2 flex items-center justify-center">
                        <Image src="/svg/why_choose/cancel.svg" alt="X" width={12} height={12} className="w-4 h-4" />
                      </div>
                      <span className="text-base text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fystack Info Column */}
              <div className="bg-slate-50/50 p-8 lg:p-10 border-t lg:border-t-0 flex flex-col justify-between">
                {/* Logo */}
                <Image
                  src="/svg/app-logo.svg"
                  alt="Fystack"
                  width={180}
                  height={180}
                // className="w-24 h-24"
                />

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  Skip months of development and costly maintenance. By leveraging our production-ready wallet infrastructure and SDKs, you can cut engineering costs by{" "}
                  <span className="text-[#3b82f6] font-semibold bg-[#3b82f6]/10 px-1.5 py-0.5 rounded">
                    $30K-50K
                  </span>{" "}
                  and accelerate your time to market by{" "}
                  <span className="text-[#3b82f6] font-semibold underline decoration-[#3b82f6] underline-offset-2">
                    3-6 months
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
