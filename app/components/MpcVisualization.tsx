import { Key, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MpcVisualization() {
  return (
    <div className="relative h-[350px] lg:h-[500px] rounded-xl overflow-hidden border bg-muted/30 backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[80%] aspect-video">
          {/* Central Key Icon with Pulse Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center z-10">
              <Key className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <div className="w-32 h-32 rounded-full bg-primary/5 absolute animate-ping"></div>
          </div>

          {/* Cloud Provider Nodes with Key Fragments */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-16 h-16 rounded-lg bg-blue-500/20 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-blue-600 font-bold text-lg">A</div>
                  <div className="text-xs text-blue-500">Node</div>
                </div>
              </div>
              <div className="absolute -right-2 -bottom-2 bg-primary/20 rounded-full p-1">
                <Key className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>

          <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-16 h-16 rounded-lg bg-indigo-500/20 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-indigo-600 font-bold text-lg">B</div>
                  <div className="text-xs text-indigo-500">Node</div>
                </div>
              </div>
              <div className="absolute -right-2 -bottom-2 bg-primary/20 rounded-full p-1">
                <Key className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2">
            <div className="relative">
              <div className="w-16 h-16 rounded-lg bg-emerald-500/20 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-emerald-600 font-bold text-lg">C</div>
                  <div className="text-xs text-emerald-500">Node</div>
                </div>
              </div>
              <div className="absolute -right-2 -bottom-2 bg-primary/20 rounded-full p-1">
                <Key className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Animated Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Animated dashed lines */}
            <path
              d="M25,35 Q40,20 50,35 T75,35"
              fill="none"
              stroke="rgba(var(--primary-rgb), 0.5)"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="100"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M25,45 Q40,30 50,45 T75,45"
              fill="none"
              stroke="rgba(var(--primary-rgb), 0.3)"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-100"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M25,55 Q40,40 50,55 T75,55"
              fill="none"
              stroke="rgba(var(--primary-rgb), 0.2)"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="100"
                dur="25s"
                repeatCount="indefinite"
              />
            </path>

            {/* Animated particles along the paths */}
            <circle r="0.5" fill="var(--primary)">
              <animateMotion
                dur="10s"
                repeatCount="indefinite"
                path="M25,35 Q40,20 50,35 T75,35"
              />
            </circle>
            <circle r="0.5" fill="var(--primary)">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path="M25,45 Q40,30 50,45 T75,45"
              />
            </circle>
            <circle r="0.5" fill="var(--primary)">
              <animateMotion
                dur="12s"
                repeatCount="indefinite"
                path="M25,55 Q40,40 50,55 T75,55"
              />
            </circle>
          </svg>

          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
        </div>
      </div>

      {/* GitHub Open Source Button */}
      <div className="absolute bottom-4 right-4 z-20">
        <Link
          href="https://github.com/fystack/mpcium"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-background/95 backdrop-blur-sm border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold text-foreground">MPC Library on GitHub</span>
            <span className="text-xs text-muted-foreground">Community-driven roadmap</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
