"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function UseCasesSection() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  const useCases = [
    {
      icon: <Image src="/svg/wallet_as_service/fystack-mini.svg" alt="Exchanges & OTC Desks" width={24} height={24} />,
      title: "Exchanges & OTC Desks",
      subtitle: "fystack.com/homepage",
      description:
        "Secure high-volume deposits, withdrawals, and real-time balances across a unified hot, warm, and cold wallet.",
      clicks: "15.6K clicks",
      status: "verified",
    },
    {
      icon: <Image src="/svg/wallet_as_service/fystack-mini.svg" alt="Payment & Stablecoin Apps" width={24} height={24} />,
      title: "Payment & Stablecoin Apps",
      subtitle: "fystack.com/partners",
      description:
        "Streamline collections, payouts, and stablecoin operations via treasury automation with customizable policy approvals.",
      clicks: "3.7K clicks",
      status: "verified",
    },
    {
      icon: <Image src="/svg/wallet_as_service/fystack-mini.svg" alt="Platform Layer" width={24} height={24} />,
      title: "Platform Layer",
      subtitle: "fystack.com/enterprise",
      description:
        "Secure high-volume deposits, withdrawals, and real-time balances across a unified hot, warm, and cold wallet.",
      clicks: "0 clicks",
      status: "pending",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 2xl:px-0">
        <div
          ref={scrollRef}
          className={`${
            isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          {/* Top Section - Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              <span className="text-xs font-semibold text-slate-600 tracking-wider uppercase">
                KEY BENEFITS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              One platform - Various Use Cases
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl leading-relaxed mb-4">
              Fystack provides a unified custody and wallet infrastructure that
              adapts to multiple use cases - from exchanges and OTC desks to
              stablecoin payment apps and enterprise platforms. Deploy once,
              configure by policy, and scale across products and markets.
            </p>
            <Link
              href="/wallet-as-service"
              className="text-sm sm:text-base text-slate-600 hover:text-slate-900 border border-slate-200 rounded-full px-4 py-2 inline-flex items-center gap-2"
            >
              Talk to an Architect
            </Link>
          </div>

          {/* Center Section - Use Cases with Dashboard Preview */}
          <div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-12 border border-slate-200">
              {/* Dashboard Preview */}
              <div className="bg-white rounded-lg sm:rounded-xl border border-slate-200 p-3 sm:p-4 lg:p-6 mb-6 sm:mb-8 shadow-sm">
                <div className="space-y-3 sm:space-y-4">
                  {useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-slate-50 transition-colors border border-slate-100"
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 mt-0.5">
                        {useCase.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                          <div className="min-w-0">
                            <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-0.5 truncate">
                              {useCase.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-500 truncate">
                              → {useCase.subtitle}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            <span className="text-[10px] sm:text-xs text-slate-600">
                              {useCase.clicks}
                            </span>
                            {useCase.status === "verified" ? (
                              <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-50 border border-green-200">
                                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600" />
                                <span className="text-[10px] sm:text-xs font-medium text-green-700">
                                  Verified
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-orange-50 border border-orange-200">
                                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-600" />
                                <span className="text-[10px] sm:text-xs font-medium text-orange-700">
                                  Pending
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* DNS Configuration Info */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200">
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                    To use{" "}
                    <span className="font-mono font-semibold">
                      try.fystack.com
                    </span>{" "}
                    for your short link domain, ensure the records below are
                    configured.
                  </p>
                  <div className="flex gap-2">
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-900 bg-white border-b-2 border-slate-900">
                      A Record
                    </button>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900">
                      CNAME Record
                    </button>
                  </div>
                </div>
              </div>

              {/* Three Column Use Cases */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-slate-200 hover:border-[#3b82f6]/50 hover:shadow-lg transition-all"
                  >
                    <Image
                      src="/svg/wallet_as_service/network.svg"
                      alt="Network"
                      width={18}
                      height={18}
                      className="mb-2 sm:mb-3"
                    />
                    <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2">
                      {useCase.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#2563eb] font-medium text-xs sm:text-sm transition-colors group"
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Enterprise */}
          <div className="relative overflow-hidden mt-6 sm:mt-8">
            <Image
              src="/svg/background/square-gray-bg.svg"
              alt="Background"
              width={500}
              height={150}
              className="absolute top-0 left-0 w-full h-auto opacity-50 sm:opacity-100"
            />
            {/* Content */}
            <div className="relative px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:justify-between">
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold shrink-0">
                Enterprise
              </h3>
              <p className="text-sm sm:text-base lg:text-lg max-w-2xl">
                For teams that need custom integrations, SLA guarantees, and
                dedicated support.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium transition-all shrink-0"
                asChild
              >
                <Link href="#contact">Talk to an Architect</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
