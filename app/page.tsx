"use client";

import Navbar from "@/components/Navbar";
import { Hero } from "./new-homepage/components/Hero";
import { DemoVideo } from "./new-homepage/components/DemoVideo";
import { DebugDelivery } from "./new-homepage/components/DebugDelivery";
import { TrustedScale } from "./new-homepage/components/TrustedScale";
import { WhyChooseUs } from "./new-homepage/components/WhyChooseUs";
import { MPCSecurity } from "./new-homepage/components/MPCSecurity";
import { SecurityDeveloper } from "./new-homepage/components/SecurityDeveloper";
import { OperationalExcellence } from "./new-homepage/components/OperationalExcellence";
import { EnterpriseCompliance } from "./new-homepage/components/EnterpriseCompliance";
import { SelfHostedDeployment } from "./new-homepage/components/SelfHostedDeployment";
import { Pricing } from "./new-homepage/components/Pricing";
import { CTAFooter } from "./new-homepage/components/CTAFooter";
import { UseCases } from "./new-homepage/components/UseCases";
import { JoinCommunity } from "./new-homepage/components";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen font-geist-mono">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Demo Video */}
        <DemoVideo />

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
