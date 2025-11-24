"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  Code,
  Shield,
  Zap,
  KeyIcon,
  Server,
  Key,
  Lock,
  Globe,
  Database,
  Users,
  ChevronRight,
  Github,
  ExternalLink,
  X,
  Bot,
  ArrowRight,
  Wallet,
  CircleDollarSign,
  ShoppingCart,
  XCircle,
  ChevronDown,
  Twitter,
  Bell,
  Cloud,
  Settings,
  Code2,
  Box,
  Play,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import qrCode from "@/app/images/qr.png";
import appLogo from "@/app/images/app-logo.svg"; // Updated logo import
import MpcVisualization from "./components/MpcVisualization";
import SecurityTabs from "./components/SecurityTabs";
import { DashboardPreview } from "@/components/DashboardPreview";
import dashboardImage from "@/app/images/dashboard.png";
import multichainTreasuryImage from "@/app/images/multichain-treasury.png";
import paymentImage from "@/app/images/payment.png";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AnimatedStat, { Highlight } from "./components/AnimatedStat"; // Updated import
import { SecurityFeatures } from "./components/security-features";
import { Solution } from "./components/Solution";
import ClientPartners from "./components/ClientPartners";

export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const words = ["Stablecoin", "Digital Asset"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const currentWord = words[wordIndex];

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setTypedText(currentWord.slice(0, currentIndex));
        setIsTypingDone(false);
        currentIndex++;
      } else {
        // Done typing, move to next word immediately
        setIsTypingDone(true);
        clearInterval(typingInterval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [wordIndex]);

  const evmChains = [
    {
      name: "Ethereum",
      logo: "ethereum-eth-logo.svg",
      trustWalletPath: "ethereum",
    },
    {
      name: "Polygon",
      logo: "polygon-matic-logo.svg",
      trustWalletPath: "polygon",
    },
    { name: "BNB Chain", logo: "bnb-bnb-logo.svg", trustWalletPath: "bnb" },
    {
      name: "Avalanche",
      logo: "avalanche-avax-logo.svg",
      trustWalletPath: "avalanche",
    },
    {
      name: "Optimism",
      logo: "optimism-ethereum-op-logo.svg",
      trustWalletPath: "optimism",
    },
    {
      name: "Arbitrum",
      logo: "arbitrum-arb-logo.svg",
      trustWalletPath: "arbitrum",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white via-blue-50/50 to-blue-100/80 dark:from-background dark:via-blue-950/20 dark:to-blue-900/30 pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-16 overflow-hidden">
          {/* Blue gradient blobs on sides */}
          <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-200/50 dark:bg-blue-900/30 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-blue-200/50 dark:bg-blue-900/30 rounded-full blur-[120px] pointer-events-none"></div>
          {/* Bottom center gradient */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200/60 dark:bg-blue-950/40 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
            {/* Centered Content */}
            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Wallet className="w-4 h-4 text-[#155dfc]" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  Digital Custody Infrastructure
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-loose lg:leading-[1.5]">
                <span className="text-slate-700 dark:text-slate-200">
                  Enterprise-grade
                </span>
                <br />
                <span className="text-[#155dfc]">
                  {typedText}
                  {!isTypingDone && <span className="animate-pulse">|</span>}
                </span>
                <br />
                <span className="text-slate-700 dark:text-slate-200">
                  custody for teams
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-10 max-w-2xl px-4">
                Automate stablecoin workflows across multiple chains securely at scale with actionable insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold bg-[#155dfc] hover:bg-[#155dfc]/90 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link
                    href="https://app.fystack.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  asChild
                >
                  <Link
                    href="https://docs.fystack.io/mpcium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deploy Self-Hosted
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12 md:mt-16">
            {/* Version Announcement Button */}
            <div className="flex justify-center mb-6">
              <Link
                href="https://docs.fystack.io/changelog/v0.1.8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Fystack v0.1.8 is here!
                </span>
                <span className="text-blue-600 group-hover:translate-x-0.5 transition-transform duration-300">→</span>
              </Link>
            </div>
            <div className="relative rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
              <Image
                src={dashboardImage}
                alt="Fystack dashboard preview"
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="https://www.youtube.com/watch?v=TeyoKqYy_Ls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white/95 text-slate-900 px-5 py-3 shadow-lg hover:bg-[#155dfc] hover:text-white transition-all duration-200"
                >
                  <Play className="w-5 h-5" />
                  <span className="font-medium">Watch Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Client Partners Section */}
        <ClientPartners />

        {/* Solutions for Every Stage Section */}
        <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center text-gray-900 dark:text-gray-100 mb-16">
              Solutions for every stage of growth.
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Startups */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-[#155dfc]/50 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-1 bg-[#155dfc] rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Startups
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Launch your crypto product fast with enterprise-grade wallet infrastructure. No need to build from scratch.
                  </p>
                </div>
              </div>

              {/* Mid-size companies */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-[#155dfc]/50 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-1 bg-[#155dfc] rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Mid-size companies
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Scale your operations with multi-chain treasury management, automated workflows, and team controls.
                  </p>
                </div>
              </div>

              {/* Enterprises */}
              <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-[#155dfc]/50 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-1 bg-[#155dfc] rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Enterprises
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Self-hosted deployment with full compliance controls, audit trails, and dedicated support for your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Savings Section */}
        <section className="relative py-32 bg-white dark:bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                  Ship faster. Save money.
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                  Focus on your product while we handle the infrastructure
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Cost Savings Card */}
                <div className="relative h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-100 via-cyan-50 to-white dark:from-blue-950/50 dark:via-cyan-950/30 dark:to-gray-900 p-10 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-gray-700 dark:text-gray-100 mb-2">
                        $30K–50K
                      </div>
                      <div className="text-lg text-gray-600 dark:text-gray-400">
                        Annual engineering cost savings
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Eliminate the need to build and maintain wallet infrastructure, security protocols, and blockchain integrations in-house.
                    </p>
                  </div>
                </div>

                {/* Time to Market Card */}
                <div className="relative h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-emerald-100 via-teal-50 to-white dark:from-emerald-950/50 dark:via-teal-950/30 dark:to-gray-900 p-10 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-gray-700 dark:text-gray-100 mb-2">
                        3–6 months
                      </div>
                      <div className="text-lg text-gray-600 dark:text-gray-400">
                        Faster time to market
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Skip months of development and go live faster with our production-ready infrastructure and comprehensive SDKs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MPC Technology Section */}
        <section className="relative py-32 bg-gray-50 dark:bg-gray-950">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                    SECURITY
                  </div>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
                    Secured by
                    <br />
                    MPC technology
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Multi-Party Computation ensures your private keys never
                    exist in one place, eliminating single points of failure.
                  </p>
                </div>

                <ul className="space-y-6 pt-4">
                  <li className="space-y-3">
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium dark:border-blue-400/50 dark:bg-blue-500/20 dark:text-blue-100">
                      No single point of failure
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Distributed architecture across independent nodes
                    </p>
                  </li>
                  <li className="space-y-3">
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium dark:border-blue-400/50 dark:bg-blue-500/20 dark:text-blue-100">
                      Split key shares
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Keys divided and stored on different nodes
                    </p>
                  </li>
                  <li className="space-y-3">
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium dark:border-blue-400/50 dark:bg-blue-500/20 dark:text-blue-100">
                      Private key never exists whole
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Complete key never assembled in memory
                    </p>
                  </li>
                  <li className="space-y-3">
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium dark:border-blue-400/50 dark:bg-blue-500/20 dark:text-blue-100">
                      Threshold signing
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Cryptographic signatures without key reconstruction
                    </p>
                  </li>
                </ul>
              </div>

              {/* Right: Visualization */}
              <div className="relative lg:pl-12">
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm">
                  <MpcVisualization />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Tabs Section */}
        <section className="relative py-32 bg-gray-50 dark:bg-gray-950">
          <div className="container mx-auto px-4 max-w-7xl">
            <SecurityTabs />
          </div>
        </section>

        {/* Developer First Platform Section */}
        <section className="relative py-32 bg-gray-50 dark:bg-gray-950">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left: Chain Visualization */}
              <div className="relative lg:pr-12">
                <div className="space-y-6">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">
                    SUPPORTED CHAINS
                  </div>

                  {/* Chain Cards */}
                  <div className="space-y-4">
                    {/* Ethereum */}
                    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200">
                      <div className="flex items-center gap-4">
                        <div className="flex-none">
                          <Image
                            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"
                            alt="Ethereum"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Ethereum
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            EVM Compatible
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Base */}
                    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200">
                      <div className="flex items-center gap-4">
                        <div className="flex-none">
                          <Image
                            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png"
                            alt="Base"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Base
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Layer 2
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Solana */}
                    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200">
                      <div className="flex items-center gap-4">
                        <div className="flex-none">
                          <Image
                            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png"
                            alt="Solana"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Solana
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            High Performance
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>

                    {/* Tron */}
                    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200">
                      <div className="flex items-center gap-4">
                        <div className="flex-none">
                          <Image
                            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tron/info/logo.png"
                            alt="Tron"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Tron
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            USDT Powerhouse
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Note */}
                  <div className="pt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      + 10 more chains supported
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Code Editor & Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                    DEVELOPER EXPERIENCE
                  </div>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
                    Developer first platform.
                    <br />
                    One unified API, multiple chains.
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Write once, deploy everywhere. A single SDK that works
                    across all major blockchains.
                  </p>
                </div>

                {/* Code Editor */}
                <div className="relative rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] overflow-hidden shadow-sm">
                  {/* Editor Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#252526]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                    <div className="ml-4 text-xs text-gray-500 dark:text-gray-300 font-mono">
                      wallet.ts
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm leading-relaxed bg-white dark:bg-[#1e1e1e]">
                    <div className="space-y-2">
                      <div className="flex">
                        <span className="text-gray-400 dark:text-[#858585] select-none w-8 text-right mr-4">
                          1
                        </span>
                        <span className="text-gray-600 dark:text-[#d4d4d4]">
                          <span className="text-purple-600 dark:text-[#c586c0]">
                            import
                          </span>
                          {" { "}
                          <span className="text-blue-600 dark:text-[#4ec9b0]">
                            FystackSDK
                          </span>
                          {" } "}
                          <span className="text-purple-600 dark:text-[#c586c0]">
                            from
                          </span>{" "}
                          <span className="text-green-600 dark:text-[#ce9178]">
                            "@fystack/sdk"
                          </span>
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-400 dark:text-[#858585] select-none w-8 text-right mr-4">
                          2
                        </span>
                        <span></span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-400 dark:text-[#858585] select-none w-8 text-right mr-4">
                          3
                        </span>
                        <span className="text-gray-600 dark:text-[#d4d4d4]">
                          <span className="text-purple-600 dark:text-[#569cd6]">
                            const
                          </span>{" "}
                          <span className="text-blue-600 dark:text-[#9cdcfe]">
                            sdk
                          </span>
                          {" = "}
                          <span className="text-purple-600 dark:text-[#569cd6]">
                            new
                          </span>{" "}
                          <span className="text-blue-600 dark:text-[#4ec9b0]">
                            FystackSDK
                          </span>
                          {"({ "}
                          <span className="text-blue-600 dark:text-[#9cdcfe]">
                            apiKey
                          </span>
                          {": "}
                          <span className="text-green-600 dark:text-[#ce9178]">
                            "your-key"
                          </span>
                          {" })"}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-400 dark:text-[#858585] select-none w-8 text-right mr-4">
                          4
                        </span>
                        <span></span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-400 dark:text-[#858585] select-none w-8 text-right mr-4">
                          5
                        </span>
                        <span className="text-gray-600 dark:text-[#d4d4d4]">
                          <span className="text-purple-600 dark:text-[#c586c0]">
                            await
                          </span>{" "}
                          <span className="text-blue-600 dark:text-[#9cdcfe]">
                            sdk
                          </span>
                          {"."}
                          <span className="text-yellow-600 dark:text-[#dcdcaa]">
                            createWallet
                          </span>
                          {"({"}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-400 dark:text-[#858585] select-none w-8 text-right mr-4">
                          6
                        </span>
                        <span className="text-gray-600 dark:text-[#d4d4d4] pl-6">
                          <span className="text-blue-600 dark:text-[#9cdcfe]">
                            name
                          </span>
                          {": "}
                          <span className="text-green-600 dark:text-[#ce9178]">
                            "Team Wallet"
                          </span>
                          {","}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-400 dark:text-[#858585] select-none w-8 text-right mr-4">
                          7
                        </span>
                        <span className="text-gray-600 dark:text-[#d4d4d4] pl-6">
                          <span className="text-blue-600 dark:text-[#9cdcfe]">
                            walletType
                          </span>
                          {": "}
                          <span className="text-blue-600 dark:text-[#4ec9b0]">
                            WalletType
                          </span>
                          {"."}
                          <span className="text-blue-600 dark:text-[#9cdcfe]">
                            MPC
                          </span>
                          {","}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-400 dark:text-[#858585] select-none w-8 text-right mr-4">
                          8
                        </span>
                        <span className="text-gray-600 dark:text-[#d4d4d4]">
                          {"})"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Linear Style */}
        <section className="relative py-32 bg-white dark:bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
                Built for operational excellence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Everything you need to manage digital assets at scale with
                confidence and control
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Automation */}
              <div className="group relative">
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 h-full overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
                  {/* Visual placeholder */}
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 mb-8 flex items-center justify-center border border-gray-100 dark:border-gray-800">
                    <div className="relative w-full h-full p-8">
                      {/* Automation icon animation visual */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                          <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      {/* Connecting lines */}
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-400/40"></div>
                      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-400/40"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-blue-400/40"></div>
                      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-blue-400/40"></div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Automation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Automate wallet sweeps, fund consolidation, and multi-chain
                    operations. Set rules once, let the system handle the rest.
                  </p>
                </div>
              </div>

              {/* Alert & Monitoring */}
              <div className="group relative">
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 h-full overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
                  {/* Visual placeholder */}
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 mb-8 flex items-center justify-center border border-gray-100 dark:border-gray-800">
                    <div className="relative w-full h-full p-8">
                      {/* Bell icon with notification badges */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center relative">
                          <Bell className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                        </div>
                      </div>
                      {/* Integration logos */}
                      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center">
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                          TG
                        </span>
                      </div>
                      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center">
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                          #
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Alerts & Monitoring
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Real-time notifications via Telegram and Slack. Monitor
                    transactions, wallet balances, and suspicious activities
                    instantly.
                  </p>
                </div>
              </div>

              {/* Analytics & Insights */}
              <div className="group relative">
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 h-full overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
                  {/* Visual placeholder */}
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 mb-8 flex items-center justify-center border border-gray-100 dark:border-gray-800">
                    <div className="relative w-full h-full p-8">
                      {/* Chart representation */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex items-end gap-2 h-20">
                          <div
                            className="flex-1 bg-green-500/20 dark:bg-green-500/30 rounded-t"
                            style={{ height: "40%" }}
                          ></div>
                          <div
                            className="flex-1 bg-green-500/20 dark:bg-green-500/30 rounded-t"
                            style={{ height: "70%" }}
                          ></div>
                          <div
                            className="flex-1 bg-green-500/20 dark:bg-green-500/30 rounded-t"
                            style={{ height: "50%" }}
                          ></div>
                          <div
                            className="flex-1 bg-green-500/30 dark:bg-green-500/40 rounded-t"
                            style={{ height: "90%" }}
                          ></div>
                          <div
                            className="flex-1 bg-green-500/30 dark:bg-green-500/40 rounded-t"
                            style={{ height: "60%" }}
                          ></div>
                        </div>
                      </div>
                      {/* Stats card */}
                      <div className="absolute top-6 right-6 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Volume
                        </div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                          +24.5%
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Analytics & Insights
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Comprehensive dashboard with transaction analytics, wallet
                    performance metrics, and actionable insights for better
                    decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="relative py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 max-w-7xl relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                COMPLIANCE & GOVERNANCE
                <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
                Enterprise-grade compliance
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Meet regulatory requirements with comprehensive controls and
                full transparency
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* User Management */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl blur-xl"></div>
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 lg:p-10 h-full hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-none">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 dark:from-blue-500/20 dark:to-blue-500/10 flex items-center justify-center">
                        <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        User Management
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        Role-based access control with granular permissions for
                        team members and workspaces
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          Custom roles and permissions
                        </li>
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          Multi-workspace support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Approval Groups */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl blur-xl"></div>
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 lg:p-10 h-full hover:border-green-300 dark:hover:border-green-700 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-none">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 dark:from-green-500/20 dark:to-green-500/10 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        Approval Groups
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        Multi-signature approval workflows for sensitive
                        operations and large transactions
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          Threshold-based approvals
                        </li>
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          Custom approval chains
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Audit Trails */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-xl"></div>
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 lg:p-10 h-full hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-none">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 flex items-center justify-center">
                        <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        Audit Trails
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        Complete immutable logs of all actions, changes, and
                        transactions for compliance reporting
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          Immutable event logging
                        </li>
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          Export for compliance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transaction Policies */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl blur-xl"></div>
                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 lg:p-10 h-full hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-none">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 dark:from-orange-500/20 dark:to-orange-500/10 flex items-center justify-center">
                        <Settings className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        Transaction Policies
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        Set spending limits, whitelists, and custom rules to
                        control transaction behavior
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          Spending limits & velocity
                        </li>
                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                          Address whitelisting
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Options Section */}
        <section className="relative py-32 bg-white dark:bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                DEPLOYMENT
                <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
                Deploy on your own infrastructure
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Complete control over your private keys and data with self-hosted deployment
              </p>
            </div>

            <Tabs defaultValue="self-hosted" className="max-w-5xl mx-auto">
              {/* <TabsList className="grid w-full grid-cols-1 mb-12">
                <TabsTrigger value="managed" className="text-base">
                  Managed Service
                </TabsTrigger>
                <TabsTrigger value="self-hosted" className="text-base">
                  Self-Hosted
                </TabsTrigger>
              </TabsList> */}

              {/* Managed Service Tab */}
              <TabsContent value="managed">
                <div className="group relative">
                  <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-10 h-full hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                      <Cloud className="w-4 h-4" />
                      Recommended
                    </div>

                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Managed Service
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                      Get started instantly with our fully managed
                      infrastructure. We handle security, updates, and scaling
                      so you can focus on building.
                    </p>

                    {/* Co-sign Visualization */}
                    <div className="mb-8 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                        Flexible Security with Co-signing
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Step 1: Initiate */}
                        <div className="flex-1">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="text-xs text-center text-gray-600 dark:text-gray-400">
                              Initiate
                            </div>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex-none">
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>

                        {/* Step 2: Co-sign */}
                        <div className="flex-1">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                              <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div className="text-xs text-center text-gray-600 dark:text-gray-400">
                              Co-sign
                            </div>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex-none">
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>

                        {/* Step 3: Verify */}
                        <div className="flex-1">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                              <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="text-xs text-center text-gray-600 dark:text-gray-400">
                              Verify
                            </div>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex-none">
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>

                        {/* Step 4: Execute */}
                        <div className="flex-1">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="text-xs text-center text-gray-600 dark:text-gray-400">
                              Execute
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                        Customers can co-sign and verify transactions before
                        execution
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-none" />
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong>Flexible security:</strong> Co-sign and verify
                          every transaction
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-none" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Enterprise-grade infrastructure with technical support SLA
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-none" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Automatic security updates and patches
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-none" />
                        <span className="text-gray-700 dark:text-gray-300">
                          24/7 monitoring and support
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-none" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Start free, pay as you grow
                        </span>
                      </li>
                    </ul>

                    <Button className="w-full" size="lg" asChild>
                    <Link
                      href="/pricing"
                    >
                      Buy One-Time License
                    </Link>
                  </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Self-Hosted Tab */}
              <TabsContent value="self-hosted">
                <div className="group relative">
                  <div className="relative rounded-2xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-10 h-full hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                          Self-Hosted
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl">
                          Deploy our MPC infrastructure within your own
                          environment for complete control over your private
                          keys and data.
                        </p>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8">
                          Your keys, your coins
                        </div>
                      </div>
                    </div>

                    <Tabs defaultValue="systemd" className="mb-8">
                      <TabsList className="mb-6">
                        <TabsTrigger value="systemd">Systemd</TabsTrigger>
                        <TabsTrigger value="docker">Docker</TabsTrigger>
                        <TabsTrigger value="kubernetes">Kubernetes</TabsTrigger>
                      </TabsList>

                      {/* Systemd Tab */}
                      <TabsContent value="systemd" className="space-y-4">
                        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-[#1e1e1e] p-6 overflow-hidden">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-1.5">
                              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                            </div>
                            <div className="text-xs text-gray-400 font-mono">
                              terminal
                            </div>
                          </div>
                          <div className="font-mono text-sm space-y-2">
                            <div className="flex">
                              <span className="text-gray-500 select-none mr-4">
                                $
                              </span>
                              <span className="text-[#9cdcfe]">
                                sudo systemctl start mpc
                              </span>
                            </div>
                            <div className="flex">
                              <span className="text-gray-500 select-none mr-4">
                                $
                              </span>
                              <span className="text-[#9cdcfe]">
                                sudo systemctl status mpc
                              </span>
                            </div>
                            <div className="text-[#4ec9b0] mt-4">
                              ● mpc.service - Fystack MPC Node
                            </div>
                            <div className="text-gray-400 ml-4">
                              Loaded: loaded (/lib/systemd/system/mpc.service)
                            </div>
                            <div className="text-[#6adc6a] ml-4">
                              Active: active (running)
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Docker Tab */}
                      <TabsContent value="docker" className="space-y-4">
                        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-[#1e1e1e] p-6 overflow-hidden">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-1.5">
                              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                            </div>
                            <div className="text-xs text-gray-400 font-mono">
                              terminal
                            </div>
                          </div>
                          <div className="font-mono text-sm space-y-2">
                            <div className="flex">
                              <span className="text-gray-500 select-none mr-4">
                                $
                              </span>
                              <span className="text-[#9cdcfe]">
                                docker run -d \
                              </span>
                            </div>
                            <div className="text-[#9cdcfe] ml-4">
                              --name fystack-mpc \
                            </div>
                            <div className="text-[#9cdcfe] ml-4">
                              fystack/mpc:latest
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                          <div className="flex gap-2">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                              <div className="w-8 h-8 rounded bg-blue-500/40"></div>
                            </div>
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center -ml-3">
                              <div className="w-8 h-8 rounded bg-blue-500/40"></div>
                            </div>
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center -ml-3">
                              <div className="w-8 h-8 rounded bg-blue-500/40"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              Container-based Deployment
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Isolated, portable MPC nodes
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Kubernetes Tab */}
                      <TabsContent value="kubernetes" className="space-y-4">
                        {/* Deploy Command */}
                        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-[#1e1e1e] p-6">
                          <div className="font-mono text-sm space-y-3">
                            <div className="flex">
                              <span className="text-gray-500 select-none mr-4">
                                $
                              </span>
                              <span className="text-[#9cdcfe]">
                                kubectl apply -f https://fystack.io/deploy/k8s
                              </span>
                            </div>
                            <div className="text-gray-400 text-xs">
                              statefulset.apps/fystack-mpc-node created
                            </div>
                            <div className="text-gray-400 text-xs">
                              service/mpc-node created
                            </div>
                            <div className="flex mt-4">
                              <span className="text-gray-500 select-none mr-4">
                                $
                              </span>
                              <span className="text-[#9cdcfe]">
                                kubectl get pods
                              </span>
                            </div>
                            <div className="text-gray-400 text-xs space-y-1 mt-2">
                              <div>NAME READY STATUS RESTARTS AGE</div>
                              <div>fystack-mpc-node-0 1/1 Running 0 2m</div>
                              <div>fystack-mpc-node-1 1/1 Running 0 2m</div>
                              <div>fystack-mpc-node-2 1/1 Running 0 2m</div>
                            </div>
                          </div>
                        </div>

                        {/* Pod Visualization */}
                        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                          <div className="flex items-center gap-3 mb-6">
                            <Box className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                Kubernetes Cluster
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">
                                3 MPC nodes running
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {/* Pod 0 */}
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                              <div className="flex-1">
                                <div className="text-sm font-mono text-gray-900 dark:text-gray-100">
                                  fystack-mpc-node-0
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                  10.244.0.5 • Running
                                </div>
                              </div>
                              <div className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                                <span>API :8080</span>
                                <span>P2P :9090</span>
                              </div>
                            </div>
                            {/* Pod 1 */}
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                              <div className="flex-1">
                                <div className="text-sm font-mono text-gray-900 dark:text-gray-100">
                                  fystack-mpc-node-1
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                  10.244.1.8 • Running
                                </div>
                              </div>
                              <div className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                                <span>API :8080</span>
                                <span>P2P :9090</span>
                              </div>
                            </div>
                            {/* Pod 2 */}
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                              <div className="flex-1">
                                <div className="text-sm font-mono text-gray-900 dark:text-gray-100">
                                  fystack-mpc-node-2
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                  10.244.2.3 • Running
                                </div>
                              </div>
                              <div className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                                <span>API :8080</span>
                                <span>P2P :9090</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    {/* KMS Integration */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        KMS Integration
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                        Integrate with cloud-based KMS signers to enhance the
                        security of your MPC cluster setup
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-center gap-3">
                          <Cloud className="w-8 h-8 text-orange-500" />
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              AWS KMS
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Amazon Key Management
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-center gap-3">
                          <Cloud className="w-8 h-8 text-blue-500" />
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              Google Cloud KMS
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Cloud Key Management
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reliable Backups */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Reliable Backups
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                        Encrypted, redundant backups safeguard your custody
                        infrastructure against failures and data loss, meeting
                        enterprise standards for business continuity (ISO 27001,
                        SOC2)
                      </p>
                      <div className="space-y-3">
                        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                          <div className="flex items-center gap-2 text-xs mb-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 dark:text-gray-300">
                              Encrypted at rest with AES-256
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs mb-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 dark:text-gray-300">
                              Automatic daily backups with versioning
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs mb-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 dark:text-gray-300">
                              Multi-region geo-redundant storage
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 dark:text-gray-300">
                              Point-in-time recovery capabilities
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      asChild
                    >
                      <Link
                        href="https://docs.fystack.io/mpcium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore Self-Hosted Options
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-blue-100/20 to-transparent dark:from-blue-950/20 dark:via-blue-900/10 dark:to-transparent -z-10"></div>

          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm rounded-full border bg-primary/5 text-primary border-primary/20">
                Use Cases
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                Use Cases
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Our platform provides all the tools developers need to create
                secure, scalable wallet solutions.
              </p>
            </div>

            {/* Cross chain treasury management - Right visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="space-y-4">
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Key className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  Cross chain treasury management
                </h3>
                <p className="text-muted-foreground">
                  Manage digital assets across multiple blockchain networks from
                  a single unified interface. No need to use different apps like Safe, Squads.
                  Automate treasury operations and maintain complete visibility over your multi-chain portfolio.
                </p>

                <div className="mt-6 inline-flex items-center px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-primary font-medium">
                  One wallet, operate multiple chains
                </div>

              </div>
              {/* Cross-Chain Treasury Image */}
              <div className="relative rounded-xl border bg-background/50 overflow-hidden">
                <Image
                  src={multichainTreasuryImage}
                  alt="Cross-chain Treasury Management Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Secure Smart Contract Deployment - COMMENTED OUT */}
            {/*
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative h-[400px] rounded-xl border bg-background/50 p-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%]">
                      <div className="p-3 rounded-lg bg-background/90 border border-muted shadow-sm">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-1.5">
                              <XCircle className="h-4 w-4 text-red-500" />
                              <span className="text-sm font-medium text-red-500">
                                Insecure
                              </span>
                            </div>
                            <div className="bg-red-50 p-2 rounded font-mono text-xs border border-red-100">
                              <div className="text-red-500">
                                PRIVATE_KEY=0xabc123...
                              </div>
                              <div className="text-red-400">
                                // Exposed in .env file
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-1.5">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm font-medium text-green-500">
                                Secure
                              </span>
                            </div>
                            <div className="bg-green-50 p-2 rounded font-mono text-xs border border-green-100">
                              <div className="text-green-500">
                                await wallet.sign(tx);
                              </div>
                              <div className="text-green-400">
                                // OIDC authentication
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[60%]">
                      <div className="p-3 rounded-lg bg-background/90 border border-blue-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Server className="h-5 w-5 text-blue-500" />
                          <span className="font-medium">
                            Smart Contract Deployment
                          </span>
                        </div>
                        <div className="bg-blue-50 p-2 rounded border border-blue-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Database className="h-4 w-4 text-blue-500" />
                              <span className="text-xs font-medium">
                                Contract deployed
                              </span>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-blue-100 text-blue-700 text-xs border-blue-200"
                            >
                              0x1234...5678
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <svg
                      width="100%"
                      height="100%"
                      className="absolute inset-0"
                      style={{ zIndex: -1 }}
                      viewBox="0 0 400 400"
                    >
                      <path
                        d="M 250 100 C 270 250, 270 280, 220 380"
                        stroke="#dcfce7"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 2"
                      />

                      <circle r="3" fill="#22c55e">
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          path="M 250 100 C 270 250, 270 280, 220 380"
                        />
                      </circle>
                    </svg>

                    <div className="absolute top-[50%] left-[30%] p-1.5 rounded-full bg-red-100 border border-red-300 animate-pulse">
                      <Key className="h-4 w-4 text-red-500" />
                    </div>

                    <div className="absolute top-[50%] right-[30%] p-1.5 rounded-full bg-green-100 border border-green-300 animate-pulse">
                      <Lock className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  Secure Smart Contract Deployment
                </h3>
                <p className="text-muted-foreground">
                  Deploy smart contracts without exposing private keys in your
                  codebase or CI/CD pipeline, using secure OpenID Connect (OIDC)
                  authentication.
                </p>

                <div className="space-y-6 mt-2">
                  <div>
                    <h4 className="text-base font-semibold text-red-500 mb-3">
                      The Problem: .env File Security Risk
                    </h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Accidental commits of private keys to public
                          repositories
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Unauthorized access to deployment environments
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Complete loss of funds if compromised
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-green-500 mb-3">
                      The Solution: MPC wallet + OIDC Authentication
                    </h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          No private keys in your codebase or CI/CD pipeline
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Authenticate smart contract deployments using OIDC
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Sign transactions securely through our API with proper
                          access controls
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            */}

            {/* Crypto Payment - Left visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative rounded-xl border bg-background/50 overflow-hidden">
                <Image
                  src={paymentImage}
                  alt="Crypto Payment"
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-4">
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Crypto Payment</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate cryptocurrency payments into your
                  applications with our simple API.
                </p>
              </div>
            </div>

            {/* Trading agents with approval - Right visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="space-y-4">
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  Trading agents with approval
                </h3>
                <p className="text-muted-foreground">
                  Prevent unauthorized access or bad trades with multi-layer
                  approval workflows. Ensure every automated trading action is
                  reviewed and approved before execution, eliminating security
                  risks.
                </p>

                {/* Security Highlight */}
                <div className="mt-4 p-4 border border-primary/20 rounded-xl bg-primary/5">
                  <h4 className="text-base font-semibold text-primary mb-2">
                    Enhanced Security Controls
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Multi-signature approval required</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Transaction limits and guardrails</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Real-time monitoring and alerts</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl border bg-background/50 p-6 overflow-hidden">
                {/* Bot Interface */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[280px] h-[400px] bg-background rounded-xl border-2 border-primary/20 overflow-hidden scale-90">
                    {/* Bot Header */}
                    <div className="p-4 border-b bg-primary/5">
                      <div className="flex items-center gap-3">
                        <Bot className="h-6 w-6 text-primary" />
                        <span className="font-medium">Trading Bot</span>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 space-y-4">
                      <div className="flex items-start gap-2 animate-slide-left">
                        <div className="p-2 rounded bg-primary/10 max-w-[80%]">
                          <p className="text-sm">/swap 10 ETH to USDC</p>
                        </div>
                      </div>
                      <div
                        className="flex items-start gap-2 justify-end animate-slide-left"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <div className="p-2 rounded bg-yellow-500/10 border border-yellow-500/20 max-w-[90%]">
                          <p className="text-sm font-medium mb-1">
                            ⚠️ Approval Required
                          </p>
                          <p className="text-xs mb-2">
                            Swap 10 ETH → USDC
                            <br />
                            Est. $25,400
                          </p>
                          <div className="flex gap-1">
                            <button className="px-2 py-1 text-xs bg-green-600 text-white rounded">
                              ✓ Approve
                            </button>
                            <button className="px-2 py-1 text-xs bg-red-600 text-white rounded">
                              ✗ Reject
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Centralized Exchange - Left visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              {/* CEX Visualization */}
              <div className="relative h-[400px] rounded-xl border bg-background/50 p-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[900px] h-full mx-auto">
                    {/* Source Wallets */}
                    <div className="absolute top-[25%] left-[15%]">
                      <div className="p-3 rounded-lg bg-background border border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-5 w-5 text-blue-500" />
                          <span className="text-sm">Deposit Wallet 1</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[45%] left-[15%]">
                      <div className="p-3 rounded-lg bg-background border border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-5 w-5 text-blue-500" />
                          <span className="text-sm">Deposit Wallet 2</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[65%] left-[15%]">
                      {" "}
                      {/* Verified position */}
                      <div className="p-3 rounded-lg bg-background border border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-5 w-5 text-blue-500" />
                          <span className="text-sm">Deposit Wallet 3</span>
                        </div>
                      </div>
                    </div>

                    {/* Hot Wallet */}
                    <div className="absolute top-1/2 left-[65%] -translate-y-1/2">
                      {" "}
                      {/* Moved from 75% to 65% */}
                      <div className="p-4 rounded-lg bg-background border border-green-500/20">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-6 w-6 text-green-500" />
                          <span>Hot Wallet</span>
                        </div>
                      </div>
                    </div>

                    {/* SVG with converging paths */}
                    <svg
                      width="100%"
                      height="100%"
                      className="absolute inset-0"
                      style={{ zIndex: -1 }}
                      viewBox="0 0 900 400"
                    >
                      {/* Define the paths - all converging to the exact same point */}
                      <g
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-blue-500/30"
                      >
                        <path d="M 135 100 Q 350 100, 585 200" fill="none" />
                        <path d="M 135 180 Q 350 180, 585 200" fill="none" />
                        <path
                          d="M 135 290 Q 350 290, 585 200"
                          fill="none"
                        />{" "}
                        {/* Adjusted Y coordinate to match Wallet 3 center */}
                      </g>

                      {/* Animated dots */}
                      <g>
                        <circle r="3" fill="#3B82F6">
                          <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M 135 100 Q 350 100, 585 200"
                          />
                        </circle>

                        <circle r="3" fill="#3B82F6">
                          <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M 135 180 Q 350 180, 585 200"
                            begin="0.6s"
                          />
                        </circle>

                        <circle r="3" fill="#3B82F6">
                          <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M 135 290 Q 350 290, 585 200"
                            begin="1.2s"
                          />
                        </circle>
                      </g>
                    </svg>

                    {/* Background Particles */}
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CircleDollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Centralized Exchange & Payment Integration</h3>
                <p className="text-muted-foreground">
                  Automatically sweep and consolidate funds from multiple
                  wallets into a central exchange wallet with customizable rules
                  and schedules for efficient liquidity management.
                </p>

                {/* CEX Highlight Box */}
                <div className="mt-4 p-4 border border-primary/20 rounded-xl bg-primary/5">
                  <h4 className="text-base font-semibold text-primary mb-2">
                    Optimized for High-Volume Trading
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Automated fund consolidation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Hot/cold wallet management</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Instant settlement processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 md:py-28 bg-white dark:bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#155dfc]/10 text-[#155dfc] hover:bg-[#155dfc]/10 border-0">
                Case Studies
              </Badge>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                Trusted by innovative teams
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                See how companies are building with Fystack
              </p>
            </div>

            <Tabs defaultValue="gaian" className="w-full">
              <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12 bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
                <TabsTrigger value="gaian" className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                  Payment Platform
                </TabsTrigger>
                <TabsTrigger value="apescreener" className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                  Treasury
                </TabsTrigger>
                <TabsTrigger value="minepath" className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                  Gaming Infra
                </TabsTrigger>
              </TabsList>

              {/* Gaian - Payment Platform */}
              <TabsContent value="gaian">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="min-h-[320px]">
                    <Link
                      href="https://gaian.network/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#155dfc] transition-colors"
                    >
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 hover:text-[#155dfc] transition-colors">
                        Gaian
                      </h3>
                    </Link>
                    <p className="text-[#155dfc] font-medium mb-6">Payment Platform</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Automated MPC wallet sweeps for seamless fund management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Multi-chain deposit collection across EVM, Solana</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Real-time webhook notifications for payment events</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Enterprise-grade security with threshold signatures</span>
                      </li>
                    </ul>
                    <Link
                      href="https://fystack.io/blog/automating-mpc-wallet-sweeps-for-gaian-a-fystack-use-case"
                      target="_blank"
                      className="inline-flex items-center gap-2 mt-8 text-[#155dfc] font-medium hover:underline"
                    >
                      Read case study <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <Link
                    href="https://gaian.network/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden aspect-video">
                      <Image
                        src="/case_studies/gaian_pay.jpeg"
                        alt="Gaian Payment Platform"
                        width={600}
                        height={338}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                </div>
              </TabsContent>

              {/* Apescreener - Treasury */}
              <TabsContent value="apescreener">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="min-h-[320px]">
                    <Link
                      href="https://apescreener.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#155dfc] transition-colors"
                    >
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 hover:text-[#155dfc] transition-colors">
                        Apescreener
                      </h3>
                    </Link>
                    <p className="text-[#155dfc] font-medium mb-6">All-Chain Treasury Management</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Unified treasury view across multiple blockchains</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Multi-sig approvals for large fund movements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Real-time portfolio analytics and reporting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Automated treasury operations and alerts</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="https://apescreener.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden aspect-video">
                      <Image
                        src="/case_studies/apes_screenshot.png"
                        alt="Apescreener Treasury Management"
                        width={600}
                        height={338}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                </div>
              </TabsContent>

              {/* Minepath - Gaming Infra */}
              <TabsContent value="minepath">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="min-h-[320px]">
                    <Link
                      href="https://play.minepath.fun/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#155dfc] transition-colors"
                    >
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 hover:text-[#155dfc] transition-colors">
                        Minepath
                      </h3>
                    </Link>
                    <p className="text-[#155dfc] font-medium mb-6">Gaming Infrastructure</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">On-chain Minecraft server built on Solana</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Wallet infrastructure for gamers to deposit tokens, SOL and play games</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Scalable wallet creation for thousands of players</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">Low-latency transaction processing for gaming UX</span>
                      </li>
                    </ul>
                    <Link
                      href="https://fystack.io/blog/fystack-x-minepath-wallet-infrastructure-for-the-mine-to-earn-model-in-minecraft"
                      target="_blank"
                      className="inline-flex items-center gap-2 mt-8 text-[#155dfc] font-medium hover:underline"
                    >
                      Read case study <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <Link
                    href="https://play.minepath.fun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden aspect-video">
                      <Image
                        src="/case_studies/minepaht_game.jpg"
                        alt="Minepath Gaming Infrastructure"
                        width={600}
                        height={338}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-950">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
                    Simple, transparent pricing
                  </h2>
                  <p className="max-w-[700px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                    Choose the plan that fits your needs. All plans include our
                    core security features.
                  </p>
                </div>
              </div>

              {/* Pricing Tabs */}
              <Tabs defaultValue="saas" className="mt-12">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                  <TabsTrigger value="saas">Cloud (SaaS)</TabsTrigger>
                  <TabsTrigger value="self-hosted">Self-Hosted</TabsTrigger>
                </TabsList>

                {/* SaaS Pricing */}
                <TabsContent value="saas">
                  {/* Billing Toggle */}
                  <div className="flex items-center justify-center gap-2 mb-10">
                    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                      <button
                        onClick={() => setBillingPeriod("monthly")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                          billingPeriod === "monthly"
                            ? "bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setBillingPeriod("yearly")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                          billingPeriod === "yearly"
                            ? "bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        Yearly
                      </button>
                    </div>
                    <span className="text-[#155dfc] text-sm font-medium">
                      -20%
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {/* Developer (Free) Plan */}
                    <Card className="relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 w-full min-w-0">
                      <CardContent className="p-8 flex-1 flex flex-col">
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Developer</h3>
                          <div className="flex items-baseline gap-1 mb-3">
                            <span className="text-4xl font-bold text-slate-900 dark:text-white">Free</span>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Perfect for individual developers starting with Fystack wallet infrastructure.
                          </p>
                        </div>

                        <Button
                          className="w-full mb-8 rounded-full py-6 text-sm font-medium bg-[#155dfc] hover:bg-[#1350d9] text-white"
                          asChild
                        >
                          <Link href="https://app.fystack.io" target="_blank" rel="noopener noreferrer">
                            Get started <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>

                        <ul className="space-y-4 flex-1">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">Up to 2 MPC wallets</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">1,000 Hyper wallets</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">100 crypto payments</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">1 workspace, 3 users</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">Email support</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">Community access</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Starter Plan */}
                    <Card className="relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 border-[#155dfc] w-full min-w-0">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-[#155dfc] hover:bg-[#155dfc] text-white px-4 py-1 text-xs font-medium">
                          Most Popular
                        </Badge>
                      </div>
                      <CardContent className="p-8 flex-1 flex flex-col">
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Starter</h3>
                          <div className="flex items-baseline gap-1 mb-3">
                            <span className="text-4xl font-bold text-slate-900 dark:text-white">${billingPeriod === "monthly" ? 74 : 59}</span>
                            <span className="text-slate-500 dark:text-slate-400">/month</span>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Ideal for startups looking to scale their crypto payment infrastructure.
                          </p>
                        </div>

                        <Button
                          className="w-full mb-8 rounded-full py-6 text-sm font-medium bg-[#155dfc] hover:bg-[#1350d9] text-white"
                          asChild
                        >
                          <Link href="https://app.fystack.io" target="_blank" rel="noopener noreferrer">
                            Get started <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>

                        <ul className="space-y-4 flex-1">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">All Developer features</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">Up to 3 MPC wallets</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">3,000 Hyper wallets</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">500 crypto payments</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">2 workspaces, 5 users</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">3 blockchain networks</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">Advanced security features</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">Basic support</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Team Plan */}
                    <Card className="relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 w-full min-w-0">
                      <CardContent className="p-8 flex-1 flex flex-col">
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Team</h3>
                          <div className="flex items-baseline gap-1 mb-3">
                            <span className="text-4xl font-bold text-slate-900 dark:text-white">${billingPeriod === "monthly" ? 118 : 94}</span>
                            <span className="text-slate-500 dark:text-slate-400">/month</span>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Complete solution for growing teams wanting to maximize their wallet operations.
                          </p>
                        </div>

                        <Button
                          className="w-full mb-8 rounded-full py-6 text-sm font-medium bg-[#155dfc] hover:bg-[#1350d9] text-white"
                          asChild
                        >
                          <Link href="https://app.fystack.io" target="_blank" rel="noopener noreferrer">
                            Get started <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>

                        <ul className="space-y-4 flex-1">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">All Starter features</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">Up to 20 MPC wallets</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">10,000 Hyper wallets</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">2,000 crypto payments</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">5 workspaces, unlimited users</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">5 blockchain networks</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">Priority Telegram support</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">Advanced analytics</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Enterprise Plan */}
                  <Card className="mt-8 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900 dark:to-blue-950/20 rounded-2xl border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                          <Badge className="mb-4 bg-blue-600 hover:bg-blue-600 text-white text-xs">
                            Custom Solution
                          </Badge>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Enterprise
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 mb-4">
                            For large organizations with custom requirements
                          </p>
                          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                            Custom pricing
                          </div>
                          <ul className="grid md:grid-cols-2 gap-3">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">Unlimited everything</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">Dedicated support</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">Custom integrations</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">SLA guarantees</span>
                            </li>
                          </ul>
                        </div>
                        <div className="md:w-auto">
                          <Button
                            size="lg"
                            className="bg-[#155dfc] hover:bg-[#1350d9] text-white rounded-full px-8"
                            asChild
                          >
                            <Link href="https://t.me/anhthind" target="_blank" rel="noopener noreferrer">
                              Talk to Founders <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Self-Hosted Pricing */}
                <TabsContent value="self-hosted">
                  <div className="max-w-4xl mx-auto mt-8">
                    <Card className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          What's Included
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8">
                          Everything you need to build secure wallet infrastructure
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-none" />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">7-Day Deployment Support</div>
                              <div className="text-sm text-slate-500">Guided onboarding to launch your infrastructure fast</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-none" />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">MPC Technology</div>
                              <div className="text-sm text-slate-500">Secure multi-party computation infrastructure</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-none" />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">Multi-Chain Support</div>
                              <div className="text-sm text-slate-500">10+ blockchain networks supported</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-none" />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">Self-Hosted</div>
                              <div className="text-sm text-slate-500">Deploy on your own infrastructure</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-none" />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">Updates & Security Patches</div>
                              <div className="text-sm text-slate-500">Regular updates included for 1 year</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-none" />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">Documentation</div>
                              <div className="text-sm text-slate-500">Comprehensive guides and API docs</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-none" />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">Commercial Use</div>
                              <div className="text-sm text-slate-500">Use in unlimited commercial projects</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 mt-8">
                          <Button size="lg" className="text-base px-8 bg-[#155dfc] hover:bg-[#1350d9] text-white rounded-full" asChild>
                            <Link href="/pricing">
                              View Details <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                          <Button size="lg" className="bg-white hover:bg-gray-50 text-slate-700 border border-gray-300 rounded-full dark:bg-transparent dark:text-white dark:border-gray-600" asChild>
                            <Link href="https://t.me/anhthind" target="_blank" rel="noopener noreferrer">
                              Talk to Founders
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-24 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent)]"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit mx-auto bg-primary/10 text-primary border-primary/20">Testimonials</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by developers worldwide</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  See what our customers have to say about our platform.
                </p>
                        </div>
                        </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-0.5">
                      {[...Array( 5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 fill-primary text-primary">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                      </div>
                    <p className="text-muted-foreground">
                      "SecureWallet's MPC technology has completely transformed how we handle crypto assets. The security features are top-notch, and the API is incredibly easy to work with."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10"></div>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">CTO, CryptoFin</p>
                    </div>
                        </div>
                        </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 fill-primary text-primary">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                      </div>
                    <p className="text-muted-foreground">
                      "The multi-approval feature has been a game-changer for our treasury management. We can now ensure that no single person has complete control over our funds."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10"></div>
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">Founder, BlockTech</p>
                    </div>
                        </div>
                        </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 fill-primary text-primary">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                      </div>
                    <p className="text-muted-foreground">
                      "We integrated SecureWallet into our DeFi platform in just a few days. The documentation is excellent, and their support team was incredibly helpful throughout the process."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10"></div>
                      <div>
                        <p className="font-medium">Alex Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Lead Developer, DeFiHub</p>
                    </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to get started?
                </h2>
                <p className="text-primary-foreground/80 md:text-xl">
                  Start building secure wallet solutions with confidence using
                  our platform.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://sandbox.fystack.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-lg font-medium hover:underline"
                  >
                    Live demo <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-1 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link
                      href="https://t.me/anhthind"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Talk to founders
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">100+</h3>
                    <p className="text-primary-foreground/80">
                      Supported tokens
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">10+</h3>
                    <p className="text-primary-foreground/80">
                      Blockchain networks
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">&lt;1hr</h3>
                    <p className="text-primary-foreground/80">Response time</p>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">24/7</h3>
                    <p className="text-primary-foreground/80">
                      Enterprise support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Add this just before the closing </div> of the main flex-col min-h-screen container */}
      {/* Floating Telegram Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://t.me/+9AtC0z8sS79iZjFl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#155dfc] hover:bg-[#155dfc]/90 text-white px-7 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            className="flex-shrink-0 mr-3"
          >
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          <span className="text-lg font-medium">Join our community</span>
        </Link>
      </div>
    </div>
  );
}
