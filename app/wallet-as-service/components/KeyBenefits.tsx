"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

/* ── Visualization 1: API Infrastructure Flow ── */
function ApiInfraVisualization() {
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
        {/* API Request card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 4h10M2 7h10M2 10h6" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-[11px] font-bold text-slate-700">POST /v1/wallets</span>
            <span className="ml-auto text-[9px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">200 OK</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 font-mono text-[10px] text-slate-600 leading-relaxed">
            <div>{"{"}</div>
            <div className="pl-3"><span className="text-blue-600">&quot;name&quot;</span>: <span className="text-amber-600">&quot;Treasury&quot;</span>,</div>
            <div className="pl-3"><span className="text-blue-600">&quot;type&quot;</span>: <span className="text-amber-600">&quot;MPC&quot;</span></div>
            <div>{"}"}</div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <svg width="2" height="20" viewBox="0 0 2 20">
            <line x1="1" y1="0" x2="1" y2="20" stroke="#93b4f0" strokeWidth="1.5" strokeDasharray="3 2"/>
          </svg>
        </div>

        {/* Fystack Engine */}
        <div className="bg-white rounded-xl border border-blue-200 shadow-md shadow-blue-100/50 p-4 mb-3">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/svg/wallet_as_service/fystack-mini.svg" alt="Fystack" width={24} height={24} />
            <div>
              <p className="text-[11px] font-bold text-slate-800">Fystack Engine</p>
              <p className="text-[9px] text-slate-400">Processing wallet creation...</p>
            </div>
          </div>
          {/* Pipeline steps */}
          <div className="flex items-center justify-center gap-1.5">
            {["Validate", "Policy", "Sign", "Broadcast"].map((step, i) => (
              <div key={step} className="flex items-center gap-1.5">
                <div className={`px-2 py-1 rounded-md text-[9px] font-semibold ${
                  i < 3 ? "bg-blue-50 text-blue-600 border border-blue-100" : "bg-slate-50 text-slate-400 border border-slate-100"
                }`}>
                  {step}
                </div>
                {i < 3 && (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M2 4h4M5 2.5L6.5 4 5 5.5" stroke={i < 2 ? "#3b82f6" : "#cbd5e1"} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <svg width="2" height="20" viewBox="0 0 2 20">
            <line x1="1" y1="0" x2="1" y2="20" stroke="#93b4f0" strokeWidth="1.5" strokeDasharray="3 2"/>
          </svg>
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white rounded-lg border border-slate-200 p-3 text-center shadow-sm">
            <div className="w-8 h-8 mx-auto mb-1.5 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="10" rx="2" stroke="#3b82f6" strokeWidth="1.2"/>
                <path d="M5 8h6" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="8" cy="8" r="1" fill="#3b82f6"/>
              </svg>
            </div>
            <p className="text-[9px] font-bold text-slate-700">Wallet</p>
            <p className="text-[8px] text-slate-400">Created</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-3 text-center shadow-sm">
            <div className="w-8 h-8 mx-auto mb-1.5 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="3" width="10" height="10" rx="2" stroke="#059669" strokeWidth="1.2"/>
                <path d="M6 7h4M6 9h2" stroke="#059669" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-[9px] font-bold text-slate-700">Policy</p>
            <p className="text-[8px] text-slate-400">Applied</p>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-3 text-center shadow-sm">
            <div className="w-8 h-8 mx-auto mb-1.5 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="5" stroke="#7c3aed" strokeWidth="1.2"/>
                <path d="M6 8l1.5 1.5L10 6.5" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[9px] font-bold text-slate-700">MPC</p>
            <p className="text-[8px] text-slate-400">Secured</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Visualization 2: Scale Architecture ── */
function ScaleVisualization() {
  return (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-[420px] bg-gradient-to-br from-[#eef4fd] to-[#dbe8fa] rounded-2xl overflow-hidden flex items-center justify-center p-6">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative w-full max-w-[340px]">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "Wallets", value: "100K+", color: "blue" },
            { label: "Chains", value: "7", color: "violet" },
            { label: "Uptime", value: "99.9%", color: "emerald" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg border border-slate-200 p-3 text-center shadow-sm">
              <p className={`text-lg font-bold ${
                stat.color === "blue" ? "text-blue-600" : stat.color === "violet" ? "text-violet-600" : "text-emerald-600"
              }`}>{stat.value}</p>
              <p className="text-[9px] text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-3">
          <p className="text-[10px] font-bold text-slate-600 mb-3 uppercase tracking-wider">Your Application</p>
          <div className="bg-slate-50 rounded-lg border border-slate-100 p-3 mb-3 flex items-center justify-center">
            <span className="text-[10px] font-mono text-slate-500">fystack.wallets.create()</span>
          </div>
          {/* Arrow down */}
          <div className="flex justify-center mb-3">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path d="M10 0v12M6 9l4 4 4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-[10px] font-bold text-slate-600 mb-2 uppercase tracking-wider">Fystack Handles</p>
          <div className="space-y-1.5">
            {[
              { text: "Key generation & MPC ceremony", done: true },
              { text: "Multi-chain address derivation", done: true },
              { text: "Policy enforcement & approvals", done: true },
              { text: "Webhook notifications & indexing", done: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-blue-50/50 rounded-md px-2.5 py-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.8"/>
                  <path d="M4 6l1.5 1.5L8 5" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[10px] text-slate-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom badge */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-slate-200" />
          <span className="text-[10px] font-medium text-slate-400 bg-white px-2">One API, all chains</span>
          <div className="h-px w-8 bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

/* ── Visualization 3: Automation & Workflow ── */
function WorkflowVisualization() {
  return (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-[420px] bg-gradient-to-br from-[#f3eefa] to-[#e8ddf7] rounded-2xl overflow-hidden flex items-center justify-center p-6">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative w-full max-w-[340px]">
        {/* Approval workflow card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-violet-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-[11px] font-bold text-slate-700">Approval Workflow</span>
          </div>
          {/* Workflow steps */}
          <div className="space-y-2">
            {[
              { step: "Transfer initiated", status: "done", by: "API call" },
              { step: "Policy check passed", status: "done", by: "Auto" },
              { step: "Manager approved", status: "done", by: "admin@co.io" },
              { step: "Transaction signed", status: "active", by: "MPC" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.status === "done" ? "bg-violet-100" : "bg-violet-500"
                }`}>
                  {item.status === "done" ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M3 5l1.5 1.5L7 4" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  )}
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-slate-700">{item.step}</span>
                  <span className="text-[8px] text-slate-400">{item.by}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <svg width="2" height="16" viewBox="0 0 2 16">
            <line x1="1" y1="0" x2="1" y2="16" stroke="#b8a4e8" strokeWidth="1.5" strokeDasharray="3 2"/>
          </svg>
        </div>

        {/* Webhook & events card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M7 7l3 3" stroke="#059669" strokeWidth="1.3" strokeLinecap="round"/>
                <circle cx="7" cy="7" r="1.5" fill="#059669"/>
              </svg>
            </div>
            <span className="text-[11px] font-bold text-slate-700">Live Events</span>
            <span className="ml-auto flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] text-green-600 font-medium">Streaming</span>
            </span>
          </div>
          <div className="space-y-1.5">
            {[
              { event: "transaction.signed", time: "now", color: "violet" },
              { event: "webhook.delivered", time: "1s ago", color: "blue" },
              { event: "notification.sent", time: "2s ago", color: "emerald" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-slate-50 rounded-md px-2.5 py-1.5">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  item.color === "violet" ? "bg-violet-400" : item.color === "blue" ? "bg-blue-400" : "bg-emerald-400"
                }`} />
                <span className="text-[10px] font-mono text-slate-600 flex-1">{item.event}</span>
                <span className="text-[8px] text-slate-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom badge */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-slate-200" />
          <span className="text-[10px] font-medium text-slate-400 bg-white px-2">Fully automated</span>
          <div className="h-px w-8 bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export function KeyBenefits() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  const benefits = [
    {
      tag: "KEY BENEFITS",
      title: "Powerful Wallet Infrastructure via APIs",
      description:
        "Create and manage wallets programmatically. Fystack handles key generation, MPC signing, and policy enforcement through a single REST API.",
      features: [
        { icon: "/svg/wallet_as_service/wallet.svg", text: "Programmatic Wallets" },
        { icon: "/svg/wallet_as_service/automated.svg", text: "MPC-secured Signing" },
        { icon: "/svg/wallet_as_service/webhook.svg", text: "Policy-based Controls" },
      ],
      imagePosition: "right" as const,
      visualization: <ApiInfraVisualization />,
    },
    {
      tag: "KEY BENEFITS",
      title: "Build Once. Operate at Scale.",
      description:
        "One integration to support 100K+ wallets across multiple chains. No in-house custody R&D needed, Fystack handles the complexity.",
      features: [
        { icon: "/svg/wallet_as_service/wallet.svg", text: "Launch in weeks, not months" },
        { icon: "/svg/wallet_as_service/automated.svg", text: "No in-house custody R&D" },
        { icon: "/svg/wallet_as_service/webhook.svg", text: "Predictable, flat pricing at scale" },
        { icon: "/svg/wallet_as_service/multichain.svg", text: "Reduced operational risk" },
      ],
      imagePosition: "left" as const,
      visualization: <ScaleVisualization />,
    },
    {
      tag: "KEY BENEFITS",
      title: "Automate Operations with Confidence",
      description:
        "Set up approval workflows, automated sweeps, and real-time event streaming. Every transaction is policy-checked and fully auditable.",
      features: [
        { icon: "/svg/wallet_as_service/wallet.svg", text: "Approval Workflows" },
        { icon: "/svg/wallet_as_service/automated.svg", text: "Automated Transfers" },
        { icon: "/svg/wallet_as_service/webhook.svg", text: "Webhooks & Events" },
        { icon: "/svg/wallet_as_service/multichain.svg", text: "Multi-channel Notifications" },
      ],
      imagePosition: "right" as const,
      visualization: <WorkflowVisualization />,
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

                    {/* Visual Side */}
                    <div
                      className={`${
                        benefit.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="m-4 sm:m-6">
                        {benefit.visualization}
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
