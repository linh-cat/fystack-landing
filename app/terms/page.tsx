import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Fystack",
  description: "Terms of Service governing access to and use of Fystack's non-custodial digital asset wallet infrastructure software and services.",
  alternates: {
    canonical: "https://fystack.io/terms",
  },
  openGraph: {
    title: "Terms of Service | Fystack",
    description: "Terms of Service governing access to and use of Fystack's non-custodial digital asset wallet infrastructure software and services.",
    url: "https://fystack.io/terms",
    siteName: "Fystack",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Fystack",
    description: "Terms of Service governing access to and use of Fystack's non-custodial digital asset wallet infrastructure software and services.",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 max-w-4xl py-16 md:py-24">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: 06 September 2025</p>

          <div className="space-y-8">
            <section>
              <p className="text-base leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern access to and use of the products, software, APIs, documentation, dashboards, and services (collectively, the &quot;Services&quot;) provided by Fystack (&quot;Fystack,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
              </p>
              <p className="text-base leading-relaxed mt-4">
                By accessing or using the Services, you agree to be bound by these Terms.
                If you use the Services on behalf of an organization, you represent that you have authority to bind that organization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Services Overview and Non-Custodial Nature</h2>
              <p className="text-base leading-relaxed">
                Fystack provides non-custodial digital asset wallet infrastructure software, including self-hosted and cloud-based MPC wallet solutions, APIs, dashboards, and related tooling designed for fintech companies, payment platforms, stablecoin issuers, and Web3 projects.
              </p>
              <p className="text-base leading-relaxed mt-4">
                Fystack does not act as a custodian, broker, bank, financial institution, trustee, or fiduciary.
              </p>
              <p className="text-base leading-relaxed mt-4 font-semibold">Fystack does not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Take legal possession or ownership of digital assets</li>
                <li>Exercise discretionary authority over assets or transactions</li>
                <li>Initiate, approve, or execute transactions on behalf of users</li>
                <li>Hold assets for the benefit of users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Deployment Models and Key Material</h2>
              <p className="text-base leading-relaxed">
                Depending on the deployment model and configuration selected by you:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">a) Self-Hosted Deployments</h3>
              <p className="text-base leading-relaxed">
                All components operate within infrastructure controlled by you. Fystack does not access or operate your environment.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">b) Cloud Deployments</h3>
              <p className="text-base leading-relaxed">
                Certain Services operate on infrastructure managed by Fystack.
              </p>
              <p className="text-base leading-relaxed mt-4">For these configurations:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>MPC wallets distribute cryptographic key material across multiple parties and systems.</li>
                <li>Certain MPC configurations may involve encrypted key material or key shares being generated, stored, or processed on Fystack-managed infrastructure.</li>
                <li>At no time does Fystack possess sufficient information or authority to independently derive private keys or transfer digital assets without cryptographic authorization enforced by the system and customer-defined policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Customer Control and Responsibility</h2>
              <p className="text-base leading-relaxed">You acknowledge and agree that:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>You retain control over wallet configuration, access permissions, approval policies, and transaction logic.</li>
                <li>You are solely responsible for operational security, governance decisions, and compliance obligations.</li>
                <li>Fystack&apos;s role is limited to providing technical infrastructure and tooling as documented.</li>
                <li>Digital asset transactions are irreversible, and misconfiguration, credential compromise, or operational errors may result in permanent loss of funds.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Eligibility and Compliance</h2>
              <p className="text-base leading-relaxed">
                You must be at least 18 years old and capable of entering a binding agreement.
                You are responsible for ensuring your use of the Services complies with all applicable laws, regulations, sanctions regimes, and industry requirements, including AML, CFT, and data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Account Security</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>You are responsible for safeguarding credentials, API keys, secrets, and access controls.</li>
                <li>You are responsible for all activity conducted through your account.</li>
                <li>You must promptly notify Fystack of suspected unauthorized access or security incidents.</li>
                <li>Fystack is not responsible for losses resulting from compromised credentials, misconfiguration, or failure to follow recommended security practices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Acceptable Use</h2>
              <p className="text-base leading-relaxed">You may not use the Services to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Engage in illegal, fraudulent, or deceptive activities</li>
                <li>Circumvent security controls or access restrictions</li>
                <li>Violate sanctions, export controls, or applicable regulations</li>
                <li>Interfere with the integrity or availability of the Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Fees and Payment</h2>
              <p className="text-base leading-relaxed">
                Certain Services require payment of fees pursuant to an applicable subscription plan or commercial agreement.
                Fees are non-refundable unless expressly stated otherwise in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Intellectual Property</h2>
              <p className="text-base leading-relaxed">
                Fystack retains all rights to proprietary software, documentation, branding, and trademarks.
                Open-source components are governed by their respective licenses.
              </p>
              <p className="text-base leading-relaxed mt-4">
                No rights are granted except as expressly stated in these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Risk Disclosure</h2>
              <p className="text-base leading-relaxed">
                You acknowledge that digital asset systems involve inherent risks, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Software bugs and vulnerabilities</li>
                <li>Network failures or consensus issues</li>
                <li>Regulatory changes</li>
                <li>Operational and configuration risks</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Fystack does not guarantee asset safety, system availability, or regulatory outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-base leading-relaxed">
                The Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;, without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Limitation of Liability</h2>
              <p className="text-base leading-relaxed">
                To the maximum extent permitted by law, Fystack shall not be liable for indirect, incidental, consequential, special, or punitive damages, including loss of funds, profits, data, or business opportunities.
              </p>
              <p className="text-base leading-relaxed mt-4">
                Fystack&apos;s total aggregate liability shall not exceed the fees paid to Fystack in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">12. Termination</h2>
              <p className="text-base leading-relaxed">
                Fystack may suspend or terminate access to the Services if you violate these Terms or pose security, legal, or regulatory risks.
              </p>
              <p className="text-base leading-relaxed mt-4">
                Upon termination, your right to use the Services ceases immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">13. Changes to Terms</h2>
              <p className="text-base leading-relaxed">
                We may update these Terms from time to time. Continued use of the Services constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">14. Governing Law</h2>
              <p className="text-base leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws specified in the applicable commercial agreement, or if none, a mutually neutral jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">15. Contact</h2>
              <p className="text-base leading-relaxed">
                Email: <a href="mailto:legal@fystack.io" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">legal@fystack.io</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
