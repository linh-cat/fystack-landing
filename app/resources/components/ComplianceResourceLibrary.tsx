"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Globe, Shield, FileText, ArrowRight, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/app/new-homepage/hooks/useScrollReveal";

const FEATURES = [
  {
    icon: BookOpen,
    title: "Expert insights",
    description: "Actionable guidance from industry and regulatory experts",
  },
  {
    icon: Globe,
    title: "Region-specific",
    description: "Tailored coverage of local regulations and requirements",
  },
  {
    icon: Shield,
    title: "Business-ready",
    description: "Frameworks and checklists you can implement today",
  },
];

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
    // pages: "45 Pages",
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
    // pages: "42 Pages",
    region: "Asia Pacific",
  },
];

export function ComplianceResourceLibrary() {
  const heroRef = useScrollReveal(0.1);
  const cardsRef = useScrollReveal(0.1);

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">

        {/* ── Hero ── */}
        <div
          ref={heroRef.ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 ${
            heroRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#3b82f6]" />
              <span className="text-xs font-semibold text-[#3b82f6] uppercase tracking-wide">
                Free Resources
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
              Compliance Resource Library
            </h2>

            <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-10">
              Practical compliance and custody guidance for digital asset businesses operating across emerging markets.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title}>
                  <div className="w-9 h-9 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center mb-3">
                    <Icon className="w-4.5 h-4.5 text-[#3b82f6]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — books on platform */}
          <div className="relative flex justify-center items-end py-6">
            <div className="relative z-10 flex items-end justify-center gap-4">
              <Image
                src="/images/sea-guide.png"
                alt="SEA Compliance Guide"
                width={190}
                height={250}
                className="object-contain drop-shadow-2xl"
              />
              <Image
                src="/images/apac-guide.png"
                alt="APAC Compliance Guide"
                width={190}
                height={250}
                className="object-contain drop-shadow-2xl -translate-y-3"
              />
            </div>
            {/* Platform */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-white rounded-[50%] shadow-[0_16px_48px_rgba(0,0,0,0.10)]" />
          </div>
        </div>

        {/* ── Card list ── */}
        <div
          ref={cardsRef.ref}
          className={`space-y-4 ${
            cardsRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_0.1s_forwards]" : "opacity-0"
          }`}
        >
          {CARDS.map((card) => (
            <Link
              key={card.slug}
              href={`/resources/${card.slug}`}
              className="group flex items-center gap-0 bg-white border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Cover */}
              <div className="w-[160px] flex-shrink-0 flex items-center justify-center bg-slate-50 self-stretch px-4 py-6">
                <Image
                  src={card.coverImage}
                  alt={card.title}
                  width={120}
                  height={160}
                  className="object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>

              {/* Divider */}
              <div className="w-px self-stretch bg-slate-100" />

              {/* Title + description */}
              <div className="flex-1 px-8 py-6 min-w-0">
                <p className="text-xs font-semibold tracking-widest text-[#3b82f6] uppercase mb-2">
                  {card.badge}
                </p>
                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Divider */}
              <div className="w-px self-stretch bg-slate-100" />

              {/* Topics */}
              <div className="w-[280px] flex-shrink-0 px-8 py-6">
                <p className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3">
                  What you&apos;ll learn
                </p>
                <ul className="space-y-2">
                  {card.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="w-px self-stretch bg-slate-100" />

              {/* Meta + arrow */}
              <div className="w-[180px] flex-shrink-0 px-8 py-6 flex flex-col justify-between h-full gap-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <FileText className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    PDF Guide
                  </div>
                  {/* <div className="flex items-center gap-2 text-xs text-slate-600">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    {card.pages}
                  </div> */}
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Globe className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    {card.region}
                  </div>
                </div>
                <div className="flex justify-end">
                  <span className="w-9 h-9 rounded-full border-2 border-[#3b82f6] flex items-center justify-center text-[#3b82f6] transition-colors duration-200 group-hover:bg-[#3b82f6] group-hover:text-white">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Footer link ── */}
        <div className="mt-10 text-center text-sm text-slate-500">
          Looking for more resources?{" "}
          <Link
            href="/resources"
            className="text-[#3b82f6] font-semibold inline-flex items-center gap-1 hover:underline"
          >
            View all resources <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
