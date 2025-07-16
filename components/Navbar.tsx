"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import appLogo from "@/app/images/app-logo.svg";

export default function Navbar() {
  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
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
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#security"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Security
          </Link>
          <Link
            href="/#sdk"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            SDK
          </Link>
          <Link
            href="/#chains"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Chains
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="https://t.me/anhthind"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center">
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
  );
} 