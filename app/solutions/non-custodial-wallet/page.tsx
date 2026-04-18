"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  ArrowUpRight,
  Smartphone,
  Server,
  ShieldCheck,
  KeyRound,
  UserCheck,
  Lock,
  RefreshCw,
  Globe,
  Code,
  Zap,
} from "lucide-react";
import { CTAFooter } from "@/app/new-homepage/components/CTAFooter";
import { JoinCommunity } from "@/app/new-homepage/components";
import { useScrollReveal } from "@/app/new-homepage/hooks/useScrollReveal";

const CONTACT_URL = "https://app.youform.com/forms/qyanutyi";

/* ── 3-Share Visualization ── */
function ThreeShareVisualization() {
  const shares = [
    {
      icon: Smartphone,
      label: "User Device",
      sub: "Mobile / Browser",
      badge: "SHARE 1",
      color: "#3b82f6",
      bg: "#eff6ff",
      border: "#bfdbfe",
    },
    {
      icon: Server,
      label: "Your Backend",
      sub: "Any cloud or on-prem",
      badge: "SHARE 2",
      color: "#7c3aed",
      bg: "#f5f3ff",
      border: "#ddd6fe",
    },
    {
      icon: ShieldCheck,
      label: "Trusted Co-Signer",
      sub: "Fystack / TEE enclave",
      badge: "SHARE 3",
      color: "#059669",
      bg: "#ecfdf5",
      border: "#bbf7d0",
    },
  ];

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
        {/* Threshold badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
            <KeyRound className="w-4 h-4 text-[#3b82f6]" />
            <span className="text-xs font-bold text-slate-700 tracking-wide">
              2-OF-3 THRESHOLD SIGNING
            </span>
          </div>
        </div>

        {/* Shares row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {shares.map((share) => {
            const Icon = share.icon;
            return (
              <div
                key={share.label}
                className="relative bg-white rounded-xl border shadow-sm p-4 lg:p-5"
                style={{ borderColor: share.border }}
              >
                <div
                  className="absolute -top-2 left-4 px-2 py-0.5 text-[10px] font-bold text-white rounded"
                  style={{ backgroundColor: share.color }}
                >
                  {share.badge}
                </div>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: share.bg }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: share.color }}
                    strokeWidth={1.8}
                  />
                </div>
                <p className="text-sm font-bold text-slate-800 leading-tight mb-0.5">
                  {share.label}
                </p>
                <p className="text-[11px] text-slate-500">{share.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Connectors to ceremony */}
        <div className="flex justify-center mb-6">
          <svg
            width="100%"
            height="48"
            viewBox="0 0 300 48"
            preserveAspectRatio="none"
            className="max-w-[420px]"
          >
            <path
              d="M 50 0 C 50 24, 150 24, 150 48"
              stroke="#3b82f6"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M 150 0 L 150 48"
              stroke="#7c3aed"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M 250 0 C 250 24, 150 24, 150 48"
              stroke="#059669"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Signing ceremony */}
        <div className="bg-white rounded-xl border border-blue-200 shadow-md shadow-blue-100/50 p-5 max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#7c3aed] flex items-center justify-center">
              <KeyRound className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">
                Signing Ceremony
              </p>
              <p className="text-[11px] text-slate-500">
                Any 2 of 3 shares required — no single party can sign alone
              </p>
            </div>
          </div>

          <div className="space-y-1.5">
            {[
              { text: "User approves on device", done: true, tone: "blue" },
              { text: "Backend applies policy check", done: true, tone: "violet" },
              { text: "Co-signer attests", done: true, tone: "emerald" },
              { text: "Threshold met — transaction signed", done: true, tone: "blue" },
            ].map((step) => {
              const ring =
                step.tone === "blue"
                  ? "bg-blue-100 border-blue-200"
                  : step.tone === "violet"
                  ? "bg-violet-100 border-violet-200"
                  : "bg-emerald-100 border-emerald-200";
              const tick =
                step.tone === "blue"
                  ? "#3b82f6"
                  : step.tone === "violet"
                  ? "#7c3aed"
                  : "#059669";
              return (
                <div
                  key={step.text}
                  className="flex items-center gap-2.5 bg-slate-50 rounded-md px-3 py-2"
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${ring}`}
                  >
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2.5 5l1.5 1.5L7.5 3"
                        stroke={tick}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[11px] font-medium text-slate-700">
                    {step.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-500 mt-5 italic">
          No share ever leaves its device. No single party — not even Fystack —
          can move funds alone.
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
                <Smartphone className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span className="text-xs font-semibold text-slate-700 tracking-wide">
                  NON-CUSTODIAL MPC WALLET
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Wallets Your Users Truly Own
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                A shared-custody MPC model where the user, your backend, and a
                trusted co-signer each hold a key share. No single party — not
                even you — can move funds alone.
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

            <div>
              <ThreeShareVisualization />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    {
      num: "01",
      icon: KeyRound,
      title: "Distributed key generation",
      description:
        "An MPC ceremony creates three key shares simultaneously. No full private key ever exists in one place — not during generation, not in storage, not during signing.",
    },
    {
      num: "02",
      icon: UserCheck,
      title: "User approves on device",
      description:
        "The mobile share is bound to the user's device and unlocked with biometrics or a passcode. The user must consent to every signature.",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Threshold signing",
      description:
        "Any two of the three shares collaborate to produce a valid signature. No share ever leaves its host — they exchange only MPC protocol messages.",
    },
    {
      num: "04",
      icon: RefreshCw,
      title: "Refresh & recover",
      description:
        "Shares can be rotated (proactive refresh) or regenerated if a device is lost, without ever reconstructing the private key.",
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
            /HOW IT WORKS/
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 max-w-3xl leading-tight">
            True MPC — no seed phrases, no single points of failure
          </h2>
        </div>

        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLastCol = (index + 1) % 4 === 0;
            return (
              <div
                key={step.num}
                className={`p-6 lg:p-8 ${
                  !isLastCol ? "md:border-r border-slate-200" : ""
                } ${
                  index < steps.length - 2 ? "border-b md:border-b-0" : ""
                } border-slate-200`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400">
                    {step.num}
                  </span>
                  <Icon
                    className="w-5 h-5 text-[#3b82f6]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-base lg:text-lg font-bold text-slate-800 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const { ref, isVisible } = useScrollReveal();

  const items = [
    {
      icon: UserCheck,
      title: "True user sovereignty",
      description:
        "Users hold a share on their own device. Without their approval, funds cannot move — even if your infrastructure is fully compromised.",
    },
    {
      icon: Lock,
      title: "No single point of failure",
      description:
        "Losing one share doesn't lose the wallet. Compromising one party doesn't compromise the funds. Threshold cryptography by design.",
    },
    {
      icon: RefreshCw,
      title: "Social & device recovery",
      description:
        "Recover access when a user loses their phone with proactive share refresh, no seed phrase, no broken self-custody UX.",
    },
    {
      icon: Globe,
      title: "Deploy anywhere",
      description:
        "Backend share runs on any cloud, on-prem, or edge. Mobile share runs on iOS, Android, or web. Co-signer runs with Fystack, a TEE, or your HSM.",
    },
    {
      icon: Code,
      title: "Drop-in SDKs",
      description:
        "Native iOS, Android, and JavaScript SDKs handle share storage, MPC protocol messages, and signing — your app just calls sign().",
    },
    {
      icon: Zap,
      title: "Policy & compliance aware",
      description:
        "The backend share enforces spending limits, approval workflows, and AML screening before participating in signing.",
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
            /WHY IT MATTERS/
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 max-w-3xl leading-tight">
            The security of self-custody with the UX of a fintech app
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
      title: "Consumer crypto wallets",
      description:
        "Ship a Web3 wallet in your app where users can't lock themselves out and you can't unilaterally move their funds.",
    },
    {
      title: "Neobanks & fintechs",
      description:
        "Offer self-custodial stablecoin accounts with compliance controls, KYC-gated flows, and fraud protection on the backend share.",
    },
    {
      title: "Embedded Web3 experiences",
      description:
        "Add signing to games, social apps, and marketplaces without onboarding users to seed phrases or external wallets.",
    },
    {
      title: "Institutional co-custody",
      description:
        "Let a trader hold one share, the firm hold another, and a compliance provider hold the third — enforcing dual control by cryptography.",
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
            Where shared-custody wins
          </h2>
        </div>

        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200">
          {cases.map((c, index) => {
            const isLastCol = (index + 1) % 2 === 0;
            const isLastRow = index >= cases.length - 2;
            return (
              <div
                key={c.title}
                className={`p-6 lg:p-10 ${
                  !isLastCol ? "md:border-r border-slate-200" : ""
                } ${!isLastRow ? "border-b border-slate-200" : ""}`}
              >
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3 leading-snug">
                  {c.title}
                </h3>
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
            Ship a non-custodial wallet your users trust
          </h2>
          <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Talk to our team about integrating Fystack&apos;s MPC SDKs into your
            mobile app, backend, and co-signer infrastructure.
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

export default function NonCustodialWalletPage() {
  return (
    <div className="flex flex-col min-h-screen font-geist-mono">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Benefits />
        <UseCases />
        <ContactBanner />
        <CTAFooter />
      </main>

      <JoinCommunity />
    </div>
  );
}
