"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type TabKey = "stablecoin" | "treasury" | "otc";

const tabsData: {
  key: TabKey;
  label: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  image: string;
  imageWidth?: number;
  imageHeight?: number;
}[] = [
    {
      key: "stablecoin",
      label: "Stablecoin payment",
      title: "Stablecoin payment rail",
      subtitle: "Accept & send",
      description: "Accept and send crypto payments at scale with automated reconciliation.",
      features: [
        "MPC wallet sweeps for automated fund collection",
        "Multi-chain deposit address generation",
        "Webhook notifications for real-time updates",
        "Enterprise-grade security for payment flows",
      ],
      image: "/png/usecases/exchange.webp",
      imageWidth: 400,
      imageHeight: 300,
    },
    {
      key: "treasury",
      label: "Treasury",
      title: "All-Chain Treasury Management",
      subtitle: "Unified treasury",
      description: "Consolidate and manage digital assets across multiple blockchains from a single platform.",
      features: [
        "Consolidate balances across 10+ blockchains",
        "Automated fund sweeping and rebalancing",
        "Role-based access with approval workflows",
        "Real-time reporting and audit trails",
      ],
      image: "/png/usecases/treasury.webp",
      imageWidth: 400,
      imageHeight: 300,
    },
    {
      key: "otc",
      label: "OTC Desk",
      title: "OTC Desk",
      subtitle: "Buyer, Seller, Broker-Dealer",
      description: "Secure large-value transfers with multi-party verification and compliance controls.",
      features: [
        "Multi-signature approval for large transactions",
        "Counter-party wallet verification",
        "Settlement tracking and confirmation",
        "Compliance-ready transaction records",
      ],
      image: "/png/usecases/stable-coin-payment.webp",
      imageWidth: 400,
      imageHeight: 300,
    },
  ];

const TAB_INTERVAL = 5000;
const tabKeys = tabsData.map((t) => t.key);

function ChainCard({ logo, label }: { logo: string; label: string }) {
  return (
    <div className="w-[76px] h-[76px] rounded-xl bg-white border border-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.04)] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center overflow-hidden">
        <Image src={logo} alt={label} width={32} height={32} className="w-8 h-8 object-contain" />
      </div>
    </div>
  );
}

function TreasuryVisualization() {
  return (
    <div
      className="relative w-full max-w-[420px] aspect-square"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Dashed connector lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="200" y1="76" x2="200" y2="150" stroke="#CBD5E1" strokeWidth="1.25" strokeDasharray="4 4" />
        <line x1="200" y1="250" x2="200" y2="324" stroke="#CBD5E1" strokeWidth="1.25" strokeDasharray="4 4" />
        <line x1="76" y1="200" x2="150" y2="200" stroke="#CBD5E1" strokeWidth="1.25" strokeDasharray="4 4" />
        <line x1="250" y1="200" x2="324" y2="200" stroke="#CBD5E1" strokeWidth="1.25" strokeDasharray="4 4" />
      </svg>

      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <ChainCard logo="/logo/crypto/eth.webp" label="ETH" />
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2">
        <ChainCard logo="/logo/crypto/sol.webp" label="SOL" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <ChainCard logo="/logo/crypto/tron.webp" label="TRON" />
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <ChainCard logo="/logo/crypto/bnb.webp" label="BNB" />
      </div>

      {/* Center treasury card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-2xl bg-white border border-slate-200 shadow-[0_8px_24px_rgba(59,130,246,0.12)] flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#3b82f6] flex items-center justify-center text-white font-bold text-xl shadow-[0_4px_12px_rgba(59,130,246,0.35)]">
          $
        </div>
        <div className="mt-3 text-sm font-bold text-slate-800">Treasury</div>
        <div className="text-[11px] text-slate-500 mt-0.5">Multi-chain</div>
      </div>
    </div>
  );
}

export function UseCases() {
  const [activeTab, setActiveTab] = useState<TabKey>("stablecoin");
  const [isTabHovered, setIsTabHovered] = useState(false);

  const activeTabData = tabsData.find((t) => t.key === activeTab)!;

  // Auto-cycle tabs
  useEffect(() => {
    if (isTabHovered) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabKeys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabKeys.length;
        return tabKeys[nextIndex];
      });
    }, TAB_INTERVAL);

    return () => clearInterval(interval);
  }, [isTabHovered, activeTab]);

  const handleTabClick = useCallback((key: TabKey) => {
    setActiveTab(key);
  }, []);

  return (
    <section id="use-cases" className="bg-white py-4 lg:py-10 2xl:py-20 scroll-mt-20">

      <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto relative">
        <div className="hidden 2xl:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
        <div className="hidden 2xl:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
        <div className="hidden 2xl:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
        <div className="hidden 2xl:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
        {/* Wrapper */}
        <div className="relative">
          {/* Main content */}
          <div className="border border-slate-200">
            {/* Header Section */}
            <div className="relative text-center py-12 lg:py-16 px-6 border-b border-slate-200">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                One platform. Every stablecoin workflow<span className="text-[#3b82f6]">.</span>
              </h2>
              <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
                From deposit rails to treasury sweeps — purpose-built for payments teams.
              </p>
            </div>

            {/* Tabbed Interface */}
            <div
              onMouseEnter={() => setIsTabHovered(true)}
              onMouseLeave={() => setIsTabHovered(false)}
            >
              {/* Top - Horizontal Tabs */}
              <div className="flex border-b border-slate-200">
                {tabsData.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => handleTabClick(tab.key)}
                    className={`relative flex-1 min-w-0 text-center px-1.5 sm:px-4 lg:px-6 py-3 lg:py-4 text-[11px] sm:text-sm font-medium transition-all leading-tight border-r border-slate-200 last:border-r-0 break-words
                      ${activeTab === tab.key
                        ? "bg-[#3b82f6] text-white"
                        : "text-slate-600 hover:bg-slate-50"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-8 lg:p-12">
                <div
                  key={activeTab}
                  className="grid lg:grid-cols-2 gap-8 items-center animate-[fade-in_0.3s_ease-in-out] min-h-[420px] lg:min-h-[460px]"
                >
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
                      {activeTabData.title}
                    </h3>
                    {activeTabData.subtitle && (
                      <p className="text-[#3b82f6] text-sm font-medium mb-4">
                        {activeTabData.subtitle}
                      </p>
                    )}
                    <p className="text-slate-500 text-sm mb-6">
                      {activeTabData.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {activeTabData.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Image
                            src="/svg/pricing/check.svg"
                            alt="Check"
                            width={16}
                            height={16}
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex items-center justify-center">
                    {activeTab === "treasury" ? (
                      <TreasuryVisualization />
                    ) : (
                      <Image
                        src={activeTabData.image}
                        alt={activeTabData.title}
                        width={activeTabData.imageWidth || 400}
                        height={activeTabData.imageHeight || 300}
                        className="w-full h-auto max-w-[400px] "
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
