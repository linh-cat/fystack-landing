"use client";

import Navbar from "@/components/Navbar";
import { Hero } from "./components/Hero";
import { DebugDelivery } from "./components/DebugDelivery";
import { TrustedScale } from "./components/TrustedScale";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { FystackVsInHouse } from "./components/FystackVsInHouse";
import { MPCSecurity } from "./components/MPCSecurity";
import { SecurityDeveloper } from "./components/SecurityDeveloper";
import { OperationalExcellence } from "./components/OperationalExcellence";
import { EnterpriseCompliance } from "./components/EnterpriseCompliance";
import { SelfHostedDeployment } from "./components/SelfHostedDeployment";
import { Pricing } from "./components/Pricing";
import { CTAFooter } from "./components/CTAFooter";
import { UseCases } from "./components/UseCases";
import { JoinCommunity } from "./components";

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

        {/* Fystack vs Building In-House */}
        <FystackVsInHouse />

        {/* MPC Security Section */}
        <MPCSecurity />

        {/* Security & Developer Section */}
        <SecurityDeveloper />

        {/* Operational Excellence Section */}
        <OperationalExcellence />

        {/* Enterprise Compliance Section */}
        <EnterpriseCompliance />

        {/* Self-Hosted Deployment Section */}
        <SelfHostedDeployment />

        {/* Pricing Section */}
        <Pricing />
  
        <CTAFooter />
      </main>

      {/* CTA & Footer */}

      {/* Join Community */}
      <JoinCommunity />
    </div>
  );
}
