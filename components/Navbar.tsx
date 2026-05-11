"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  Github,
  FileText,
  Shield,
  Smartphone,
  Coins,
  Menu,
  Code2,
  Package,
  Boxes,
  Server,
  Send,
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
      icon: <Coins className="h-5 w-5" />,
      title: "Stablecoin Rails for Fintechs",
      description: "Purpose-built wallet infrastructure for fintechs launching stablecoin payments, settlements, and payouts across chains.",
      href: "/solutions/stablecoin-rails-for-fintechs",
    },
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

const DeveloperDropdown = () => {
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

  const developerItems: ProductMenuItem[] = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Self-Host Documentation",
      description: "Guides for running the full Fystack stack on your own infrastructure.",
      href: "https://selfhost.fystack.io/",
    },
    {
      icon: <Package className="h-5 w-5" />,
      title: "SDK Examples",
      description: "Production-ready code samples to integrate Fystack in minutes.",
      href: "https://github.com/fystack/fystack-sdk-examples",
    },
    {
      icon: <Boxes className="h-5 w-5" />,
      title: "Open-Source MPC",
      description: "Mpcium — the MPC engine powering Fystack, auditable and free to inspect.",
      href: "https://github.com/fystack/mpcium",
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Self-Host Custody Platform",
      description: "Deploy the full Fystack custody stack on your own infrastructure.",
      href: "https://github.com/fystack/fystack-selfhost-scripts",
    },
    {
      icon: <Send className="h-5 w-5" />,
      title: "Join Developer Community",
      description: "Chat with the Fystack team and other builders on Telegram.",
      href: "https://t.me/+9AtC0z8sS79iZjFl",
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
        Developer <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="bg-background border rounded-lg shadow-xl p-4 w-[440px]">
            <Link
              href="https://docs.fystack.io/wallets"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-md bg-accent/40 hover:bg-accent transition-colors group mb-3"
            >
              <div className="flex gap-3 items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#3b82f6]/10 text-[#3b82f6]">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-0.5">API Documentation</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Full REST API reference for wallets, payments, and key management.
                  </div>
                </div>
              </div>
            </Link>

            <div className="h-px bg-border my-2" />

            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-1 mt-2">
              Documentation
            </div>
            <div className="space-y-1">
              {developerItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
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

  const solutionItems: ProductMenuItem[] = [
    {
      icon: <Coins className="h-5 w-5" />,
      title: "Stablecoin Rails for Fintechs",
      description: "Wallet infrastructure for fintech stablecoin payments.",
      href: "/solutions/stablecoin-rails-for-fintechs",
    },
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

  const developerItems: (ProductMenuItem & { external?: boolean })[] = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "API Documentation",
      description: "Full REST API reference.",
      href: "https://docs.fystack.io/wallets",
      external: true,
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Self-Host Documentation",
      description: "Guides for running Fystack on your own infrastructure.",
      href: "https://selfhost.fystack.io/",
      external: true,
    },
    {
      icon: <Package className="h-5 w-5" />,
      title: "SDK Examples",
      description: "Production-ready code samples.",
      href: "https://github.com/fystack/fystack-sdk-examples",
      external: true,
    },
    {
      icon: <Boxes className="h-5 w-5" />,
      title: "Open-Source MPC",
      description: "Mpcium — Fystack's MPC engine.",
      href: "https://github.com/fystack/mpcium",
      external: true,
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Self-Host Custody Platform",
      description: "Deploy the full stack on your own infrastructure.",
      href: "https://github.com/fystack/fystack-selfhost-scripts",
      external: true,
    },
    {
      icon: <Send className="h-5 w-5" />,
      title: "Join Developer Community",
      description: "Chat with Fystack builders on Telegram.",
      href: "https://t.me/+9AtC0z8sS79iZjFl",
      external: true,
    },
  ];

  const navLinks = [
    { href: "/wallet-as-service", title: "Platform", external: false },
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

          {/* Developer Section */}
          <div>
            <button
              onClick={() => toggleSection("developer")}
              className="flex items-center justify-between w-full py-3 text-sm font-medium hover:text-foreground transition-colors"
            >
              <span>Developer</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-200 ${
                  expandedSection === "developer" ? "rotate-90" : ""
                }`}
              />
            </button>
            {expandedSection === "developer" && (
              <div className="pl-2 pb-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                {developerItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={closeSheet}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
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
            {/* Temporarily hidden: Log in CTA */}
            {/* <Button variant="ghost" size="sm" asChild className="justify-start">
              <Link
                href="https://app.fystack.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </Link>
            </Button> */}
            <Button size="sm" asChild className="justify-start">
              <Link href="/contact">Book a demo</Link>
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
      <header className={`border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-slate-500`}>
      <div className="flex h-12 sm:h-14 items-center justify-between max-w-[1440px] 2xl:max-w-[1728px] mx-auto px-4 lg:px-16 2xl:px-0">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={appLogo}
              alt="Fystack Logo"
              priority
              width={198}
              height={48}
              className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {/* <ProductDropdown /> */}

            <SolutionsDropdown />

            <DeveloperDropdown />

            <Link
              href="/wallet-as-service"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Platform
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

          {/* Temporarily hidden: Log in CTA */}
          {/* <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link
              href="https://app.fystack.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Log in
            </Link>
          </Button> */}

          <Button size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/contact">Book a demo</Link>
          </Button>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </header>
    </>
  );
}
