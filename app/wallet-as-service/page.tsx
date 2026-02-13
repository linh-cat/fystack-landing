"use client";

import Navbar from "@/components/Navbar";
import { Hero, KeyBenefits, UseCasesSection, DeveloperExperienceSection, SecurityControlSection, DeploymentModelsSection, TechAgnosticSection } from "./components";
import { JoinCommunity } from "@/app/new-homepage/components";
import { CTAFooter } from "../new-homepage/components/CTAFooter";

export default function WalletAsServicePage() {
  return (
    <div className="flex flex-col min-h-screen font-geist-mono">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Key Benefits Section */}
        <KeyBenefits />

        {/* Use Cases Section */}
        <UseCasesSection />

        {/* Developer Experience Section */}
        <DeveloperExperienceSection />

        {/* Security & Control Section */}
        <SecurityControlSection />

        {/* Deployment Models Section */}
        {/* <DeploymentModelsSection /> */}

        {/* Technology Agnostic Section */}
        <TechAgnosticSection />

        <CTAFooter />
      </main>

      {/* Join Community */}
      <JoinCommunity />
    </div>
  );
}
