"use client";

import Link from "next/link";
import { CheckCircle, BookOpen } from "lucide-react";

const CARDS = [
  {
    slug: "sea-compliance-guide",
    badge: "SEA Edition",
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
  },
  {
    slug: "apac-compliance-guide",
    badge: "APAC Edition",
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
  },
];

export function ComplianceResourceLibrary() {
  return (
    <section
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-[1280px] px-4 lg:px-8 mx-auto">
        {/* Header */}
        <div className="max-w-[720px] mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF4FF] border border-[#2563EB]/20 mb-5">
            <BookOpen className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wide">
              Free Resources
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
            Compliance Resource Library
          </h2>
          <p className="text-base text-[#64748B] leading-7">
            Expert compliance and custody guides for digital asset businesses operating across emerging markets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CARDS.map((card) => (
            <Link
              key={card.slug}
              href={`/resources/${card.slug}`}
              className="group block bg-white border border-[#E5E7EB] rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "0 12px 32px rgba(15,23,42,.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 24px 48px rgba(15,23,42,.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 32px rgba(15,23,42,.06)";
              }}
            >
              {/* Book cover */}
              <div className="flex justify-center mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.coverImage}
                  alt={card.title}
                  className="w-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Edition badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1.5 rounded-full bg-[#EEF4FF] text-[#2563EB] text-xs font-semibold transition-colors duration-200 group-hover:bg-[#DBEAFE]">
                  {card.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-3 leading-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-base text-[#64748B] leading-7 mb-6">
                {card.description}
              </p>

              {/* What You'll Learn */}
              <div>
                <p className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-3">
                  What You&apos;ll Learn
                </p>
                <ul className="space-y-2">
                  {card.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#475569]">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
