"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function KeyBenefits() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  const benefits = [
    {
      tag: "KEY BENEFITS",
      title: "Powerful Wallet Infrastructure via APIs",
      description:
        "If your server is down, Fystack queues the alert and retries with exponential backoff. We ensure you never lose data.",
      features: [
        { icon: "/svg/wallet_as_service/wallet.svg", text: "Programmatic Wallets" },
        { icon: "/svg/wallet_as_service/automated.svg", text: "MPC-secured Signing" },
        { icon: "/svg/wallet_as_service/webhook.svg", text: "Policy-based Controls" },
      ],
      imageBg: "bg-gradient-to-br from-[#60a5fa] to-[#3b82f6]",
      imagePosition: "right" as const,
      imageSrc: "/png/key_benefit/key-benefit-1.png"
    },
    {
      tag: "KEY BENEFITS",
      title: "Build Once. Operate at Scale.",
      description:
        "If your server is down, Fystack queues the alert and retries with exponential backoff. We ensure you never lose data.",
      features: [
        { icon: "/svg/wallet_as_service/wallet.svg", text: "Launch in weeks, not months" },
        { icon: "/svg/wallet_as_service/automated.svg", text: "No in-house custody R&D" },
        { icon: "/svg/wallet_as_service/webhook.svg", text: "Predictable, flat pricing at scale" },
        { icon: "/svg/wallet_as_service/multichain.svg", text: "Reduced operational risk" },
      ],
      imageBg: "bg-gradient-to-br from-[#60a5fa] to-[#3b82f6]",
      imagePosition: "left" as const,
      imageSrc: "/png/key_benefit/key-benefit-2.png"
    },
    {
      tag: "KEY BENEFITS",
      title: "Powerful Wallet Infrastructure via APIs",
      description:
        "If your server is down, Fystack queues the alert and retries with exponential backoff. We ensure you never lose data.",
      features: [
        { icon: "/svg/wallet_as_service/wallet.svg", text: "Approval Workflows" },
        { icon: "/svg/wallet_as_service/automated.svg", text: "Automated Transfers" },
        { icon: "/svg/wallet_as_service/webhook.svg", text: "Webhooks & Events" },
        { icon: "/svg/wallet_as_service/multichain.svg", text: "Multi-channel Notifications" },
      ],
      imageBg: "bg-gradient-to-br from-[#c4b5fd] to-[#a78bfa]",
      imagePosition: "right" as const,
      imageSrc: "/png/key_benefit/key-benefit-3.png"
    },
  ];

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
        <div
          ref={scrollRef}
          className={`relative w-full ${
            isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          {/* Corner squares */}
          <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />

          <div className="flex">
            {/* Left striped column */}
            <div
              className="hidden lg:block w-16 flex-shrink-0 border border-r-0 border-slate-200"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 8px,
                  #f1f5f9 8px,
                  #f1f5f9 9px
                )`,
              }}
            />

            {/* Main content */}
            <div className="flex-1 border border-slate-200">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`border-b border-slate-200 last:border-b-0 ${
                    index === 1 ? "bg-gradient-to-br from-[#f8fafc] to-white" : ""
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-0 items-center">
                    {/* Content Side */}
                    <div
                      className={`p-8 sm:p-10 lg:p-14 ${
                        benefit.imagePosition === "left" ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {/* Tag */}
                      <div className="inline-flex items-center gap-2 mb-5">
                        <div className="w-5 h-5 rounded bg-[#3b82f6] flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">A</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                          {benefit.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-slate-900 mb-4 leading-tight">
                        {benefit.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-md">
                        {benefit.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-4 mb-8">
                        {benefit.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <Image
                              src={feature.icon}
                              alt={feature.text}
                              width={18}
                              height={18}
                            />
                            <span className="text-sm text-slate-700">
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Link */}
                      <Link
                        href="https://app.fystack.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#3b82f6] hover:text-[#2563eb] font-semibold text-sm transition-colors group"
                      >
                        Play Demo
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Image/Visual Side */}
                    <div
                      className={`${
                        benefit.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div
                        className={`relative rounded-2xl min-h-[250px] sm:min-h-[250px] lg:min-h-[250px] overflow-hidden m-4 sm:m-6`}
                      >
                          <Image src={benefit.imageSrc} alt={benefit.title} width={250} height={250} className="w-full h-auto rounded-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right striped column */}
            <div
              className="hidden lg:block w-16 flex-shrink-0 border border-l-0 border-slate-200"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 8px,
                  #E9EAEB 8px,
                  #E9EAEB 9px
                )`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
