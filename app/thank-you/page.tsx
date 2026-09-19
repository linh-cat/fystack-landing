"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { usePostHog } from "@posthog/react";
import { CheckCircle, ArrowLeft, ExternalLink, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { CTAFooter } from "@/app/new-homepage/components/CTAFooter";
import { GUIDES } from "@/configs/constant";

const GUIDE_MAP = Object.fromEntries(GUIDES.map((g) => [g.value, g]));

function ThankYouContent() {
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const rawGuides = searchParams.get("guides") ?? "";
  const selectedGuides = rawGuides
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((key) => GUIDE_MAP[key])
    .filter(Boolean);

  useEffect(() => {
    posthog?.capture("lead_converted", {
      guides: selectedGuides.map((g) => g.value),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posthog]);

  return (
    <section className="py-24 lg:py-36">
      <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#3b82f6]" />
              </div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              We&apos;ve received your request
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed">
              Your selected guide{selectedGuides.length !== 1 ? "s are" : " is"} ready below.
              Click to open each one.
            </p>
          </div>

          {/* Guide cards */}
          {selectedGuides.length > 0 ? (
            <div className="space-y-4 mb-12">
              {selectedGuides.map((guide) => (
                <div
                  key={guide.value}
                  className="relative border border-slate-200 bg-white p-6 flex items-center justify-between gap-6"
                >
                  <div className="absolute -top-[2px] -left-[2px] w-2 h-2 bg-[#3b82f6]" />
                  <div className="absolute -top-[2px] -right-[2px] w-2 h-2 bg-[#3b82f6]" />
                  <div className="absolute -bottom-[2px] -left-[2px] w-2 h-2 bg-[#3b82f6]" />
                  <div className="absolute -bottom-[2px] -right-[2px] w-2 h-2 bg-[#3b82f6]" />

                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                      Compliance Guide
                    </p>
                    <p className="text-base font-semibold text-slate-800">
                      {guide.label}
                    </p>
                  </div>

                  {guide.pdfLink ? (
                    <a
                      href={guide.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white text-sm font-medium rounded-md transition-colors flex-shrink-0"
                    >
                      Open Guide
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-500 text-sm font-medium rounded-md flex-shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      Coming soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-slate-200 bg-slate-50/60 rounded-lg p-8 text-center mb-12">
              <p className="text-slate-500">
                No guides found. If this is unexpected, reach us at{" "}
                <a href="mailto:ops@fystack.io" className="text-[#3b82f6] hover:underline">
                  ops@fystack.io
                </a>
                .
              </p>
            </div>
          )}

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#3b82f6] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Suspense fallback={null}>
        <ThankYouContent />
      </Suspense>
      <CTAFooter />
    </div>
  );
}
