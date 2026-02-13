"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function DeploymentModelsSection() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  const deploymentOptions = [
    {
      icon: "/svg/wallet_as_service/network.svg",
      title: "Fystack Cloud",
      description:
        "Secure high-volume deposits, withdrawals, and real-time balances across a unified hot, warm, and cold wallet.",
      active: true,
    },
    {
      icon: "/svg/wallet_as_service/exchange-otc.svg",
      title: "Fystack Self-Hosted",
      description:
        "Secure high-volume deposits, withdrawals, and real-time balances across a unified hot, warm, and cold wallet.",
      active: true,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 2xl:px-0">
        <div
          ref={scrollRef}
          className={`${
            isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-xs font-semibold text-[#3b82f6] tracking-wider uppercase mb-4 block">
              /DEPLOYMENT MODELS/
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Deploy the Way Your
              <br />
              Business Requires
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              100% API parity between Cloud and Self-Hosted
            </p>
          </div>

          {/* Center Image */}
          <div className="mb-12 lg:mb-16">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200/50 rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Placeholder image */}
                <div className="w-full aspect-[16/9] flex items-center justify-center">
                  <div className="text-slate-300 text-center">
                    <div className="text-5xl mb-3">🖥️</div>
                    <div className="text-sm font-medium">
                      Deployment Diagram Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom - Two Column Deployment Options */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all ${
                  option.active
                    ? "bg-white border-slate-200 hover:border-[#3b82f6]/50 hover:shadow-lg"
                    : "bg-white/60 border-slate-100"
                }`}
              >
                <Image
                  src={option.icon}
                  alt={option.title}
                  width={24}
                  height={24}
                  className="mb-3"
                />
                <h4
                  className={`text-lg font-semibold mb-2 ${
                    option.active ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {option.title}
                </h4>
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    option.active ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  {option.description}
                </p>
                <Link
                  href="#"
                  className={`inline-flex items-center gap-2 font-medium text-sm transition-colors group ${
                    option.active
                      ? "text-[#3b82f6] hover:text-[#2563eb]"
                      : "text-slate-400"
                  }`}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
