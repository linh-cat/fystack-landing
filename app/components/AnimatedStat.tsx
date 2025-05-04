"use client";

import { useEffect, useState, ReactNode } from 'react';

interface AnimatedStatProps {
  stats: ReactNode[];
  interval?: number;
  className?: string;
}

interface HighlightProps {
  children: ReactNode;
}

export function Highlight({ children }: HighlightProps) {
  return (
    <span className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-transparent bg-clip-text font-bold">
      {children}
    </span>
  );
}

export default function AnimatedStat({ stats, interval = 3000, className = '' }: AnimatedStatProps) {
  const [statIndex, setStatIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [stats, interval]);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        key={statIndex}
        className="w-full animate-fade-in"
      >
        {stats[statIndex]}
      </div>
    </div>
  );
} 