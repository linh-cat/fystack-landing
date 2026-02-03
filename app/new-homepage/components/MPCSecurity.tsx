"use client";

import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function MPCSecurity() {
  const { ref, isVisible } = useScrollReveal();
  const features = [
    {
      tag: "No single point of failure",
      description: "Distributed architecture across independent nodes",
    },
    {
      tag: "Split key shares",
      description: "Keys divided and stored on different nodes",
    },
    {
      tag: "Private key never exists whole",
      description: "Complete key never assembled in memory",
    },
    {
      tag: "Threshold signing",
      description: "Cryptographic signatures without key reconstruction",
    },
  ];

  return (
    <section id="wallet" className="bg-white px-4 lg:px-20 py-4 lg:py-10 2xl:py-20">
      <div ref={ref} className={`container mx-auto max-w-[1440px] ${isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}>
        {/* Wrapper with corner squares */}
        <div className="relative w-full h-full">
          {/* Corner squares - outside the box */}
          <div className="hidden lg:block absolute -top-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="hidden lg:block absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-[#3b82f6] z-10" />
          <div className="flex">
            {/* Left striped column */}
            <div
              className="hidden lg:block w-16 flex-shrink-0 border border-r-0 border-slate-200"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 8px,
                  #f1f5f9 8px,
                  #f1f5f9 9px
                )`,
              }}
            />

            {/* Main content */}
            <div className="flex-1 border border-slate-200">
              {/* Header Section */}
              <div className="text-center py-8 md:py-10 lg:py-14 px-6 border-b border-slate-200">
                <p className="text-[#3b82f6] text-sm font-semibold mb-4 tracking-wide">
                  /SECURITY/
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                  Secured by MPC technology
                </h2>
                <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                  Multi-Party Computation ensures your private keys never
                  <br className="hidden sm:block" />
                  exist in one place, eliminating single points of failure.
                </p>
              </div>

              {/* Content Section - Two columns */}
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-b lg:border-b-0 lg:border-r border-slate-200">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`${index < 2 ? "border-b border-slate-200" : ""} ${index % 2 === 0 ? "sm:border-r border-slate-200" : ""}`}
                    >
                      {/* Tag */}
                      <div className="inline-flex items-center px-2 py-2 bg-[#EFF6FF] border border-[#2F5FAD]/20 rounded-br-2xl">
                        <span className="text-[#2F5FAD] font-medium">
                          {feature.tag}
                        </span>
                      </div>

                      {/* Content */}
                      <p className="text-slate-600 leading-relaxed mt-10 px-4">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right - Node Image */}
                <div className="relative flex items-center justify-center p-8 lg:p-12 min-h-[300px] lg:min-h-[400px]">
                  <div className="absolute top-10 left-10 w-[200px] h-[50px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-2xl" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[50px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-2xl" />
                  <div className="absolute top-10 right-10 w-[200px] h-[50px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-2xl" />
                  {/* Node SVG */}
                  <Image
                    src="/png/mpc_security/node.png"
                    alt="MPC Node Architecture"
                    width={351}
                    height={208}
                    className="w-full max-w-[350px] h-auto"
                  />

                  {/* GitHub Link */}
                  <Link
                    href="https://github.com/fystack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors px-4 py-2 border-l border-t border-slate-200 rounded-tl-lg"
                  >
                    <Github className="w-4 h-4" />
                    <span className="font-mono text-xs">MPC Library on GitHub</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right striped column */}
            <div
              className="hidden lg:block w-16 flex-shrink-0 border border-l-0 border-slate-200"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 8px,
                  #E9EAEB 8px,
                  #E9EAEB 9px
                )`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
