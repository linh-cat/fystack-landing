"use client";

import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

function SecurityVisualization() {
  return (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-[420px] bg-gradient-to-br from-[#eef4fd] to-[#dbe8fa] rounded-2xl overflow-hidden flex items-center justify-center p-6">
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative w-full max-w-[340px]">
        {/* Transaction request */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-amber-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v5l3 2" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="7" r="5" stroke="#d97706" strokeWidth="1.3"/>
              </svg>
            </div>
            <span className="text-[11px] font-bold text-slate-700">Transaction Request</span>
            <span className="ml-auto text-[9px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full">Pending</span>
          </div>
          <div className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2">
            <span className="text-[10px] text-slate-500">Transfer 50,000 USDC</span>
            <span className="text-[10px] font-semibold text-slate-700">→ 0x8f2...a1c</span>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <svg width="2" height="16" viewBox="0 0 2 16">
            <line x1="1" y1="0" x2="1" y2="16" stroke="#93b4f0" strokeWidth="1.5" strokeDasharray="3 2"/>
          </svg>
        </div>

        {/* Security checks */}
        <div className="bg-white rounded-xl border border-blue-200 shadow-md shadow-blue-100/50 p-4 mb-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5L2.5 3.5v3c0 3.5 4.5 5.5 4.5 5.5s4.5-2 4.5-5.5v-3L7 1.5z" stroke="#3b82f6" strokeWidth="1.3" fill="#eff6ff"/>
                <path d="M5.5 7l1.2 1.2L9 5.5" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[11px] font-bold text-slate-700">Security Pipeline</span>
          </div>
          <div className="space-y-2">
            {[
              { check: "Policy: Max 100K per tx", status: "pass" },
              { check: "Whitelist: Address verified", status: "pass" },
              { check: "Velocity: Under daily limit", status: "pass" },
              { check: "Quorum: 2 of 3 approved", status: "waiting" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                {item.status === "pass" ? (
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M3 5l1.5 1.5L7 4" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                  </div>
                )}
                <span className={`text-[10px] flex-1 ${item.status === "pass" ? "text-slate-600" : "text-amber-700 font-medium"}`}>
                  {item.check}
                </span>
                <span className={`text-[8px] font-semibold ${item.status === "pass" ? "text-emerald-500" : "text-amber-500"}`}>
                  {item.status === "pass" ? "PASS" : "1/3"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <svg width="2" height="16" viewBox="0 0 2 16">
            <line x1="1" y1="0" x2="1" y2="16" stroke="#93b4f0" strokeWidth="1.5" strokeDasharray="3 2"/>
          </svg>
        </div>

        {/* MPC Signing */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-violet-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="4" cy="7" r="2.5" stroke="#7c3aed" strokeWidth="1.2" fill="#f5f3ff"/>
                <circle cx="10" cy="7" r="2.5" stroke="#7c3aed" strokeWidth="1.2" fill="#f5f3ff"/>
                <circle cx="7" cy="3.5" r="2.5" stroke="#7c3aed" strokeWidth="1.2" fill="#f5f3ff"/>
              </svg>
            </div>
            <span className="text-[11px] font-bold text-slate-700">MPC Threshold Signing</span>
          </div>
          <div className="flex items-center gap-2">
            {["Shard 1", "Shard 2", "Shard 3"].map((shard, i) => (
              <div key={shard} className={`flex-1 text-center px-2 py-1.5 rounded-lg text-[9px] font-semibold ${
                i < 2 ? "bg-violet-50 text-violet-600 border border-violet-100" : "bg-slate-50 text-slate-400 border border-slate-100"
              }`}>
                {shard} {i < 2 ? "✓" : "..."}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SecurityControlSection() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  const features = [
    { icon: "/svg/wallet_as_service/wallet.svg", text: "MPC / Threshold Signing" },
    { icon: "/svg/wallet_as_service/automated.svg", text: "Policies enforced before signing" },
    { icon: "/svg/wallet_as_service/webhook.svg", text: "Quorum approvals" },
    { icon: "/svg/wallet_as_service/multichain.svg", text: "Multi-channel Notifications" },
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
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                {/* Left - Visualization */}
                <div className="lg:order-1 m-4 sm:m-6">
                  <SecurityVisualization />
                </div>

                {/* Right - Content */}
                <div className="p-8 sm:p-10 lg:p-14 lg:order-2">
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 mb-5">
                    <div className="w-5 h-5 rounded bg-[#3b82f6] flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">A</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                      SECURITY & CONTROL
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-slate-900 mb-4 leading-tight">
                    Security That Enables Automation
                  </h3>

                  {/* Description */}
                  <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-md">
                    Every transaction passes through policy checks, whitelist verification, and quorum approvals before MPC signing. Automate with confidence.
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Image
                          src={feature.icon}
                          alt={feature.text}
                          width={18}
                          height={18}
                        />
                        <span className="text-sm text-slate-700 font-medium">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
        </div>
      </div>
    </section>
  );
}
