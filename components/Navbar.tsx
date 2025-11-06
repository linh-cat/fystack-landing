"use client";

import { useState, useRef } from "react";
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
  BookOpen,
  Code2,
  Puzzle,
  FileCode,
  Library,
  Newspaper,
  AlertCircle,
  ListChecks,
  HeadphonesIcon,
  MessageSquare,
  Briefcase,
  Send,
  Building2,
  Coins,
  Bot,
  Smartphone,
  Server
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
      href: "#wallet",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Crypto Payments",
      description: "Accept and send crypto payments seamlessly across EVM, Tron, and Solana networks.",
      href: "#payments",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Automation",
      description: "Automate on-chain operations to save time and reduce manual risk.",
      href: "#automation",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Alerts & Monitoring",
      description: "Stay informed in real-time about every transaction and event across wallets.",
      href: "#alerts",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Analytics & Insights",
      description: "Track transaction volumes, wallet activity, and user growth in one unified dashboard.",
      href: "#analytics",
    },
  ];

  const complianceItems: ProductMenuItem[] = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "User Management",
      description: "Define roles and permissions for administrators, operators, and auditors.",
      href: "#users",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Audit Trails",
      description: "Full transparency into every transaction, signature, and approval action.",
      href: "#audit",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Transaction Policies",
      description: "Set programmable rules for spending and approvals with whitelist destinations and daily limits.",
      href: "#policies",
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
      href: "#treasury",
    },
    {
      icon: <Coins className="h-5 w-5" />,
      title: "Stablecoin Operations",
      description: "Simplify cross-chain stablecoin flows for payments, settlements, and treasury movement.",
      href: "#stablecoin",
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "Trading Bots",
      description: "Build secure, automated trading bots powered by MPC wallets with no key exposure.",
      href: "#trading-bots",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Fintech & Payment Platforms",
      description: "Accept crypto payments, automate merchant payouts, and reconcile transactions seamlessly.",
      href: "#fintech",
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Self-Hosting & Data Residency",
      description: "Deploy Fystack on your own cloud or servers to maintain full control and regulatory compliance.",
      href: "#self-hosting",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Whitelabel Custodian",
      description: "Launch your own branded custodian service with Fystack's secure infrastructure and compliance features.",
      href: "#whitelabel",
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

const DevelopersDropdown = () => {
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

  const developerItems = [
    { icon: <BookOpen className="h-5 w-5" />, label: "Documentation", href: "https://docs.fystack.io" },
    { icon: <Puzzle className="h-5 w-5" />, label: "Integrations", href: "https://docs.fystack.io/integrations" },
    { icon: <ListChecks className="h-5 w-5" />, label: "Changelog", href: "#changelog" },
    { icon: <FileCode className="h-5 w-5" />, label: "Examples", href: "https://docs.fystack.io/examples" },
    { icon: <Library className="h-5 w-5" />, label: "SDKs", href: "https://docs.fystack.io/sdks" },
    { icon: <Send className="h-5 w-5" />, label: "Telegram Forum", href: "https://t.me/anhthind" },
    { icon: <HeadphonesIcon className="h-5 w-5" />, label: "Support", href: "https://t.me/anhthind" },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
        Developers <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="bg-background border rounded-lg shadow-xl p-2 w-[240px]">
            <div className="space-y-1">
              {developerItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors group"
                >
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium group-hover:text-foreground">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ResourcesDropdown = () => {
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

  const resourceItems = [
    { icon: <Github className="h-5 w-5" />, label: "Open Source", href: "https://github.com/fystack" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "GitHub Discussions", href: "https://github.com/fystack/discussions" },
    { icon: <Briefcase className="h-5 w-5" />, label: "Become a Partner", href: "#partner" },
    { icon: <Users className="h-5 w-5" />, label: "Careers", href: "#careers", badge: "2" },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
        Resources <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="bg-background border rounded-lg shadow-xl p-2 w-[240px]">
            <div className="space-y-1">
              {resourceItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors group"
                >
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium group-hover:text-foreground">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
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
  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
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
              href="/buy"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
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
            <Link href="/buy">
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
  );
} 
