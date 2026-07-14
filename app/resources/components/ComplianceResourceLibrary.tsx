"use client";

import Image from "next/image";
import { Globe, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/app/new-homepage/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect, useCallback } from "react";

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
  {
    slug: "middle-east-compliance-guide",
    badge: "MIDDLE EAST EDITION",
    title: "Crypto Custody and Compliance Guide — Middle East",
    description:
      "Navigate the regulatory requirements and custody infrastructure standards for digital asset businesses operating across Middle East markets.",
    coverImage: "/images/middle_east.png",
    topics: [
      "Middle East regulatory landscape",
      "Licensing and compliance requirements",
      "Custody infrastructure standards",
      "Cross-border and Sharia-compliant considerations",
    ],
    region: "Middle East",
  },
  {
    slug: "latam-compliance-guide",
    badge: "LATAM EDITION",
    title: "Crypto Custody and Compliance Guide — LATAM",
    description:
      "A practical guide to custody regulations, licensing pathways, and infrastructure requirements across Latin American markets.",
    coverImage: "/images/latam.png",
    topics: [
      "Country-by-country regulatory overview",
      "Licensing and registration requirements",
      "Custody and key management standards",
      "Stablecoin and cross-border compliance",
    ],
    region: "Latin America",
  },
];

export function ComplianceResourceLibrary() {
  const sectionRef = useScrollReveal(0.1);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-3">
              Compliance Resource Library
            </h2>
            <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-2xl">
              Practical compliance and custody guidance for digital asset businesses operating across emerging markets.
            </p>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={scrollPrev}
              disabled={current === 0}
              aria-label="Previous"
              className="w-10 h-10 border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#3b82f6] hover:text-[#3b82f6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={current === count - 1}
              aria-label="Next"
              className="w-10 h-10 border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#3b82f6] hover:text-[#3b82f6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={sectionRef.ref}
          className={sectionRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: false }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {CARDS.map((card) => (
                <CarouselItem
                  key={card.slug}
                  className="pl-6 basis-full lg:basis-1/2"
                >
                  <div className="group flex bg-white border border-slate-200 overflow-hidden h-full">
                    {/* Image column */}
                    <div className="w-[200px] sm:w-[260px] flex-shrink-0 bg-slate-50 flex items-center justify-center p-4 self-stretch overflow-hidden">
                      <Image
                        src={card.coverImage}
                        alt={card.title}
                        width={240}
                        height={320}
                        className="object-contain drop-shadow-lg transition-transform duration-500 ease-out group-hover:scale-125"
                      />
                    </div>

                    {/* Divider */}
                    <div className="w-px self-stretch bg-slate-100" />

                    {/* Content column */}
                    <div className="flex-1 p-5 flex flex-col min-w-0">
                      <p className="text-xs font-semibold tracking-widest text-[#3b82f6] uppercase mb-2">
                        {card.badge}
                      </p>
                      <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">
                        {card.description}
                      </p>
                      <ul className="space-y-1.5 mb-auto">
                        {card.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-600 leading-relaxed">
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                        <Globe className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        {card.region}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`transition-all rounded-full ${
                  i === current
                    ? "w-6 h-2 bg-[#3b82f6]"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
