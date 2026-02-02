"use client";

import { Badge } from "@/components/ui/badge";
import { Code, Wallet, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Code,
    title: "Integrate the SDK",
    description:
      "Add our SDK to your application with just a few lines of code. Support for JavaScript, Python, Go, and REST API.",
    code: `import { Fystack } from '@fystack/sdk';

const client = new Fystack({
  apiKey: process.env.FYSTACK_API_KEY
});`,
  },
  {
    number: "02",
    icon: Wallet,
    title: "Create Wallets",
    description:
      "Generate secure MPC wallets for your users instantly. No seed phrases, no key management headaches.",
    code: `const wallet = await client.wallets.create({
  name: "User Treasury",
  chains: ["ethereum", "polygon", "solana"]
});`,
  },
  {
    number: "03",
    icon: Send,
    title: "Move Assets",
    description:
      "Send and receive digital assets across chains with built-in policy enforcement and approval workflows.",
    code: `const transfer = await client.transfers.create({
  from: wallet.id,
  to: "0x1234...5678",
  amount: "1000",
  asset: "USDC"
});`,
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Monitor & Scale",
    description:
      "Track all operations in real-time with webhooks, audit logs, and a comprehensive dashboard.",
    code: `client.webhooks.on("transfer.completed", (event) => {
  console.log("Transfer completed:", event.data);
  // Update your application state
});`,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 border-slate-700 text-slate-400"
          >
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            From zero to production{" "}
            <span className="text-blue-500">in minutes</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get started with Fystack in four simple steps. No cryptography
            expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Content */}
              <div
                className={`space-y-4 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-slate-800">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Code block */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
                  {/* Code header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs text-slate-500">
                      example.ts
                    </span>
                  </div>
                  {/* Code content */}
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm text-slate-300 font-mono">
                      {step.code}
                    </code>
                  </pre>
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-blue-500/10 rounded-xl blur-xl -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
