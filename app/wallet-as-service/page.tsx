"use client";

import Navbar from "@/components/Navbar";
import { Hero, KeyBenefits, UseCasesSection, DeveloperExperienceSection, SecurityControlSection, DeploymentModelsSection, TechAgnosticSection, EnterpriseSection } from "./components";
import { JoinCommunity } from "@/app/new-homepage/components";
import { CTAFooter } from "../new-homepage/components/CTAFooter";

export default function WalletAsServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Use Cases Section */}
        <UseCasesSection />

        {/* Developer Experience Section */}
        <DeveloperExperienceSection />

        {/* Key Benefits Section */}
        <KeyBenefits />

        {/* Security & Control Section */}
        <SecurityControlSection />

        {/* Deployment Models Section */}
        {/* <DeploymentModelsSection /> */}

        {/* Technology Agnostic Section */}
        {/* <TechAgnosticSection /> */}

        {/* Enterprise Section */}
        <EnterpriseSection />

        <CTAFooter />
      </main>

      {/* Join Community */}
      <JoinCommunity />
    </div>
  );
}
