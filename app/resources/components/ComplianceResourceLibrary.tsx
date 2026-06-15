"use client";

import Image from "next/image";
import { Globe, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/app/new-homepage/hooks/useScrollReveal";

const CARDS = [
  {
    slug: "sea-compliance-guide",
    badge: "SEA EDITION",
    title: "Crypto Custody and Compliance Guide — SEA",
    description:
      "Comprehensive overview of custody regulations, infrastructure requirements, and operational best practices across Southeast Asia.",
    coverImage: "/images/sea-guide.png",
    topics: [
      "Country-by-country regulatory overview",
      "Licensing requirements",
      "Custody infrastructure standards",
      "Risk management framework",
    ],
    region: "Southeast Asia",
  },
  {
    slug: "apac-compliance-guide",
    badge: "APAC EDITION",
    title: "Crypto Custody and Compliance Guide — APAC",
    description:
      "Understand the regulatory landscape and operational expectations for institutional custody providers throughout APAC markets.",
    coverImage: "/images/apac-guide.png",
    topics: [
      "APAC regulatory landscape",
      "Institutional custody requirements",
      "Operational resilience",
      "Cross-border compliance",
    ],
    region: "Asia Pacific",
  },
];

export function ComplianceResourceLibrary() {
  const cardsRef = useScrollReveal(0.1);

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Compliance Resource Library
          </h2>
          <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Practical compliance and custody guidance for digital asset businesses operating across emerging markets.
          </p>
        </div>

        <div
          ref={cardsRef.ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            cardsRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          {CARDS.map((card) => (
            <div
              key={card.slug}
              className="group flex bg-white border border-slate-200 overflow-hidden"
            >
              {/* Image column */}
              <div className="w-[340px] flex-shrink-0 bg-slate-50 flex items-center justify-center p-5 self-stretch">
                <Image
                  src={card.coverImage}
                  alt={card.title}
                  width={310}
                  height={400}
                  className="object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>

              {/* Divider */}
              <div className="w-px self-stretch bg-slate-100" />

              {/* Content column */}
              <div className="flex-1 p-6 flex flex-col min-w-0">
                <p className="text-xs font-semibold tracking-widest text-[#3b82f6] uppercase mb-2">
                  {card.badge}
                </p>
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {card.description}
                </p>
                <ul className="space-y-1.5 mb-auto">
                  {card.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Globe className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    {card.region}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
