"use client";

import Image from "next/image";

const clientLogos = [
  {
    src: "/svg/trust_to_scale/apescreener.svg",
    alt: "Apescreener",
    height: "h-14 lg:h-16",
  },
  {
    src: "/svg/trust_to_scale/gaian.svg",
    alt: "Gaian",
    height: "h-10 lg:h-12",
  },
  {
    src: "/svg/trust_to_scale/exdt.svg",
    alt: "EXDT",
    height: "h-10 lg:h-12",
  },
  {
    src: "/svg/trust_to_scale/minepath.webp",
    alt: "Minepath",
    height: "h-10 lg:h-12",
  },
  {
    src: "/svg/trust_to_scale/primepay.svg",
    alt: "PrimePay",
    height: "h-20 lg:h-24",
  },
  {
    src: "/svg/trust_to_scale/superteam.svg",
    alt: "Superteam",
    height: "h-14 lg:h-16",
  },
];

const storyCells = [
  {
    title: "/Margin/",
    titleClass: "text-slate-800",
    body: "Stop losing margin to volume-based fees. Run the wallet layer yourself — no per-transaction cut, no revenue share.",
  },
  {
    title: "<Fits you if>",
    titleClass: "text-[#3b82f6]",
    body: "You're a fintech, PSP, or neobank running stablecoin rails — hitting a competitor's volume cliff, or needing self-hosted for jurisdiction or licensing.",
  },
  {
    title: "{Self-hosted}",
    titleClass: "text-slate-800",
    body: "Deploy on your own infrastructure — Systemd, Docker, or Kubernetes. Your keys, your cloud, your compliance boundary.",
  },
];

export function TrustedScale() {
  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
        {/* Top Section with decorative patterns */}
        <div className="relative border border-slate-200 mb-0">
          <div className="flex items-stretch">
            {/* Left decorative pattern */}
            <div className="hidden md:flex w-24 lg:w-32 flex-shrink-0 items-center justify-center border-r border-slate-200 p-4">
              <Image
                src="/svg/trust_to_scale/trust-to-scale.webp"
                alt="Decorative pattern"
                width={80}
                height={160}
                className="w-full h-auto max-h-[160px] object-contain"
              />
            </div>

            {/* Header Content */}
            <div className="flex-1 text-center py-8 md:py-10 lg:py-12 px-6 md:px-8 lg:px-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Built for teams moving
                <br />
                stablecoins at scale<span className="text-[#3b82f6]">.</span>
              </h2>
              <p className="text-slate-500 text-base lg:text-lg leading-relaxed">
                Live in production with payment processors, fintechs,
                <br className="hidden sm:block" />
                and digital-asset platforms moving real stablecoin flow every day.
              </p>
            </div>

            {/* Right decorative pattern */}
            <div className="hidden md:flex w-24 lg:w-32 flex-shrink-0 items-center justify-center border-l border-slate-200 p-4">
              <Image
                src="/svg/trust_to_scale/trust-to-scale.webp"
                alt="Decorative pattern"
                width={80}
                height={160}
                className="w-full h-auto max-h-[160px] object-contain -scale-x-100"
              />
            </div>
          </div>
        </div>

        {/* Story Cells - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-b border-slate-200">
          {storyCells.map((cell, index) => (
            <div
              key={cell.title}
              className={`p-6 lg:p-8 bg-white ${
                index < storyCells.length - 1
                  ? "border-b md:border-b-0 md:border-r border-slate-200"
                  : ""
              }`}
            >
              <h3 className={`text-lg lg:text-xl font-bold ${cell.titleClass} mb-3`}>
                {cell.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {cell.body}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos Marquee */}
        <div className="border-x border-b border-slate-200 bg-slate-50/50 py-10 lg:py-12">
          <div className="text-center mb-8">
            <p className="text-xs md:text-sm font-semibold text-slate-500 tracking-wider uppercase">
              Trusted by teams moving real stablecoin volume
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-500 tracking-wider uppercase mt-1">
              <span className="text-[#3b82f6]">20+</span> self-hosted instances launched and running in production
            </p>
          </div>
          <div
            className="group relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
              {[...clientLogos, ...clientLogos, ...clientLogos].map(
                (logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="mx-10 md:mx-14 lg:mx-16 flex items-center justify-center shrink-0"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={96}
                      className={`${logo.height} w-auto object-contain`}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
