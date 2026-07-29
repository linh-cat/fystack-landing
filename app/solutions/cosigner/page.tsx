"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  AlertTriangle,
  ArrowUpRight,
  Ban,
  Check,
  Cpu,
  Eye,
  Fingerprint,
  KeyRound,
  Link2Off,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
  Users,
} from "lucide-react";
import { CTAFooter } from "@/app/new-homepage/components/CTAFooter";
import { JoinCommunity } from "@/app/new-homepage/components";
import { CosignerTerminal } from "@/app/new-homepage/components/Cosigners";
import { useScrollReveal } from "@/app/new-homepage/hooks/useScrollReveal";

const CONTACT_URL = "https://app.youform.com/forms/qyanutyi";

/* ── What-you-see-is-what-you-sign visualization ── */

const DECODED_FIELDS = [
  { label: "Chain", value: "Base", mono: false },
  { label: "Contract", value: "USDC · 0x8335…2913", verified: "Verified" },
  { label: "Method", value: "transfer(address,uint256)", mono: true },
  { label: "Recipient", value: "0x510e94…e56370", verified: "Whitelisted" },
  { label: "Amount", value: "10.00 USDC ≈ $10.01" },
  { label: "Network fee", value: "0.00021 ETH ≈ $0.68" },
];

const LOCAL_CHECKS = [
  "Calldata decoded on-device — not by the server that requested it",
  "Recipient matched against your address book and travel-rule list",
  "Amount, limits, and policy re-evaluated inside the enclave",
];

function WhatYouSignVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef4fd] to-[#dbe8fa] p-5 sm:p-7">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
          <span className="flex items-center gap-2 text-xs font-bold tracking-wide text-slate-700">
            <Eye className="h-4 w-4 text-[#3b82f6]" />
            DECODED ON THE COSIGNER
          </span>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            MATCHES RAW PAYLOAD
          </span>
        </div>

        <dl className="divide-y divide-slate-100">
          {DECODED_FIELDS.map((field) => (
            <div
              key={field.label}
              className="flex items-center justify-between gap-4 px-5 py-2.5"
            >
              <dt className="text-xs text-slate-400">{field.label}</dt>
              <dd className="flex items-center gap-2 text-right">
                <span
                  className={`text-xs text-slate-700 ${
                    field.mono ? "font-mono" : "font-medium"
                  }`}
                >
                  {field.value}
                </span>
                {field.verified && (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    <Check className="h-2.5 w-2.5" />
                    {field.verified}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="space-y-2 border-t border-slate-100 bg-slate-50/60 px-5 py-4">
          {LOCAL_CHECKS.map((check) => (
            <div key={check} className="flex items-start gap-2">
              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-600" />
              <span className="text-xs leading-relaxed text-slate-600">
                {check}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-slate-100 px-5 py-4">
          <span className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600">
            Reject
          </span>
          <span className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#3b82f6] px-4 py-2 text-xs font-semibold text-white">
            <Fingerprint className="h-3.5 w-3.5" />
            Hold to sign
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Sections ── */

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
      <div className="absolute top-10 left-0 h-[50px] w-[1000px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-3xl sm:h-[200px]" />
      <div className="absolute top-10 right-0 h-[50px] w-[1000px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-3xl sm:h-[200px]" />

      <div className="relative mx-auto max-w-[1440px] px-4 lg:px-16 2xl:px-0">
        <div
          ref={ref}
          className={`py-16 lg:py-24 ${
            isVisible
              ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3b82f6] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3b82f6]" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-slate-700">
                  COSIGNER · COMING SOON
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Sign from a hardware enclave
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Cosigner is an independent signer that Fystack never controls.
                It holds its own key share, decodes every transaction locally,
                and shows you exactly what you are about to sign — before a
                signature exists.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-[#3b82f6] px-6 py-6 text-sm font-semibold shadow-lg shadow-[#3b82f6]/20 transition-all hover:bg-[#3b82f6]/90 sm:px-8 sm:text-base"
                  asChild
                >
                  <Link
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the waitlist
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-300 bg-white px-6 py-6 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 sm:px-8 sm:text-base"
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

            <div className="flex justify-center">
              <Image
                src="/png/cosigners/fystack-mobile-cosigner-sign-request-usdc-transfer.webp"
                alt="Fystack mobile cosigner decoding a 1,000 USDC transfer on Sepolia Ethereum, with the signing input match verified before hold-to-sign"
                width={556}
                height={780}
                priority
                className="h-auto w-full max-w-[300px] lg:max-w-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouSign() {
  const { ref, isVisible } = useScrollReveal();

  const prevents = [
    {
      icon: Ban,
      title: "Blind signing",
      description:
        "No opaque hex to approve. The cosigner renders the human-readable intent of the payload, and refuses anything it cannot decode.",
    },
    {
      icon: AlertTriangle,
      title: "Tampered payloads",
      description:
        "If a compromised backend or middleware alters the recipient or amount after a request is created, the decoded view no longer matches — and signing stops.",
    },
    {
      icon: Link2Off,
      title: "Address poisoning",
      description:
        "Look-alike addresses from clipboard swaps or dusting attacks are caught against your address book before the signature is produced.",
    },
    {
      icon: ShieldCheck,
      title: "Malicious approvals",
      description:
        "Unlimited token approvals and unexpected contract calls are surfaced explicitly instead of hidden inside calldata.",
    },
  ];

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-[1440px] px-4 lg:px-16 2xl:px-0 ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mb-12 px-4 md:mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wide text-[#3b82f6]">
            /WHAT YOU SEE IS WHAT YOU SIGN/
          </p>
          <h2 className="max-w-3xl text-2xl font-bold leading-tight text-slate-800 md:text-3xl lg:text-4xl">
            Validate the transaction locally, before it is signed
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 lg:text-lg">
            The cosigner does not trust the request it receives. It decodes the
            raw payload itself, checks it against your policies, and asks you to
            confirm the result — so what appears on screen is provably what gets
            signed.
          </p>
        </div>

        <div className="mx-4 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <WhatYouSignVisual />

          <div className="grid gap-0 border border-slate-200 sm:grid-cols-2">
            {prevents.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-6 lg:p-7 ${
                    index % 2 === 0 ? "sm:border-r border-slate-200" : ""
                  } ${index < 2 ? "border-b border-slate-200" : ""}`}
                >
                  <Icon
                    className="mb-4 h-5 w-5 text-[#3b82f6]"
                    strokeWidth={1.5}
                  />
                  <h3 className="mb-2 text-base font-bold leading-snug text-slate-800 lg:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
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

function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    {
      num: "01",
      icon: KeyRound,
      title: "Pair with a scoped token",
      description:
        "Enroll a device or a server with a one-time pairing token bound to a single workspace. Pairing can be revoked at any time without touching the wallet.",
    },
    {
      num: "02",
      icon: Cpu,
      title: "Generate a share in the enclave",
      description:
        "The key share is created inside Secure Enclave, StrongBox, or a server TEE, and never leaves it. Fystack never sees it and cannot reconstruct it.",
    },
    {
      num: "03",
      icon: Eye,
      title: "Decode and verify locally",
      description:
        "Every sign request is decoded on the cosigner itself, checked against your policies, and displayed in full before anything is approved.",
    },
    {
      num: "04",
      icon: Fingerprint,
      title: "Contribute a partial signature",
      description:
        "On confirmation the enclave produces its part of the MPC signature. Without it the threshold is never met and the transaction cannot settle.",
    },
  ];

  return (
    <section className="bg-slate-50/40 py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-[1440px] px-4 lg:px-16 2xl:px-0 ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mb-12 px-4 md:mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wide text-[#3b82f6]">
            /HOW IT WORKS/
          </p>
          <h2 className="max-w-3xl text-2xl font-bold leading-tight text-slate-800 md:text-3xl lg:text-4xl">
            A key share you hold, in hardware you control
          </h2>
        </div>

        <div className="mx-4 grid grid-cols-1 gap-0 border border-slate-200 bg-white md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLastCol = (index + 1) % 4 === 0;
            return (
              <div
                key={step.num}
                className={`p-6 lg:p-8 ${
                  !isLastCol ? "border-slate-200 md:border-r" : ""
                } ${
                  index < steps.length - 2 ? "border-b md:border-b-0" : ""
                } border-slate-200`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">
                    {step.num}
                  </span>
                  <Icon className="h-5 w-5 text-[#3b82f6]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-base font-bold leading-snug text-slate-800 lg:text-lg">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
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

function FormFactors() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-[1440px] px-4 lg:px-16 2xl:px-0 ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mb-12 px-4 md:mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wide text-[#3b82f6]">
            /TWO FORM FACTORS/
          </p>
          <h2 className="max-w-3xl text-2xl font-bold leading-tight text-slate-800 md:text-3xl lg:text-4xl">
            A phone in your pocket, or a daemon in your infrastructure
          </h2>
        </div>

        <div className="mx-4 border border-slate-200">
          {/* Mobile */}
          <div className="grid items-center gap-8 border-b border-slate-200 p-6 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
            <div className="flex justify-center">
              <Image
                src="/png/cosigners/fystack-mobile-cosigner-pending-approvals.webp"
                alt="Fystack mobile cosigner pending queue with a USDC sign request and an MPC key generation request, each showing 0 of 1 approved"
                width={559}
                height={781}
                className="h-auto w-full max-w-[320px] lg:max-w-[400px]"
              />
            </div>

            <div>
              <Smartphone
                className="mb-4 h-5 w-5 text-[#3b82f6]"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 text-xl font-bold text-slate-800 lg:text-2xl">
                Mobile cosigner
              </h3>
              <p className="mb-6 text-xs uppercase tracking-wider text-slate-400">
                Approve from a device only your team can unlock
              </p>

              <div className="space-y-3">
                {[
                  "Key share stored in Secure Enclave / StrongBox",
                  "Hold-to-sign with biometric confirmation",
                  "Full transaction decoding on-device",
                  "Push notifications for signs and key generation",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="h-5 w-1 flex-shrink-0 rounded-full bg-[#3b82f6]" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Server */}
          <div className="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
            <div>
              <Server
                className="mb-4 h-5 w-5 text-[#3b82f6]"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 text-xl font-bold text-slate-800 lg:text-2xl">
                Server cosigner
              </h3>
              <p className="mb-6 text-xs uppercase tracking-wider text-slate-400">
                A headless signer running in your own infrastructure
              </p>

              <div className="space-y-3">
                {[
                  "One-command install with a scoped pairing token",
                  "Policy engine validates and signs programmatically, 24/7",
                  "Runs on your VPC — Docker, Kubernetes, or bare metal",
                  "Attested TEE execution with full audit logs",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="h-5 w-1 flex-shrink-0 rounded-full bg-[#3b82f6]" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <CosignerTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}

const APP_SCREENS = [
  {
    src: "/png/cosigners/fystack-mobile-cosigner-approval-timeline.webp",
    width: 564,
    height: 777,
    alt: "Fystack mobile cosigner approval timeline showing the raw signing input, 0 of 1 approvals, and the request, signing, and completion stages",
    title: "Approvals and timeline",
    caption:
      "The raw signing input, who still has to approve, and every stage from request to settlement.",
  },
  {
    src: "/png/cosigners/fystack-mobile-cosigner-transaction-history.webp",
    width: 558,
    height: 782,
    alt: "Fystack mobile cosigner transaction history showing a confirming 1,000 USDC transfer on Sepolia Ethereum",
    title: "Transaction history",
    caption:
      "Everything you signed, with live confirmation status and the destination address.",
  },
  {
    src: "/png/cosigners/fystack-mobile-cosigner-activity-log.webp",
    width: 563,
    height: 770,
    alt: "Fystack mobile cosigner activity log listing approved wallet setup and transaction signing events with timestamps",
    title: "Activity log",
    caption:
      "An audit trail of every wallet setup and signing event this device approved.",
  },
];

function InsideTheApp() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-[1440px] px-4 lg:px-16 2xl:px-0 ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mb-12 px-4 md:mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wide text-[#3b82f6]">
            /INSIDE THE APP/
          </p>
          <h2 className="max-w-3xl text-2xl font-bold leading-tight text-slate-800 md:text-3xl lg:text-4xl">
            Every approval, on the record
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 lg:text-lg">
            The mobile cosigner is not just an approve button. It keeps the full
            context of what was requested, what was signed, and what this device
            has authorized.
          </p>
        </div>

        <div className="mx-4 grid grid-cols-1 gap-0 border border-slate-200 md:grid-cols-3">
          {APP_SCREENS.map((screen, index) => (
            <div
              key={screen.src}
              className={`p-6 lg:p-8 ${
                index < APP_SCREENS.length - 1
                  ? "border-b border-slate-200 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                width={screen.width}
                height={screen.height}
                className="mx-auto mb-6 h-auto w-full max-w-[280px]"
              />
              <h3 className="mb-2 text-base font-bold leading-snug text-slate-800 lg:text-lg">
                {screen.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {screen.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const { ref, isVisible } = useScrollReveal();

  const cases = [
    {
      icon: Users,
      title: "Treasury with human approval",
      description:
        "Finance operators hold the mobile cosigner. Large withdrawals cannot leave the treasury until a named person reviews the decoded transaction and signs.",
    },
    {
      icon: Terminal,
      title: "Automated payouts with a guardrail",
      description:
        "The server cosigner signs high-volume payouts around the clock, but only when the decoded transaction satisfies your policy — amount, destination, and chain.",
    },
    {
      icon: ShieldCheck,
      title: "Provable separation of duties",
      description:
        "Fystack orchestrates, your cosigner authorizes. Neither side can move funds alone, which is exactly what auditors and regulators want to see.",
    },
  ];

  return (
    <section className="bg-slate-50/40 py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-[1440px] px-4 lg:px-16 2xl:px-0 ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mb-12 px-4 md:mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wide text-[#3b82f6]">
            /USE CASES/
          </p>
          <h2 className="max-w-3xl text-2xl font-bold leading-tight text-slate-800 md:text-3xl lg:text-4xl">
            Where a second signer changes the risk profile
          </h2>
        </div>

        <div className="mx-4 grid grid-cols-1 gap-0 border border-slate-200 bg-white lg:grid-cols-3">
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-6 lg:p-8 ${
                  index < 2 ? "border-b border-slate-200 lg:border-b-0 lg:border-r" : ""
                }`}
              >
                <Icon
                  className="mb-4 h-5 w-5 text-[#3b82f6]"
                  strokeWidth={1.5}
                />
                <h3 className="mb-2 text-base font-bold leading-snug text-slate-800 lg:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
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

function ContactBanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-[1440px] px-4 lg:px-16 2xl:px-0 ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <div className="mx-4 border border-slate-200 bg-gradient-to-br from-[#eef4fd] to-white p-8 text-center sm:p-12 lg:p-16">
          <h2 className="mb-4 text-2xl font-bold leading-tight text-slate-800 md:text-3xl lg:text-4xl">
            Cosigner is rolling out soon
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-500 lg:text-lg">
            Tell us how your team approves transactions today and we will bring
            you into the early access group for both the mobile and server
            cosigner.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-[#3b82f6] px-8 py-6 text-base font-semibold shadow-lg shadow-[#3b82f6]/20 transition-all hover:bg-[#3b82f6]/90"
            asChild
          >
            <Link href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              Join the waitlist
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function CosignerPage() {
  return (
    <div className="flex min-h-screen flex-col font-geist-mono">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <WhatYouSign />
        <HowItWorks />
        <FormFactors />
        <InsideTheApp />
        <UseCases />
        <ContactBanner />
        <CTAFooter />
      </main>

      <JoinCommunity />
    </div>
  );
}
