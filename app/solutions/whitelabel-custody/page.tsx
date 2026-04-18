"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  ArrowUpRight,
  Shield,
  Palette,
  Layers,
  Lock,
  ClipboardCheck,
  Rocket,
  Building2,
  CreditCard,
  Wallet,
  Landmark,
  Smartphone,
  Server,
  Cloud,
} from "lucide-react";
import { CTAFooter } from "@/app/new-homepage/components/CTAFooter";
import { JoinCommunity } from "@/app/new-homepage/components";
import { useScrollReveal } from "@/app/new-homepage/hooks/useScrollReveal";

const CONTACT_URL = "https://app.youform.com/forms/qyanutyi";

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
          className={`py-20 lg:py-32 ${
            isVisible
              ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-white/70 border border-slate-200 rounded-full">
              <Shield className="w-3.5 h-3.5 text-[#3b82f6]" />
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                WHITELABEL CUSTODY PLATFORM
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Launch Your Own Branded Custody Service
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Ship a production-ready custody product under your brand — powered by
              Fystack&apos;s MPC infrastructure, multi-chain support, and enterprise
              compliance. Self-host on your cloud or run managed.
            </p>

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
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const { ref, isVisible } = useScrollReveal();

  const items = [
    {
      icon: Palette,
      title: "Fully Branded Experience",
      description:
        "Your logo, your domain, your look and feel. Customers see your brand at every touchpoint — from the dashboard to the API.",
    },
    {
      icon: Shield,
      title: "MPC-Secured Key Management",
      description:
        "Institutional-grade cryptography based on threshold signatures. No single private key ever exists — eliminating single points of failure.",
    },
    {
      icon: Layers,
      title: "Multi-Chain Out of the Box",
      description:
        "Support EVM networks, Solana, and Tron from day one. Add new chains without re-architecting your stack.",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance & Governance",
      description:
        "Role-based access control, transaction policies, full audit trails, and approval workflows — ready for SOC 2 and ISO 27001 programs.",
    },
    {
      icon: Server,
      title: "Self-Host or Managed",
      description:
        "Deploy on your own cloud — AWS, GCP, Azure, or on-prem — for full data sovereignty. Or let us run it for you.",
    },
    {
      icon: Rocket,
      title: "Go Live in Weeks, Not Years",
      description:
        "Skip the in-house custody R&D. Clean REST API, SDKs, and dashboards ship what would otherwise take a dedicated team 18+ months.",
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
            /CAPABILITIES/
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 max-w-3xl leading-tight">
            Everything you need to run a custody business
          </h2>
        </div>

        <div className="mx-4 overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mt-px -ml-px">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-6 lg:p-8 border-t border-l border-slate-200 bg-gradient-to-b from-slate-50/40 to-transparent"
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

function WhoItsFor() {
  const { ref, isVisible } = useScrollReveal();

  const items = [
    {
      icon: Building2,
      title: "Fintechs Entering Crypto",
      description:
        "Add stablecoin and crypto services to your existing fintech stack without building custody from scratch.",
    },
    {
      icon: Landmark,
      title: "Banks & Neobanks",
      description:
        "Offer digital asset custody to customers with the compliance posture your regulator expects.",
    },
    {
      icon: CreditCard,
      title: "Payment Processors",
      description:
        "Add stablecoin rails to settlements and payouts, with sweep automation and gas sponsorship built in.",
    },
    {
      icon: Wallet,
      title: "Exchanges & Brokers",
      description:
        "Launch a branded custody arm alongside your trading platform — hot wallet ops to cold storage.",
    },
    {
      icon: Smartphone,
      title: "Wallet-as-a-Service Providers",
      description:
        "Resell custody infrastructure to your own customers with your branding and pricing.",
    },
    {
      icon: Lock,
      title: "Regulated Enterprises",
      description:
        "Need data residency, audit logs, and on-prem deployment? Self-host Fystack in your own compliance boundary.",
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
            /WHO IT&apos;S FOR/
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 max-w-3xl leading-tight">
            Built for teams launching regulated crypto products
          </h2>
        </div>

        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 bg-white">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isLastCol = (index + 1) % 3 === 0;
            const isLastRow = index >= items.length - 3;
            return (
              <div
                key={item.title}
                className={`p-6 lg:p-8 ${
                  !isLastCol ? "md:border-r border-slate-200" : ""
                } ${!isLastRow ? "border-b border-slate-200" : ""}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#3b82f6]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-slate-800 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DeploymentOptions() {
  const { ref, isVisible } = useScrollReveal();

  const options = [
    {
      icon: Server,
      title: "Self-Hosted",
      description:
        "Run Fystack inside your own cloud or on-prem. Keep every key, every log, every byte inside your compliance boundary.",
      features: [
        "AWS, GCP, Azure, Hetzner, or bare metal",
        "Integrate with your KMS (AWS KMS, GCP KMS)",
        "Full data residency and audit control",
        "Open-core codebase you can inspect",
      ],
    },
    {
      icon: Cloud,
      title: "Managed",
      description:
        "Let Fystack operate the infrastructure. You focus on your product while we handle uptime, upgrades, and security patches.",
      features: [
        "99.9% uptime SLA",
        "Built-in monitoring and alerts",
        "SOC 2 / ISO 27001 aligned operations",
        "Predictable, flat pricing at scale",
      ],
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
            /DEPLOYMENT/
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 max-w-3xl leading-tight">
            Your infrastructure, your choice
          </h2>
        </div>

        <div className="mx-4 grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-200">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className={`p-8 lg:p-12 ${
                  index === 0 ? "lg:border-r border-b lg:border-b-0 border-slate-200" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#3b82f6]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800">
                    {option.title}
                  </h3>
                </div>

                <p className="text-slate-500 leading-relaxed text-sm mb-6">
                  {option.description}
                </p>

                <div className="space-y-3">
                  {option.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1 h-5 bg-[#3b82f6] rounded-full flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cloud provider strip */}
        <div className="mt-6 mx-4 border border-slate-200 px-6 py-10 lg:py-14">
          <p className="text-center text-sm md:text-base font-semibold text-slate-500 tracking-wider uppercase mb-8 lg:mb-10">
            Deploy On-Prem or Your Favorite Cloud
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20">
            {cloudProviders.map((provider) => (
              <div
                key={provider.alt}
                className="h-16 md:h-20 flex items-center justify-center opacity-90 hover:opacity-100 transition-transform duration-300 ease-out hover:scale-110"
              >
                <Image
                  src={provider.src}
                  alt={provider.alt}
                  width={180}
                  height={80}
                  className="object-contain h-full w-auto max-w-[180px]"
                />
              </div>
            ))}
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
            Ready to launch your custody platform?
          </h2>
          <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Talk to our team to see how Fystack&apos;s whitelabel custody platform fits
            your product, compliance, and go-to-market plan.
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

const cloudProviders = [
  { src: "/logo/aws.webp", alt: "AWS" },
  { src: "/logo/googlecloud.webp", alt: "Google Cloud" },
  { src: "/logo/Microsoft_Azure_Logo.webp", alt: "Azure" },
  { src: "/logo/hetzner-logo.svg", alt: "Hetzner" },
  { src: "/logo/digitalocean.svg", alt: "DigitalOcean" },
];

export default function WhitelabelCustodyPage() {
  return (
    <div className="flex flex-col min-h-screen font-geist-mono">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Capabilities />
        <WhoItsFor />
        <DeploymentOptions />
        <ContactBanner />
        <CTAFooter />
      </main>

      <JoinCommunity />
    </div>
  );
}
