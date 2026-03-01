"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function EnterpriseSection() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 2xl:px-0">
        <div
          ref={scrollRef}
          className={`${
            isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/svg/background/square-gray-bg.svg"
              alt="Background"
              width={500}
              height={150}
              className="absolute top-0 left-0 w-full h-auto opacity-50 sm:opacity-100"
            />
            <div className="relative px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:justify-between">
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold shrink-0">
                Enterprise
              </h3>
              <p className="text-sm sm:text-base lg:text-lg max-w-2xl">
                For teams that need custom integrations, SLA guarantees, and
                dedicated support.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium transition-all shrink-0"
                asChild
              >
                <Link href="#contact">Talk to an Architect</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
