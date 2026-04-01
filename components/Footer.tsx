import Image from "next/image";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import appLogo from "@/app/images/app-logo.svg";

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={appLogo}
                alt="Fystack Logo"
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
                href="https://www.linkedin.com/company/108708976"
                target="_blank"
                rel="noopener noreferrer"
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
                  href="https://docs.fystack.io/security/encryption-at-rest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.fystack.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.fystack.io/wallets"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  href="/#about"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://app.youform.com/forms/qyanutyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Compare</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="https://fystack.io/blog/fystack-vs-fireblocks-self-hosted-vs-saas-what-is-the-future-of-crypto-asset-custody-for-businesses"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  vs Fireblocks
                </Link>
              </li>
              <li>
                <Link
                  href="https://fystack.io/blog/fystack-vs-cobo-which-pricing-model-works-for-your-businesses"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  vs Cobo
                </Link>
              </li>
              <li>
                <Link
                  href="https://fystack.io/blog/fystack-vs-utila-how-to-choose-the-right-mpc-wallet-for-your-web3-business"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  vs Utila
                </Link>
              </li>
              <li>
                <Link
                  href="https://fystack.io/blog/fystack-vs-dfns-mpc-wallet-for-apac-startups-vs-european-institutions"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  vs Dfns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Cookie Policy
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
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 