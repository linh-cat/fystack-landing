import {
  Zap,
  CircleDollarSign,
  ShoppingCart,
  Shield,
  Bot,
  Lock,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Solution() {
  return (
    <section id="solutions" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10" />
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Solve real operational pain, not just key management
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fystack helps teams *run* stablecoin and crypto operations safely,
            faster, and with less headcount so you can focus on growth and
            revenue.
          </p>
        </div>

        {/* Value Pillars / Use Cases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Treasury & Stablecoin Operations */}
          <div className="group rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <CircleDollarSign className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Treasury & Stablecoin Ops
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Manage multi-chain balances, consolidate idle funds, and push
              payouts without juggling seed phrases or ad‑hoc scripts.
            </p>
          </div>

          {/* Payment Acceptance */}
          <div className="group rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <ShoppingCart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Crypto Payment Acceptance
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Add stablecoin checkout (QR / API) in days, route funds to the
              right wallet, and reconcile automatically.
            </p>
          </div>

          {/* Risk & Fraud Controls */}
          <div className="group rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Risk & Policy Enforcement
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Block risky destinations, enforce spend limits, require approvals
              per amount, asset, chain, or address category.
            </p>
          </div>

          {/* Operational Automation */}
          <div className="group rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Operational Automation
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Auto‑sweep, rebalance, and route inflows based on rules. Reduce
              manual treasury drudgery & human error.
            </p>
          </div>

          {/* Compliance & Auditability */}
          <div className="group rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Compliance & Oversight
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Centralized audit trails, user roles, approval chains, and
              exportable logs make regulator & auditor conversations easier.
            </p>
          </div>

          {/* Developer & Product Velocity */}
          <div className="group rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Faster Product Shipping
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Drop in wallets, payments, policies & monitoring with clean APIs.
              Ship features in days, not months of cryptography + infra work.
            </p>
          </div>
        </div>

        {/* Outcome Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 text-center">
            <h4 className="text-3xl font-bold">60%+</h4>
            <p className="text-xs mt-1 text-muted-foreground uppercase tracking-wide">
              Less manual treasury time
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 text-center">
            <h4 className="text-3xl font-bold">0</h4>
            <p className="text-xs mt-1 text-muted-foreground uppercase tracking-wide">
              Private keys stored
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 text-center">
            <h4 className="text-3xl font-bold">Minutes</h4>
            <p className="text-xs mt-1 text-muted-foreground uppercase tracking-wide">
              To invite your team members to manage wallets
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 text-center">
            <h4 className="text-3xl font-bold">1 Multichain Portal</h4>
            <p className="text-xs mt-1 text-muted-foreground uppercase tracking-wide">
              Ops, risk & automation
            </p>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl p-8 border bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Turn wallets into a revenue enabler
            </h3>
            <p className="text-sm text-muted-foreground">
              Book a quick call, see how teams cut risk review & manual ops
              time.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="sm" asChild>
              <Link
                href="https://docs.fystack.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link
                href="https://sandbox.fystack.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try live demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
