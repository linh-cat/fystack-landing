"use client";

import { Check, X } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type CellValue = "check" | "cross" | "limited" | string;

interface ComparisonRow {
  feature: string;
  description?: string;
  fystack: CellValue;
  others: CellValue;
}

interface ComparisonCategory {
  title: string;
  rows: ComparisonRow[];
}

const comparison: ComparisonCategory[] = [
  {
    title: "Deployment & Control",
    rows: [
      {
        feature: "Self-Hosted",
        description: "Deploy on your own infrastructure for maximum control",
        fystack: "check",
        others: "cross",
      },
      {
        feature: "Cloud-Native (Docker / K8s)",
        description: "Modern containerized architecture for easy scaling",
        fystack: "check",
        others: "limited",
      },
      {
        feature: "Deploy in Private Network",
        description: "Run entirely within your secure network perimeter",
        fystack: "check",
        others: "cross",
      },
    ],
  },
  {
    title: "Data & Residency",
    rows: [
      {
        feature: "Own Your Keys",
        description: "Keys live in your cloud, not the vendor's",
        fystack: "check",
        others: "limited",
      },
      {
        feature: "Data Stays in Your Region",
        description: "Jurisdiction-safe deployment for compliance needs",
        fystack: "check",
        others: "limited",
      },
      {
        feature: "No Vendor Custody",
        description: "You hold the keys — vendor can't freeze funds",
        fystack: "check",
        others: "cross",
      },
    ],
  },
  {
    title: "Pricing & Flexibility",
    rows: [
      {
        feature: "Flat Pricing",
        description: "No volume-based fees on every transaction",
        fystack: "Flat monthly fee",
        others: "Cap outbound volume + overage rate",
      },
      {
        feature: "Vendor Lock-In Free",
        description: "Export your data and switch anytime",
        fystack: "check",
        others: "cross",
      },
      {
        feature: "Whitelabel",
        description: "Fully customizable to match your brand",
        fystack: "check",
        others: "limited",
      },
      {
        feature: "Auto Sweep",
        description: "Automated deposit collection to treasury wallets",
        fystack: "check",
        others: "limited",
      },
    ],
  },
  {
    title: "Developer Experience",
    rows: [
      {
        feature: "Simple REST API",
        fystack: "check",
        others: "Complex APIs",
      },
      {
        feature: "Clear Documentation",
        fystack: "check",
        others: "Fragmented docs",
      },
      {
        feature: "Responsive Support",
        fystack: "check",
        others: "Slow support cycles",
      },
    ],
  },
];

function Cell({ value }: { value: CellValue }) {
  if (value === "check") {
    return (
      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50">
        <Check className="w-4 h-4 text-emerald-600" strokeWidth={3} />
      </div>
    );
  }
  if (value === "cross") {
    return (
      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-50">
        <X className="w-4 h-4 text-rose-500" strokeWidth={3} />
      </div>
    );
  }
  if (value === "limited") {
    return <span className="text-slate-400 text-sm font-medium">Limited</span>;
  }
  return <span className="text-slate-500 text-sm">{value}</span>;
}

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
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
              {/* Table Header */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr] bg-slate-50/60 border-b border-slate-200">
                <div className="px-4 md:px-6 lg:px-8 py-4" />
                <div className="px-4 md:px-6 lg:px-8 py-4 flex items-center justify-center text-center">
                  <span className="text-sm font-semibold text-[#3b82f6]">Fystack</span>
                </div>
                <div className="px-4 md:px-6 lg:px-8 py-4 flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-semibold text-slate-700">SaaS vendors</span>
                  <span className="text-xs font-normal text-slate-400 mt-0.5">
                    Fireblocks, Cobo, Utila, Liminal
                  </span>
                </div>
              </div>

              {/* Category rows */}
              {comparison.map((category) => (
                <div key={category.title}>
                  {/* Category label */}
                  <div className="bg-slate-50/30 px-4 md:px-6 lg:px-8 py-3 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                      {category.title}
                    </span>
                  </div>

                  {/* Feature rows */}
                  {category.rows.map((row) => (
                    <div
                      key={row.feature}
                      className="grid grid-cols-[1.5fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr] border-b border-slate-100 last:border-b-0 hover:bg-slate-50/40 transition-colors"
                    >
                      <div className="px-4 md:px-6 lg:px-8 py-4">
                        <p className="text-slate-800 font-medium text-sm md:text-base">
                          {row.feature}
                        </p>
                        {row.description && (
                          <p className="text-slate-500 text-xs md:text-sm mt-1 leading-relaxed">
                            {row.description}
                          </p>
                        )}
                      </div>
                      <div className="px-4 md:px-6 lg:px-8 py-4 flex items-center justify-center">
                        <Cell value={row.fystack} />
                      </div>
                      <div className="px-4 md:px-6 lg:px-8 py-4 flex items-center justify-center text-center">
                        <Cell value={row.others} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
