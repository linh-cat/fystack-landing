"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import {
  CheckCircle,
  Code,
  Shield,
  Zap,
  KeyIcon,
  Server,
  Key,
  Lock,
  Globe,
  Database,
  Users,
  ChevronRight,
  Github,
  ExternalLink,
  X,
  Bot,
  ArrowRight,
  Wallet,
  CircleDollarSign,
  ShoppingCart,
  XCircle,
  ChevronDown,
  Twitter,
  Bell,
  Cloud,
  Settings,
  Code2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import qrCode from "@/app/images/qr.png";
import appLogo from "@/app/images/app-logo.svg"; // Updated logo import
import MpcVisualization from "./components/MpcVisualization";
import SDKExample from "./components/SDKExample";
import { DashboardPreview } from "@/components/DashboardPreview";
import dashboardImage from "@/app/images/dashboard.png";
import Hosting from "./components/Hosting"; // Add this import

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AnimatedStat, { Highlight } from "./components/AnimatedStat"; // Updated import
import { SecurityFeatures } from "./components/security-features";

export default function Home() {
  const evmChains = [
    {
      name: "Ethereum",
      logo: "ethereum-eth-logo.svg",
      trustWalletPath: "ethereum",
    },
    {
      name: "Polygon",
      logo: "polygon-matic-logo.svg",
      trustWalletPath: "polygon",
    },
    { name: "BNB Chain", logo: "bnb-bnb-logo.svg", trustWalletPath: "bnb" },
    {
      name: "Avalanche",
      logo: "avalanche-avax-logo.svg",
      trustWalletPath: "avalanche",
    },
    {
      name: "Optimism",
      logo: "optimism-ethereum-op-logo.svg",
      trustWalletPath: "optimism",
    },
    {
      name: "Arbitrum",
      logo: "arbitrum-arb-logo.svg",
      trustWalletPath: "arbitrum",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src={appLogo}
              alt="App Logo"
              priority
              width={170}
              height={50}
              className="h-auto w-[120px] sm:w-[150px] md:w-[170px]"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#security"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Security
            </Link>
            <Link
              href="#sdk"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              SDK
            </Link>
            <Link
              href="#chains"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Chains
            </Link>
            <Link
              href="https://t.me/anhthind"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer hover:cursor-pointer flex items-center">
                Tools <ChevronDown className="inline h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link
                    href="https://risk-dashboard.fystack.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wallet risk analyzer
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden sm:flex gap-2"
            >
              <Link
                href="https://github.com/fystack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gray-900 dark:bg-gray-800 p-1 rounded-full">
                  <Github className="h-3 w-3 text-white fill-white" />
                </div>
                GitHub
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="flex sm:hidden"
            >
              <Link
                href="https://github.com/fystack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gray-900 dark:bg-gray-800 p-1 rounded-full">
                  <Github className="h-4 w-4 text-white fill-white" />
                </div>
              </Link>
            </Button>

            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://app.fystack.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link
                href="https://app.fystack.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(var(--primary-rgb),0.1),transparent)]"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Left Column - Main Value Proposition */}
              <div className="flex flex-col space-y-6">
                <div className="space-y-4">
                  {/* Main Headline */}
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl leading-relaxed">
                    <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-primary text-transparent bg-clip-text">
                      Secure wallet infrastructure
                    </span>
                    <div className="mt-2">
                      for Web3 teams
                    </div>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-xl text-muted-foreground max-w-[600px]">
                    Powered by <span className="font-semibold bg-gradient-to-r from-blue-500 to-primary text-transparent bg-clip-text">open-source MPC</span>. 
                    Build wallet solutions that scale with your business.
                  </p>
                </div>

                {/* Key Differentiators */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">No vendor lock-in</p>
                      <p className="text-sm text-muted-foreground">Run MPC nodes in your cloud, or self-host anytime for regulatory compliance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Built for builders</p>
                      <p className="text-sm text-muted-foreground">API-first, language-agnostic, production-ready</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 min-[400px]:flex-row w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary w-full sm:w-auto"
                    asChild
                  >
                    <Link
                      href="https://app.fystack.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 className="w-4 h-4" />
                      Start Building
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 w-full sm:w-auto"
                    asChild
                  >
                    <Link
                      href="https://docs.fystack.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Documentation
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - MPC Visualization */}
              <div className="flex flex-col space-y-6">
                <div className="space-y-4 text-center">
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border bg-primary/5 text-primary border-primary/20">
                    <Settings className="w-4 h-4 mr-2" />
                    Multi-Party Computation
                  </div>
                  <h2 className="text-2xl font-bold tracking-tighter">
                    Distributed by design
                  </h2>
                  <p className="text-muted-foreground max-w-[500px] mx-auto">
                    Our MPC technology distributes key fragments across multiple nodes, 
                    ensuring no single point of failure while maintaining full control.
                  </p>
                </div>
                <MpcVisualization />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Fystack Section */}
        <section className="py-24 bg-muted/30 relative">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Why Web3 teams choose Fystack
              </h2>
              <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                The only wallet infrastructure that gives you security, flexibility, and control
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Open Source */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Open Source</h3>
                <p className="text-muted-foreground mb-4">
                  Full transparency with open-source MPC protocols. Audit our code, 
                  contribute improvements, or fork for custom implementations.
                </p>
                <Link 
                  href="https://github.com/fystack" 
                  target="_blank"
                  className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  View on GitHub <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              {/* Self-Hostable */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Self-Hostable</h3>
                <p className="text-muted-foreground mb-4">
                  Deploy MPC nodes in your own infrastructure. Essential for regulatory 
                  compliance, data sovereignty, and meeting strict legal requirements in 
                  financial services.
                </p>
                <Link 
                  href="https://docs.fystack.io/self-host" 
                  target="_blank"
                  className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  Self-host guide <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              {/* Developer First */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Developer First</h3>
                <p className="text-muted-foreground mb-4">
                  RESTful APIs, comprehensive SDKs, and detailed documentation. 
                  Integrate wallet functionality in minutes, not months.
                </p>
                <Link 
                  href="https://docs.fystack.io/api" 
                  target="_blank"
                  className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  API Reference <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent dark:from-blue-950/10 dark:via-transparent dark:to-transparent -z-10"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm rounded-full border bg-primary/5 text-primary border-primary/20">
                Dashboard
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                Monitor and manage your wallets with ease
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Our intuitive dashboard gives you complete visibility and
                control over all your crypto wallets and transactions.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="max-w-[800px] mx-auto mb-16">
              <DashboardPreview imageSrc={dashboardImage.src} />
            </div>

            {/* Dashboard Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border bg-card">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Security Controls</h3>
                <p className="text-muted-foreground">
                  Monitor and manage security settings for all your wallets from
                  a single interface. Set spending limits, IP restrictions, and
                  multi-signature requirements.
                </p>
              </div>

              <div className="p-6 rounded-lg border bg-card">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CircleDollarSign className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Transaction Insights</h3>
                <p className="text-muted-foreground">
                  Get detailed analytics on all your transactions across
                  different chains. Track spending patterns and identify unusual
                  activity.
                </p>
              </div>

              <div className="p-6 rounded-lg border bg-card">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Team Management</h3>
                <p className="text-muted-foreground">
                  Assign different roles and permissions to team members.
                  Control who can view, create, or approve transactions from
                  specific wallets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Hosting />

        {/* Video Section - Add this before <Hosting /> */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent dark:from-blue-950/10 dark:via-transparent dark:to-transparent -z-10"></div>
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
                See Fystack in Action
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Watch how easy it is to create secure MPC wallets and integrate them into your applications
              </p>
            </div>
            
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden border bg-background/50 shadow-2xl">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/TeyoKqYy_Ls"
                  title="Fystack Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <SDKExample />

        {/* Security Section */}
        <section id="security" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50/50 to-transparent dark:from-blue-950/30 dark:via-blue-900/20 dark:to-transparent -z-10"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="w-fit mx-auto bg-primary/10 text-primary border-primary/20"
                >
                  Advanced Security
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Enterprise-grade security features
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Our platform is built with security as the top priority,
                  providing multiple layers of protection.
                </p>
              </div>
            </div>
            <SecurityFeatures />
          </div>
        </section>
        {/* Features Section */}
        <section id="features" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-blue-100/20 to-transparent dark:from-blue-950/20 dark:via-blue-900/10 dark:to-transparent -z-10"></div>

          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm rounded-full border bg-primary/5 text-primary border-primary/20">
                Core Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                Everything you need to build secure wallets
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Our platform provides all the tools developers need to create
                secure, scalable wallet solutions.
              </p>
            </div>

            {/* MPC Wallet Generation - Right visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="space-y-4">
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Key className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">MPC Wallet Generation</h3>
                <p className="text-muted-foreground">
                  Create secure wallets using Multi-Party Computation technology
                  that distributes key fragments across multiple cloud
                  providers.
                </p>

                {/* Security Highlight Box */}
                <div className="mt-4 p-4 border border-primary/20 rounded-xl bg-primary/5">
                  <h4 className="text-base font-semibold text-primary mb-2">
                    Avoid Single Point of Failure & Private Key Leaks
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="text-red-500 font-bold text-sm">
                        75%
                      </span>
                    </div>
                    <p className="text-sm">
                      of crypto hacks involve private key leaks.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Never worry again—MPC wallets have no private keys to
                    compromise.
                  </p>
                </div>
              </div>
              {/* MPC Wallet Visualization */}
              <div className="relative h-[400px] rounded-xl border bg-background/50 p-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[900px] h-full">
                    {/* Main Wallet */}
                    <div className="absolute top-1/2 left-[30%] -translate-y-1/2">
                      <div className="p-4 rounded-lg bg-background border border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-6 w-6 text-blue-500" />
                        </div>
                      </div>
                    </div>

                    {/* Key Shares with Cloud Provider Icons */}
                    <div className="absolute top-[25%] right-[25%] -translate-y-1/2 animate-fade-in">
                      <div className="relative">
                        <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center gap-2">
                          <KeyIcon className="h-5 w-5 text-yellow-500" />
                          AWS
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute top-1/2 right-[25%] -translate-y-1/2 animate-fade-in"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <div className="relative">
                        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center gap-2">
                          <KeyIcon className="h-5 w-5 text-blue-500" />
                          Azure
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute bottom-[25%] right-[25%] translate-y-1/2 animate-fade-in"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <div className="relative">
                        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-2">
                          <KeyIcon className="h-5 w-5 text-green-500" />
                          {"Google cloud"}
                        </div>
                      </div>
                    </div>

                    {/* SVG Curves and Animated Dots */}
                    <svg
                      width="100%"
                      height="100%"
                      className="absolute inset-0"
                      style={{ zIndex: -1 }}
                      viewBox="0 0 900 400"
                    >
                      {/* Curved connecting lines */}
                      <g stroke="currentColor" strokeWidth="1">
                        {/* AWS connection */}
                        <path
                          d="M 270 200 Q 450 50, 580 100"
                          className="text-yellow-500/20"
                          fill="none"
                          strokeDasharray="3 3"
                        />

                        {/* Azure connection */}
                        <path
                          d="M 270 200 Q 450 200, 580 200"
                          className="text-blue-500/20"
                          fill="none"
                          strokeDasharray="3 3"
                        />

                        {/* Google Cloud connection */}
                        <path
                          d="M 270 200 Q 450 350, 580 300"
                          className="text-green-500/20"
                          fill="none"
                          strokeDasharray="3 3"
                        />
                      </g>

                      {/* Animated dots */}
                      <g>
                        {/* AWS dot */}
                        <circle r="2" fill="#EAB308">
                          <animateMotion
                            dur="3s"
                            repeatCount="indefinite"
                            path="M 270 200 Q 450 50, 580 100"
                          >
                            <animate
                              attributeName="opacity"
                              values="0;0.5;0"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </animateMotion>
                        </circle>

                        {/* Azure dot */}
                        <circle r="2" fill="#3B82F6">
                          <animateMotion
                            dur="3s"
                            repeatCount="indefinite"
                            path="M 270 200 Q 450 200, 580 200"
                            begin="1s"
                          >
                            <animate
                              attributeName="opacity"
                              values="0;0.5;0"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="1s"
                            />
                          </animateMotion>
                        </circle>

                        {/* Google Cloud dot */}
                        <circle r="2" fill="#22C55E">
                          <animateMotion
                            dur="3s"
                            repeatCount="indefinite"
                            path="M 270 200 Q 450 350, 580 300"
                            begin="2s"
                          >
                            <animate
                              attributeName="opacity"
                              values="0;0.5;0"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="2s"
                            />
                          </animateMotion>
                        </circle>
                      </g>

                      {/* Additional floating particles */}
                      {[...Array(15)].map((_, i) => (
                        <circle
                          key={i}
                          r="1"
                          className={`
              ${i % 3 === 0 ? "text-yellow-500/30" : ""}
              ${i % 3 === 1 ? "text-blue-500/30" : ""}
              ${i % 3 === 2 ? "text-green-500/30" : ""}
            `}
                        >
                          <animateMotion
                            dur="4s"
                            repeatCount="indefinite"
                            path={`M 270 200 Q ${450 + i * 5} ${
                              200 + ((i % 3) - 1) * 150
                            }, ${580 + i * 2} ${200 + ((i % 3) - 1) * 100}`}
                            begin={`${i * 0.2}s`}
                          >
                            <animate
                              attributeName="opacity"
                              values="0;0.3;0"
                              dur="4s"
                              repeatCount="indefinite"
                              begin={`${i * 0.2}s`}
                            />
                          </animateMotion>
                        </circle>
                      ))}
                    </svg>

                    {/* Background Particles */}
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Secure Smart Contract Deployment - COMMENTED OUT */}
            {/*
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative h-[400px] rounded-xl border bg-background/50 p-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%]">
                      <div className="p-3 rounded-lg bg-background/90 border border-muted shadow-sm">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-1.5">
                              <XCircle className="h-4 w-4 text-red-500" />
                              <span className="text-sm font-medium text-red-500">
                                Insecure
                              </span>
                            </div>
                            <div className="bg-red-50 p-2 rounded font-mono text-xs border border-red-100">
                              <div className="text-red-500">
                                PRIVATE_KEY=0xabc123...
                              </div>
                              <div className="text-red-400">
                                // Exposed in .env file
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-1.5">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm font-medium text-green-500">
                                Secure
                              </span>
                            </div>
                            <div className="bg-green-50 p-2 rounded font-mono text-xs border border-green-100">
                              <div className="text-green-500">
                                await wallet.sign(tx);
                              </div>
                              <div className="text-green-400">
                                // OIDC authentication
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[60%]">
                      <div className="p-3 rounded-lg bg-background/90 border border-blue-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Server className="h-5 w-5 text-blue-500" />
                          <span className="font-medium">
                            Smart Contract Deployment
                          </span>
                        </div>
                        <div className="bg-blue-50 p-2 rounded border border-blue-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Database className="h-4 w-4 text-blue-500" />
                              <span className="text-xs font-medium">
                                Contract deployed
                              </span>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-blue-100 text-blue-700 text-xs border-blue-200"
                            >
                              0x1234...5678
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <svg
                      width="100%"
                      height="100%"
                      className="absolute inset-0"
                      style={{ zIndex: -1 }}
                      viewBox="0 0 400 400"
                    >
                      <path
                        d="M 250 100 C 270 250, 270 280, 220 380"
                        stroke="#dcfce7"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 2"
                      />

                      <circle r="3" fill="#22c55e">
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          path="M 250 100 C 270 250, 270 280, 220 380"
                        />
                      </circle>
                    </svg>

                    <div className="absolute top-[50%] left-[30%] p-1.5 rounded-full bg-red-100 border border-red-300 animate-pulse">
                      <Key className="h-4 w-4 text-red-500" />
                    </div>

                    <div className="absolute top-[50%] right-[30%] p-1.5 rounded-full bg-green-100 border border-green-300 animate-pulse">
                      <Lock className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  Secure Smart Contract Deployment
                </h3>
                <p className="text-muted-foreground">
                  Deploy smart contracts without exposing private keys in your
                  codebase or CI/CD pipeline, using secure OpenID Connect (OIDC)
                  authentication.
                </p>

                <div className="space-y-6 mt-2">
                  <div>
                    <h4 className="text-base font-semibold text-red-500 mb-3">
                      The Problem: .env File Security Risk
                    </h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Accidental commits of private keys to public
                          repositories
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Unauthorized access to deployment environments
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Complete loss of funds if compromised
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-green-500 mb-3">
                      The Solution: MPC wallet + OIDC Authentication
                    </h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          No private keys in your codebase or CI/CD pipeline
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Authenticate smart contract deployments using OIDC
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Sign transactions securely through our API with proper
                          access controls
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            */}

            {/* Crypto Payment - Left visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative h-[400px] rounded-xl border bg-background/50 p-6 overflow-hidden">
                {" "}
                {/* Increased height */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Checkout Card */}
                    <div className="absolute left-[20%] top-1/2 -translate-y-1/2">
                      {" "}
                      {/* Moved further left */}
                      <div className="p-4 rounded-lg bg-background border border-primary/20 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <ShoppingCart className="h-5 w-5 text-blue-500" />
                          <span className="font-medium">Checkout</span>
                        </div>
                        <div className="text-muted-foreground">
                          Total: $99.99
                        </div>
                      </div>
                    </div>

                    {/* Curved Connection */}
                    <div className="absolute inset-0 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                      >
                        <path
                          d="M 30% 50% Q 50% 35%, 70% 50%"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="text-blue-500/20"
                        />
                        {/* Animated Dot along the path */}
                        <circle
                          r="4"
                          fill="currentColor"
                          className="text-blue-500 animate-move-along-path"
                        >
                          <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M 30% 50% Q 50% 35%, 70% 50%"
                          />
                        </circle>
                      </svg>
                    </div>

                    {/* QR Code */}
                    <div className="absolute right-[20%] top-1/2 -translate-y-1/2">
                      <div className="p-4 rounded-lg bg-background border border-primary/20 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-32 h-32 bg-white rounded-lg relative flex items-center justify-center">
                            {" "}
                            {/* Removed p-2 */}
                            <Image
                              src={qrCode}
                              alt="Payment QR Code"
                              width={96}
                              height={96}
                              className="rounded"
                              priority
                              style={{ objectFit: "contain" }}
                            />
                            {/* Scanning Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0 animate-scan rounded-lg"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            Scan to pay with crypto
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Background Particles */}
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Crypto Payment</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate cryptocurrency payments into your
                  applications with our simple API.
                </p>
              </div>
            </div>

            {/* Telegram Bot - Right visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="space-y-4">
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Telegram Bot</h3>
                <p className="text-muted-foreground">
                  Securely generate and manage wallets for your Telegram crypto
                  bots with enterprise-grade security.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl border bg-background/50 p-6 overflow-hidden">
                {/* Telegram Bot Interface */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[280px] h-[400px] bg-background rounded-xl border-2 border-primary/20 overflow-hidden scale-90">
                    {/* Bot Header */}
                    <div className="p-4 border-b bg-primary/5">
                      <div className="flex items-center gap-3">
                        <Bot className="h-6 w-6 text-primary" />
                        <span className="font-medium">Wallet Bot</span>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 space-y-4">
                      <div className="flex items-start gap-2 animate-slide-left">
                        <div className="p-2 rounded bg-primary/10 max-w-[80%]">
                          <p className="text-sm">/create_wallet</p>
                        </div>
                      </div>
                      <div
                        className="flex items-start gap-2 justify-end animate-slide-left"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <div className="p-2 rounded bg-blue-500/10 max-w-[80%]">
                          <p className="text-sm">✅ New wallet created</p>
                          <p className="text-xs font-mono mt-1">
                            0x1234...5678
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wallet Automation - Left visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Wallet Automation Visualization */}
              <div className="relative h-[400px] rounded-xl border bg-background/50 p-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[900px] h-full mx-auto">
                    {/* Source Wallets */}
                    <div className="absolute top-[25%] left-[15%]">
                      <div className="p-3 rounded-lg bg-background border border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-5 w-5 text-blue-500" />
                          <span className="text-sm">Wallet 1</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[45%] left-[15%]">
                      <div className="p-3 rounded-lg bg-background border border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-5 w-5 text-blue-500" />
                          <span className="text-sm">Wallet 2</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[65%] left-[15%]">
                      {" "}
                      {/* Verified position */}
                      <div className="p-3 rounded-lg bg-background border border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-5 w-5 text-blue-500" />
                          <span className="text-sm">Wallet 3</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Wallet */}
                    <div className="absolute top-1/2 left-[65%] -translate-y-1/2">
                      {" "}
                      {/* Moved from 75% to 65% */}
                      <div className="p-4 rounded-lg bg-background border border-green-500/20">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-6 w-6 text-green-500" />
                          <span>Main Wallet</span>
                        </div>
                      </div>
                    </div>

                    {/* SVG with converging paths */}
                    <svg
                      width="100%"
                      height="100%"
                      className="absolute inset-0"
                      style={{ zIndex: -1 }}
                      viewBox="0 0 900 400"
                    >
                      {/* Define the paths - all converging to the exact same point */}
                      <g
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-blue-500/30"
                      >
                        <path d="M 135 100 Q 350 100, 585 200" fill="none" />
                        <path d="M 135 180 Q 350 180, 585 200" fill="none" />
                        <path
                          d="M 135 290 Q 350 290, 585 200"
                          fill="none"
                        />{" "}
                        {/* Adjusted Y coordinate to match Wallet 3 center */}
                      </g>

                      {/* Animated dots */}
                      <g>
                        <circle r="3" fill="#3B82F6">
                          <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M 135 100 Q 350 100, 585 200"
                          />
                        </circle>

                        <circle r="3" fill="#3B82F6">
                          <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M 135 180 Q 350 180, 585 200"
                            begin="0.6s"
                          />
                        </circle>

                        <circle r="3" fill="#3B82F6">
                          <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M 135 290 Q 350 290, 585 200"
                            begin="1.2s"
                          />
                        </circle>
                      </g>
                    </svg>

                    {/* Background Particles */}
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Wallet Automation</h3>
                <p className="text-muted-foreground">
                  Automatically sweep and consolidate funds from multiple
                  wallets into a central wallet with customizable rules and
                  schedules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chains Section */}
        <section id="chains" className="py-24 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent)]"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="w-fit mx-auto bg-primary/10 text-primary border-primary/20"
                >
                  Supported Chains
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Multi-chain support
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Our platform supports all major blockchain networks and over
                  100 tokens.
                </p>
              </div>
            </div>
            <div className="mt-16">
              {/* EVM Chains */}
              <h3 className="text-xl font-bold mb-8">EVM Chains</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {evmChains.map((chain) => (
                  <div
                    key={chain.name}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30 min-h-[120px]"
                  >
                    <div className="flex items-center justify-center h-10">
                      {chain.name === "BNB Chain" ? (
                        <Image
                          src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/info/logo.png"
                          alt="BNB Chain"
                          width={40}
                          height={40}
                          className="transition-transform hover:scale-110 duration-300"
                        />
                      ) : chain.name === "Avalanche" ? (
                        <Image
                          src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png"
                          alt="Avalanche"
                          width={40}
                          height={40}
                          className="transition-transform hover:scale-110 duration-300"
                        />
                      ) : (
                        <Image
                          src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${
                            chain.trustWalletPath || chain.name.toLowerCase()
                          }/info/logo.png`}
                          alt={chain.name}
                          width={40}
                          height={40}
                          className="transition-transform hover:scale-110 duration-300"
                        />
                      )}
                    </div>
                    <span className="text-sm font-medium text-center">
                      {chain.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <h3 className="text-xl font-bold mb-8">Non-EVM Chains</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30 min-h-[120px]">
                    <Image
                      src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png"
                      alt="Solana"
                      width={40}
                      height={40}
                      className="transition-transform hover:scale-110 duration-300"
                    />
                    <span className="text-sm font-medium">Solana</span>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-xl font-bold mb-8">Supported Tokens</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image
                      src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"
                      alt="ETH"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-medium">ETH</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image
                      src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
                      alt="USDC"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-medium">USDC</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image
                      src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
                      alt="USDT"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-medium">USDT</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image
                      src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
                      alt="DAI"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-medium">DAI</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image
                      src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png"
                      alt="WBTC"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-medium">WBTC</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image
                      src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png"
                      alt="LINK"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-medium">LINK</span>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary/5"
                  >
                    View all 100+ supported tokens
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="w-fit mx-auto bg-primary/10 text-primary border-primary/20"
                >
                  Pricing
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, transparent pricing
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Choose the plan that fits your needs. All plans include our
                  core security features.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Developer (Free) Plan */}
              <Card className="flex flex-col hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6 flex-1">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Developer</h3>
                    <p className="text-muted-foreground">
                      For individual developers and small projects.
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">Free</span>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Up to 3 MPC wallets - 3,000 standard wallets
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">100 crypto payments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">1 workspace, 3 users</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">20,000 API calls/month</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Basic security features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Email support</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary/5"
                    asChild
                  >
                    <Link
                      href="https://app.fystack.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started
                    </Link>
                  </Button>
                </div>
              </Card>

              {/* Starter Plan - New */}
              <Card className="flex flex-col hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6 flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">Starter</h3>
                      <Badge className="bg-green-500 text-white">Save 34%</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      For startups and growing businesses.
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">$19</span>
                      <span className="text-muted-foreground line-through">$29</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Up to 50 MPC wallets - 5,000 standard wallets
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">500 crypto payments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">2 workspaces, 5 users</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">50,000 API calls/month</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Priority email support</span>
                      </li>
                      
                      {/* Advanced Security Features Section */}
                      <li className="pt-2">
                        <span className="text-sm font-semibold text-primary">Advanced Security Features:</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Audit trails</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Transaction policies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Approval groups</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Alerts and monitors</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button
                    className="w-full"
                    asChild
                  >
                    <Link
                      href="https://app.fystack.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started
                    </Link>
                  </Button>
                </div>
              </Card>

              {/* Team Plan */}
              <Card className="flex flex-col border-primary relative hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                  Most Popular
                </div>
                <CardContent className="p-6 flex-1">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Team</h3>
                    <p className="text-muted-foreground">
                      For growing teams and businesses.
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">$99</span>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">
                          Up to 100 MPC wallets - 10,000 standard wallets
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">2000 crypto payments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">5 workspaces</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">200,000 API calls/month</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Priority Telegram support</span>
                      </li>
                       {/* Advanced Security Features Section */}
                       <li className="pt-2">
                        <span className="text-sm font-semibold text-primary">Advanced Security Features:</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Audit trails</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Transaction policies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Approval groups</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Alerts and monitors</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                    asChild
                  >
                    <Link
                      href="https://app.fystack.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started
                    </Link>
                  </Button>
                </div>
              </Card>
              
              {/* Enterprise Plan */}
              <Card className="md:col-span-3 flex flex-col hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 mt-8">
                <CardContent className="p-6 flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">Enterprise</h3>
                      <Badge className="bg-blue-500 text-white">Custom Solution</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      For large organizations with custom requirements and high volume needs.
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">Custom</span>
                      <span className="text-muted-foreground">pricing</span>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-base font-semibold">Infrastructure</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">Unlimited MPC wallets</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">Unlimited standard wallets</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">Unlimited crypto payments</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">Custom API limits</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-base font-semibold">Security & Compliance</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">Custom security policies</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">Advanced multi-sig controls</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">Risk monitoring & alerts</span>
                          </li>
                          <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Audit trails</span>
                      </li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-base font-semibold">Support & Services</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">Advanced Analytics</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">On-prem deployment</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">Custom implementation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">SLA guarantees</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <Link
                      href="https://t.me/anhthind"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Sales
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-24 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent)]"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit mx-auto bg-primary/10 text-primary border-primary/20">Testimonials</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by developers worldwide</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  See what our customers have to say about our platform.
                </p>
                        </div>
                        </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-0.5">
                      {[...Array( 5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 fill-primary text-primary">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                      </div>
                    <p className="text-muted-foreground">
                      "SecureWallet's MPC technology has completely transformed how we handle crypto assets. The security features are top-notch, and the API is incredibly easy to work with."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10"></div>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">CTO, CryptoFin</p>
                    </div>
                        </div>
                        </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 fill-primary text-primary">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                      </div>
                    <p className="text-muted-foreground">
                      "The multi-approval feature has been a game-changer for our treasury management. We can now ensure that no single person has complete control over our funds."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10"></div>
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">Founder, BlockTech</p>
                    </div>
                        </div>
                        </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 fill-primary text-primary">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                      </div>
                    <p className="text-muted-foreground">
                      "We integrated SecureWallet into our DeFi platform in just a few days. The documentation is excellent, and their support team was incredibly helpful throughout the process."
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10"></div>
                      <div>
                        <p className="font-medium">Alex Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Lead Developer, DeFiHub</p>
                    </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to get started?
                </h2>
                <p className="text-primary-foreground/80 md:text-xl">
                  Join thousands of developers building secure wallet solutions
                  with our platform.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://sandbox.fystack.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-lg font-medium hover:underline"
                  >
                    Live demo <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-1 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link
                      href="https://t.me/anhthind"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Sales
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">100+</h3>
                    <p className="text-primary-foreground/80">
                      Supported tokens
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">10+</h3>
                    <p className="text-primary-foreground/80">
                      Blockchain networks
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">99.9%</h3>
                    <p className="text-primary-foreground/80">Uptime SLA</p>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">24/7</h3>
                    <p className="text-primary-foreground/80">
                      Enterprise support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={appLogo}
                  alt="App Logo"
                  priority
                  width={170}
                  height={50}
                  className="h-auto"
                />
              </div>
              <p className="text-muted-foreground max-w-xs">
                MPC platform built for developers. Create wallets with ease
                securely.
              </p>
              <div className="flex gap-4 mt-4">
                <Link
                  href="https://github.com/fystack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://x.com/fystack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#security"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Data Processing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Fystack. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Add this just before the closing </div> of the main flex-col min-h-screen container */}
      {/* Floating Telegram Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://t.me/+IsRhPyWuOFxmNmM9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#389BFF] hover:bg-[#2D8EF4] text-white px-7 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            className="flex-shrink-0 mr-3"
          >
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          <span className="text-lg font-medium">Join our community</span>
        </Link>
      </div>
    </div>
  );
}
