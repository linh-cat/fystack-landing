"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function DeveloperExperience() {
  const { ref, isVisible } = useScrollReveal();
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

  const codeLines = [
    { num: 1, code: 'import { FystackSDK } from "@fystack/sdk"', highlight: ["import", "from"] },
    { num: 2, code: "" },
    { num: 3, code: "const sdk = new FystackSDK({ apiKey: \"your-key\" })", highlight: ["const", "new"] },
    { num: 4, code: "" },
    { num: 5, code: "await sdk.createWallet({", highlight: ["await"] },
    { num: 6, code: '    name: "Team Wallet",', highlight: [] },
    { num: 7, code: "    walletType: WalletType.MPC,", highlight: [] },
    { num: 8, code: "})", highlight: [] },
  ];

  return (
    <section id="developer" className="py-16 lg:py-24 bg-white px-4 scroll-mt-20">
      <div ref={ref} className={`container mx-auto max-w-7xl ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Wrapper */}
        <div className="relative">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-3 border border-slate-200">
            {/* Left Column - Developer content (spans 2 cols) */}
            <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-slate-200">
              {/* Top area with diagonal pattern */}
              <div
                className="relative h-24 lg:h-32 border-b border-slate-200"
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

              {/* Header content */}
              <div className="p-8 lg:p-12">
                <p className="text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide">
                  DEVELOPER EXPERIENCE
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                  Developer first platform.
                  <br />
                  <span className="">One unified API, multiple chains.</span>
                </h2>
                <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-xl mb-8">
                  Write once, deploy everywhere. A single SDK that works across
                  all major blockchains.
                </p>

                {/* Code Editor */}
                <div className="overflow-hidden shadow-sm">
                  <Image src="/svg/develop_experience/wallet-develop.svg" alt="Developer Experience" width={1000} height={1000} />
                </div>
              </div>
            </div>

            {/* Right Column - Supported Chains */}
            <div className="flex flex-col">
              {/* Top area with diagonal pattern */}
              <div
                className="relative h-24 lg:h-32 border-b border-slate-200"
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

              {/* Chains content */}
              <div className="p-6 lg:p-8 flex-1">
                <p className="text-slate-400 text-xs font-semibold mb-6 tracking-wider uppercase">
                  Supported Chains
                </p>

                {/* Chain list */}
                <div className="space-y-4">
                  {chains.map((chain, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {/* Chain Logo */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}
                      >
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

          {/* Bottom decorative section with vertical lines */}
          <div className="grid grid-cols-3 h-16 border-x border-b border-slate-200">
            <div className="border-r border-slate-200" />
            <div className="border-r border-slate-200" />
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}
