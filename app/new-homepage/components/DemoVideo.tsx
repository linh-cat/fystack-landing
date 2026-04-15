"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function DemoVideo() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.currentTime = 0;
    video.play();
    setIsPlaying(true);
  };

  return (
    <section className="py-12 lg:py-20">
      <div
        ref={ref}
        className={`max-w-[1440px] mx-auto px-4 lg:px-16 2xl:px-0 ${
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
            <div className="relative aspect-video bg-slate-900">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/fystack-demo.webm"
                autoPlay
                muted
                loop
                playsInline
                controls={isPlaying}
              />

              {/* Play overlay (before user clicks) */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 via-transparent to-transparent group"
                  aria-label="Play demo with sound"
                >
                  <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] shadow-[0_0_32px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform" />
                    <Play className="relative h-6 w-6 sm:h-8 sm:w-8 text-white fill-white translate-x-[2px]" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
