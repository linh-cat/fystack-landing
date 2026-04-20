"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { CTAFooter } from "@/app/new-homepage/components/CTAFooter";
import { useScrollReveal } from "@/app/new-homepage/hooks/useScrollReveal";
import {
  Calendar,
  Mail,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212-.07-.062-.174-.041-.249-.024-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const contactOptions = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Book a Demo",
    description:
      "Schedule a 30-minute walkthrough with our team — we'll show you Fystack against your specific use case.",
    href: "https://app.youform.com/forms/qyanutyi",
    cta: "Open contact form",
    primary: true,
  },
  {
    icon: <TelegramIcon className="w-6 h-6" />,
    title: "Send a Message",
    description:
      "Reach our team directly on Telegram. To help us respond faster, share your name, company website, role, the product you're building, and what you'd like our help with.",
    href: "https://t.me/anhthind",
    cta: "Message on Telegram",
    primary: false,
  },
];

const supportLinks = [
  {
    icon: <TelegramIcon className="w-5 h-5" />,
    title: "Developer Community",
    description: "Chat with builders on Telegram",
    href: "https://t.me/+9AtC0z8sS79iZjFl",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email Us",
    description: "ops@fystack.io",
    href: "mailto:ops@fystack.io",
  },
];

const qualifies = [
  "You're a fintech, PSP, or neobank running stablecoin rails",
  "You're evaluating self-hosted or cloud wallet infrastructure",
  "You need MPC custody with real volume, not a dev sandbox",
  "You have compliance, jurisdiction, or licensing requirements",
];

export default function ContactPage() {
  const heroRef = useScrollReveal(0.1);
  const optionsRef = useScrollReveal(0.1);
  const qualifyRef = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={heroRef.ref}
            className={`relative ${heroRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
            <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
            <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
            <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />

            <div className="border border-slate-200 bg-gradient-to-br from-white via-white to-[#3b82f6]/5 p-8 lg:p-16 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-6">
                <span className="text-sm text-[#3b82f6] font-medium">
                  Talk to our team
                </span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight max-w-3xl mx-auto">
                Book a demo of{" "}
                <span className="text-[#3b82f6]">Fystack</span>
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Walk through your use case with our team and see how fintechs,
                PSPs, and neobanks run stablecoin rails on Fystack — in our
                cloud or on their own infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-8 lg:py-12">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={optionsRef.ref}
            className={`${optionsRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {contactOptions.map((option) => (
                <Link
                  key={option.title}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative border p-8 transition-all hover:shadow-lg ${
                    option.primary
                      ? "border-[#3b82f6]/30 bg-gradient-to-br from-[#3b82f6]/5 to-transparent hover:border-[#3b82f6]/50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                      option.primary
                        ? "bg-[#3b82f6] text-white"
                        : "bg-[#3b82f6]/10 text-[#3b82f6]"
                    }`}
                  >
                    {option.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {option.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {option.description}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3b82f6] group-hover:gap-2.5 transition-all">
                    {option.cta}
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Secondary links */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {supportLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-4 border border-slate-200 p-4 hover:border-[#3b82f6]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-md bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-[#3b82f6]/10 group-hover:text-[#3b82f6] transition-colors flex-shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800">
                      {link.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {link.description}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#3b82f6] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualify Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={qualifyRef.ref}
            className={`${qualifyRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            <div className="border border-slate-200 p-8 lg:p-12 bg-slate-50/40">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                    A demo is most useful if…
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    We&apos;ll skip the generic slides and focus on your
                    specific stack, volumes, and constraints. Tell us where
                    you are and what you&apos;re solving — and we&apos;ll
                    tailor the conversation.
                  </p>
                </div>

                <div className="space-y-3">
                  {qualifies.map((q) => (
                    <div key={q} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
