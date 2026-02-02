"use client";

import Navbar from "@/components/Navbar";
import { Hero } from "./components/Hero";
import { DebugDelivery } from "./components/DebugDelivery";
import { TrustedScale } from "./components/TrustedScale";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { MPCSecurity } from "./components/MPCSecurity";
import { SecurityExperts } from "./components/SecurityExperts";
import { DeveloperExperience } from "./components/DeveloperExperience";
import { OperationalExcellence } from "./components/OperationalExcellence";
import { EnterpriseCompliance } from "./components/EnterpriseCompliance";
import { SelfHostedDeployment } from "./components/SelfHostedDeployment";
import { Pricing } from "./components/Pricing";
import { CTASection } from "./components/CTASection";
import { NewFooter } from "./components/NewFooter";
import { UseCases } from "./components/UseCases";

export default function NewHomepage() {
  return (
    <div className="flex flex-col min-h-screen font-geist-mono">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Debug Delivery Section */}
        <DebugDelivery />

        {/* Trusted Scale Section */}
        <TrustedScale />

        {/* Use Cases Section */}
        <UseCases />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* MPC Security Section */}
        <MPCSecurity />

        {/* Security Experts Section */}
        <SecurityExperts />

        {/* Developer Experience Section */}
        <DeveloperExperience />

        {/* Operational Excellence Section */}
        <OperationalExcellence />

        {/* Enterprise Compliance Section */}
        <EnterpriseCompliance />

        {/* Self-Hosted Deployment Section */}
        <SelfHostedDeployment />

        {/* Pricing Section */}
        <Pricing />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <NewFooter />
    </div>
  );
}
