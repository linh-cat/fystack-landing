"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

type TabKey = "system" | "docker" | "kubernetes";

export function SelfHostedDeployment() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<TabKey>("kubernetes");

  const tabs = [
    { key: "system" as TabKey, label: "System" },
    { key: "docker" as TabKey, label: "Docker" },
    { key: "kubernetes" as TabKey, label: "Kubernetes" },
  ];

  const backupFeatures = [
    "Encrypted at rest with AES-256",
    "Multi-region geo-redundant storage",
    "Automatic daily backups with versioning",
    "Point-in-time recovery capabilities",
  ];

  return (
    <section id="self-hosting" className="bg-white pb-4 lg:pb-10 2xl:pb-20 scroll-mt-20">
      <div ref={ref} className={`max-w-[1536px] px-4 2xl:px-0 mx-auto  ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Wrapper */}
        <div className="relative">
          {/* Main content with striped sidebars */}
          <div className="relative flex">
            {/* Main grid */}
            <div className="flex-1 grid lg:grid-cols-2 gap-0 border border-slate-200 relative">
              {/* Left Column - Content */}
              <div className="p-6 md:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
                {/* Badge */}
                <p className="text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide">
                  /DEPLOYMENT/
                </p>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                  Deploy on your own infrastructure
                </h2>

                {/* Subtitle */}
                <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                  Complete control over your private keys and data with self-hosted deployment
                </p>

                {/* Self-Hosted Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Self-Hosted
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Deploy our MPC infrastructure within your own environment for complete control over your private keys and data.
                  </p>
                </div>

                {/* KMS Integration Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    KMS Integration
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Integrate with cloud-based KMS signers to enhance the security of your MPC cluster setup
                  </p>

                  {/* KMS Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* AWS KMS Card */}
                    <div className="border rounded-lg p-4 bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <Image
                          src="/svg/self_host/aws.svg"
                          alt="AWS"
                          width={32}
                          height={32}
                        />
                        <div>
                          <p className="font-semibold text-slate-800">AWS KMS</p>
                          <p className="text-xs text-slate-400 font-mono">Amazon Key Management</p>
                        </div>
                      </div>
                    </div>

                    {/* Google Cloud KMS Card */}
                    <div className="border border-slate-200 rounded-lg p-4 bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <Image
                          src="/svg/self_host/google-cloud.svg"
                          alt="Google Cloud"
                          width={32}
                          height={32}
                        />
                        <div>
                          <p className="font-semibold text-slate-800">Google Cloud KMS</p>
                          <p className="text-xs text-slate-400 font-mono">Cloud Key Management</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reliable Backups Section */}
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Reliable Backups
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Encrypted, redundant backups safeguard your custody infrastructure against failures and data loss, meeting enterprise standards for business continuity (ISO 27001, SOC2)
                  </p>

                  {/* Backup Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {backupFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-1 h-5 bg-[#3b82f6] rounded-full flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Tabs and Image */}
              <div className="relative flex flex-col">
                {/* Tabs */}
                <div className="flex border-b border-slate-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex-1 py-4 text-sm font-medium transition-all ${
                        activeTab === tab.key
                          ? "bg-[#3b82f6] text-white"
                          : "bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Image Area */}
                <div className="relative flex-1 flex flex-col items-center justify-center p-8 min-h-[400px]">
                  {/* Blue gradient background */}
                  <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-br from-[#3b82f6]/5 to-[#3b82f6]/10 pointer-events-none blur-lg" />
                  <div className="absolute top-[100px] left-0 w-[100px] h-[100px] bg-gradient-to-br from-[#3b82f6]/5 to-[#3b82f6]/10 pointer-events-none blur-lg" />
                  <div className="absolute top-[100px] right-0 w-[100px] h-[100px] bg-gradient-to-br from-[#3b82f6]/5 to-[#3b82f6]/10 pointer-events-none blur-lg" />

                  {/* Kubernetes Cluster Image */}
                  <Image
                    src="/svg/self_host/kubernet-cluster.svg"
                    alt="Kubernetes Cluster"
                    width={400}
                    height={300}
                    className="relative z-10 w-full max-w-[400px] h-auto"
                  />

                  {/* Deploy Button with background dots */}
                  <div className="relative mt-8">
                  {/* Background dots */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Image
                        src="/svg/background/background-dot.svg"
                        alt="Background"
                        width={200}
                        height={200}
                        className="w-[200px] h-auto opacity-40"
                      />
                    </div>

                    {/* Button */}
                    <a className="relative z-10 px-8 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm text-center" href="/compare" target="_blank" rel="noopener noreferrer">
                      Deploy Self-Hosted
                    </a>
                  </div>
                </div>
              </div>

              {/* Center "+" icon */}
              <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-slate-200 rounded items-center justify-center z-10">
                <span className="text-slate-400 text-lg font-light">+</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
