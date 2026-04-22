"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function DemoVideo() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    if (!next) video.play().catch(() => {});
    setIsMuted(next);
  };

  return (
    <section className="py-12 lg:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] 2xl:max-w-[1728px] mx-auto px-4 lg:px-16 2xl:px-16 ${
          isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
        }`}
      >
        <div className="relative">
          {/* Gradient glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#3b82f6]/20 via-[#8b5cf6]/20 to-[#3b82f6]/20 blur-3xl -z-10" />

          {/* Video frame */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-blue-500/10">
            {/* Browser-like top bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50/50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <div className="ml-4 flex-1 max-w-xs h-5 rounded bg-white border border-slate-200 flex items-center px-2">
                <span className="text-[10px] text-slate-400 font-geist-mono truncate">
                  app.fystack.io
                </span>
              </div>
            </div>

            {/* Video */}
            <div
              className="relative aspect-video bg-slate-900 cursor-pointer group"
              onClick={toggleMute}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/fystack-demo.webm"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Mute indicator */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium opacity-90 hover:opacity-100 transition-opacity"
                aria-label={isMuted ? "Unmute demo" : "Mute demo"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="h-3.5 w-3.5" />
                    <span>Tap for sound</span>
                  </>
                ) : (
                  <Volume2 className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
