"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

type TabKey = "cloud" | "self-hosted";

export function Pricing() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<TabKey>("cloud");

  const tabs = [
    { key: "cloud" as TabKey, label: "Cloud (SaaS)" },
    { key: "self-hosted" as TabKey, label: "Self-Hosted" },
  ];

  const cloudPlans = [
    {
      badge: "BASIC",
      badgeColor: "bg-slate-100 text-slate-600",
      name: "Free",
      price: null,
      description: "For individual developers starting with Fystack wallet infrastructure.",
      features: [
        "Up to 2 MPC wallets",
        "1,000 Hyper wallets",
        "100 crypto payments",
        "Max Outbound Volume: $20,000/month",
        "1 workspace, 3 users",
        "Community support",
      ],
      buttonText: "Start with Basic",
      buttonStyle: "border border-slate-200 text-slate-700 hover:bg-slate-50",
      highlighted: false,
    },
    {
      badge: "PRO",
      badgeColor: "bg-[#3b82f6] text-white",
      name: "$950",
      priceSuffix: "/month",
      description: "Startups scaling their crypto payment infrastructure.",
      features: [
        "All Developer features",
        "Up to 3 MPC wallets",
        "3,000 Hyper wallets",
        "500 crypto payments",
        "Max Outbound Volume: $100,000/month",
        "2 workspaces, 3 users",
        "Advanced security features",
        "Basic support",
      ],
      buttonText: "Start with Professional",
      buttonStyle: "bg-[#3b82f6] text-white hover:bg-[#2563eb]",
      highlighted: true,
      hasToggle: true,
    },
    {
      badge: "GROWTH",
      badgeColor: "bg-purple-100 text-purple-600",
      name: "$2870",
      priceSuffix: "/month",
      description: "Complete solution for growing teams wanting to maximize their wallet operations.",
      features: [
        "All Starter features",
        "Up to 20 MPC wallets",
        "10,000 Hyper wallets",
        "2,000 crypto payments",
        "Max Outbound Volume: $500,000/month",
        "5 workspaces, 10 users",
        "Priority support",
        "Advanced analytics",
      ],
      buttonText: "Start with Growth",
      buttonStyle: "border border-slate-200 text-slate-700 hover:bg-slate-50",
      highlighted: false,
      hasToggle: true,
    },
  ];

  const selfHostedFeatures = [
    { title: "7-Day Deployment Support", description: "Guided onboarding to launch your infrastructure fast" },
    { title: "MPC Technology", description: "Secure multi-party computation infrastructure" },
    { title: "Multi-Chain Support", description: "10+ blockchain networks supported" },
    { title: "Self-Hosted", description: "Deploy on your own infrastructure" },
    { title: "Updates & Security Patches", description: "Regular updates included for 1 year" },
    { title: "Documentation", description: "Comprehensive guides and API docs" },
    { title: "Commercial Use", description: "Use in unlimited commercial projects" },
  ];

  return (
    <section id="pricing" className="bg-white py-4 lg:py-10 2xl:py-20 scroll-mt-20">
      <div ref={ref} className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto  ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Wrapper */}
        <div className="relative">
          {/* Corner squares */}

          {/* Header Section */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Choose the plan that fits your needs. All plans include
              <br className="hidden sm:block" />
              our core security features.
            </p>

            {/* Tab Buttons */}
            <div className="inline-flex items-center bg-gray-200/50 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.key
                      ? "bg-white text-slate-800"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="border border-slate-200">
            {activeTab === "cloud" ? (
              /* Cloud Plans - 3 Columns */
              <div className="grid lg:grid-cols-3 gap-0">
                {cloudPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`p-8 flex flex-col ${
                      index < 2 ? "border-b lg:border-b-0 lg:border-r border-slate-200" : ""
                    }`}
                  >
                    {/* Badge and Toggle */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${plan.badgeColor}`}>
                        {plan.badge}
                      </span>
                      {plan.hasToggle && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500">ANNUAL</span>
                          <div className="w-10 h-5 bg-[#3b82f6] rounded-full relative cursor-pointer">
                            <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow"></div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      {plan.price === null ? (
                        <h3 className="text-3xl lg:text-4xl font-bold text-slate-800">Free</h3>
                      ) : (
                        <div className="flex items-baseline">
                          <h3 className="text-3xl lg:text-4xl font-bold text-slate-800">{plan.name}</h3>
                          <span className="text-slate-500 ml-1">{plan.priceSuffix}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-sm mb-6 min-h-[40px]">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Image src="/svg/pricing/check.svg" alt="Check" width={16} height={16} className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button - Always at bottom */}
                    <button
                      className={`w-full py-3 rounded-full text-sm font-medium transition-colors mt-8 ${plan.buttonStyle}`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              /* Self-Hosted Content */
              <div className="p-8 lg:p-12">
                {/* Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#3b82f6]/10 text-[#3b82f6] mb-4">
                  Self-Hosted
                </span>

                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
                  What&apos;s Included?
                </h3>
                <p className="text-slate-500 text-base mb-8">
                  Everything you need to build secure wallet infrastructure
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {selfHostedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Image src="/svg/pricing/check.svg" alt="Check" width={16} height={16} className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-800">{feature.title}</p>
                        <p className="text-slate-500 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-[#3b82f6] text-white rounded-full text-sm font-medium hover:bg-[#2563eb] transition-colors w-1/2">
                    View Details
                  </button>
                  <a className="px-8 py-3 border border-slate-200 text-slate-700 bg-white rounded-full text-sm font-medium hover:bg-slate-50 transition-colors w-full flex-1 text-center" href="https://t.me/anhthind">
                    Talk to Founders
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Enterprise Footer */}
          <div className="relative mt-0 border border-t-0 border-slate-200">
            {/* Background image */}
            <div className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
              <Image
                src="/svg/background/square-gray-bg.svg"
                alt="Background"
                width={400}
                height={200}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-auto h-[150%]"
              />
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center justify-between p-8 gap-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h3 className="text-2xl font-bold text-slate-800">Enterprise</h3>
                <p className="text-slate-500 text-sm">
                  For teams that need custom integrations, SLA guarantees, and dedicated support.
                </p>
              </div>
              <a className="px-8 py-3 border border-slate-200 bg-white text-slate-700 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors whitespace-nowrap" href="https://t.me/anhthind">
                Talk to Founders
              </a>
            </div>       
          </div>
        </div>
      </div>
    </section>
  );
}
