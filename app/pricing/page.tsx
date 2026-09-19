"use client";

import { useEffect } from "react";
import { usePostHog } from "@posthog/react";
import Navbar from "@/components/Navbar";
import { Pricing } from "../new-homepage/components/Pricing";
import { CTAFooter } from "../new-homepage/components/CTAFooter";
import { JoinCommunity } from "../new-homepage/components";

export default function PricingPage() {
  const posthog = usePostHog();

  useEffect(() => {
    posthog?.capture("pricing_viewed");
  }, [posthog]);

  return (
    <div className="flex flex-col min-h-screen font-geist-mono">
      <Navbar />

      <main className="flex-1">
        <Pricing showComparisonTable />
        <CTAFooter />
      </main>

      <JoinCommunity />
    </div>
  );
}
