"use client";

import Image from "next/image";
import Link from "next/link";

interface Partner {
  name: string;
  logo: string;
  darkBg?: boolean; // Flag to indicate if logo needs dark background
  url: string; // Website URL
}

const partners: Partner[] = [
  {
    name: "Ape Screener",
    logo: "/clientpartners/apescreener.svg",
    darkBg: true, // This logo has white text, needs dark background
    url: "https://apescreener.xyz/",
  },
  {
    name: "Gaian",
    logo: "/clientpartners/logo.780ab2c4.svg",
    darkBg: false, // This logo works on light background
    url: "https://gaian.network/",
  },
  {
    name: "SuperTeam VN",
    logo: "/clientpartners/superteamvn.svg",
    darkBg: true, // This logo works better on dark background
    url: "https://vn.superteam.fun/",
  },
  {
    name: "WannaPlay",
    logo: "/clientpartners/wanna_play.png",
    darkBg: true, // This logo works on dark background
    url: "",
  },
  {
    name: "Minepath",
    logo: "/clientpartners/minepath.svg",
    darkBg: false, // This logo works on light background
    url: "https://play.minepath.fun/",
  },
];

export default function ClientPartners() {
  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="relative py-16 md:py-20 bg-white dark:bg-background border-b overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl opacity-70 animate-float"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-10 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl opacity-70 animate-float"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            Trusted by Our Clients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join innovative companies building with Fystack
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-background to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track */}
          <div className="flex gap-8 md:gap-12 lg:gap-16 animate-scroll-infinite hover:[animation-play-state:paused]">
            {duplicatedPartners.map((partner, index) => {
              const content = (
                <>
                  {/* Glow effect on hover */}
                  <div
                    className={`
                      absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl
                      ${
                        partner.darkBg
                          ? "bg-blue-500/20"
                          : "bg-emerald-500/20"
                      }
                    `}
                  ></div>

                  <div
                    className={`
                      relative rounded-xl p-4 md:p-6 transition-all duration-300
                      transform group-hover:-translate-y-1
                      ${
                        partner.darkBg
                          ? // Dark background for logos with white text
                            "bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700"
                          : // Light/neutral background for other logos
                            "bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }
                      border border-gray-200 dark:border-gray-700
                      hover:border-gray-300 dark:hover:border-gray-600
                      hover:shadow-2xl
                    `}
                  >
                    <div className="relative h-10 md:h-12 w-24 md:w-32 flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain transition-all duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 96px, 128px"
                      />
                    </div>
                  </div>
                </>
              );

              return partner.url ? (
                <Link
                  key={`${partner.name}-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 cursor-pointer"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={`${partner.name}-${index}`}
                  className="group relative flex-shrink-0"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
