"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

type TabKey = "exchange" | "stablecoin" | "treasury" | "otc" | "trading" | "gaming";

const sliderItems = [
  { icon: "/svg/usecases/slider/stable-payment.svg", label: "Stablecoin Payments" },
  { icon: "/svg/usecases/slider/treasury.svg", label: "Treasury Management" },
  { icon: "/svg/usecases/slider/otc-exchange.svg", label: "OTC Exchange" },
  { icon: "/svg/usecases/slider/gaming-wallet.svg", label: "Gaming Wallets" },
  { icon: "/svg/usecases/slider/tokenization.svg", label: "Tokenization" },
  { icon: "/svg/usecases/slider/payroll.svg", label: "Payroll" },
  { icon: "/svg/usecases/slider/onchain-account.svg", label: "On-chain Accounting" },
];

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
    key: "exchange",
    label: "Exchange",
    title: "Exchange Custody Infrastructure",
    subtitle: "Data ownership",
    description: "Self-hosted, compliant, and scalable custody solution for digital asset exchanges.",
    features: [
      "Full key and data ownership with no vendor lock-in",
      "Jurisdiction-safe deployment — keys stay in-region",
      "MPC and HSM-enforced signing (FIPS 140-3 Level 3)",
      "Deploy in weeks, not months",
    ],
    image: "/png/usecases/exchange.png",
    imageWidth: 400,
    imageHeight: 300,
  },
  {
    key: "stablecoin",
    label: "Stablecoin payment",
    title: "{Stablecoin payment rail}",
    description: "Accept and send crypto payments at scale with automated reconciliation.",
    features: [
      "MPC wallet sweeps for automated fund collection",
      "Multi-chain deposit address generation",
      "Webhook notifications for real-time updates",
      "Enterprise-grade security for payment flows",
    ],
    image: "/png/usecases/stable-coin-payment.png",
    imageWidth: 200,
    imageHeight: 200,
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
    image: "/png/usecases/treasury.png",
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
    image: "/png/usecases/otc-desk.png",
    imageWidth: 400,
    imageHeight: 300,
  },
  {
    key: "trading",
    label: "Trading Agents",
    title: "Trading agents with approval",
    subtitle: "Multi-signature approval",
    description: "Programmable custody for autonomous trading systems with granular controls.",
    features: [
      "API-first design for bot integration",
      "Granular spending policies and limits",
      "Automated approval rules based on parameters",
      "Full audit trail for agent actions",
    ],
    image: "/png/usecases/trading-agent.png",
    imageWidth: 400,
    imageHeight: 300,
  },
  {
    key: "gaming",
    label: "Gaming Wallet",
    title: "Gaming Wallet",
    subtitle: "On-chain server built on Solana",
    description: "Seamless in-game asset management with low-latency signing for real-time gaming.",
    features: [
      "Create wallets instantly for millions of users",
      "Gas-free transactions with sponsored fees",
      "NFT and token management APIs",
      "Low-latency signing for real-time gaming",
    ],
    image: "/png/usecases/gaming-wallet.png",
    imageWidth: 400,
    imageHeight: 300,
  },
];

const TAB_INTERVAL = 5000;
const tabKeys = tabsData.map((t) => t.key);

export function UseCases() {
  const [activeTab, setActiveTab] = useState<TabKey>("exchange");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTabHovered, setIsTabHovered] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const activeTabData = tabsData.find((t) => t.key === activeTab)!;

  // Auto-scroll slider
  useEffect(() => {
    if (isPaused || !sliderRef.current) return;

    const slider = sliderRef.current;
    let animationId: number;
    const speed = 0.5;

    const animate = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      slider.scrollLeft += speed;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Auto-cycle tabs
  useEffect(() => {
    if (isTabHovered) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabKeys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabKeys.length;
        return tabKeys[nextIndex];
      });
      setProgressKey((k) => k + 1);
    }, TAB_INTERVAL);

    return () => clearInterval(interval);
  }, [isTabHovered, activeTab]);

  const handleTabClick = useCallback((key: TabKey) => {
    setActiveTab(key);
    setProgressKey((k) => k + 1);
  }, []);

  return (
    <section id="use-cases" className="bg-white px-4 lg:px-40 py-4 lg:py-10 2xl:py-20scroll-mt-20">
      <div className="container mx-auto max-w-[1440px]">
        {/* Wrapper */}
        <div className="relative">
          {/* Main content */}
          <div className="border border-slate-200">
            {/* Header Section */}
            <div className="relative text-center py-12 lg:py-16 px-6 border-b border-slate-200">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                One platform, unlimited use cases<span className="text-[#3b82f6]">.</span>
              </h2>
              <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
                Built for every digital asset workflow
              </p>
            </div>

            {/* Row 1: Auto-scrolling Slider */}
            <div className="relative border-b border-slate-200 overflow-hidden">
              {/* Left fade */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              {/* Right fade */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div
                ref={sliderRef}
                className="flex overflow-x-hidden py-6"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{ scrollbarWidth: "none" }}
              >
                {/* Duplicate items for infinite scroll */}
                {[...sliderItems, ...sliderItems].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-6 py-3 flex-shrink-0 border-r border-slate-200 last:border-r-0"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-slate-600 text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Tabbed Interface */}
            <div
              className="grid lg:grid-cols-[280px_1fr]"
              onMouseEnter={() => setIsTabHovered(true)}
              onMouseLeave={() => setIsTabHovered(false)}
            >
              {/* Left - Vertical Tabs */}
              <div className="border-b lg:border-b-0 lg:border-r border-slate-200">
                {tabsData.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => handleTabClick(tab.key)}
                    className={`relative w-full text-left px-6 py-4 text-sm font-medium transition-all border-b border-slate-200 last:border-b-0 overflow-hidden
                      ${
                        activeTab === tab.key
                          ? "bg-[#3b82f6] text-white"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                  >
                    {tab.label}
                    {/* Progress bar */}
                    {activeTab === tab.key && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20">
                        <div
                          key={progressKey}
                          className="h-full bg-white/60"
                          style={{
                            width: isTabHovered ? "0%" : "100%",
                            transition: isTabHovered
                              ? "none"
                              : `width ${TAB_INTERVAL}ms linear`,
                          }}
                        />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Right - Tab Content */}
              <div className="p-8 lg:p-12">
                <div
                  key={activeTab}
                  className="grid lg:grid-cols-2 gap-8 items-center animate-[fade-in_0.3s_ease-in-out]"
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
                    <Image
                      src={activeTabData.image}
                      alt={activeTabData.title}
                      width={activeTabData.imageWidth || 400}
                      height={activeTabData.imageHeight || 300}
                      className="w-full h-auto max-w-[400px]"
                    />
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
