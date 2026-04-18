"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  Github,
  Wallet,
  CreditCard,
  Zap,
  Bell,
  BarChart3,
  Users,
  FileText,
  Shield,
  Smartphone,
  Menu
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      href: "/wallet-as-service",
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
      icon: <Shield className="h-5 w-5" />,
      title: "Whitelabel Custody Platform",
      description: "Launch a fully branded custody service backed by Fystack's MPC infrastructure, compliance, and self-hosting options.",
      href: "/solutions/whitelabel-custody",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Non-Custodial MPC Wallet",
      description: "Shared-custody wallets where the user, your backend, and a trusted co-signer each hold a key share — no single party can sign alone.",
      href: "/solutions/non-custodial-wallet",
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

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const closeSheet = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };

  const productItems: ProductMenuItem[] = [
    {
      icon: <Wallet className="h-5 w-5" />,
      title: "Wallet-as-a-Service",
      description: "Build, manage, and scale secure wallets across multiple chains.",
      href: "/new-homepage#wallet",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Crypto Payments",
      description: "Accept and send crypto payments seamlessly.",
      href: "/new-homepage#use-cases",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Automation",
      description: "Automate on-chain operations to save time.",
      href: "/new-homepage#operations",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Alerts & Monitoring",
      description: "Real-time transaction and event monitoring.",
      href: "/new-homepage#operations",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Analytics & Insights",
      description: "Track transaction volumes and wallet activity.",
      href: "/new-homepage#operations",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "User Management",
      description: "Define roles and permissions for your team.",
      href: "/new-homepage#compliance",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Audit Trails",
      description: "Full transparency into every action.",
      href: "/new-homepage#compliance",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Transaction Policies",
      description: "Set programmable rules for spending.",
      href: "/new-homepage#compliance",
    },
  ];

  const solutionItems: ProductMenuItem[] = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Whitelabel Custody Platform",
      description: "Launch a branded custody service on Fystack's MPC infrastructure.",
      href: "/solutions/whitelabel-custody",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Non-Custodial MPC Wallet",
      description: "User, backend, and co-signer each hold a key share.",
      href: "/solutions/non-custodial-wallet",
    },
  ];

  const navLinks = [
    { href: "/wallet-as-service", title: "Platform", external: false },
    { href: "https://docs.fystack.io", title: "Documentation", external: true },
    { href: "https://fystack.io/blog?tag=Case%20study", title: "Case Studies", external: true },
    { href: "/new-homepage#pricing", title: "Pricing", external: false },
    { href: "/compare", title: "Compare", external: false },
    { href: "/blog", title: "Blog", external: false },
    { href: "/changelog", title: "Changelog", external: false },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="lg:hidden px-0">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 mt-6">
          {/* Product Section */}
          {/* <div>
            <button
              onClick={() => toggleSection("product")}
              className="flex items-center justify-between w-full py-3 text-sm font-medium hover:text-foreground transition-colors"
            >
              <span>Product</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-200 ${
                  expandedSection === "product" ? "rotate-90" : ""
                }`}
              />
            </button>
            {expandedSection === "product" && (
              <div className="pl-2 pb-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                {productItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={closeSheet}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-muted-foreground">{item.icon}</div>
                    <div>
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div> */}

          {/* Solutions Section */}
          <div>
            <button
              onClick={() => toggleSection("solutions")}
              className="flex items-center justify-between w-full py-3 text-sm font-medium hover:text-foreground transition-colors"
            >
              <span>Solutions</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-200 ${
                  expandedSection === "solutions" ? "rotate-90" : ""
                }`}
              />
            </button>
            {expandedSection === "solutions" && (
              <div className="pl-2 pb-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                {solutionItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={closeSheet}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors"
                  >
                    <div className="text-muted-foreground">{item.icon}</div>
                    <div>
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="h-px bg-border my-2" />

          {/* Direct Links */}
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={closeSheet}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.title}
            </Link>
          ))}

          {/* Divider */}
          <div className="h-px bg-border my-2" />

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="outline" size="sm" asChild className="justify-start gap-2">
              <Link
                href="https://github.com/fystack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="justify-start">
              <Link
                href="https://app.fystack.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </Link>
            </Button>
            <Button size="sm" asChild className="justify-start">
              <Link
                href="https://app.fystack.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default function Navbar() {
  return (
    <>
      <header className={`border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <div className="container flex h-16 items-center justify-between px-4 lg:px-16 4xl:px-0 mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src={appLogo}
              alt="Fystack Logo"
              priority
              width={198}
              height={48}
              style={{ height: "auto" }}
              className="w-[150px] sm:w-[180px] md:w-[200px]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {/* <ProductDropdown /> */}

            <SolutionsDropdown />

            <Link
              href="/wallet-as-service"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Platform
            </Link>

            <Link
              href="https://docs.fystack.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </Link>

            <Link
              href="https://fystack.io/blog?tag=Case%20study"
              target="_blank"
              rel="noopener noreferrer"
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

            <Link
              href="/changelog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Changelog
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
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

          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link
              href="https://app.fystack.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Log in
            </Link>
          </Button>

          <Button size="sm" asChild className="hidden sm:inline-flex">
            <Link
              href="https://app.fystack.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up
            </Link>
          </Button>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </header>
    </>
  );
} 
