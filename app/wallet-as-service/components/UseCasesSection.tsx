"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ArrowDownLeft,
  ChevronDown,
  CircleDollarSign,
  Wallet,
  ArrowLeftRight,
  CheckCircle2,
  BarChart3,
  Users,
  BookOpen,
  RefreshCw,
  Search,
  SlidersHorizontal,
  Plus,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function UseCasesSection() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  const useCases = [
    {
      title: "Exchanges & OTC Desks",
      description:
        "Secure high-volume deposits, withdrawals, and real-time balances across a unified hot, warm, and cold wallet architecture.",
      image: "/png/usecases/stable-coin-payment.png",
    },
    {
      title: "Payment & Stablecoin Apps",
      description:
        "Streamline collections, payouts, and stablecoin operations via treasury automation with customizable policy approvals.",
      image: "/png/usecases/exchange.png",
    },
    {
      title: "Crypto Payment Gateway",
      description:
        "Accept crypto payments from customers, settle on-chain, and receive real-time webhook confirmations across multiple chains.",
      image: "/svg/usecases/crypto-payment-gateway.svg",
    },
  ];

  const sidebarItems = [
    { icon: Wallet, label: "Wallet", active: true },
    { icon: ArrowLeftRight, label: "Transaction", active: false },
    { icon: CheckCircle2, label: "Approval", active: false },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: Users, label: "User Management", active: false },
    { icon: BookOpen, label: "Address Book", active: false },
    { icon: RefreshCw, label: "Automation", active: false },
  ];

  const assetLogos: Record<string, string> = {
    ETH: "/logo/crypto/eth.png",
    USDC: "/logo/crypto/usdc.png",
    USDT: "/logo/crypto/usdt.png",
    SOL: "/logo/crypto/sol.png",
  };

  const walletRows = [
    { name: "Treasury Hot", type: "MPC", assets: ["ETH", "USDC", "USDT"], value: "$1,240,580" },
    { name: "Cold Storage", type: "MPC", assets: ["ETH", "USDT", "SOL"], value: "$890,200" },
    { name: "Payout Wallet", type: "MPC", assets: ["USDC", "USDT", "SOL"], value: "$245,100" },
    { name: "Payment #01", type: "Hyper", assets: ["ETH", "USDC"], value: "$18,340" },
    { name: "Payment #02", type: "Hyper", assets: ["SOL", "USDC"], value: "$5,020" },
  ];

  const workspaces = [
    { name: "Exchange Production", role: "Owner" },
    { name: "Fystack Treasury", role: "Owner" },
    { name: "Payment App", role: "Owner" },
    { name: "Workspace Staging", role: "Viewer" },
    { name: "Crypto Testing", role: "Viewer" },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 2xl:px-0">
        <div
          ref={scrollRef}
          className={`${
            isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          {/* Use Cases Header */}
          <div className="mb-6 sm:mb-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              <span className="text-xs font-semibold text-slate-600 tracking-wider uppercase">
                USE CASES
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              One Platform, Various Use Cases
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
              Fystack provides a unified custody and wallet infrastructure that
              adapts to multiple use cases, from exchanges and OTC desks to
              stablecoin payment apps and enterprise platforms.
            </p>
            <Link
              href="#contact"
              className="text-sm sm:text-base text-slate-600 hover:text-slate-900 border border-slate-200 rounded-full px-4 py-2 inline-flex items-center gap-2"
            >
              Talk to an Architect
            </Link>
          </div>

          {/* Three Column Use Cases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl border border-slate-200 hover:border-[#3b82f6]/50 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="bg-white px-4 pt-4 sm:px-6 sm:pt-6 flex items-center justify-center h-[280px]">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={400}
                    height={300}
                    className="w-3/4 max-h-[240px] h-auto object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2">
                    {useCase.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Section */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 leading-tight">
              Unified Dashboard for Multichain Experience
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Multi-workspace support for different teams, isolate operations by business unit while sharing infrastructure.
            </p>
          </div>

          <div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-12 border border-slate-200">
              {/* Dashboard UI Mockup */}
              <div className="relative bg-white rounded-lg sm:rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-6 sm:mb-8">
                <div className="flex min-h-[420px] sm:min-h-[480px]">
                  {/* Sidebar */}
                  <div className="hidden md:flex flex-col w-56 border-r border-slate-200 bg-white shrink-0">
                    {/* Logo */}
                    <div className="px-4 py-4 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <Image src="/svg/wallet_as_service/fystack-mini.svg" alt="Fystack" width={24} height={24} />
                        <span className="font-bold text-slate-900 text-base">Fystack</span>
                      </div>
                    </div>

                    {/* Workspace Selector */}
                    <div className="px-3 py-3">
                      <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                        <div className="w-7 h-7 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center">
                          <Wallet className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-900 truncate flex-1">Fystack treasury</span>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>

                    {/* Nav Label */}
                    <div className="px-5 pt-2 pb-1">
                      <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">Dashboard</span>
                    </div>

                    {/* Nav Items */}
                    <nav className="flex-1 px-3 space-y-0.5">
                      {sidebarItems.map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                            item.active
                              ? "bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-600 -ml-[1px]"
                              : "text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          <item.icon className={`w-4 h-4 ${item.active ? "text-blue-600" : "text-slate-400"}`} />
                          {item.label}
                        </div>
                      ))}
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 flex flex-col min-w-0">
                    {/* Top Stats Bar */}
                    <div className="p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
                      {/* Total Value Card */}
                      <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200/50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                              <CircleDollarSign className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">Total Value</span>
                          </div>
                          <div className="flex gap-1.5">
                            <span className="text-[10px] sm:text-xs px-2.5 py-1 bg-white rounded-full text-blue-600 font-medium border border-blue-200 flex items-center gap-1">
                              <ArrowDownLeft className="w-3 h-3" /> Receive
                            </span>
                            <span className="text-[10px] sm:text-xs px-2.5 py-1 bg-white rounded-full text-slate-600 font-medium border border-slate-200 flex items-center gap-1">
                              <ArrowUpRight className="w-3 h-3" /> Send
                            </span>
                          </div>
                        </div>
                        <p className="text-xl sm:text-2xl font-bold text-slate-900">$2,399,240</p>
                      </div>

                      {/* Total Wallets Card */}
                      <div className="sm:w-56 bg-white rounded-xl p-4 border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
                              <Wallet className="w-4 h-4 text-slate-600" />
                            </div>
                            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">Total Wallets</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xl sm:text-2xl font-bold text-slate-900">46</p>
                          <span className="text-xs px-3 py-1.5 bg-blue-600 rounded-full text-white font-medium flex items-center gap-1.5 cursor-pointer hover:bg-blue-700 transition-colors">
                            <Plus className="w-3 h-3" /> Create Wallet
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Wallet Table */}
                    <div className="px-4 sm:px-5 pb-4 flex-1">
                      <div className="border border-slate-200 rounded-xl overflow-hidden">
                        {/* Search & Filter */}
                        <div className="flex items-center gap-3 p-3 border-b border-slate-100 bg-slate-50/50">
                          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-slate-200">
                            <Search className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-xs text-slate-400">Search item</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-slate-200">
                            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-xs text-slate-600 font-medium">Filters</span>
                          </div>
                        </div>

                        {/* Table Header */}
                        <div className="grid grid-cols-[1.5fr_0.7fr_1fr_1fr] px-4 py-2.5 border-b border-slate-100 bg-white">
                          <span className="text-xs font-semibold text-slate-900">Name</span>
                          <span className="text-xs font-semibold text-slate-900">Type</span>
                          <span className="text-xs font-semibold text-slate-900">Top Assets</span>
                          <span className="text-xs font-semibold text-slate-900 text-right">Value</span>
                        </div>

                        {/* Table Rows */}
                        {walletRows.map((wallet, i) => (
                          <div
                            key={i}
                            className="grid grid-cols-[1.5fr_0.7fr_1fr_1fr] px-4 py-3 border-b border-slate-50 last:border-b-0 hover:bg-slate-50/50 transition-colors"
                          >
                            <span className="text-xs sm:text-sm text-slate-900 font-medium">{wallet.name}</span>
                            <div className="flex items-center gap-1.5">
                              <div className={`w-2 h-2 rounded-full ${wallet.type === "MPC" ? "bg-blue-500" : "bg-emerald-500"}`} />
                              <span className="text-xs text-slate-600">{wallet.type}</span>
                            </div>
                            <div className="flex items-center -space-x-1.5">
                              {wallet.assets.map((asset, j) => (
                                <div key={j} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-slate-100" title={asset}>
                                  {assetLogos[asset] ? (
                                    <Image src={assetLogos[asset]} alt={asset} width={24} height={24} className="w-full h-full object-cover" />
                                  ) : (
                                    <span className="flex items-center justify-center w-full h-full text-[8px] font-bold text-slate-500">{asset}</span>
                                  )}
                                </div>
                              ))}
                            </div>
                            <span className="text-xs sm:text-sm text-slate-900 text-right font-medium">{wallet.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workspace Popup Overlay */}
                <div className="absolute top-14 left-3 md:left-[12px] w-64 bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 z-10 overflow-hidden">
                  {/* Current Workspace */}
                  <div className="p-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg bg-blue-50/50 border border-blue-100">
                      <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center">
                        <Wallet className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-xs font-semibold text-slate-900 truncate">Fystack treasury</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-600 font-medium ml-auto">Default</span>
                    </div>
                  </div>

                  {/* Other Workspaces */}
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="h-px flex-1 bg-slate-200" />
                      <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">Other Workspaces (9)</span>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div>
                    <div className="space-y-1">
                      {workspaces.map((ws, i) => (
                        <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                          <div className="w-5 h-5 rounded bg-slate-100 border border-slate-200 flex items-center justify-center">
                            <Wallet className="w-2.5 h-2.5 text-slate-500" />
                          </div>
                          <span className="text-[11px] text-slate-700 truncate flex-1">{ws.name}</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${
                            ws.role === "Owner" ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-500"
                          }`}>{ws.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Create New */}
                  <div className="px-3 pb-3">
                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">Create New Workspace</span>
                    </div>
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
