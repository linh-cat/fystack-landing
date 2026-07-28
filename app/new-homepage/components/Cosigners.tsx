"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* -------------------------------------------------------------------------- */

const COMMAND = "cosigner install --pairing tkn12_7Kd3nQx8pLmR4vZa";
const TYPE_SPEED = 32;
const SPINNER = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

const OUTPUT = [
  {
    text: 'Pairing token verified · workspace "Workspace 1"',
    delay: 650,
  },
  { text: "Attestation OK · AMD SEV-SNP enclave", delay: 700 },
  {
    text: "Generating MPC params…",
    doneText: "MPC params generated · 2 of 3 signers",
    delay: 1900,
  },
  {
    text: "cosigner is up · listening on 127.0.0.1:7420",
    accent: true,
    delay: 700,
  },
  { text: "Awaiting sign requests…", delay: 600 },
];

export function CosignerTerminal() {
  const [typed, setTyped] = useState(0);
  const [visible, setVisible] = useState(0);
  const [spin, setSpin] = useState(0);

  // Cycle the spinner glyph independently of the sequence.
  useEffect(() => {
    const id = setInterval(() => setSpin((s) => (s + 1) % SPINNER.length), 90);
    return () => clearInterval(id);
  }, []);

  // Type the command, reveal output lines one by one, then loop.
  useEffect(() => {
    if (typed < COMMAND.length) {
      const id = setTimeout(() => setTyped((t) => t + 1), TYPE_SPEED);
      return () => clearTimeout(id);
    }
    if (visible < OUTPUT.length) {
      const id = setTimeout(
        () => setVisible((v) => v + 1),
        OUTPUT[visible].delay
      );
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setTyped(0);
      setVisible(0);
    }, 5000);
    return () => clearTimeout(id);
  }, [typed, visible]);

  const typingDone = typed >= COMMAND.length;

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0B1120] font-mono text-[13px] leading-relaxed sm:text-[14px] lg:text-[15px] shadow-[0_24px_60px_-20px_rgba(15,23,42,0.45)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[12px] text-slate-500">
          ops@treasury — cosigner
        </span>
      </div>

      <div className="px-4 py-4 sm:px-5 sm:py-5">
        {/* Command */}
        <div className="flex items-baseline gap-x-2 text-slate-200">
          <span className="flex-shrink-0 text-emerald-400">$</span>
          <span className="break-all">
            {COMMAND.slice(0, typed)}
            {!typingDone && (
              <span className="ml-0.5 inline-block h-[1em] w-1.5 animate-pulse bg-slate-200 align-middle" />
            )}
          </span>
        </div>

        {/* Output — every line is always rendered so the box never resizes;
            lines that haven't been reached yet are just kept invisible. */}
        <div className="mt-4 space-y-2">
          {OUTPUT.map((line, index) => {
            const running = index === visible - 1 && visible < OUTPUT.length;
            const label = running ? line.text : line.doneText ?? line.text;

            return (
              <div
                key={line.text}
                className={`flex items-start gap-2 ${
                  index < visible ? "" : "invisible"
                }`}
              >
                <span
                  className={
                    running || line.accent ? "text-blue-400" : "text-emerald-400"
                  }
                >
                  {running ? SPINNER[spin] : line.accent ? "●" : "✓"}
                </span>
                <span
                  className={
                    line.accent ? "font-semibold text-white" : "text-slate-300"
                  }
                >
                  {label}
                </span>
              </div>
            );
          })}

          <div
            className={`flex items-start gap-2 text-slate-500 ${
              visible === OUTPUT.length ? "" : "invisible"
            }`}
          >
            <span className="text-blue-400">{SPINNER[spin]}</span>
            <span>Listening for approvals…</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Section                                  */
/* -------------------------------------------------------------------------- */

const STRIPES = `repeating-linear-gradient(
  -45deg,
  transparent,
  transparent 8px,
  #f1f5f9 8px,
  #f1f5f9 9px
)`;

export function Cosigners() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cosigners" className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] 2xl:max-w-[1728px] px-4 lg:px-16 2xl:px-16 mx-auto ${
          isVisible
            ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#3b82f6]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3b82f6] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3b82f6]" />
            </span>
            Coming soon
          </span>
          <h2 className="mb-4 text-2xl font-bold text-slate-800 md:text-3xl lg:text-4xl">
            Cosigners - sign from a hardware enclave
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 lg:text-lg">
            Add an independent signer that Fystack never controls. Every key
            generation and every transaction needs its signature — from a phone
            in your pocket or a daemon in your own infrastructure.
          </p>
          <Link
            href="/solutions/cosigner"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b82f6] hover:underline"
          >
            Learn more about Cosigner
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Panels */}
        <div className="relative flex">
          {/* Left striped column */}
          <div
            className="hidden w-16 flex-shrink-0 border border-r-0 border-slate-200 lg:block"
            style={{ backgroundImage: STRIPES }}
          />

          <div className="flex-1 border border-slate-200">
            {/* Mobile cosigner */}
            <div className="grid items-center gap-8 border-b border-slate-200 p-6 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
              <div className="flex justify-center">
                <Image
                  src="/png/cosigners/ios-pending.webp"
                  alt="Fystack mobile cosigner showing a pending sign request and key generation request awaiting approval"
                  width={720}
                  height={1295}
                  className="h-auto w-full max-w-[320px] lg:max-w-[400px]"
                />
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-800 lg:text-2xl">
                  Mobile cosigner
                </h3>
                <p className="mb-6 text-xs uppercase tracking-wider text-slate-400">
                  Approve from a device only your team can unlock
                </p>

                <div className="space-y-3">
                  {[
                    "Key share stored in Secure Enclave / StrongBox",
                    "Transaction decoded on-device — what you see is what you sign",
                    "Hold-to-sign with biometric confirmation",
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

            {/* Server cosigner */}
            <div className="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-800 lg:text-2xl">
                  Server cosigner
                </h3>
                <p className="mb-6 text-xs uppercase tracking-wider text-slate-400">
                  A headless signer running in your own infrastructure
                </p>

                <div className="space-y-3">
                  {[
                    "One-command install with a scoped pairing token",
                    "Payload validated against policy before any signature",
                    "Policy engine signs programmatically, 24/7",
                    "Runs on your VPC — Docker, Kubernetes, or bare metal",
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

          {/* Right striped column */}
          <div
            className="hidden w-16 flex-shrink-0 border border-l-0 border-slate-200 lg:block"
            style={{ backgroundImage: STRIPES }}
          />
        </div>
      </div>
    </section>
  );
}
