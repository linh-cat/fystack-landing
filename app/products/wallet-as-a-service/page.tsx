"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Bell,
  CheckCircle,
  Code,
  Database,
  Key,
  Lock,
  Shield,
  Users,
  Wallet,
  Zap,
  Server,
  Cloud,
  Settings,
  GitBranch,
  Activity,
  FileCode,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hosting from "@/app/components/Hosting";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Supported blockchain chains data
const supportedChains = [
  { name: "Ethereum", path: "ethereum" },
  { name: "Polygon", path: "polygon" },
  { name: "BNB Chain", path: "smartchain" },
  { name: "Avalanche", path: "avalanchec" },
  { name: "Optimism", path: "optimism" },
  { name: "Arbitrum", path: "arbitrum" },
  { name: "Base", path: "base" },
  { name: "Solana", path: "solana" },
];

export default function WalletAsAServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-28 relative overflow-hidden">
          {/* Background gradient blobs */}
          <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-200/50 dark:bg-blue-900/30 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-purple-200/50 dark:bg-purple-900/30 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Message */}
              <div className="space-y-8">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  <Wallet className="w-4 h-4 mr-2" />
                  Wallet as a Service
                </Badge>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Programmable Wallet Infrastructure for Real Financial Operations
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Ready-to-use wallet infrastructure via APIs.
                    <span className="block mt-2">
                      Payments • Treasury • Exchanges • Embedded Wallets
                    </span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full px-8 py-6 text-base font-semibold bg-[#155dfc] hover:bg-[#155dfc]/90 shadow-lg hover:shadow-xl transition-all" asChild>
                    <Link href="https://sandbox.fystack.io" target="_blank" rel="noopener noreferrer">
                      View Live Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" asChild>
                    <Link href="https://t.me/anhthind" target="_blank" rel="noopener noreferrer">
                      Talk to an Architect
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - System Flow Visualization */}
              <div className="relative h-[400px] lg:h-[500px] rounded-xl border bg-muted/30 backdrop-blur-sm p-8 flex items-center justify-center">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* Your App */}
                  <g>
                    <rect x="120" y="30" width="160" height="70" rx="10" fill="currentColor" className="text-primary/10" stroke="currentColor" strokeWidth="2" />
                    <text x="200" y="60" textAnchor="middle" className="fill-current text-sm font-semibold">Your App</text>
                    <text x="200" y="78" textAnchor="middle" className="fill-current text-xs opacity-60">(Business Logic)</text>
                  </g>

                  {/* Arrow down with animation */}
                  <path d="M200,100 L200,155" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrowhead)" className="text-primary">
                    <animate attributeName="stroke-dasharray" from="0,10" to="10,0" dur="1s" repeatCount="indefinite" />
                  </path>

                  {/* Fystack API Layer */}
                  <g>
                    <rect x="80" y="160" width="240" height="120" rx="10" fill="currentColor" className="text-primary/20" stroke="currentColor" strokeWidth="2" />
                    <text x="200" y="185" textAnchor="middle" className="fill-current text-sm font-bold">Fystack API</text>

                    {/* Policy Engine box */}
                    <rect x="95" y="200" width="100" height="60" rx="6" fill="currentColor" className="text-blue-500/30" stroke="currentColor" strokeWidth="1.5" />
                    <text x="145" y="220" textAnchor="middle" className="fill-current text-xs font-semibold">Policy</text>
                    <text x="145" y="235" textAnchor="middle" className="fill-current text-xs font-semibold">Engine</text>
                    <text x="145" y="250" textAnchor="middle" className="fill-current text-[10px] opacity-60">Rules & Limits</text>

                    {/* MPC Signing box */}
                    <rect x="205" y="200" width="100" height="60" rx="6" fill="currentColor" className="text-purple-500/30" stroke="currentColor" strokeWidth="1.5" />
                    <text x="255" y="220" textAnchor="middle" className="fill-current text-xs font-semibold">MPC</text>
                    <text x="255" y="235" textAnchor="middle" className="fill-current text-xs font-semibold">Signing</text>
                    <text x="255" y="250" textAnchor="middle" className="fill-current text-[10px] opacity-60">Secure Keys</text>
                  </g>

                  {/* Arrows fanning out to blockchains */}
                  <path d="M150,280 L100,340" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-primary/60" />
                  <path d="M180,280 L165,340" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-primary/60" />
                  <path d="M220,280 L235,340" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-primary/60" />
                  <path d="M250,280 L300,340" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-primary/60" />

                  {/* Blockchain icons/circles */}
                  <g>
                    <circle cx="100" cy="360" r="30" fill="currentColor" className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeWidth="2" />
                    <text x="100" y="368" textAnchor="middle" className="fill-current text-xs font-bold">ETH</text>

                    <circle cx="165" cy="360" r="30" fill="currentColor" className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeWidth="2" />
                    <text x="165" y="368" textAnchor="middle" className="fill-current text-xs font-bold">BSC</text>

                    <circle cx="235" cy="360" r="30" fill="currentColor" className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeWidth="2" />
                    <text x="235" y="368" textAnchor="middle" className="fill-current text-xs font-bold">SOL</text>

                    <circle cx="300" cy="360" r="30" fill="currentColor" className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeWidth="2" />
                    <text x="300" y="368" textAnchor="middle" className="fill-current text-xs font-bold">POL</text>
                  </g>

                  {/* Blockchain Networks Label */}
                  <text x="200" y="430" textAnchor="middle" className="fill-current text-xs font-semibold opacity-60">
                    Blockchain Networks
                  </text>

                  {/* Arrow marker definition */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                  </defs>

                  {/* Animated particles */}
                  <circle r="3" fill="currentColor" className="text-primary">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M200,100 L200,155" />
                  </circle>
                  <circle r="3" fill="currentColor" className="text-primary">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M150,280 L100,340" begin="0.5s" />
                  </circle>
                  <circle r="3" fill="currentColor" className="text-primary">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M220,280 L235,340" begin="1s" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section id="features" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/80">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Powerful Wallet Infrastructure via APIs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Everything you need to build, secure, and scale wallet operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1: Programmatic Wallets */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Wallet className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Programmatic Wallets</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Create and manage wallets programmatically via simple API calls
                  </p>
                  {/* Mini visualization - Code snippet */}
                  <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs">
                    <div className="text-purple-400">const</div>
                    <div className="text-blue-400">wallet = <span className="text-yellow-400">await</span> sdk.createWallet()</div>
                  </div>
                </div>
              </div>

              {/* Feature 2: MPC-secured Signing */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">MPC-secured Signing</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Enterprise-grade security with multi-party computation
                  </p>
                  {/* Mini visualization - MPC nodes */}
                  <div className="rounded-2xl overflow-hidden border border-primary/20 bg-white/5 dark:bg-slate-900/40">
                    <Image
                      src="/visualization/keys.webp"
                      alt="MPC key distribution visualization"
                      width={1599}
                      height={923}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 3: Policy-based Controls */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Policy Controls</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Set rules and limits enforced before every transaction
                  </p>
                  {/* Mini visualization - Policy rules */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 animate-slide-left" style={{animationDelay: "0.1s"}}>
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="opacity-80">Amount Limit: $10K</span>
                    </div>
                    <div className="flex items-center gap-2 animate-slide-left" style={{animationDelay: "0.2s"}}>
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="opacity-80">Whitelist Only</span>
                    </div>
                    <div className="flex items-center gap-2 animate-slide-left" style={{animationDelay: "0.3s"}}>
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="opacity-80">Time Lock: 24h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4: Approval Workflows */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Approval Workflows</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Multi-signature quorum approvals for sensitive operations
                  </p>
                  {/* Mini visualization - Quorum */}
                  <div className="flex justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-300/20 flex items-center justify-center border-2 border-slate-400 dark:border-slate-600">
                      <Users className="w-5 h-5 text-slate-400" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-300/20 flex items-center justify-center border-2 border-slate-400 dark:border-slate-600">
                      <Users className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                  <p className="text-center text-xs mt-2 opacity-60">3 of 5 approved</p>
                </div>
              </div>

              {/* Feature 5: Automated Transfers */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Automated Transfers</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Schedule and automate treasury operations and payouts
                  </p>
                  {/* Mini visualization - Flow */}
                  <div className="flex items-center justify-center gap-2 text-xs">
                    <div className="px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30">Trigger</div>
                    <ArrowRight className="w-4 h-4" />
                    <div className="px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">Rule</div>
                    <ArrowRight className="w-4 h-4" />
                    <div className="px-3 py-2 rounded-lg bg-green-500/20 border border-green-500/30">Transfer</div>
                  </div>
                </div>
              </div>

              {/* Feature 6: Webhooks & Events */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Webhooks & Events</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Real-time notifications for all wallet activities
                  </p>
                  {/* Mini visualization - Events */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="opacity-80">wallet.created</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: "0.5s"}}></div>
                      <span className="opacity-80">transaction.signed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{animationDelay: "1s"}}></div>
                      <span className="opacity-80">transfer.completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 7: Multi-channel Notifications */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Bell className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Multi-channel Alerts</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Notifications through Email, Slack, Telegram, and more
                  </p>
                  {/* Mini visualization - Channels */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <Bell className="w-5 h-5 text-primary" />
                      <span className="text-[10px] opacity-60">Email</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <Bell className="w-5 h-5 text-primary" />
                      <span className="text-[10px] opacity-60">Slack</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                      <Bell className="w-5 h-5 text-primary" />
                      <span className="text-[10px] opacity-60">Telegram</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section id="benefits" className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Build Once. Operate at Scale.
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Skip months of development and focus on what makes your product unique
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Benefits */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Launch in weeks, not months</h3>
                    <p className="text-sm text-muted-foreground">
                      Production-ready infrastructure that integrates in days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">No in-house custody R&D</h3>
                    <p className="text-sm text-muted-foreground">
                      Leverage battle-tested infrastructure instead of building from scratch
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Predictable, flat pricing at scale</h3>
                    <p className="text-sm text-muted-foreground">
                      No per-transaction fees or usage-based surprises
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Reduced operational risk</h3>
                    <p className="text-sm text-muted-foreground">
                      Enterprise-grade security and compliance built-in
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Focus on your product</h3>
                    <p className="text-sm text-muted-foreground">
                      Not on wallet infrastructure maintenance and security patches
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Comparison Charts */}
              <div className="space-y-8">
                {/* Cost Comparison */}
                <div className="p-6 rounded-2xl border bg-card">
                  <h3 className="text-lg font-semibold mb-6">Cost Comparison</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">In-house Build</span>
                        <span className="font-bold text-red-500">$500K+</span>
                      </div>
                      <div className="h-4 bg-red-500/20 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-red-500"></div>
                      </div>
                      <p className="text-xs text-muted-foreground">Engineering, infrastructure, security audits, compliance</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Fystack WaaS</span>
                        <span className="font-bold text-primary">$5K/year</span>
                      </div>
                      <div className="h-4 bg-primary/20 rounded-full overflow-hidden">
                        <div className="h-full w-[10%] bg-primary"></div>
                      </div>
                      <p className="text-xs text-muted-foreground">All-inclusive flat pricing</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Comparison */}
                <div className="p-6 rounded-2xl border bg-card">
                  <h3 className="text-lg font-semibold mb-6">Time to Market</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Traditional Approach</span>
                        <span className="font-bold text-orange-500">6-12 months</span>
                      </div>
                      <div className="h-4 bg-orange-500/20 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-orange-500"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">With Fystack</span>
                        <span className="font-bold text-green-500">1-2 weeks</span>
                      </div>
                      <div className="h-4 bg-green-500/20 rounded-full overflow-hidden">
                        <div className="h-full w-[15%] bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border bg-card text-center">
                    <h4 className="text-3xl font-bold text-primary">99%</h4>
                    <p className="text-xs text-muted-foreground mt-1">Cost Reduction</p>
                  </div>
                  <div className="p-4 rounded-xl border bg-card text-center">
                    <h4 className="text-3xl font-bold text-primary">50x</h4>
                    <p className="text-xs text-muted-foreground mt-1">Faster Launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/80">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Use Cases
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trusted by exchanges, payment platforms, and fintech companies
              </p>
            </div>

            <div className="space-y-20">
              {/* Use Case 1: Exchanges & OTC Desks */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Exchanges & OTC
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Exchanges & OTC Desks
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">High-volume deposits & withdrawals</strong> – Handle thousands of transactions per day
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Secure hot/warm/cold wallet management</strong> – Automated rebalancing between security tiers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Real-time balance tracking</strong> – Instant visibility across all wallets
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Multi-signature approvals</strong> – Quorum-based controls for large transfers
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Hot/Cold Wallet Flow Visualization */}
                <div className="relative h-[350px] rounded-xl border bg-card p-8">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Cold Vault */}
                    <g>
                      <rect x="30" y="120" width="90" height="60" rx="8" fill="currentColor" className="text-blue-500/20" stroke="currentColor" strokeWidth="2" />
                      <text x="75" y="142" textAnchor="middle" className="fill-current text-xs font-bold">Cold Vault</text>
                      <text x="75" y="160" textAnchor="middle" className="fill-current text-lg font-bold">99%</text>
                      <text x="75" y="172" textAnchor="middle" className="fill-current text-[10px] opacity-60">$10M</text>
                    </g>

                    {/* Arrow to Hot Wallet */}
                    <path d="M125,150 L175,150" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead2)" className="text-primary">
                      <animate attributeName="stroke-dasharray" from="0,10" to="10,0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <text x="150" y="142" textAnchor="middle" className="fill-current text-[10px] opacity-60">Auto-refill</text>

                    {/* Hot Wallets */}
                    <g>
                      <rect x="180" y="120" width="90" height="60" rx="8" fill="currentColor" className="text-green-500/20" stroke="currentColor" strokeWidth="2" />
                      <text x="225" y="142" textAnchor="middle" className="fill-current text-xs font-bold">Hot Wallets</text>
                      <text x="225" y="160" textAnchor="middle" className="fill-current text-lg font-bold">1%</text>
                      <text x="225" y="172" textAnchor="middle" className="fill-current text-[10px] opacity-60">$100K</text>
                    </g>

                    {/* Bidirectional arrow to User Txs */}
                    <path d="M275,150 L310,150" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead2)" className="text-primary" />
                    <path d="M310,155 L275,155" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead2)" className="text-primary/50" />

                    {/* User Transactions */}
                    <g>
                      <rect x="315" y="120" width="70" height="60" rx="8" fill="currentColor" className="text-purple-500/20" stroke="currentColor" strokeWidth="2" />
                      <text x="350" y="142" textAnchor="middle" className="fill-current text-xs font-bold">User</text>
                      <text x="350" y="157" textAnchor="middle" className="fill-current text-xs font-bold">Txs</text>
                      <text x="350" y="172" textAnchor="middle" className="fill-current text-[10px] opacity-60">Real-time</text>
                    </g>

                    {/* Labels */}
                    <text x="75" y="205" textAnchor="middle" className="fill-current text-xs opacity-60">MPC Secured</text>
                    <text x="225" y="205" textAnchor="middle" className="fill-current text-xs opacity-60">Policy Controlled</text>
                    <text x="350" y="205" textAnchor="middle" className="fill-current text-xs opacity-60">Instant</text>

                    <defs>
                      <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Use Case 2: Payment & Stablecoin Apps */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Payment Flow Visualization */}
                <div className="relative h-[350px] rounded-xl border bg-card p-8 lg:order-2">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* User */}
                    <g>
                      <circle cx="50" cy="60" r="30" fill="currentColor" className="text-blue-500/20" stroke="currentColor" strokeWidth="2" />
                      <text x="50" y="68" textAnchor="middle" className="fill-current text-xs font-bold">User</text>
                    </g>

                    <path d="M50,95 L50,135" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead3)" className="text-primary" />

                    {/* Payment Request */}
                    <g>
                      <rect x="10" y="140" width="80" height="40" rx="8" fill="currentColor" className="text-green-500/20" stroke="currentColor" strokeWidth="2" />
                      <text x="50" y="158" textAnchor="middle" className="fill-current text-xs font-bold">Payment</text>
                      <text x="50" y="172" textAnchor="middle" className="fill-current text-xs font-bold">Request</text>
                    </g>

                    <path d="M95,160 L145,160" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead3)" className="text-primary" />

                    {/* Policy Check (Decision Diamond) */}
                    <g>
                      <path d="M200,140 L220,160 L200,180 L180,160 Z" fill="currentColor" className="text-purple-500/20" stroke="currentColor" strokeWidth="2" />
                      <text x="200" y="165" textAnchor="middle" className="fill-current text-xs font-bold">Policy</text>
                    </g>

                    {/* Arrow down for > $10K */}
                    <path d="M200,185 L200,220" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead3)" className="text-orange-500" strokeDasharray="4,4" />
                    <text x="170" y="205" textAnchor="end" className="fill-current text-[10px] text-orange-500">if &gt; $10K</text>

                    {/* Approval Queue */}
                    <g>
                      <rect x="160" y="225" width="80" height="35" rx="6" fill="currentColor" className="text-orange-500/20" stroke="currentColor" strokeWidth="2" />
                      <text x="200" y="245" textAnchor="middle" className="fill-current text-xs font-bold">Approval</text>
                      <text x="200" y="257" textAnchor="middle" className="fill-current text-[10px]">Queue</text>
                    </g>

                    {/* Arrow right for auto-settle */}
                    <path d="M225,160 L270,160" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead3)" className="text-green-500" />
                    <text x="247" y="152" textAnchor="middle" className="fill-current text-[10px] text-green-500">auto</text>

                    {/* Auto-settle */}
                    <g>
                      <rect x="275" y="140" width="70" height="40" rx="8" fill="currentColor" className="text-green-500/20" stroke="currentColor" strokeWidth="2" />
                      <text x="310" y="158" textAnchor="middle" className="fill-current text-xs font-bold">Settle</text>
                      <text x="310" y="172" textAnchor="middle" className="fill-current text-[10px]">USDT/USDC</text>
                    </g>

                    <defs>
                      <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                <div className="space-y-6 lg:order-1">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Payments & Stablecoins
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Payment & Stablecoin Apps
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Treasury automation</strong> – Scheduled and rule-based transfers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Collections & payouts</strong> – Batch processing with smart routing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Stablecoin operations</strong> – USDT, USDC, and multi-chain support
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Policy approvals</strong> – Conditional workflows based on amount, destination, time
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Use Case 3: Platform Layer */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Platform & Infrastructure
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Platform Layer
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Embedded wallets</strong> – White-label wallet infrastructure for your users
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">API-first infrastructure</strong> – RESTful APIs with comprehensive SDKs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Ready-to-use custody</strong> – No blockchain expertise required
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Flexible deployment</strong> – Cloud-hosted or self-hosted options
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Platform Architecture Visualization */}
                <div className="relative h-[350px] rounded-xl border bg-card p-8">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Your Application Layer */}
                    <g>
                      <rect x="50" y="20" width="300" height="100" rx="10" fill="currentColor" className="text-primary/10" stroke="currentColor" strokeWidth="2" />
                      <text x="200" y="45" textAnchor="middle" className="fill-current text-sm font-bold">Your Application Layer</text>

                      {/* UI Box */}
                      <rect x="70" y="60" width="110" height="45" rx="6" fill="currentColor" className="text-blue-500/20" stroke="currentColor" strokeWidth="1.5" />
                      <text x="125" y="85" textAnchor="middle" className="fill-current text-xs font-semibold">Your UI</text>

                      {/* Logic Box */}
                      <rect x="220" y="60" width="110" height="45" rx="6" fill="currentColor" className="text-green-500/20" stroke="currentColor" strokeWidth="1.5" />
                      <text x="275" y="85" textAnchor="middle" className="fill-current text-xs font-semibold">Your Logic</text>
                    </g>

                    {/* Connection lines */}
                    <path d="M125,110 L125,140 L200,140" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                    <path d="M275,110 L275,140 L200,140" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                    <path d="M200,145 L200,175" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead4)" className="text-primary" />

                    {/* Fystack SDK */}
                    <g>
                      <rect x="100" y="180" width="200" height="90" rx="10" fill="currentColor" className="text-purple-500/20" stroke="currentColor" strokeWidth="2" />
                      <text x="200" y="205" textAnchor="middle" className="fill-current text-sm font-bold">Fystack SDK</text>

                      <text x="110" y="225" className="fill-current text-xs">• createWallet()</text>
                      <text x="110" y="242" className="fill-current text-xs">• signTransaction()</text>
                      <text x="110" y="259" className="fill-current text-xs">• setPolicies()</text>
                    </g>

                    <defs>
                      <marker id="arrowhead4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Experience Section */}
        <section id="developer" className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Built for Engineering Teams
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Production-grade SDKs, comprehensive APIs, and multi-chain support
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Code Example */}
              <div className="lg:order-2">
                <div className="p-[2px] rounded-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500">
                  <div className="bg-gray-950 rounded-lg overflow-hidden">
                    {/* Terminal Header */}
                    <div className="px-4 py-2 bg-gray-900/50 flex items-center border-b border-gray-800">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="ml-4 text-sm text-gray-400">wallet-service.ts</div>
                    </div>

                    {/* Code Content */}
                    <div className="p-6 text-gray-200 font-mono text-xs sm:text-sm leading-relaxed">
                      <div><span className="text-purple-400">import</span> {`{ `}<span className="text-blue-400">FystackSDK</span> {`}`} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;@fystack/sdk&apos;</span>;</div>
                      <div className="mt-4"><span className="text-purple-400">const</span> sdk = <span className="text-purple-400">new</span> <span className="text-blue-400">FystackSDK</span>({`{`}</div>
                      <div className="ml-4">apiKey: <span className="text-green-400">process.env.FYSTACK_API_KEY</span></div>
                      <div>{`}`});</div>

                      <div className="mt-4 text-gray-500">// Create a new wallet</div>
                      <div><span className="text-purple-400">const</span> wallet = <span className="text-purple-400">await</span> sdk.<span className="text-yellow-400">createWallet</span>({`{`}</div>
                      <div className="ml-4">name: <span className="text-green-400">&apos;Treasury Wallet&apos;</span>,</div>
                      <div className="ml-4">type: <span className="text-green-400">&apos;MPC&apos;</span>,</div>
                      <div className="ml-4">chain: <span className="text-green-400">&apos;ethereum&apos;</span></div>
                      <div>{`}`});</div>

                      <div className="mt-4 text-gray-500">// Set transaction policies</div>
                      <div><span className="text-purple-400">await</span> sdk.<span className="text-yellow-400">setPolicy</span>(wallet.id, {`{`}</div>
                      <div className="ml-4">maxAmount: <span className="text-cyan-400">10000</span>,</div>
                      <div className="ml-4">requireApprovals: <span className="text-cyan-400">2</span>,</div>
                      <div className="ml-4">whitelist: [<span className="text-green-400">&apos;0x...&apos;</span>]</div>
                      <div>{`}`});</div>

                      <div className="mt-4 text-gray-500">// Sign and broadcast</div>
                      <div><span className="text-purple-400">const</span> tx = <span className="text-purple-400">await</span> sdk.<span className="text-yellow-400">signTransaction</span>(txData);</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - SDKs and Chains */}
              <div className="space-y-8 lg:order-1">
                {/* SDKs */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">SDKs & APIs</h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30">
                      <FileCode className="w-4 h-4 mr-2" />
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30">
                      <Code className="w-4 h-4 mr-2" />
                      Python
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30">
                      <Code className="w-4 h-4 mr-2" />
                      Go
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30">
                      <Server className="w-4 h-4 mr-2" />
                      REST API
                    </Badge>
                  </div>
                </div>

                {/* Supported Chains */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Supported Blockchains</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {supportedChains.map((chain) => (
                      <div
                        key={chain.name}
                        className="p-3 rounded-lg border bg-background hover:bg-primary/5 transition-colors group"
                      >
                        <div className="relative w-10 h-10 mx-auto mb-2">
                          <Image
                            src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${chain.path}/info/logo.png`}
                            alt={chain.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                            unoptimized
                          />
                        </div>
                        <p className="text-xs text-center font-medium group-hover:text-primary transition-colors">
                          {chain.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Developer Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Comprehensive documentation</strong> with interactive examples
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Webhook integration</strong> for real-time event notifications
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Sandbox environment</strong> for testing before production
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">99.99% uptime SLA</strong> with enterprise support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Control Section */}
        <section id="security" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/80">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Security That Enables Automation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Enterprise-grade security controls that don&apos;t slow you down
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Security Feature 1: MPC */}
              <div className="group relative p-8 rounded-2xl border hover:border-primary/30 bg-card hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Key className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">MPC / Threshold Signing</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Private keys are never stored in one place. Distributed key generation and signing across multiple parties ensures no single point of failure.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Distributed key shards across secure enclaves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Threshold signatures without key reconstruction</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Security Feature 2: Policies */}
              <div className="group relative p-8 rounded-2xl border hover:border-primary/30 bg-card hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Policies Enforced Before Signing</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Every transaction is checked against your rules before it reaches the signing layer. Amount limits, whitelists, and time locks enforced automatically.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Conditional rules based on amount, destination, time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Policy versioning and audit trail</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Security Feature 3: Quorum */}
              <div className="group relative p-8 rounded-2xl border hover:border-primary/30 bg-card hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Quorum Approvals</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Define multi-signature approval workflows for high-value or sensitive transactions. Flexible quorum rules (e.g., 2-of-3, 3-of-5) with role-based access.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Customizable approval thresholds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Time-bound approval windows</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Security Feature 4: Audit Logs */}
              <div className="group relative p-8 rounded-2xl border hover:border-primary/30 bg-card hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Database className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Full Audit Logs</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Immutable audit trail of all wallet activities, policy changes, and approvals. Tamper-proof logs for compliance and forensic analysis.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Cryptographically signed log entries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Export for external SIEM integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Models Section */}
        <section id="deployment" className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-6xl">
            <Hosting />
          </div>
        </section>

        {/* Technology Agnostic Section */}
        <section id="technology" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/80">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">
                Flexible Integration
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                No Vendor Lock-In
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Swap security models without re-architecting your application
              </p>
            </div>

            {/* Technology Options */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {/* MPC Option */}
              <div className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Key className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">MPC</h3>
                <p className="text-muted-foreground mb-6">
                  Distributed key generation and signing across multiple parties
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>No single point of failure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cloud-native deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Fastest key rotation</span>
                  </li>
                </ul>
              </div>

              {/* HSM Option */}
              <div className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <Server className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">HSM</h3>
                <p className="text-muted-foreground mb-6">
                  Hardware Security Modules for maximum tamper resistance
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>FIPS 140-2 Level 3 certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Physical tamper protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Regulatory compliance</span>
                  </li>
                </ul>
              </div>

              {/* Hardware Wallet Option */}
              <div className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
                  <Wallet className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Hardware Wallets</h3>
                <p className="text-muted-foreground mb-6">
                  Ledger, Trezor, and other hardware wallet integration
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Air-gapped security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Manual approval required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cold storage option</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hub and Spoke Visualization */}
            <div className="relative h-[300px] max-w-2xl mx-auto rounded-xl border bg-card p-8">
              <svg viewBox="0 0 400 250" className="w-full h-full">
                {/* Center - Fystack API */}
                <g>
                  <circle cx="200" cy="125" r="50" fill="currentColor" className="text-primary/20" stroke="currentColor" strokeWidth="3" />
                  <text x="200" y="120" textAnchor="middle" className="fill-current text-sm font-bold">Fystack</text>
                  <text x="200" y="137" textAnchor="middle" className="fill-current text-sm font-bold">API</text>
                </g>

                {/* Lines to nodes */}
                <path d="M150,125 L80,60" stroke="currentColor" strokeWidth="2" className="text-primary/40" strokeDasharray="4,4" />
                <path d="M200,75 L200,30" stroke="currentColor" strokeWidth="2" className="text-primary/40" strokeDasharray="4,4" />
                <path d="M250,125 L320,60" stroke="currentColor" strokeWidth="2" className="text-primary/40" strokeDasharray="4,4" />

                {/* MPC Node (left) */}
                <g>
                  <circle cx="80" cy="60" r="35" fill="currentColor" className="text-blue-500/20" stroke="currentColor" strokeWidth="2" />
                  <text x="80" y="55" textAnchor="middle" className="fill-current text-xs font-bold">MPC</text>
                  <text x="80" y="70" textAnchor="middle" className="fill-current text-[10px] opacity-60">Distributed</text>
                </g>

                {/* HSM Node (top) */}
                <g>
                  <circle cx="200" cy="30" r="35" fill="currentColor" className="text-green-500/20" stroke="currentColor" strokeWidth="2" />
                  <text x="200" y="25" textAnchor="middle" className="fill-current text-xs font-bold">HSM</text>
                  <text x="200" y="40" textAnchor="middle" className="fill-current text-[10px] opacity-60">Hardware</text>
                </g>

                {/* Hardware Wallet Node (right) */}
                <g>
                  <circle cx="320" cy="60" r="35" fill="currentColor" className="text-purple-500/20" stroke="currentColor" strokeWidth="2" />
                  <text x="320" y="55" textAnchor="middle" className="fill-current text-xs font-bold">Ledger</text>
                  <text x="320" y="70" textAnchor="middle" className="fill-current text-[10px] opacity-60">Air-gapped</text>
                </g>

                {/* Label */}
                <text x="200" y="220" textAnchor="middle" className="fill-current text-xs opacity-60">
                  Same API. Different Security Backend.
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl p-8 md:p-10 border bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Ready to Build with Wallet as a Service?
                </h3>
                <p className="text-muted-foreground">
                  Start building in minutes with our production-ready infrastructure
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8 py-6 text-base font-semibold bg-[#155dfc] hover:bg-[#155dfc]/90 shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link href="https://sandbox.fystack.io" target="_blank" rel="noopener noreferrer">
                    Try Sandbox
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" asChild>
                  <Link href="https://t.me/anhthind" target="_blank" rel="noopener noreferrer">
                    Talk to Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
