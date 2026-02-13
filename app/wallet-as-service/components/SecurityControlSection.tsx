"use client";

import Image from "next/image";
import { useScrollReveal } from "../../new-homepage/hooks/useScrollReveal";

export function SecurityControlSection() {
  const { ref: scrollRef, isVisible } = useScrollReveal(0.15);

  const features = [
    { icon: "/svg/wallet_as_service/wallet.svg", text: "MPC / Threshold Signing" },
    { icon: "/svg/wallet_as_service/automated.svg", text: "Policies enforced before signing" },
    { icon: "/svg/wallet_as_service/webhook.svg", text: "Qourum approvals" },
    { icon: "/svg/wallet_as_service/multichain.svg", text: "Multi-channel Notifications" },
  ];

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
        <div
          ref={scrollRef}
          className={`relative w-full ${
            isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          {/* Corner squares */}
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
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                {/* Left - Content */}
                <div className="p-8 sm:p-10 lg:p-14">
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 mb-5">
                    <div className="w-5 h-5 rounded bg-[#3b82f6] flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">A</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                      SECURITY & CONTROL
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-slate-900 mb-4 leading-tight">
                    Security That Enables Automation
                  </h3>

                  {/* Description */}
                  <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-md">
                    If your server is down, Fystack queues the alert and retries
                    with exponential backoff. We ensure you never lose data.
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Image
                          src={feature.icon}
                          alt={feature.text}
                          width={18}
                          height={18}
                        />
                        <span className="text-sm text-slate-700 font-medium">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Image */}
                <div className="relative flex items-center justify-center p-8 lg:p-12 min-h-[300px] lg:min-h-[400px]">
                  <div className="absolute top-10 left-10 w-[200px] h-[50px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-2xl" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[50px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-2xl" />
                  <div className="absolute top-10 right-10 w-[200px] h-[50px] bg-gradient-to-t from-white to-[#3b82f6]/30 blur-2xl" />

                  {/* Placeholder image */}
                  <div className="w-full max-w-[400px]">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center">
                      <Image src="/png/operational_excellence/analytics.png" alt="Security Control" width={400} height={400} className="w-full h-auto" /> 
                    </div>
                  </div>
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
