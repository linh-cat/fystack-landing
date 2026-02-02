"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function EnterpriseCompliance() {
  const { ref, isVisible } = useScrollReveal();
  const cards = [
    {
      title: "User Management",
      description: "Role-based access control with granular permissions for team members and workspaces",
      image: "/svg/enterprise_compliance/user-management.svg",
      features: ["Custom roles and permissions", "Multi-workspace support"],
    },
    {
      title: "Approval Groups",
      description: "Multi-signature approval workflows for sensitive operations and large transactions",
      image: "/svg/enterprise_compliance/approval-group.svg",
      features: ["Threshold-based approvals", "Custom approval chains"],
    },
    {
      title: "Audit Trails",
      description: "Complete immutable logs of all actions, changes, and transactions for compliance reporting",
      image: "/svg/enterprise_compliance/audit-trail.svg",
      features: ["Immutable event logging", "Export for compliance"],
    },
    {
      title: "Transaction Policies",
      description: "Set spending limits, whitelists, and custom rules to control transaction behavior",
      image: "/svg/enterprise_compliance/transaction-policy.svg",
      features: ["Spending limits & velocity", "Address whitelisting"],
    },
  ];

  return (
    <section id="compliance" className="pt-16 lg:pt-24 pb-0 bg-white px-4 scroll-mt-20">
      <div ref={ref} className={`container mx-auto max-w-[1440px] ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Wrapper */}
        <div className="relative">
          {/* Header Section with background */}
          <div className="relative text-center mb-12 lg:mb-16">
            {/* Background dots behind header */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image
                src="/svg/background/background-dot.svg"
                alt="Background"
                width={400}
                height={400}
                className="w-full max-w-[500px] h-auto opacity-40"
              />
            </div>

            {/* Badge */}
            <div className="relative z-10 inline-block mb-4">
              <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                /COMPLIANCE & GOVERNANCE/
              </span>
            </div>

            <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Enterprise-grade compliance
            </h2>
            <p className="relative z-10 text-slate-500 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
              Meet regulatory requirements with comprehensive
              <br className="hidden sm:block" />
              controls and full transparency
            </p>
          </div>

          {/* 2x2 Grid with striped sidebars */}
          <div className="relative flex">
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

            {/* Main grid */}
            <div className="flex-1 grid md:grid-cols-2 border border-slate-200 relative">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`p-6 lg:p-8 ${index === 0
                      ? "border-b md:border-r border-slate-200"
                      : index === 1
                        ? "border-b border-slate-200"
                        : index === 2
                          ? "md:border-r border-slate-200"
                          : ""
                    }`}
                >
                  <div className="flex flex-col gap-6">
                    {/* Image */}
                    <div className="flex-shrink-0 flex items-start justify-center sm:justify-start">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={60}
                        height={60}
                        className="w-14 h-14 lg:w-16 lg:h-16"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-sm lg:text-base mb-4">
                        {card.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-2">
                        {card.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-1 h-5 bg-[#3b82f6] rounded-full flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Center "+" icon */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-slate-200 rounded items-center justify-center z-10">
                <span className="text-slate-400 text-lg font-light">+</span>
              </div>
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

          {/* Decorative image between sections */}
          <div className="relative flex justify-end mt-8">
            <Image
              src="/svg/background/square-gray-bg.svg"
              alt="Decorative"
              width={500}
              height={400}
              className="w-auto h-auto max-w-[500px] opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
