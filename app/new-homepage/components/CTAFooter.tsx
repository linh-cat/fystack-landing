"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import appLogo from "@/app/images/app-logo.svg";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Lerp function for smooth interpolation
const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

export function CTAFooter() {
  const { ref: scrollRef, isVisible } = useScrollReveal();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const targetPos = useRef({ x: 0.5, y: 0.5 });
  const currentPos = useRef({ x: 0.5, y: 0.5 });

  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // CTA Stats data
  const stats = [
    { value: "100+", label: "Supported tokens" },
    { value: "10+", label: "Blockchain networks" },
  ];

  // Footer links data
  const productLinks = [
    { label: "Security", href: "https://docs.fystack.io/security/encryption-at-rest" },
    { label: "Pricing", href: "/pricing" },
    { label: "Documentation", href: "https://docs.fystack.io" },
    { label: "API Reference", href: "https://docs.fystack.io/wallets" },
  ];

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "https://app.youform.com/forms/qyanutyi" },
  ];

  const compareLinks = [
    { label: "vs Fireblocks", href: "/blog/fystack-vs-fireblocks-self-hosted-vs-saas-what-is-the-future-of-crypto-asset-custody-for-businesses" },
    { label: "vs Cobo", href: "/blog/fystack-vs-cobo-which-pricing-model-works-for-your-businesses" },
    { label: "vs Utila", href: "/blog/fystack-vs-utila-how-to-choose-the-right-mpc-wallet-for-your-web3-business" },
    { label: "vs Dfns", href: "/blog/fystack-vs-dfns-mpc-wallet-for-apac-startups-vs-european-institutions" },
  ];

  const socialLinks = [
    { label: "Github", icon: "/svg/footer/github.svg", href: "https://github.com/fystack/mpcium" },
    { label: "X", icon: "/svg/footer/x.svg", href: "https://x.com/fystack" },
    { label: "LinkedIn", icon: "/svg/footer/linked-in.svg", href: "https://www.linkedin.com/company/fystack/posts/?feedView=all" },
    { label: "Medium", icon: "/svg/footer/medium.svg", href: "https://medium.com/@fystack" },
    { label: "Substack", icon: "/svg/footer/substack.svg", href: "https://substack.com/profile/496828574-fystack/" },
  ];

  const legalLinks = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ];

  // Grid configuration for rectangular dot pattern
  const gridConfig = {
    cols: 12,
    rows: 8,
    startX: 6,
    startY: 18,
    spacingX: 3.2,
    spacingY: 7.5,
  };

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Smooth animation loop using requestAnimationFrame
  useEffect(() => {
    if (prefersReducedMotion) return;

    const animate = () => {
      const smoothFactor = isHovering ? 0.12 : 0.08;

      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, smoothFactor);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, smoothFactor);

      const dx = Math.abs(currentPos.current.x - mousePos.x);
      const dy = Math.abs(currentPos.current.y - mousePos.y);

      if (dx > 0.001 || dy > 0.001) {
        setMousePos({ x: currentPos.current.x, y: currentPos.current.y });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [prefersReducedMotion, isHovering, mousePos.x, mousePos.y]);

  // Handle mouse move
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      targetPos.current = { x, y };
    },
    [prefersReducedMotion]
  );

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    targetPos.current = { x: 0.5, y: 0.5 };
  }, []);

  // Calculate parallax transform
  const getParallaxStyle = (intensity: number, invert: boolean = false) => {
    if (prefersReducedMotion) return {};

    const multiplier = invert ? -1 : 1;
    const offsetX = (mousePos.x - 0.5) * intensity * multiplier;
    const offsetY = (mousePos.y - 0.5) * intensity * multiplier;

    return {
      transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
    };
  };

  // Generate grid dots
  const generateGridDots = () => {
    const dots = [];

    for (let row = 0; row < gridConfig.rows; row++) {
      for (let col = 0; col < gridConfig.cols; col++) {
        const baseX = gridConfig.startX + col * gridConfig.spacingX;
        const baseY = gridConfig.startY + row * gridConfig.spacingY;

        const dotX = baseX / 100;
        const dotY = baseY / 100;
        const mouseDist = Math.sqrt(
          Math.pow(mousePos.x - dotX, 2) + Math.pow(mousePos.y - dotY, 2)
        );

        const maxRadius = 0.35;
        const normalizedDist = Math.min(mouseDist / maxRadius, 1);
        const proximity = Math.pow(1 - normalizedDist, 2);

        const scale = prefersReducedMotion ? 1 : 1 + proximity * 0.8;
        const baseOpacity = 0.45;
        const opacity = prefersReducedMotion ? baseOpacity : baseOpacity + proximity * 0.55;

        const offsetX = prefersReducedMotion ? 0 : (mousePos.x - dotX) * proximity * -8;
        const offsetY = prefersReducedMotion ? 0 : (mousePos.y - dotY) * proximity * -8;

        dots.push(
          <div
            key={`${row}-${col}`}
            className="absolute rounded-full bg-[#3b82f6]"
            style={{
              left: `${baseX}%`,
              top: `${baseY}%`,
              width: 4,
              height: 4,
              opacity,
              transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
              transition: "opacity 0.3s ease-out",
              willChange: "transform, opacity",
            }}
          />
        );
      }
    }

    return dots;
  };

  const borderStyle = {
    left: `${gridConfig.startX - 1.5}%`,
    top: `${gridConfig.startY - 4}%`,
    width: `${gridConfig.cols * gridConfig.spacingX + 2}%`,
    height: `${gridConfig.rows * gridConfig.spacingY + 6}%`,
  };

  return (
    <footer className="bg-white py-4 lg:py-10 2xl:py-20">
      <div
        ref={scrollRef}
        className={`max-w-[1440px] 2xl:max-w-[1728px] px-4 lg:px-16 2xl:px-16 mx-auto  ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
      >
        <div className="relative">
          {/* Top corner squares */}
          <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />

          <div className="border border-slate-200">
            {/* ==================== CTA SECTION ==================== */}

            {/* CTA Header */}
            <div className="relative text-center py-12 lg:py-16 px-6 border-b border-slate-200">
              <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 border-l border-dashed border-slate-200" />
              <div className="hidden lg:block absolute left-3/4 top-0 bottom-0 border-l border-dashed border-slate-200" />

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Ready to get started?
              </h2>
              <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
                Start building secure wallet solutions with confidence
                <br className="hidden sm:block" />
                using our platform.
              </p>
            </div>

            {/* CTA Content Grid */}
            <div className="relative grid lg:grid-cols-2 border-b border-slate-200">

              {/* Left - CTA Buttons with Interactive Background */}
              <div
                ref={containerRef}
                className="relative border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden cursor-none"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Radial gradient following cursor */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(500px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(59, 130, 246, 0.06), transparent 50%)`,
                    transition: "opacity 0.5s ease-out",
                  }}
                />

                {/* Background Dot Pattern with Parallax */}
                <div
                  className="absolute inset-[-20px] pointer-events-none"
                  style={getParallaxStyle(12)}
                >
                  <Image
                    src="/svg/background/background-dot.svg"
                    alt=""
                    fill
                    className="object-cover opacity-30"
                    aria-hidden="true"
                  />
                </div>

                {/* Fystack Logo decoration */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: "8%",
                    top: "18%",
                    width: "100px",
                    height: "120px",
                    opacity: isHovering ? 0.35 : 0.25,
                    transition: "opacity 0.4s ease-out",
                    ...getParallaxStyle(8),
                  }}
                >
                  <Image
                    src="/svg/fystack-logo.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>

                {/* Dashed border rectangle */}
                <div
                  className="absolute pointer-events-none border border-dashed border-[#3b82f6]/30 rounded-sm"
                  style={{
                    ...borderStyle,
                    opacity: isHovering ? 0.8 : 0.5,
                    transition: "opacity 0.4s ease-out",
                  }}
                />

                {/* Interactive Grid Dots */}
                <div className="absolute inset-0 pointer-events-none">
                  {generateGridDots()}
                </div>

                {/* Subtle glow under cursor */}
                <div
                  className="absolute pointer-events-none rounded-full blur-2xl"
                  style={{
                    left: `calc(${mousePos.x * 100}% - 60px)`,
                    top: `calc(${mousePos.y * 100}% - 60px)`,
                    width: 120,
                    height: 120,
                    background: "rgba(59, 130, 246, 0.15)",
                    opacity: isHovering ? 1 : 0,
                    transition: "opacity 0.4s ease-out",
                  }}
                />

                {/* CTA Buttons */}
                <div className="relative flex flex-col items-center justify-center p-12 lg:p-16 min-h-[340px]">
                  <div className="flex flex-col items-center gap-4 z-10">
                    <Link
                      href="/contact"
                      className="group relative px-16 py-4 bg-[#3b82f6] text-white rounded-full text-base font-medium
                        shadow-lg shadow-blue-500/25
                        transition-all duration-300 ease-out
                        hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/35
                        active:scale-[0.98]
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                        cursor-pointer"
                    >
                      <span className="relative z-10">Request a demo</span>
                      <div
                        className="absolute inset-0 rounded-full bg-[#3b82f6] opacity-0
                        group-hover:opacity-50 blur-xl transition-opacity duration-300"
                      />
                    </Link>

                    <Link
                      className="px-14 py-3.5 bg-white border-2 border-slate-200 text-slate-700 rounded-full text-base font-medium
                        shadow-sm
                        transition-all duration-300 ease-out
                        hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] hover:shadow-md
                        active:scale-[0.98]
                        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
                        cursor-pointer"
                      href="/contact"
                    >
                      Talk to us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right - Stats Grid */}
              <div className="grid grid-cols-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`p-8 lg:p-10 flex flex-col justify-center transition-colors duration-300 hover:bg-slate-50/50 ${
                      index === 0 ? "border-r border-slate-200" : ""
                    }`}
                  >
                    <span className="text-3xl lg:text-4xl font-bold text-[#3b82f6] mb-2">
                      {stat.value}
                    </span>
                    <span className="text-slate-500 text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== FOOTER SECTION ==================== */}

            {/* Footer Content */}
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-12 gap-12">
                {/* Logo and Description */}
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <Image
                    src={appLogo}
                    alt="Fystack"
                    width={170}
                    height={50}
                  />

                  <p className="text-slate-500 text-sm mb-8 max-w-xs">
                    Wallet infrastructure for fintechs going on-chain. Self-hosted or managed.
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden w-fit">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`flex items-center justify-center p-3.5 hover:bg-slate-50 transition-colors ${
                          index < socialLinks.length - 1 ? "border-r border-slate-200" : ""
                        }`}
                      >
                        <Image
                          src={social.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

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

                {/* Compare Links */}
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-slate-800 mb-4">Compare</h4>
                  <ul className="space-y-3">
                    {compareLinks.map((link, index) => (
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
                <div className="lg:col-span-2">
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

                {/* Legal Links */}
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-slate-800 mb-4">Legal</h4>
                  <ul className="space-y-3">
                    {legalLinks.map((link, index) => (
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
          </div>

          {/* Copyright */}
          <div className="border border-t-0 border-slate-200 px-8 py-6">
            <p className="text-slate-600 text-sm">
              © 2026 Fystack. All rights reserved.
            </p>
          </div>

          {/* Bottom corner squares */}
          <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
        </div>
      </div>
    </footer>
  );
}
