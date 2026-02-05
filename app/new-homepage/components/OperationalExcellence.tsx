"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function OperationalExcellence() {
  const { ref, isVisible } = useScrollReveal();
  const columns = [
    {
      title: "Alerts & Monitoring",
      subtitle: "REAL-TIME VISIBILITY ACROSS WALLETS AND TRANSACTIONS.",
      image: "/png/operational_excellence/alert.png",
      features: [
        "Scheduled & threshold-based sweeps",
        "Multi-chain native automation",
        "Gas-optimized batching",
      ],
    },
    {
      title: "Automation",
      subtitle: "AUTOMATICALLY MOVE FUNDS WITH SAFETY AND EFFICIENCY",
      image: "/svg/operational_excellence/automation.svg",
      features: [
        "Telegram & Slack notifications",
        "Balance and transaction monitoring",
        "Suspicious activity alerts",
      ],
    },
    {
      title: "Analytics & Insights",
      subtitle: "CLEAR OPERATIONAL INSIGHTS FOR TREASURY TEAMS.",
      image: "/png/operational_excellence/analytics.png",
      features: [
        "Wallet performance metrics",
        "Transaction and volume analytics",
        "Actionable operational insights",
      ],
    },
  ];

  return (
    <section id="operations" className="bg-white max-w-[1440px] px-4 py-4 lg:py-10 2xl:py-20 mx-auto">
      <div ref={ref} className={`container mx-auto  ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Wrapper */}
        <div className="relative">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Built for operational excellence
            </h2>
            <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
              Everything you need to manage digital assets at
              <br className="hidden sm:block" />
              scale with confidence and control
            </p>
          </div>

          {/* Three Columns Grid */}
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
            <div className="flex-1 grid lg:grid-cols-3 gap-0 border border-slate-200">
              {columns.map((column, index) => (
                <div
                  key={index}
                  className={`p-6 md:p-7 lg:p-8 ${index < 2 ? "border-b lg:border-b-0 lg:border-r border-slate-200" : ""
                    }`}
                >
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">
                    {column.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-6">
                    {column.subtitle}
                  </p>

                  {/* Image with background */}
                  <div className="relative flex items-center justify-center h-48 lg:h-56 mb-8">
                    {/* Dotted background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/svg/background/background-dot.svg"
                        alt="Background"
                        width={232}
                        height={232}
                        className="w-full max-w-[200px] h-auto opacity-60"
                      />
                    </div>

                    {/* Main image */}
                    <Image
                      src={column.image}
                      alt={column.title}
                      width={200}
                      height={150}
                      className="relative z-10 w-auto h-auto max-h-[150px]"
                    />
                  </div>

                  {/* Features list */}
                  <div className="space-y-3">
                    {column.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-1 h-5 bg-[#8C68F2] rounded-full flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
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
                                    #E9EAEB 8px, 8px,
                                    #E9EAEB 9px 9px
                )`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
