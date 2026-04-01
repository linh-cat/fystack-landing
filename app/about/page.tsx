"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { CTAFooter } from "@/app/new-homepage/components/CTAFooter";
import {
  Shield,
  Eye,
  Settings,
  Users,
  Code,
  Lock,
  Building2,
  CheckCircle,
  GitBranch,
  Layers,
  Globe,
  FileCheck,
} from "lucide-react";

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Animated grid background component
function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(59, 130, 246, 0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// Floating dots component
function FloatingDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#3b82f6]/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function AboutPage() {
  const heroRef = useScrollReveal(0.1);
  const philosophyRef = useScrollReveal(0.1);
  const communityRef = useScrollReveal(0.1);
  const openSourceRef = useScrollReveal(0.1);
  const openCoreRef = useScrollReveal(0.1);
  const buildRef = useScrollReveal(0.1);
  const regulatedRef = useScrollReveal(0.1);
  const missionRef = useScrollReveal(0.1);

  const philosophyPrinciples = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Control",
      description:
        "Operators must retain ownership of keys, infrastructure, and decision-making.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparency",
      description:
        "Security-critical systems should be inspectable and auditable, not trusted blindly.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Operational Reality",
      description:
        "Infrastructure must be designed around real production workflows, not theoretical architectures.",
    },
  ];

  const communityMembers = [
    {
      icon: <Building2 className="w-5 h-5" />,
      text: "Fintechs and payment providers operating regulated flows",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      text: "Exchanges and custodians managing real liquidity and risk",
    },
    {
      icon: <Code className="w-5 h-5" />,
      text: "Developers integrating MPC, wallets, and multi-chain automation",
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      text: "Security and compliance teams responsible for audits and controls",
    },
  ];

  const openSourceBenefits = [
    "Auditability of security-critical logic",
    "Verifiability of signing and policy enforcement",
    "Composability with existing infrastructure",
    "Long-term resilience beyond any single vendor",
  ];

  const enterpriseFeatures = [
    "Hardened deployment and operational tooling",
    "Governance, policy enforcement, and approval workflows",
    "Compliance, audit logging, and reporting features",
    "Enterprise support, SLAs, and long-term maintenance",
  ];

  const whatWeBuild = [
    "MPC hot wallets and air-gapped cold wallets",
    "Policy-driven transaction approval and automation",
    "Multi-chain wallet orchestration and fund management",
    "Audit-ready logging, monitoring, and security primitives",
  ];

  const regulatedFeatures = [
    "Clear separation of duties and access controls",
    "Verifiable audit trails and operational transparency",
    "Deployment models aligned with data residency and security requirements",
    "Integration with compliance, risk, and monitoring workflows",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <GridPattern />
        <FloatingDots />

        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={heroRef.ref}
            className={`relative ${heroRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            {/* Corner squares */}
            <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
            <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
            <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
            <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />

            <div className="border border-slate-200 bg-gradient-to-br from-white via-white to-[#3b82f6]/5">
              <div className="grid lg:grid-cols-2">
                {/* Left - Content */}
                <div className="p-8 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 w-fit mb-6">
                    <span className="text-sm text-[#3b82f6] font-medium">
                      About Fystack
                    </span>
                  </div>

                  <h1 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                    Community-driven
                    <br />
                    <span className="text-[#3b82f6]">open-core</span>{" "}
                    infrastructure
                  </h1>

                  <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                    Fystack is a community-driven, open-core infrastructure
                    company building secure custody and wallet systems for
                    fintechs and digital asset businesses.
                  </p>

                  <p className="text-slate-500 text-base leading-relaxed mt-4 max-w-xl">
                    We help teams operate digital assets with full control over
                    keys, infrastructure, and risk, without relying on opaque
                    SaaS platforms or black-box security models.
                  </p>
                </div>

                {/* Right - Visual */}
                <div className="relative border-t lg:border-t-0 lg:border-l border-slate-200 bg-gradient-to-br from-[#3b82f6]/5 to-[#3b82f6]/10 min-h-[300px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/svg/background/background-dot.svg"
                      alt=""
                      fill
                      className="object-cover opacity-30"
                    />
                  </div>

                  {/* Animated circles */}
                  <div className="relative">
                    <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-2 border-dashed border-[#3b82f6]/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                      <div className="w-36 h-36 lg:w-48 lg:h-48 rounded-full border-2 border-[#3b82f6]/40 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                          <Image
                            src="/svg/fystack-logo.svg"
                            alt="Fystack"
                            width={60}
                            height={60}
                            className="opacity-60"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Floating icons */}
                    <div className="absolute -top-4 -right-4 p-3 bg-white rounded-lg shadow-lg border border-slate-100">
                      <Shield className="w-6 h-6 text-[#3b82f6]" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 p-3 bg-white rounded-lg shadow-lg border border-slate-100">
                      <Code className="w-6 h-6 text-[#3b82f6]" />
                    </div>
                    <div className="absolute top-1/2 -right-8 p-3 bg-white rounded-lg shadow-lg border border-slate-100">
                      <Globe className="w-6 h-6 text-[#3b82f6]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24 bg-slate-50/50">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={philosophyRef.ref}
            className={`${philosophyRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-4">
                Our Philosophy
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We believe custody infrastructure must meet three non-negotiable
                principles:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {philosophyPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative border border-slate-200 bg-white p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] mb-4">
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-500 mt-8 max-w-2xl mx-auto">
              These principles guide every technical and product decision we
              make.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={communityRef.ref}
            className={`${communityRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            <div className="border border-slate-200">
              <div className="grid lg:grid-cols-2">
                {/* Left */}
                <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
                  <div className="flex items-center gap-2 mb-6">
                    <Users className="w-6 h-6 text-[#3b82f6]" />
                    <span className="text-sm font-medium text-[#3b82f6] uppercase tracking-wider">
                      Community
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                    Community-Driven by Design
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Fystack is built alongside the teams who run it. Product
                    decisions are shaped through direct feedback, production
                    usage, and real operational constraints.
                  </p>
                  <p className="text-slate-500 text-sm italic">
                    Many core features exist because a community partner needed
                    them in production. We optimize for what works in practice,
                    not what looks good in diagrams.
                  </p>
                </div>

                {/* Right */}
                <div className="p-8 lg:p-12 bg-slate-50/50">
                  <h3 className="text-lg font-semibold text-slate-800 mb-6">
                    Our community includes:
                  </h3>
                  <div className="space-y-4">
                    {communityMembers.map((member, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                          {member.icon}
                        </div>
                        <p className="text-slate-600 pt-2">{member.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-16 lg:py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/svg/background/background-dot.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto relative">
          <div
            ref={openSourceRef.ref}
            className={`${openSourceRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <GitBranch className="w-6 h-6 text-[#3b82f6]" />
                  <span className="text-sm font-medium text-[#3b82f6] uppercase tracking-wider">
                    Open Source
                  </span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                  Open Source at the Core
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Open source is a foundational part of how Fystack is built.
                  Key components of our stack are developed openly to ensure:
                </p>

                <div className="space-y-3">
                  {openSourceBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#3b82f6] flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 border border-[#3b82f6]/30 rounded-lg bg-[#3b82f6]/5">
                  <p className="text-slate-400 text-sm">
                    In custody systems, transparency is not optional. It is a
                    security requirement.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="border border-slate-700 rounded-lg p-8 bg-slate-800/50 backdrop-blur">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
                    <code>{`# Clone the repository
git clone https://github.com/fystack/mpcium

# Explore the codebase
cd mpcium

# Security-critical logic is open
# for audit and verification`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open-Core Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={openCoreRef.ref}
            className={`${openCoreRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-4">
                Open-Core, Enterprise-Ready
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Fystack follows an open-core model. Core building blocks and
                protocols are open source, while enterprise deployments layer
                on:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="border border-slate-200 p-6 hover:border-[#3b82f6]/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] font-bold mb-4">
                    {index + 1}
                  </div>
                  <p className="text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-500 mt-8 max-w-3xl mx-auto">
              This model allows teams to benefit from open systems without
              compromising on reliability, compliance, or security.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#3b82f6]/5 to-white">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={buildRef.ref}
            className={`${buildRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            <div className="relative">
              <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
              <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
              <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
              <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />

              <div className="border border-slate-200 bg-white">
                <div className="p-8 lg:p-12 border-b border-slate-200 text-center">
                  <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-4">
                    What We Build
                  </h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Fystack provides modular, self-hosted infrastructure for
                    digital asset custody and payments, including:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4">
                  {whatWeBuild.map((item, index) => (
                    <div
                      key={index}
                      className={`p-8 flex flex-col items-center text-center ${
                        index < 3 ? "border-r border-slate-200" : ""
                      } ${index < 4 ? "border-b md:border-b-0" : ""}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] mb-4">
                        <Lock className="w-6 h-6" />
                      </div>
                      <p className="text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-slate-200 bg-slate-50/50 text-center">
                  <p className="text-slate-500 text-sm">
                    Our systems integrate cleanly into existing fintech stacks
                    and are designed to scale from pilots to production-grade
                    deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulated Environments Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={regulatedRef.ref}
            className={`${regulatedRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-6 h-6 text-[#3b82f6]" />
                  <span className="text-sm font-medium text-[#3b82f6] uppercase tracking-wider">
                    Compliance
                  </span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-6">
                  Built for Regulated Environments
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Fystack is designed with regulated operators in mind. Our
                  architecture supports:
                </p>

                <div className="space-y-4">
                  {regulatedFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 border border-slate-200 rounded-lg hover:border-[#3b82f6]/30 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-slate-500 mt-6">
                  We build infrastructure that compliance, security, and
                  engineering teams can all stand behind.
                </p>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 border border-slate-200 rounded-lg bg-white">
                    <Shield className="w-8 h-8 text-[#3b82f6] mb-3" />
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Access Controls
                    </h4>
                    <p className="text-sm text-slate-500">
                      Clear separation of duties
                    </p>
                  </div>
                  <div className="p-6 border border-slate-200 rounded-lg bg-white">
                    <Eye className="w-8 h-8 text-[#3b82f6] mb-3" />
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Audit Trails
                    </h4>
                    <p className="text-sm text-slate-500">
                      Verifiable transparency
                    </p>
                  </div>
                  <div className="p-6 border border-slate-200 rounded-lg bg-white">
                    <Globe className="w-8 h-8 text-[#3b82f6] mb-3" />
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Data Residency
                    </h4>
                    <p className="text-sm text-slate-500">
                      Flexible deployment models
                    </p>
                  </div>
                  <div className="p-6 border border-slate-200 rounded-lg bg-white">
                    <FileCheck className="w-8 h-8 text-[#3b82f6] mb-3" />
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Compliance
                    </h4>
                    <p className="text-sm text-slate-500">
                      Risk & monitoring integration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-[#3b82f6]">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={missionRef.ref}
            className={`${missionRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8">
                To make secure, transparent, and operator-owned custody
                infrastructure the default, not the exception.
              </p>

              <div className="border-t border-white/20 pt-8 mt-8">
                <p className="text-white/70 mb-6">
                  Built with the community, for the community. We actively
                  collaborate with our users through open technical discussions,
                  early access to new features, and continuous feedback loops.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="https://app.youform.com/forms/qyanutyi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-[#3b82f6] rounded-full font-medium hover:bg-white/90 transition-colors"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="https://github.com/fystack/mpcium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                  >
                    View on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
