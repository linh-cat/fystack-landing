import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import logoLight from "@/public/Logo_fystack_light.png";

export const metadata: Metadata = {
  title: "Builder Grants - Fystack",
  description:
    "Get up to $50k in credits to build on Fystack. Everything you need to grow your blockchain project.",
  openGraph: {
    title: "Fystack Builder Grants - $50k Credit",
    description:
      "Join our builder grants program and get funding, technical support, and marketing boost for your project.",
    images: ["/startup_program/startup_program.png"],
  },
};

export default function BuilderGrantsPage() {
  const grantedProjects = [
    { name: "Minepath", logo: "/startup_program/minepath-logo.png" },
    // Add more projects as needed
  ];

  const benefits = [
    {
      number: "01",
      title: "API Credits",
      description: "+$1,000 API Credits per Project",
      details:
        "Kickstart your build with credits covering MPC wallet creation, payments, automation, webhooks, and analytics across supported chains.",
    },
    {
      number: "02",
      title: "Multichain SDK",
      description: "Unified SDK for EVM, Solana & more",
      details:
        "One SDK for MPC signing, payments, treasury automation, and webhooks — making user onboarding seamless across all supported blockchains.",
    },
    {
      number: "03",
      title: "Technical Support",
      description: "Direct Engineering Support",
      details:
        "Priority integration help, architecture guidance, troubleshooting, and Telegram access — including 1-on-1 engineering support directly from Fystack founders.",
    },
    {
      number: "04",
      title: "Growth & Marketing",
      description: "Marketing Boost",
      details:
        "Accelerate traction with co-marketing, case studies, community highlights, and Amplify features to help your product reach more users.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/startup_program/startup_program.png"
          alt="Fystack Builder Grants Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
          <Image
            src={logoLight}
            alt="Fystack logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex flex-col items-center justify-center gap-2">
            <h1 className="text-6xl font-bold text-white sm:text-7xl lg:text-8xl">
              $15,000
            </h1>
            <span className="text-3xl font-semibold uppercase tracking-[0.2em] text-blue-200">
              API Credits
            </span>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-blue-400">Fystack</span>{" "}
            <span className="text-white">Builder Grants</span>
          </h2>
        </div>

        {/* Granted Projects Section */}
        <div className="mb-20 w-full max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.3em] text-blue-200 shadow-lg backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            5+ teams granted
            <span className="h-2 w-2 rounded-full bg-blue-400" />
          </div>
        </div>

        {/* Everything You Need Section */}
        <div className="mb-20 w-full max-w-6xl">
          <h3 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">
            Everything you need to grow
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 text-left shadow-[0_25px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all hover:border-blue-400/60 hover:bg-white/10"
              >
                <div className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-blue-200">
                  {benefit.number}
                </div>
                <h4 className="mb-3 text-2xl font-semibold text-white">
                  {benefit.title}
                </h4>
                <p className="mb-2 text-base text-gray-200">
                  {benefit.description}
                </p>
                <p className="text-sm text-gray-400">{benefit.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-24 w-full max-w-5xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
              Platform
            </span>
            <h3 className="text-3xl font-bold text-white sm:text-4xl">
              Key Features
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "MPC Wallet Creation",
                desc: "Secure key generation with threshold signatures",
              },
              {
                title: "Payment APIs",
                desc: "Accept and send payments across chains",
              },
              {
                title: "Automation",
                desc: "Auto-sweep, treasury ops & scheduled transfers",
              },
              {
                title: "Multichain Support",
                desc: "EVM, Solana, and more chains supported",
              },
              {
                title: "Webhooks",
                desc: "Real-time event notifications for your app",
              },
              {
                title: "Analytics & Alerts",
                desc: "Advanced insights and custom alerts with Slack, Telegram",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-blue-400/40 hover:from-white/[0.1] hover:to-white/[0.04]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20" />
                <h4 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-24 w-full max-w-5xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
              Build For
            </span>
            <h3 className="text-3xl font-bold text-white sm:text-4xl">
              Use Cases
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Payments & Payouts",
              "Gaming Infrastructure",
              "Tokenization Platforms",
              "Cross-border Fintech",
              "On-chain Treasury",
            ].map((useCase, i) => (
              <div
                key={i}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-emerald-400/40 hover:bg-emerald-500/10"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="mb-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Get funded?
          </h3>
          <p className="mb-8 text-3xl font-light text-white sm:text-4xl lg:text-5xl">
            Drop us a message
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="https://docs.fystack.io" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[160px] border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                See the docs
              </Button>
            </Link>
            <Link href="https://t.me/TheTedNguyen" target="_blank">
              <Button
                size="lg"
                className="min-w-[160px] bg-blue-600 text-white hover:bg-blue-700"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
