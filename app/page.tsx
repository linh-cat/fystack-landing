import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Shield, Zap, KeyIcon, Server, Key, Lock, Globe, Database, Users, ChevronRight, Github, ExternalLink, X, Bot, ArrowRight, Wallet, CircleDollarSign, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import qrCode from '@/app/images/qr.png'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Fystack</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">Features</Link>
            <Link href="#security" className="text-sm font-medium hover:underline underline-offset-4">Security</Link>
            <Link href="#sdk" className="text-sm font-medium hover:underline underline-offset-4">SDK</Link>
            <Link href="#chains" className="text-sm font-medium hover:underline underline-offset-4">Chains</Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(var(--primary-rgb),0.1),transparent)]"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit bg-primary/10 text-primary border-primary/20">Secure. Scalable. Simple.</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    MPC platform built for developers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create wallets with ease securely. Our Multi-Party Computation technology ensures your keys are never in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                    Get Started <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-1">
                    <Github className="h-4 w-4" /> View on GitHub
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-8">
                  <p className="text-sm text-muted-foreground">Trusted by:</p>
                  <div className="flex gap-6 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                    <Image 
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                      alt="Company 1" 
                      width={80} 
                      height={30} 
                      className="h-6 w-auto object-contain" 
                    />
                    <Image 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                      alt="Company 2" 
                      width={80} 
                      height={30} 
                      className="h-6 w-auto object-contain" 
                    />
                    <Image 
                      src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
                      alt="Company 3" 
                      width={80} 
                      height={30} 
                      className="h-6 w-auto object-contain" 
                    />
                  </div>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[500px] rounded-xl overflow-hidden border bg-muted/30 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-[80%] aspect-video">
                    {/* Central Key Icon with Pulse Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center z-10">
                        <Key className="h-8 w-8 text-primary animate-pulse" />
                      </div>
                      <div className="w-32 h-32 rounded-full bg-primary/5 absolute animate-ping"></div>
                    </div>

                    {/* Cloud Provider Nodes with Key Fragments */}
                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-lg bg-blue-500/20 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                          <Image src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" width={40} height={40} />
                        </div>
                        <div className="absolute -right-2 -bottom-2 bg-primary/20 rounded-full p-1">
                          <Key className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-lg bg-blue-500/20 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                          <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure" width={40} height={40} />
                        </div>
                        <div className="absolute -right-2 -bottom-2 bg-primary/20 rounded-full p-1">
                          <Key className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-lg bg-blue-500/20 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                          <Image 
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" 
                            alt="Google Cloud" 
                            width={60} 
                            height={60} 
                            className="scale-125"
                          />
                        </div>
                        <div className="absolute -right-2 -bottom-2 bg-primary/20 rounded-full p-1">
                          <Key className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Animated Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      {/* Animated dashed lines */}
                      <path d="M25,35 Q40,20 50,35 T75,35" fill="none" stroke="rgba(var(--primary-rgb), 0.5)" strokeWidth="0.5" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" from="0" to="100" dur="20s" repeatCount="indefinite" />
                      </path>
                      <path d="M25,45 Q40,30 50,45 T75,45" fill="none" stroke="rgba(var(--primary-rgb), 0.3)" strokeWidth="0.5" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="15s" repeatCount="indefinite" />
                      </path>
                      <path d="M25,55 Q40,40 50,55 T75,55" fill="none" stroke="rgba(var(--primary-rgb), 0.2)" strokeWidth="0.5" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" from="0" to="100" dur="25s" repeatCount="indefinite" />
                      </path>

                      {/* Animated particles along the paths */}
                      <circle r="0.5" fill="var(--primary)">
                        <animateMotion dur="10s" repeatCount="indefinite" path="M25,35 Q40,20 50,35 T75,35" />
                      </circle>
                      <circle r="0.5" fill="var(--primary)">
                        <animateMotion dur="8s" repeatCount="indefinite" path="M25,45 Q40,30 50,45 T75,45" />
                      </circle>
                      <circle r="0.5" fill="var(--primary)">
                        <animateMotion dur="12s" repeatCount="indefinite" path="M25,55 Q40,40 50,55 T75,55" />
                      </circle>
                    </svg>

                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Everything you need to build secure wallets
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
                Our platform provides all the tools developers need to create secure, scalable wallet solutions.
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
                  Create secure wallets using Multi-Party Computation technology that distributes key fragments across multiple cloud providers.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <ArrowRight className="w-4 h-4" />
                  <span>Enterprise-grade security</span>
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
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
              alt="AWS" 
              width={40} 
              height={20} 
              className="h-5 w-auto"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-[25%] -translate-y-1/2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="relative">
          <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center gap-2">
            <KeyIcon className="h-5 w-5 text-blue-500" />
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" 
              alt="Azure" 
              width={40} 
              height={20} 
              className="h-5 w-auto"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[25%] right-[25%] translate-y-1/2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="relative">
          <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-2">
            <KeyIcon className="h-5 w-5 text-green-500" />
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" 
              alt="Google Cloud" 
              width={40} 
              height={20} 
              className="h-5 w-auto"
            />
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
              ${i % 3 === 0 ? 'text-yellow-500/30' : ''}
              ${i % 3 === 1 ? 'text-blue-500/30' : ''}
              ${i % 3 === 2 ? 'text-green-500/30' : ''}
            `}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path={`M 270 200 Q ${450 + (i * 5)} ${200 + ((i % 3 - 1) * 150)}, ${580 + (i * 2)} ${200 + ((i % 3 - 1) * 100)}`}
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
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  </div>
</div>
            </div>

            {/* Crypto Payment - Left visualization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative h-[400px] rounded-xl border bg-background/50 p-6 overflow-hidden"> {/* Increased height */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Checkout Card */}
                    <div className="absolute left-[20%] top-1/2 -translate-y-1/2"> {/* Moved further left */}
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
                      <svg width="100%" height="100%" className="absolute inset-0">
                        <path
                          d="M 30% 50% Q 50% 35%, 70% 50%"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="text-blue-500/20"
                        />
                        {/* Animated Dot along the path */}
                        <circle r="4" fill="currentColor" className="text-blue-500 animate-move-along-path">
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
                          <div className="w-32 h-32 bg-white rounded-lg relative flex items-center justify-center"> {/* Removed p-2 */}
                            <Image
                              src={qrCode}
                              alt="Payment QR Code"
                              width={96} 
                              height={96}
                              className="rounded"
                              priority
                              style={{ objectFit: 'contain' }}
                            />
                            {/* Scanning Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0 animate-scan rounded-lg"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">Scan to pay with crypto</span>
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
                          animationDuration: `${3 + Math.random() * 2}s`
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
                  Seamlessly integrate cryptocurrency payments into your applications with our simple API.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <ArrowRight className="w-4 h-4" />
                  <span>Simple integration</span>
                </div>
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
                  Securely generate and manage wallets for your Telegram crypto bots with enterprise-grade security.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <ArrowRight className="w-4 h-4" />
                  <span>Automated management</span>
                </div>
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
                      <div className="flex items-start gap-2 justify-end animate-slide-left" style={{ animationDelay: "0.5s" }}>
                        <div className="p-2 rounded bg-blue-500/10 max-w-[80%]">
                          <p className="text-sm">✅ New wallet created</p>
                          <p className="text-xs font-mono mt-1">0x1234...5678</p>
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

      <div className="absolute top-[65%] left-[15%]"> {/* Verified position */}
        <div className="p-3 rounded-lg bg-background border border-blue-500/20">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-blue-500" />
            <span className="text-sm">Wallet 3</span>
          </div>
        </div>
      </div>

      {/* Main Wallet */}
      <div className="absolute top-1/2 left-[65%] -translate-y-1/2"> {/* Moved from 75% to 65% */}
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
        <g stroke="currentColor" strokeWidth="1.5" className="text-blue-500/30">
          <path d="M 135 100 Q 350 100, 585 200" fill="none" />
          <path d="M 135 180 Q 350 180, 585 200" fill="none" />
          <path d="M 135 290 Q 350 290, 585 200" fill="none" /> {/* Adjusted Y coordinate to match Wallet 3 center */}
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
            animationDuration: `${3 + Math.random() * 2}s`
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
                  Automatically sweep and consolidate funds from multiple wallets into a central wallet with customizable rules and schedules.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <ArrowRight className="w-4 h-4" />
                  <span>Automated fund management</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50/50 to-transparent dark:from-blue-950/30 dark:via-blue-900/20 dark:to-transparent -z-10"></div>
          
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit mx-auto bg-primary/10 text-primary border-primary/20">Advanced Security</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Enterprise-grade security features</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Our platform is built with security as the top priority, providing multiple layers of protection.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {/* IP Whitelist */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">IP Whitelist</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Restrict access to your wallets and APIs to specific IP addresses, ensuring only authorized systems can interact with your assets.
                  </p>
                  {/* Interactive Visualization */}
                  <div className="mt-6 p-4 rounded-lg bg-muted/50 overflow-hidden">
                    <div className="flex items-center gap-2 animate-slide-left">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <code className="text-sm">192.168.1.1</code>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex items-center gap-2 mt-2 animate-slide-left" style={{ animationDelay: "0.2s" }}>
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <code className="text-sm">Unknown IP</code>
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi Approvals */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Multi Approvals with Quorum</h3>
                  </div>
                     <p className="text-muted-foreground">
                    Set flexible approval requirements based on your security needs. Configure custom quorum rules for different transaction types and amounts.
                  </p>
                  {/* Interactive Visualization */}
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`p-3 rounded-lg ${i <= 2 ? 'bg-primary/20' : 'bg-muted'} transition-colors duration-300 animate-fade-in`} style={{ animationDelay: `${i * 0.2}s` }}>
                        <Users className={`h-5 w-5 ${i <= 2 ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                    ))}
                    <div className="col-span-3 text-center text-sm text-muted-foreground mt-2">Customizable Approval Threshold</div>
                  </div>
                </div>
              </div>

              {/* Transaction Policy */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Transaction Policy</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Define and enforce transaction policies including spending limits, allowed destinations, and time-based restrictions.
                  </p>
                  {/* Interactive Visualization */}
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-between p-2 rounded bg-muted/50 animate-fade-in">
                      <span className="text-sm">Daily Limit</span>
                      <span className="text-sm font-mono">5 ETH</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      <span className="text-sm">Allowed Chains</span>
                      <span className="text-sm font-mono">ETH, BSC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zero Knowledge Encryption */}
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Key className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Zero Knowledge End-to-End Key Encryption</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Your keys are encrypted end-to-end using zero-knowledge protocols, ensuring that even we cannot access your private keys.
                  </p>
                  {/* Interactive Visualization */}
                  <div className="mt-6 relative h-16">
                    <div className="absolute inset-0 flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-primary/10 animate-pulse">
                        <Lock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 mx-4 border-t-2 border-dashed border-primary/30"></div>
                      <div className="p-3 rounded-lg bg-primary/10 animate-pulse">
                        <Key className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDK Section */}
        <section id="sdk" className="py-24 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit mx-auto bg-primary/10 text-primary border-primary/20">Developer SDK</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple integration with our SDK</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Just a few lines of code to create secure wallets and manage transactions.
                </p>
              </div>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <Card className="overflow-hidden border-primary/10">
                <CardContent className="p-0">
                  <Tabs defaultValue="javascript" className="w-full">
                    <div className="flex items-center justify-between border-b px-4">
                      <TabsList className="bg-transparent">
                        <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                        <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                      </TabsList>
                      <Button variant="ghost" size="sm" className="gap-1 text-xs">
                        <ExternalLink className="h-3 w-3" /> View Docs
                      </Button>
                    </div>
                    <TabsContent value="javascript" className="p-0 m-0">
                      <pre className="p-4 overflow-x-auto text-sm bg-muted font-mono">
                        <code>{`// Initialize the SDK
const securewallet = require('securewallet-sdk');
const client = new securewallet.Client({
  apiKey: 'YOUR_API_KEY'
});

// Create a new wallet
async function createWallet() {
  const wallet = await client.createWallet({
    name: 'My Wallet',
    quorum: { required: 2, total: 3 },
    policies: {
      dailyLimit: '1000000000000000000' // 1 ETH
    }
  });
  
  console.log(\`Wallet created: \${wallet.address}\`);
  return wallet;
}

// Generate a transaction
async function createTransaction(walletId, to, amount) {
  const tx = await client.createTransaction({
    walletId,
    to,
    value: amount,
    chainId: 1 // Ethereum Mainnet
  });
  
  return tx;
}`}</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="typescript" className="p-0 m-0">
                      <pre className="p-4 overflow-x-auto text-sm bg-muted font-mono">
                        <code>{`// Initialize the SDK
import { Client, WalletConfig, TransactionParams } from 'securewallet-sdk';

const client = new Client({
  apiKey: 'YOUR_API_KEY'
});

// Create a new wallet
async function createWallet(): Promise<Wallet> {
  const config: WalletConfig = {
    name: 'My Wallet',
    quorum: { required: 2, total: 3 },
    policies: {
      dailyLimit: '1000000000000000000' // 1 ETH
    }
  };
  
  const wallet = await client.createWallet(config);
  console.log(\`Wallet created: \${wallet.address}\`);
  return wallet;
}

// Generate a transaction
async function createTransaction(
  walletId: string, 
  to: string, 
  amount: string
): Promise<Transaction> {
  const params: TransactionParams = {
    walletId,
    to,
    value: amount,
    chainId: 1 // Ethereum Mainnet
  };
  
  return await client.createTransaction(params);
}`}</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="python" className="p-0 m-0">
                      <pre className="p-4 overflow-x-auto text-sm bg-muted font-mono">
                        <code>{`# Initialize the SDK
from securewallet_sdk import Client

client = Client(api_key='YOUR_API_KEY')

# Create a new wallet
def create_wallet():
    wallet = client.create_wallet(
        name='My Wallet',
        quorum={'required': 2, 'total': 3},
        policies={
            'daily_limit': '1000000000000000000'  # 1 ETH
        }
    )
    
    print(f"Wallet created: {wallet.address}")
    return wallet

# Generate a transaction
def create_transaction(wallet_id, to, amount):
    tx = client.create_transaction(
        wallet_id=wallet_id,
        to=to,
        value=amount,
        chain_id=1  # Ethereum Mainnet
    )
    
    return tx`}</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Simple, Powerful API</h3>
                  <p className="text-muted-foreground">
                    Our SDK provides a clean, intuitive interface for all wallet operations, from creation to transaction management.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Easy Wallet Creation</h4>
                      <p className="text-sm text-muted-foreground">Create secure MPC wallets with just a few lines of code.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Flexible Security Policies</h4>
                      <p className="text-sm text-muted-foreground">Define custom security policies for each wallet.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Multi-Chain Support</h4>
                      <p className="text-sm text-muted-foreground">One SDK for all supported blockchains.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Comprehensive Documentation</h4>
                      <p className="text-sm text-muted-foreground">Detailed guides, examples, and API references.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Button className="gap-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                    Get API Key <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
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
                <Badge variant="outline" className="w-fit mx-auto bg-primary/10 text-primary border-primary/20">Supported Chains</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Multi-chain support</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Our platform supports all major blockchain networks and over 100 tokens.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-8">EVM Chains</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                  <Image src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025" alt="Ethereum" width={40} height={40} className="transition-transform hover:scale-110 duration-300" />
                  <span className="text-sm font-medium">Ethereum</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                  <Image src="https://cryptologos.cc/logos/polygon-matic-logo.svg?v=025" alt="Polygon" width={40} height={40} className="transition-transform hover:scale-110 duration-300" />
                  <span className="text-sm font-medium">Polygon</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                  <Image src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=025" alt="BNB Chain" width={40} height={40} className="transition-transform hover:scale-110 duration-300" />
                  <span className="text-sm font-medium">BNB Chain</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                  <Image src="https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=025" alt="Avalanche" width={40} height={40} className="transition-transform hover:scale-110 duration-300" />
                  <span className="text-sm font-medium">Avalanche</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                  <Image src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg?v=025" alt="Optimism" width={40} height={40} className="transition-transform hover:scale-110 duration-300" />
                  <span className="text-sm font-medium">Optimism</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                  <Image src="https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=025" alt="Arbitrum" width={40} height={40} className="transition-transform hover:scale-110 duration-300" />
                  <span className="text-sm font-medium">Arbitrum</span>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-xl font-bold mb-8">Non-EVM Chains</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=025" alt="Solana" width={40} height={40} className="transition-transform hover:scale-110 duration-300" />
                    <span className="text-sm font-medium">Solana</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image src="https://cryptologos.cc/logos/near-protocol-near-logo.svg?v=025" alt="NEAR" width={40} height={40} className="transition-transform hover:scale-110 duration-300" />
                    <span className="text-sm font-medium">NEAR</span>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-xl font-bold mb-8">Supported Tokens</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025" alt="ETH" width={24} height={24} />
                    <span className="text-sm font-medium">ETH</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=025" alt="USDC" width={24} height={24} />
                    <span className="text-sm font-medium">USDC</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025" alt="USDT" width={24} height={24} />
                    <span className="text-sm font-medium">USDT</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image src="https://cryptologos.cc/logos/dai-dai-logo.svg?v=025" alt="DAI" width={24} height={24} />
                    <span className="text-sm font-medium">DAI</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image src="https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg?v=025" alt="WBTC" width={24} height={24} />
                    <span className="text-sm font-medium">WBTC</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <Image src="https://cryptologos.cc/logos/chainlink-link-logo.svg?v=025" alt="LINK" width={24} height={24} />
                    <span className="text-sm font-medium">LINK</span>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button variant="outline" size="sm" className="hover:bg-primary/5">View all 100+ supported tokens</Button>
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
                <Badge variant="outline" className="w-fit mx-auto bg-primary/10 text-primary border-primary/20">Pricing</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, transparent pricing</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Choose the plan that fits your needs. All plans include our core security features.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="flex flex-col hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6 flex-1">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Developer</h3>
                    <p className="text-muted-foreground">For individual developers and small projects.</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">$49</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Up to 100 wallets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">10,000 API calls/month</span>
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
                  <Button variant="outline" className="w-full hover:bg-primary/5">Get Started</Button>
                </div>
              </Card>
              <Card className="flex flex-col border-primary relative hover:shadow-xl transition-all duration-300 scale-105">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                  Most Popular
                </div>
                <CardContent className="p-6 flex-1">
                  <div className="space-y-2">
                    <Badge className="bg-primary">Popular</Badge>
                    <h3 className="text-xl font-bold">Business</h3>
                    <p className="text-muted-foreground">For growing businesses and applications.</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">$199</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Up to 1,000 wallets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">100,000 API calls/month</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Advanced security features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Priority email support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Telegram bot integration</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">Get Started</Button>
                </div>
              </Card>
              <Card className="flex flex-col hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6 flex-1">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Enterprise</h3>
                    <p className="text-muted-foreground">For large organizations with custom needs.</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">Custom</span>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Unlimited wallets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Custom API call limits</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">All security features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">24/7 dedicated support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Custom integrations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">SLA guarantees</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full hover:bg-primary/5">Contact Sales</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 relative">
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
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
                <p className="text-primary-foreground/80 md:text-xl">
                  Join thousands of developers building secure wallet solutions with our platform.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="secondary" className="gap-1 hover:bg-secondary/90">
                    Get Started <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-1 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    Contact Sales
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">100+</h3>
                    <p className="text-primary-foreground/80">Supported tokens</p>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">10+</h3>
                    <p className="text-primary-foreground/80">Blockchain networks</p>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">99.9%</h3>
                    <p className="text-primary-foreground/80">Uptime SLA</p>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-lg hover:bg-primary-foreground/15 transition-colors duration-300">
                    <h3 className="text-2xl font-bold">24/7</h3>
                    <p className="text-primary-foreground/80">Enterprise support</p>
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
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">SecureWallet</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                MPC platform built for developers. Create wallets with ease securely.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
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
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Features</Link>
                </li>
                <li>
                  <Link href="#security" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Security</Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Pricing</Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Documentation</Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">API Reference</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">About</Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Blog</Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Careers</Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Press</Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Terms of Service</Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Data Processing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Fystack. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}