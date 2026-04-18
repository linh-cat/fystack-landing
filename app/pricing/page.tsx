"use client";

import Navbar from "@/components/Navbar";
import { Pricing } from "../new-homepage/components/Pricing";
import { CTAFooter } from "../new-homepage/components/CTAFooter";
import { JoinCommunity } from "../new-homepage/components";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen font-geist-mono">
      <Navbar />

      <main className="flex-1">
        <Pricing />
        <CTAFooter />
      </main>

      <JoinCommunity />
    </div>
  );
}
