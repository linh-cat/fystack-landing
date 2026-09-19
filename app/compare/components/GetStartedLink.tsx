"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useAppUrl } from "@/hooks/useAppUrl";

export function GetStartedLink({ className, children }: { className?: string; children: ReactNode }) {
  const appUrl = useAppUrl();

  return (
    <Link href={appUrl} className={className}>
      {children}
    </Link>
  );
}
