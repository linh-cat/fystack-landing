"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, BookOpen } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[128px]" />

      <div className="container px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Ready to build the future of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              digital finance?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Join innovative teams using Fystack to power their digital asset
            operations. Start free, scale as you grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="px-8 py-6 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              asChild
            >
              <Link href="https://app.fystack.io" target="_blank">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-semibold border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-full transition-all"
              asChild
            >
              <Link href="https://docs.fystack.io" target="_blank">
                <BookOpen className="mr-2 w-5 h-5" />
                Read Docs
              </Link>
            </Button>
          </div>

          {/* Secondary links */}
          <div className="flex items-center justify-center gap-6 pt-4 text-sm">
            <Link
              href="https://github.com/ApeScreener/fystack-mpc"
              target="_blank"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              href="https://sandbox.fystack.io"
              target="_blank"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Try Live Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
