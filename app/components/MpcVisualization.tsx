import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

export default function MpcVisualization() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900/40 lg:-m-2 xl:-m-4">
        <Image
          src="/visualization/keys.png"
          alt="MPC key distribution visualization"
          width={1599}
          height={923}
          className="w-full h-auto"
          sizes="(min-width: 1280px) 760px, (min-width: 1024px) 640px, (min-width: 768px) 70vw, 90vw"
          priority
        />
      </div>
      <div className="flex justify-end">
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
