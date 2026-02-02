"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Github,
  Wallet,
  CreditCard,
  Zap,
  Bell,
  BarChart3,
  Users,
  FileText,
  Shield,
  Building2,
  Coins,
  Bot,
  Smartphone,
  Server
} from "lucide-react";

import appLogo from "@/app/images/app-logo.svg";

interface ProductMenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const ProductDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const operationsItems: ProductMenuItem[] = [
    {
      icon: <Wallet className="h-5 w-5" />,
      title: "Wallet-as-a-Service",
      description: "Build, manage, and scale secure wallets across multiple chains without managing private keys.",
      href: "/new-homepage#wallet",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Crypto Payments",
      description: "Accept and send crypto payments seamlessly across EVM, Tron, and Solana networks.",
      href: "/new-homepage#use-cases",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Automation",
      description: "Automate on-chain operations to save time and reduce manual risk.",
      href: "/new-homepage#operations",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Alerts & Monitoring",
      description: "Stay informed in real-time about every transaction and event across wallets.",
      href: "/new-homepage#operations",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Analytics & Insights",
      description: "Track transaction volumes, wallet activity, and user growth in one unified dashboard.",
      href: "/new-homepage#operations",
    },
  ];

  const complianceItems: ProductMenuItem[] = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "User Management",
      description: "Define roles and permissions for administrators, operators, and auditors.",
      href: "/new-homepage#compliance",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Audit Trails",
      description: "Full transparency into every transaction, signature, and approval action.",
      href: "/new-homepage#compliance",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Transaction Policies",
      description: "Set programmable rules for spending and approvals with whitelist destinations and daily limits.",
      href: "/new-homepage#compliance",
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
        Product <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="bg-background border rounded-lg shadow-xl p-6 w-[720px]">
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Operations & Automation
                </div>
                <div className="space-y-1">
                  {operationsItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block p-3 rounded-md hover:bg-accent transition-colors group"
                    >
                      <div className="flex gap-3">
                        <div className="text-muted-foreground group-hover:text-foreground transition-colors mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-medium text-sm mb-1 group-hover:text-foreground">
                            {item.title}
                          </div>
                          <div className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Compliance & Governance
                </div>
                <div className="space-y-1">
                  {complianceItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block p-3 rounded-md hover:bg-accent transition-colors group"
                    >
                      <div className="flex gap-3">
                        <div className="text-muted-foreground group-hover:text-foreground transition-colors mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-medium text-sm mb-1 group-hover:text-foreground">
                            {item.title}
                          </div>
                          <div className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SolutionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const solutionItems: ProductMenuItem[] = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Multi-Chain Treasury Management",
      description: "Manage and automate crypto treasuries across Ethereum, BSC, Solana, and Tron with unified control.",
      href: "/new-homepage#use-cases",
    },
    {
      icon: <Coins className="h-5 w-5" />,
      title: "Stablecoin Operations",
      description: "Simplify cross-chain stablecoin flows for payments, settlements, and treasury movement.",
      href: "/new-homepage#use-cases",
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "Trading Bots",
      description: "Build secure, automated trading bots powered by MPC wallets with no key exposure.",
      href: "/new-homepage#use-cases",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Fintech & Payment Platforms",
      description: "Accept crypto payments, automate merchant payouts, and reconcile transactions seamlessly.",
      href: "/new-homepage#use-cases",
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Self-Hosting & Data Residency",
      description: "Deploy Fystack on your own cloud or servers to maintain full control and regulatory compliance.",
      href: "/new-homepage#self-hosting",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Whitelabel Custodian",
      description: "Launch your own branded custodian service with Fystack's secure infrastructure and compliance features.",
      href: "/new-homepage#wallet",
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
        Solutions <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="bg-background border rounded-lg shadow-xl p-4 w-[420px]">
            <div className="space-y-1">
              {solutionItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block p-3 rounded-md hover:bg-accent transition-colors group"
                >
                  <div className="flex gap-3">
                    <div className="text-muted-foreground group-hover:text-foreground transition-colors mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm mb-1 group-hover:text-foreground">
                        {item.title}
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const bannerClosed = localStorage.getItem('bannerClosed');
    setIsBannerVisible(bannerClosed !== 'true');
  }, []);

  const closeBanner = () => {
    setIsBannerVisible(false);
    localStorage.setItem('bannerClosed', 'true');
  };

  return (
    <>
      {/* Builder Grant Banner */}
      {isMounted && isBannerVisible && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-[#155dfc] text-white text-center py-2 px-4 text-xs sm:text-sm font-medium">
          <div className="relative flex items-center justify-center">
            <Link
              href="/builder-grants"
              className="inline-flex items-center gap-1 sm:gap-2 hover:opacity-90 transition-opacity"
            >
              <span className="hidden sm:inline">Builder Grant Program for Startups — Up to $15,000 API credits in total</span>
              <span className="sm:hidden">Builder Grants — $15K API credits</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <button
              onClick={closeBanner}
              className="absolute right-0 p-1 hover:opacity-70 transition-opacity"
              aria-label="Close banner"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}
      {/* Spacer for fixed banner */}
      {isMounted && isBannerVisible && <div className="h-8 sm:h-9"></div>}

      <header className={`border-b sticky ${isMounted && isBannerVisible ? 'top-8 sm:top-9' : 'top-0'} z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <div className="container flex h-16 items-center justify-between max-w-[1440px] mx-auto px-4 lg:px-0">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src={appLogo}
              alt="Fystack Logo"
              priority
              width={170}
              height={50}
              className="h-auto w-[120px] sm:w-[150px] md:w-[170px]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <ProductDropdown />

            <SolutionsDropdown />

            {/* <DevelopersDropdown /> */}

            {/* <ResourcesDropdown /> */}

            <Link
              href="https://docs.fystack.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </Link>

            <Link
              href="/new-homepage#use-cases"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </Link>

            <Link
              href="/new-homepage#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/compare"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Compare
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            size="sm"
            variant="default"
            asChild
            className="lg:hidden"
          >
            <Link href="/new-homepage#pricing">
              Pricing
            </Link>
          </Button>

          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden md:flex gap-2"
          >
            <Link
              href="https://github.com/fystack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
          </Button>

          <Button variant="ghost" size="sm" asChild>
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
    </>
  );
} 
