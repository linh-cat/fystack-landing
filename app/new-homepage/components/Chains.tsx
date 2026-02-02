"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const chains = [
  { name: "Ethereum", logo: "ethereum-eth-logo.svg" },
  { name: "Solana", logo: "solana-sol-logo.svg" },
  { name: "Polygon", logo: "polygon-matic-logo.svg" },
  { name: "Base", logo: "base-logo.svg" },
  { name: "Arbitrum", logo: "arbitrum-arb-logo.svg" },
  { name: "Optimism", logo: "optimism-ethereum-op-logo.svg" },
  { name: "BNB Chain", logo: "bnb-bnb-logo.svg" },
  { name: "Avalanche", logo: "avalanche-avax-logo.svg" },
  { name: "Tron", logo: "tron-trx-logo.svg" },
];

export function Chains() {
  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 border-slate-700 text-slate-400"
          >
            Multi-Chain Support
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            One API, all major blockchains
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Create wallets, sign transactions, and manage assets across 10+
            blockchains with a unified interface.
          </p>
        </div>

        {/* Chain logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {chains.map((chain, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-slate-900/50 transition-colors"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                <Image
                  src={`https://raw.githubusercontent.com/ApeScreener/crypto-icons/main/icons/${chain.logo}`}
                  alt={chain.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 md:w-10 md:h-10"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <span className="text-xs md:text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                {chain.name}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-3 p-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-800 flex items-center justify-center text-slate-500">
              <span className="text-lg font-semibold">+5</span>
            </div>
            <span className="text-xs md:text-sm text-slate-500">more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
