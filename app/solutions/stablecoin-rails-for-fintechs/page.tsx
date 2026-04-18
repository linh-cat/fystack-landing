"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  ArrowUpRight,
  Coins,
  Wallet,
  Fuel,
  RefreshCw,
  Send,
  ShieldCheck,
  Webhook,
  Landmark,
  Globe2,
  Building2,
  Users,
  Zap,
  Code2,
  Server,
  Lock,
  MapPin,
} from "lucide-react";
import { CTAFooter } from "@/app/new-homepage/components/CTAFooter";
import { JoinCommunity } from "@/app/new-homepage/components";
import { useScrollReveal } from "@/app/new-homepage/hooks/useScrollReveal";

const CONTACT_URL = "https://app.youform.com/forms/qyanutyi";

/* ── Stablecoin Rail Architecture Visualization ── */
function RailArchitecture() {
  return (
    <div className="relative w-full bg-gradient-to-br from-[#eef4fd] to-[#dbe8fa] rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative">
        {/* Top: Fintech app */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-3 max-w-sm mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#3b82f6]" strokeWidth={1.6} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-800">Your Fintech App</p>
              <p className="text-[11px] text-slate-500">No web3 code required</p>
            </div>
            <span className="text-[10px] font-mono text-slate-400">REST / SDK</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <svg width="2" height="22" viewBox="0 0 2 22">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="22"
              stroke="#93b4f0"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
          </svg>
        </div>

        {/* Middle: Fystack engine */}
        <div className="bg-white rounded-xl border-2 border-blue-200 shadow-md shadow-blue-100/50 p-5 mb-3 max-w-xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#7c3aed] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-800">
                Fystack Stablecoin Engine
              </p>
              <p className="text-[11px] text-slate-500">
                MPC wallets · gas · policy · reconciliation
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {[
                { label: "USDC", logo: "/logo/crypto/usdc.webp" },
                { label: "USDT", logo: "/logo/crypto/usdt.webp" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-full px-2 py-1"
                >
                  <Image
                    src={t.logo}
                    alt={t.label}
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 rounded-full"
                  />
                  <span className="text-[10px] font-bold text-slate-700">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "MPC Wallets", icon: Wallet },
              { label: "Auto-Sweep", icon: RefreshCw },
              { label: "Gas Sponsor", icon: Fuel },
              { label: "Payouts", icon: Send },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="bg-slate-50 rounded-md px-2 py-2 flex items-center gap-1.5"
                >
                  <Icon
                    className="w-3.5 h-3.5 text-[#3b82f6]"
                    strokeWidth={1.8}
                  />
                  <span className="text-[10px] font-semibold text-slate-700">
                    {m.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <svg width="2" height="22" viewBox="0 0 2 22">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="22"
              stroke="#93b4f0"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
          </svg>
        </div>

        {/* Bottom: chains */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Settlement Networks
            </p>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] text-green-600 font-medium">Live</span>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Ethereum", logo: "/logo/crypto/eth.webp" },
              { label: "Tron", logo: "/logo/crypto/tron.webp" },
              { label: "Solana", logo: "/logo/crypto/sol.webp" },
              { label: "Polygon", logo: "/logo/crypto/polygon.webp" },
              { label: "BSC", logo: "/logo/crypto/bnb.webp" },
              { label: "Avalanche", logo: "/logo/crypto/avax.webp" },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-slate-50 rounded-md px-3 py-3 border border-slate-100 flex items-center gap-2.5"
              >
                <Image
                  src={c.logo}
                  alt={c.label}
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-full flex-shrink-0"
                />
                <span className="text-xs font-bold text-slate-700">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-500 mt-5 italic">
          You focus on your product. Fystack handles every chain.
        </p>
      </div>
    </div>
  );
}

function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f1fc] via-[#f0f4f8] to-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, #cbd5e1 1px, transparent 1px),
              linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-10 left-0 w-[1000px] h-[50px] sm:h-[200px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-3xl" />
      <div className="absolute top-10 right-0 w-[1000px] h-[50px] sm:h-[200px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-3xl" />

      <div className="relative max-w-[1440px] mx-auto px-4 lg:px-16 2xl:px-0">
        <div
          ref={ref}
          className={`py-16 lg:py-24 ${
            isVisible
              ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-white/70 border border-slate-200 rounded-full">
                <Coins className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span className="text-xs font-semibold text-slate-700 tracking-wide">
                  STABLECOIN RAILS FOR FINTECHS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Launch Stablecoin Rails Without Web3 Expertise
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-2xl leading-relaxed">
                Integrate with blockchains through a single REST API. No smart
                contracts, no gas management, no chain integration. Save months
                — or years — of in-house engineering.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8 max-w-xl">
                {[
                  { value: "Weeks", label: "Time to launch" },
                  { value: "0", label: "Web3 engineers needed" },
                  { value: "10+", label: "Chains out of the box" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/70 border border-slate-200 rounded-lg p-3"
                  >
                    <p className="text-2xl font-bold text-[#3b82f6]">{s.value}</p>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-6 sm:px-8 py-6 text-sm sm:text-base font-semibold bg-[#3b82f6] hover:bg-[#3b82f6]/90 transition-all shadow-lg shadow-[#3b82f6]/20"
                  asChild
                >
                  <Link
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6 sm:px-8 py-6 text-sm sm:text-base font-semibold border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-all"
                  asChild
                >
                  <Link
                    href="https://docs.fystack.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <RailArchitecture />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NoWeb3Banner() {
  const { ref, isVisible } = useScrollReveal();

  const skipList = [
    "Running full nodes or RPC infrastructure",
    "Writing or auditing smart contracts",
    "Managing gas tokens across chains",
    "Hiring MPC / cryptography engineers",
    "Building reorg-safe transaction monitoring",
    "Implementing address indexing and webhooks",
  ];

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mx-4 border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide">
                /NO WEB3 EXPERTISE NEEDED/
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                Skip the blockchain learning curve
              </h2>
              <p className="text-slate-500 text-base lg:text-lg leading-relaxed">
                Your team keeps shipping fintech features. Fystack handles the
                blockchain plumbing — the parts that usually require dedicated
                web3 hires and 12–24 months of in-house R&amp;D.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                You don&apos;t have to build
              </p>
              <div className="space-y-2">
                {skipList.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white border border-slate-200 rounded-md px-3 py-2.5"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <circle cx="7" cy="7" r="6" fill="#fee2e2" />
                      <path
                        d="M4.5 4.5l5 5M9.5 4.5l-5 5"
                        stroke="#dc2626"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-sm text-slate-600 line-through">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const { ref, isVisible } = useScrollReveal();

  const items = [
    {
      icon: Wallet,
      title: "Multi-chain MPC Wallets",
      description:
        "Programmatically create wallets across EVM, Tron, and Solana. Secured by threshold signatures, managed through one API.",
    },
    {
      icon: RefreshCw,
      title: "Auto-Sweep & Collection",
      description:
        "Incoming deposits are swept to treasury wallets on a schedule or threshold. No manual reconciliation, no idle funds.",
    },
    {
      icon: Fuel,
      title: "Gas Sponsorship",
      description:
        "Your users never hold native tokens. Fystack pays gas in the background and bills you a simple per-transaction fee.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Controls",
      description:
        "Transaction policies, address screening, and approval workflows — ready for your AML program and audit requirements.",
    },
    {
      icon: Webhook,
      title: "Reconciliation & Webhooks",
      description:
        "Real-time events for every deposit, confirmation, and payout. Reconcile on-chain state against your ledger in seconds.",
    },
  ];

  return (
    <section className="bg-slate-50/40 py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mb-12 md:mb-16 px-4">
          <p className="text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide">
            /CAPABILITIES/
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 max-w-3xl leading-tight">
            Every stablecoin building block your fintech needs
          </h2>
        </div>

        <div className="mx-4 overflow-hidden border border-slate-200 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mt-px -ml-px">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-6 lg:p-8 border-t border-l border-slate-200"
                >
                  <Icon
                    className="w-6 h-6 text-slate-600 mb-5 group-hover:text-[#3b82f6] transition-colors"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base lg:text-lg font-bold text-slate-800 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const { ref, isVisible } = useScrollReveal();

  const cases = [
    {
      icon: Globe2,
      title: "Cross-border payments",
      description:
        "Settle B2B and B2C payments across corridors in minutes using USDC or USDT — bypass correspondent banking delays.",
    },
    {
      icon: Send,
      title: "Merchant & contractor payouts",
      description:
        "Pay suppliers, creators, and gig workers in stablecoins with bulk disbursement APIs and automatic FX handling.",
    },
    {
      icon: Users,
      title: "Remittances",
      description:
        "Offer faster, cheaper remittance corridors with on/off-ramp partners plugged in alongside Fystack wallets.",
    },
    {
      icon: Landmark,
      title: "B2B settlement",
      description:
        "Settle between partner fintechs, PSPs, or neobanks on shared stablecoin rails with full reconciliation.",
    },
  ];

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mb-12 md:mb-16 px-4">
          <p className="text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide">
            /USE CASES/
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 max-w-3xl leading-tight">
            Built for the payment flows fintechs actually run
          </h2>
        </div>

        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200">
          {cases.map((c, index) => {
            const Icon = c.icon;
            const isLastCol = (index + 1) % 2 === 0;
            const isLastRow = index >= cases.length - 2;
            return (
              <div
                key={c.title}
                className={`p-6 lg:p-10 ${
                  !isLastCol ? "md:border-r border-slate-200" : ""
                } ${!isLastRow ? "border-b border-slate-200" : ""}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                    <Icon
                      className="w-5 h-5 text-[#3b82f6]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-slate-800 leading-snug">
                    {c.title}
                  </h3>
                </div>
                <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                  {c.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DataSovereignty() {
  const { ref, isVisible } = useScrollReveal();

  const pillars = [
    {
      icon: Server,
      title: "Self-host anywhere",
      description:
        "Deploy on your own AWS, GCP, Azure, or on-prem. You own the infrastructure, we ship the software.",
    },
    {
      icon: MapPin,
      title: "Data residency built in",
      description:
        "Meet local data residency and regulatory requirements — from GDPR to central bank rules across APAC and LatAm.",
    },
    {
      icon: Lock,
      title: "Your keys, your data",
      description:
        "Key shares, transaction logs, and customer data never leave your cloud. Fystack has no access by design.",
    },
  ];

  const clouds = [
    { src: "/logo/aws.webp", alt: "AWS" },
    { src: "/logo/googlecloud.webp", alt: "Google Cloud" },
    { src: "/logo/Microsoft_Azure_Logo.webp", alt: "Azure" },
    { src: "/logo/hetzner-logo.svg", alt: "Hetzner" },
    { src: "/logo/digitalocean.svg", alt: "DigitalOcean" },
  ];

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mb-12 md:mb-16 px-4">
          <p className="text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide">
            /DATA SOVEREIGNTY/
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 max-w-3xl leading-tight">
            Your data, your cloud, your control
          </h2>
          <p className="text-slate-500 text-base lg:text-lg leading-relaxed mt-4 max-w-2xl">
            Self-host Fystack inside your compliance boundary. Keep every
            wallet, every log, every byte under your jurisdiction — not ours.
          </p>
        </div>

        <div className="mx-4 overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mt-px -ml-px">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative p-6 lg:p-8 border-t border-l border-slate-200 bg-gradient-to-b from-slate-50/40 to-transparent"
                >
                  <Icon
                    className="w-6 h-6 text-slate-600 mb-5 group-hover:text-[#3b82f6] transition-colors"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base lg:text-lg font-bold text-slate-800 mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 mx-4 border border-slate-200 px-6 py-10 lg:py-14">
          <p className="text-center text-sm md:text-base font-semibold text-slate-500 tracking-wider uppercase mb-8 lg:mb-10">
            Deploy On-Prem or Your Favorite Cloud
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20">
            {clouds.map((provider) => (
              <div
                key={provider.alt}
                className="h-14 md:h-16 flex items-center justify-center opacity-90 hover:opacity-100 transition-transform duration-300 ease-out hover:scale-110"
              >
                <Image
                  src={provider.src}
                  alt={provider.alt}
                  width={160}
                  height={72}
                  className="object-contain h-full w-auto max-w-[160px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeToMarket() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-slate-50/40 py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mx-4 grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-200 bg-white">
          {/* In-house path */}
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Building in-house
            </p>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">
              12–24 months, 5+ engineers
            </h3>
            <div className="space-y-2">
              {[
                "MPC / cryptography research",
                "Per-chain integration and RPC ops",
                "Secure key management from scratch",
                "Reorg handling & indexer",
                "Compliance tooling from scratch",
                "Ongoing chain upgrades & hard-fork support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* With Fystack */}
          <div className="p-8 lg:p-12 bg-gradient-to-br from-[#eef4fd] to-white">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-wider mb-2">
              With Fystack
            </p>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">
              Weeks, existing backend team
            </h3>
            <div className="space-y-2">
              {[
                "One REST API across all chains",
                "Clean REST API and drop-in SDKs",
                "MPC, gas, and sweeps handled for you",
                "Built-in webhooks and reconciliation",
                "Compliance controls out of the box",
                "Fystack ships chain upgrades for you",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <Code2
                    className="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0"
                    strokeWidth={2}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mx-4 border border-slate-200 bg-gradient-to-br from-[#eef4fd] to-white p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
            Launch your stablecoin rail in weeks
          </h2>
          <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Talk to our team to map Fystack to your fintech product — payments,
            payouts, settlement, or all of the above.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold bg-[#3b82f6] hover:bg-[#3b82f6]/90 transition-all shadow-lg shadow-[#3b82f6]/20"
            asChild
          >
            <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              Contact Us
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function StablecoinRailsForFintechsPage() {
  return (
    <div className="flex flex-col min-h-screen font-geist-mono">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <NoWeb3Banner />
        <Capabilities />
        <DataSovereignty />
        <TimeToMarket />
        <UseCases />
        <ContactBanner />
        <CTAFooter />
      </main>

      <JoinCommunity />
    </div>
  );
}
