"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Lock, Database, Key } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type TabKey = "encryption" | "database" | "kms";

interface TabContent {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const TAB_INTERVAL = 5000;
const tabKeys: TabKey[] = ["encryption", "database", "kms"];

export function SecurityDeveloper() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<TabKey>("encryption");
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle tabs
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabKeys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabKeys.length;
        return tabKeys[nextIndex];
      });
    }, TAB_INTERVAL);

    return () => clearInterval(interval);
  }, [isHovered, activeTab]);

  const handleTabClick = useCallback((key: TabKey) => {
    setActiveTab(key);
  }, []);

  const tabs = [
    { key: "encryption" as TabKey, label: "Encryption at Rest", icon: Lock },
    { key: "database" as TabKey, label: "Verifiable Database", icon: Database },
    { key: "kms" as TabKey, label: "Cloud KMS Support", icon: Key },
  ];

  const tabContent: Record<TabKey, TabContent> = {
    encryption: {
      title: "Encryption at Rest for Sensitive Data",
      description:
        "Industry-standard DEK/KEK hybrid encryption model balancing security, performance, and operational simplicity.",
      features: ["High Performance", "Layered Security"],
      image: "/svg/security_experts/encryption.svg",
    },
    database: {
      title: "Verifiable Database Integrity",
      description:
        "Cryptographic proofs ensure data integrity and tamper-evidence for all stored records and transactions.",
      features: ["Tamper-Evident", "Audit Ready"],
      image: "/svg/security_experts/vertical-database.svg",
    },
    kms: {
      title: "Cloud KMS Integration",
      description:
        "Native support for AWS KMS, Azure Key Vault, and Google Cloud KMS for enterprise key management.",
      features: ["Multi-Cloud", "Enterprise Ready"],
      image: "/svg/security_experts/cloud-kms.svg",
    },
  };

  const currentContent = tabContent[activeTab];

  const chains = [
    {
      name: "Ethereum",
      description: "EVM Compatible",
      logo: "/logo/Ethereum.png",
    },
    {
      name: "Solana",
      description: "High Performance",
      logo: "/logo/Solana1.png",
    },
    {
      name: "Tron",
      description: "USDT Powerhouse",
      logo: "/logo/Tron.png",
    },
    {
      name: "Stellar",
      description: "Fast & Scalable",
      logo: "/logo/Solana2.png",
    },
    {
      name: "Base",
      description: "Layer 2",
      logo: "/logo/Base.png",
    },
  ];

  return (
    <section className="bg-white px-4 lg:px-40 py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`container mx-auto max-w-[1440px] ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
      >
        {/* Wrapper with corner squares */}
        <div className="relative">
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
            <div className="flex-1 border border-slate-200 overflow-hidden">
              {/* Security Header Section */}
              <div className="relative text-center py-10 lg:py-14 px-6 border-b border-slate-200 bg-white/80">
                <p className="text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide font-mono">
                  /SECURITY BUILT BY EXPERTS/
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                  No more insecure
                  <br />
                  wallet infrastructure
                </h2>
                <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                  Fystack is designed by cryptography and security
                  <br className="hidden sm:block" />
                  experts in the field. Built with industry standard security
                  <br className="hidden sm:block" />
                  practices from the ground up.
                </p>

                {/* Tab Buttons */}
                <div
                  className="flex flex-wrap items-center justify-center gap-3 mt-8"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.key;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => handleTabClick(tab.key)}
                        className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all overflow-hidden ${isActive
                            ? "bg-[#3b82f6] text-white"
                            : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                      >
                        <Icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Security Tab Content Section */}
              <div
                key={activeTab}
                className="relative grid lg:grid-cols-2 bg-white/80 animate-[fade-in_0.3s_ease-in-out]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Left - Content */}
                <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                    {currentContent.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-8">
                    {currentContent.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="space-y-3">
                    {currentContent.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-1 h-6 bg-[#3b82f6] rounded-full" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Image with 3D background */}
                <div className="relative flex items-center justify-center p-8 lg:p-12 min-h-[300px] lg:min-h-[400px] overflow-hidden">
                  {/* Grid pattern background */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `
                      linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                    `,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* 3D Floating squares */}
                  <div
                    className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-white to-slate-100 border border-slate-200 rounded-lg shadow-lg opacity-60"
                    style={{
                      transform: "perspective(500px) rotateX(10deg) rotateY(-10deg)",
                    }}
                  />
                  <div
                    className="absolute top-16 right-12 w-12 h-12 bg-gradient-to-br from-[#85898d]/10 to-[#85898d]/5 border border-[#85898d]/20 rounded-lg opacity-70"
                    style={{
                      transform: "perspective(500px) rotateX(-5deg) rotateY(15deg)",
                    }}
                  />
                  <div
                    className="absolute bottom-20 left-16 w-10 h-10 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-md shadow-sm opacity-50"
                    style={{
                      transform: "perspective(500px) rotateX(15deg) rotateY(-5deg)",
                    }}
                  />
                  <div
                    className="absolute bottom-12 right-8 w-14 h-14 bg-gradient-to-br from-white to-[#85898d]/5 border border-slate-200 rounded-lg opacity-60"
                    style={{
                      transform: "perspective(500px) rotateX(-10deg) rotateY(10deg)",
                    }}
                  />
                  <div
                    className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-[#85898d]/5 to-transparent border border-[#85898d]/10 rounded-xl opacity-40"
                    style={{
                      transform: "perspective(600px) rotateX(5deg) rotateY(-15deg)",
                    }}
                  />
                  <div
                    className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-br from-[#85898d]/20 to-[#85898d]/5 border border-[#85898d]/30 rounded-md opacity-60"
                    style={{
                      transform: "perspective(400px) rotateX(-8deg) rotateY(12deg)",
                    }}
                  />

                  {/* Blur gradient overlay */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#85898d]/20 to-transparent blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#85898d]/15 to-transparent blur-3xl" />

                  {/* Main Image */}
                  <Image
                    src={currentContent.image}
                    alt={currentContent.title}
                    width={450}
                    height={300}
                    className="relative z-10 w-full max-w-[450px] h-auto"
                  />
                </div>
              </div>

              {/* ==================== DEVELOPER SECTION ==================== */}

              {/* Developer Header with diagonal pattern */}
              <div
                className="relative h-14 lg:h-18 border-t border-b border-slate-200"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    #f8fafc 10px,
                    #f8fafc 11px
                  )`,
                }}
              />

              {/* Developer Content Grid */}
              <div className="grid lg:grid-cols-3 gap-0 bg-white/80">
                <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-slate-200">
                  {/* Header content */}
                  <div className="relative p-6 md:p-8 lg:p-12 overflow-hidden">
                    {/* Background dot decoration */}
                    <div className="absolute -right-8 -top-4 lg:right-4 lg:top-0 w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] opacity-60 pointer-events-none">
                      <Image
                        src="/svg/background/background-dot.svg"
                        alt=""
                        width={280}
                        height={280}
                        className="w-full h-full"
                      />
                    </div>

                    <p className="relative z-10 text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide">
                      DEVELOPER EXPERIENCE
                    </p>
                    <h2 className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                      Developer first platform.
                      <br />
                      <span className="">One unified API, multiple chains.</span>
                    </h2>
                    <p className="relative z-10 text-slate-500 text-base lg:text-lg leading-relaxed max-w-2xl mb-8">
                      Write once, deploy everywhere. A single SDK that works across
                      all major blockchains.
                    </p>

                    {/* Code Editor */}
                    <div className="relative z-10 overflow-hidden shadow-sm">
                      <Image
                        src="/svg/develop_experience/wallet-develop.svg"
                        alt="Developer Experience"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Supported Chains */}
                <div className="flex flex-col">
                  {/* Chains content */}
                  <div className="p-6 md:p-7 lg:p-8 flex-1">
                    <p className="text-slate-400 text-xs font-semibold mb-6 tracking-wider uppercase">
                      Supported Chains
                    </p>

                    {/* Chain list */}
                    <div className="space-y-4">
                      {chains.map((chain, index) => (
                        <div key={index} className="flex items-center gap-3">
                          {/* Chain Logo */}
                          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Image src={chain.logo} alt={chain.name} width={48} height={48} />
                          </div>
                          {/* Chain Info */}
                          <div>
                            <p className="text-slate-800 font-medium">{chain.name}</p>
                            <p className="text-slate-400 text-sm">{chain.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* More chains text */}
                    <p className="text-slate-400 text-sm mt-6">
                      + 10 more chains supported
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom decorative border with vertical lines */}
              <div className="relative h-16 border-t border-slate-200 bg-white/80">
                {/* Vertical line decorations */}
                <div className="absolute inset-0 flex justify-around items-center">
                  <div className="w-px h-full bg-slate-200" />
                  <div className="w-px h-full bg-slate-200" />
                  <div className="w-px h-full bg-slate-200" />
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
