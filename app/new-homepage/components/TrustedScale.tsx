"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

const TOTAL_CELLS = 9;
const GRID_COLS = 3;
const REVEAL_DELAY = 120;
const HIGHLIGHT_INTERVAL = 2000;

const CELL_ORDER = Array.from({ length: TOTAL_CELLS }, (_, i) => i);

// Logo cell IDs (for hover effects)
const logoCellIds = new Set([1, 2, 3, 5, 6, 7]);

function shuffle(arr: number[]): number[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Border classes determined by position (not cellId)
function getBorderClasses(position: number): string {
  const row = Math.floor(position / GRID_COLS);
  const col = position % GRID_COLS;
  const isLastRow = row === GRID_COLS - 1;
  const isLastCol = col === GRID_COLS - 1;

  const classes: string[] = [];

  if (!isLastRow) {
    classes.push("border-b");
  }

  if (!isLastCol) {
    classes.push("md:border-r");
  }

  return classes.join(" ");
}

// Render the content for a given cell ID
function CellContent({ cellId }: { cellId: number }) {
  switch (cellId) {
    case 0:
      return (
        <>
          <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3">
            /Processors/
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Stop losing margin to volume-based fees. Run the wallet layer
            yourself — no per-transaction cut, no revenue share.
          </p>
        </>
      );
    case 1:
      return (
        <Image
          src="/svg/trust_to_scale/apescreener.svg"
          alt="Apescreener"
          width={160}
          height={57}
          className="h-14 lg:h-16 w-auto"
        />
      );
    case 2:
      return (
        <Image
          src="/svg/trust_to_scale/gaian.svg"
          alt="Gaian"
          width={160}
          height={40}
          className="h-10 lg:h-12 w-auto"
        />
      );
    case 3:
      return (
        <Image
          src="/svg/trust_to_scale/exdt.svg"
          alt="EXDT"
          width={160}
          height={40}
          className="h-10 lg:h-12 w-auto"
        />
      );
    case 4:
      return (
        <>
          <h3 className="text-lg lg:text-xl font-bold text-[#3b82f6] mb-3">
            &lt;Fits you if&gt;
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            You&apos;re a PSP or stablecoin processor moving real monthly
            volume, hitting a competitor&apos;s volume cliff, or needing
            self-hosted for jurisdiction or licensing.
          </p>
        </>
      );
    case 5:
      return (
        <Image
          src="/svg/trust_to_scale/minepath.svg"
          alt="Minepath"
          width={160}
          height={40}
          className="h-10 lg:h-12 w-auto"
        />
      );
    case 6:
      return (
        <Image
          src="/svg/trust_to_scale/primepay.svg"
          alt="PrimePay"
          width={200}
          height={120}
          className="h-28 lg:h-32 w-auto"
        />
      );
    case 7:
      return (
        <Image
          src="/svg/trust_to_scale/superteam.svg"
          alt="Superteam"
          width={160}
          height={57}
          className="h-14 lg:h-16 w-auto"
        />
      );
    case 8:
      return (
        <>
          <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3">
            {"{Self-hosted}"}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Deploy on your own infrastructure — Systemd, Docker, or Kubernetes.
            Your keys, your cloud, your compliance boundary.
          </p>
        </>
      );
    default:
      return null;
  }
}

// Base style per cell ID (bg color, flex alignment, sizing)
function getCellBaseClasses(cellId: number): string {
  switch (cellId) {
    case 0:
    case 8:
      return "p-6 lg:p-8 bg-white";
    case 1:
    case 2:
    case 3:
    case 6:
    case 7:
      return "p-6 lg:p-8 bg-slate-50/50 flex items-center justify-center";
    case 4:
      return "p-6 lg:p-8 bg-white relative";
    case 5:
      return "p-6 lg:p-8 bg-slate-50/50 flex items-center justify-center relative";
    default:
      return "p-6 lg:p-8 bg-white";
  }
}

export function TrustedScale() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealedCells, setRevealedCells] = useState<Set<number>>(new Set());
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  // Shuffled order for staggered reveal (stable across renders)
  const revealOrder = useMemo(
    () => shuffle(Array.from({ length: TOTAL_CELLS }, (_, i) => i)),
    []
  );

  // IntersectionObserver: trigger staggered reveal when grid enters viewport
  useEffect(() => {
    if (hasRevealed || !gridRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.disconnect();

          revealOrder.forEach((cellIndex, i) => {
            setTimeout(() => {
              setRevealedCells((prev) => {
                const next = new Set(Array.from(prev));
                next.add(cellIndex);
                return next;
              });
            }, i * REVEAL_DELAY);
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [hasRevealed, revealOrder]);

  // Traveling highlight: random cell glow after reveal completes
  useEffect(() => {
    if (revealedCells.size < TOTAL_CELLS) return;

    const interval = setInterval(() => {
      setHighlightIndex(Math.floor(Math.random() * TOTAL_CELLS));
    }, HIGHLIGHT_INTERVAL);

    return () => clearInterval(interval);
  }, [revealedCells.size]);

  const cellAnim = (cellId: number) => {
    const isRevealed = revealedCells.has(cellId);
    const isHighlighted = highlightIndex === cellId;
    const isLogo = logoCellIds.has(cellId);

    return [
      "transition-all duration-300 ease-in-out relative",
      isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      isLogo ? "hover:scale-[1.02] hover:shadow-sm" : "",
      isHighlighted
        ? "ring-1 ring-inset ring-[#3b82f6]/10 shadow-[inset_0_0_40px_rgba(59,130,246,0.06)]"
        : "",
    ].join(" ");
  };

  return (
    <section className="bg-white py-4 lg:py-10 2xl:py-20">
      <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
        {/* Top Section with decorative patterns */}
        <div className="relative border border-slate-200 mb-0">
          <div className="flex items-stretch">
            {/* Left decorative pattern */}
            <div className="hidden md:flex w-24 lg:w-32 flex-shrink-0 items-center justify-center border-r border-slate-200 p-4">
              <Image
                src="/svg/trust_to_scale/trust-to-scale.svg"
                alt="Decorative pattern"
                width={80}
                height={160}
                className="w-full h-auto max-h-[160px] object-contain"
              />
            </div>

            {/* Header Content */}
            <div className="flex-1 text-center py-8 md:py-10 lg:py-12 px-6 md:px-8 lg:px-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Built for stablecoin
                <br />
                payment processors<span className="text-[#3b82f6]">.</span>
              </h2>
              <p className="text-slate-500 text-base lg:text-lg leading-relaxed">
                Live in production with PSPs and payments teams
                <br className="hidden sm:block" />
                moving real stablecoin flow every day.
              </p>
            </div>

            {/* Right decorative pattern */}
            <div className="hidden md:flex w-24 lg:w-32 flex-shrink-0 items-center justify-center border-l border-slate-200 p-4">
              <Image
                src="/svg/trust_to_scale/trust-to-scale.svg"
                alt="Decorative pattern"
                width={80}
                height={160}
                className="w-full h-auto max-h-[160px] object-contain -scale-x-100"
              />
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-b border-slate-200 overflow-visible"
        >
          {CELL_ORDER.map((cellId, position) => {
            return (
              <div
                key={cellId}
                className={`${getCellBaseClasses(cellId)} ${getBorderClasses(
                  position
                )} border-slate-200 ${cellAnim(cellId)}`}
              >
                <CellContent cellId={cellId} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
