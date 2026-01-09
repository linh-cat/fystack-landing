import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Fystack",
  description: "Fystack's Privacy Policy outlining our commitment to data privacy and how we handle your information.",
  alternates: {
    canonical: "https://fystack.io/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Fystack",
    description: "Fystack's Privacy Policy outlining our commitment to data privacy and how we handle your information.",
    url: "https://fystack.io/privacy",
    siteName: "Fystack",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Fystack",
    description: "Fystack's Privacy Policy outlining our commitment to data privacy and how we handle your information.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 max-w-4xl py-16 md:py-24">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: 06 September 2025</p>

          <div className="space-y-8">
            <section>
              <p className="text-base leading-relaxed">
                This Privacy Policy (&quot;Policy&quot;) describes how Fystack (&quot;Fystack,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects information in connection with our non-custodial digital asset wallet infrastructure software and services (collectively, the &quot;Services&quot;).
              </p>
              <p className="text-base leading-relaxed mt-4">
                Fystack is committed to protecting your privacy and maintaining the security of your information. This Policy explains our data practices and your rights regarding any information we may collect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Email Addresses</h3>
              <p className="text-base leading-relaxed">
                The only personal information Fystack collects directly from you is your <strong>email address</strong>, which we collect when you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Create an account or register for our Services</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Contact us for support or inquiries</li>
                <li>Participate in surveys, promotions, or events</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Technical and Usage Information</h3>
              <p className="text-base leading-relaxed">
                We may automatically collect certain technical information when you use our Services, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>IP addresses and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system information</li>
                <li>Usage patterns and interaction data with our Services</li>
                <li>Log files and diagnostic data</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Information We Do Not Collect</h3>
              <p className="text-base leading-relaxed">
                Fystack does <strong>not</strong> collect, store, or have access to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Private keys or seed phrases</li>
                <li>Wallet balances or transaction details (except as necessary for service operation and as displayed in your dashboard)</li>
                <li>Personal financial information beyond what is necessary for billing</li>
                <li>Sensitive personal data such as government IDs, social security numbers, or biometric data (unless required by law and with your explicit consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-base leading-relaxed">We use the information we collect for the following purposes:</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Email Addresses</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>To create and manage your account</li>
                <li>To communicate with you about the Services, including updates, security alerts, and support messages</li>
                <li>To send you newsletters, marketing communications, and promotional offers (with your consent, where required)</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To comply with legal obligations and enforce our Terms of Service</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Technical and Usage Information</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>To provide, maintain, and improve the Services</li>
                <li>To monitor and analyze usage patterns and trends</li>
                <li>To detect, prevent, and address technical issues, fraud, and security vulnerabilities</li>
                <li>To ensure the proper functioning of our infrastructure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Non-Custodial Architecture and Data Minimization</h2>
              <p className="text-base leading-relaxed">
                Fystack provides <strong>non-custodial</strong> wallet infrastructure. This means:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>We do not have custody, control, or access to your digital assets</li>
                <li>We cannot initiate, approve, or reverse transactions on your behalf</li>
                <li>You retain full control over your cryptographic keys and assets</li>
                <li>We operate on a principle of data minimization, collecting only what is necessary to provide the Services</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                For self-hosted deployments, all data resides within infrastructure you control. For cloud deployments, cryptographic key material is distributed across multiple parties and systems, and we never possess sufficient information to independently derive private keys.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-base leading-relaxed">
                Fystack does not sell, rent, or trade your personal information. We may share your information only in the following limited circumstances:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Service Providers</h3>
              <p className="text-base leading-relaxed">
                We may share information with trusted third-party service providers who assist us in operating our Services, such as hosting providers, email delivery services, and analytics platforms. These providers are contractually obligated to protect your information and use it only for the purposes we specify.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Legal Requirements</h3>
              <p className="text-base leading-relaxed">
                We may disclose information if required to do so by law or in response to valid legal process, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Compliance with legal obligations, court orders, or government requests</li>
                <li>Protection of our rights, property, or safety, or that of others</li>
                <li>Investigation and prevention of fraud, security issues, or illegal activities</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Business Transfers</h3>
              <p className="text-base leading-relaxed">
                In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the successor entity, subject to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
              <p className="text-base leading-relaxed">
                We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure infrastructure and network protections</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
              <p className="text-base leading-relaxed">
                We retain your email address and related information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide the Services and maintain your account</li>
                <li>Comply with legal obligations, resolve disputes, and enforce our agreements</li>
                <li>Fulfill the purposes described in this Policy</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                If you close your account or request deletion of your information, we will delete or anonymize your data within a reasonable timeframe, unless retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights and Choices</h2>
              <p className="text-base leading-relaxed">
                Depending on your jurisdiction, you may have the following rights regarding your information:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your information, subject to legal and operational requirements</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time by following the unsubscribe instructions in our emails</li>
                <li><strong>Data Portability:</strong> Request a copy of your information in a structured, machine-readable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your information in certain circumstances</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@fystack.io" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">privacy@fystack.io</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-base leading-relaxed">
                We may use cookies and similar tracking technologies to collect usage information and improve your experience with our Services. You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of certain features.
              </p>
              <p className="text-base leading-relaxed mt-4">
                We may use analytics services such as Google Analytics to understand how users interact with our Services. These services may collect information about your use of our Services and other websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Third-Party Links and Services</h2>
              <p className="text-base leading-relaxed">
                Our Services may contain links to third-party websites, applications, or services. This Privacy Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party services you access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. International Data Transfers</h2>
              <p className="text-base leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those of your jurisdiction. By using our Services, you consent to such transfers, and we will take appropriate measures to ensure your information is protected in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Children&apos;s Privacy</h2>
              <p className="text-base leading-relaxed">
                Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. We will notify you of material changes by posting the updated Policy on our website and updating the &quot;Last updated&quot; date. Your continued use of the Services after such changes constitutes acceptance of the updated Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
              <p className="text-base leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-base leading-relaxed mt-4">
                Email: <a href="mailto:privacy@fystack.io" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">privacy@fystack.io</a>
              </p>
              <p className="text-base leading-relaxed mt-4">
                For legal inquiries: <a href="mailto:legal@fystack.io" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">legal@fystack.io</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
