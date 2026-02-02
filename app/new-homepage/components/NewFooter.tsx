"use client";

import Image from "next/image";
import Link from "next/link";
import appLogo from "@/app/images/app-logo.svg";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function NewFooter() {
  const { ref, isVisible } = useScrollReveal();
  const productLinks = [
    { label: "Features", href: "/features" },
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api" },
  ];

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Fireblocks vs Fystack", href: "/compare" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Github", icon: "/svg/footer/github.svg", href: "https://github.com/fystack" },
    { label: "Twitter", icon: "/svg/footer/x.svg", href: "https://twitter.com/fystack" },
    { label: "LinkedIn", icon: "/svg/footer/linked-in.svg", href: "https://linkedin.com/company/fystack" },
  ];

  return (
    <footer className="bg-white px-4 pb-8">
      <div ref={ref} className={`container mx-auto max-w-7xl ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Wrapper */}
        <div className="relative">
          {/* Main content */}
          <div className="border border-slate-200 p-8 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Logo and Description */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                {/* Logo */}
                <Image
                    src={appLogo}
                    alt="Fystack"
                    width={170}
                    height={50}
                    // className="h-auto"
                  />

                {/* Description */}
                <p className="text-slate-500 text-sm mb-8 max-w-xs">
                  MPC platform built for developers. Create wallets with ease securely.
                </p>

                {/* Social Links */}
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden w-fit">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center justify-center p-4 hover:bg-slate-50 transition-colors ${
                        index < socialLinks.length - 1 ? "border-r border-slate-200" : ""
                      }`}
                    >
                      <Image
                        src={social.icon}
                        alt={social.label}
                        width={20}
                        height={20}
                        className="w-5 h-5 mb-1"
                      />
                      <span className="text-xs text-slate-500">{social.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="lg:col-span-3" />

              {/* Product Links */}
              <div className="lg:col-span-2">
                <h4 className="font-semibold text-slate-800 mb-4">Product</h4>
                <ul className="space-y-3">
                  {productLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-slate-500 text-sm hover:text-slate-700 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div className="lg:col-span-3">
                <h4 className="font-semibold text-slate-800 mb-4">Company</h4>
                <ul className="space-y-3">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-slate-500 text-sm hover:text-slate-700 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border border-t-0 border-slate-200 px-8 py-6">
            <p className="text-slate-600 text-sm">
              © 2025 Fystack. All rights reserved.
            </p>
          </div>

          {/* Corner squares */}
          <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
        </div>
      </div>
    </footer>
  );
}
