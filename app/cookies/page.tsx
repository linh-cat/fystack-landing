import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Fystack",
  description: "Fystack's Cookie Policy explaining how we use cookies and similar tracking technologies.",
  alternates: {
    canonical: "https://fystack.io/cookies",
  },
  openGraph: {
    title: "Cookie Policy | Fystack",
    description: "Fystack's Cookie Policy explaining how we use cookies and similar tracking technologies.",
    url: "https://fystack.io/cookies",
    siteName: "Fystack",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy | Fystack",
    description: "Fystack's Cookie Policy explaining how we use cookies and similar tracking technologies.",
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 max-w-4xl py-16 md:py-24">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: 06 September 2025</p>

          <div className="space-y-8">
            <section>
              <p className="text-base leading-relaxed">
                This Cookie Policy (&quot;Policy&quot;) explains how Fystack (&quot;Fystack,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar tracking technologies on our website and services.
              </p>
              <p className="text-base leading-relaxed mt-4">
                By using our website, you consent to the use of cookies as described in this Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
              <p className="text-base leading-relaxed">
                Cookies are small text files that are placed on your device (computer, smartphone, tablet, or other electronic device) when you visit a website. Cookies allow the website to recognize your device and store information about your preferences or past actions.
              </p>
              <p className="text-base leading-relaxed mt-4">
                Cookies are widely used to make websites work more efficiently and provide a better user experience. They can also provide information to the website owners about how visitors use their site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
              <p className="text-base leading-relaxed">
                Fystack uses cookies <strong>solely for analytics purposes</strong> through Google Analytics. We do not use cookies for advertising, tracking across multiple websites, or any other purposes beyond understanding how visitors interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Google Analytics Cookies</h2>
              <p className="text-base leading-relaxed">
                We use Google Analytics, a web analytics service provided by Google LLC (&quot;Google&quot;), to help us understand how visitors use our website and improve our Services.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.1 What Google Analytics Collects</h3>
              <p className="text-base leading-relaxed">
                Google Analytics uses cookies to collect information about your use of our website, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Pages you visit and how long you spend on each page</li>
                <li>How you arrived at our website (e.g., search engine, referring website, direct visit)</li>
                <li>Your browser type and version</li>
                <li>Your device type and operating system</li>
                <li>Your approximate geographic location (country or city level)</li>
                <li>Your IP address (anonymized)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Google Analytics Cookies</h3>
              <p className="text-base leading-relaxed">
                The primary cookies set by Google Analytics include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>_ga:</strong> Used to distinguish unique users. Expires after 2 years.</li>
                <li><strong>_gid:</strong> Used to distinguish unique users. Expires after 24 hours.</li>
                <li><strong>_gat:</strong> Used to throttle request rate. Expires after 1 minute.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.3 How We Use Analytics Data</h3>
              <p className="text-base leading-relaxed">
                The information collected through Google Analytics helps us:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Understand which pages and features are most popular</li>
                <li>Identify technical issues or areas for improvement</li>
                <li>Analyze traffic patterns and user behavior</li>
                <li>Improve the content and structure of our website</li>
                <li>Measure the effectiveness of our marketing efforts</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.4 Google&apos;s Use of Data</h3>
              <p className="text-base leading-relaxed">
                Google Analytics collects data on our behalf. Google may use this data in accordance with its own privacy policy. For more information on how Google uses data when you use our website, please visit:{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Google&apos;s Privacy &amp; Terms
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing and Disabling Cookies</h2>
              <p className="text-base leading-relaxed">
                You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through the following methods:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Browser Settings</h3>
              <p className="text-base leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can set your browser to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Block all cookies</li>
                <li>Block only third-party cookies</li>
                <li>Delete cookies when you close your browser</li>
                <li>Notify you when a website tries to set a cookie</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Instructions for managing cookies in popular browsers:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Google Analytics Opt-Out</h3>
              <p className="text-base leading-relaxed">
                You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Impact of Blocking Cookies</h3>
              <p className="text-base leading-relaxed">
                Please note that blocking or deleting cookies may impact your experience on our website. Some features may not function properly, and we will not be able to gather analytics data to improve our Services. However, blocking Google Analytics cookies will not prevent you from accessing or using our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Essential Website Functionality</h2>
              <p className="text-base leading-relaxed">
                Our website may use essential cookies or similar technologies that are strictly necessary for the operation of our Services. These may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Session management cookies for logged-in users</li>
                <li>Security cookies to authenticate users and prevent fraud</li>
                <li>Load balancing cookies to ensure proper distribution of traffic</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                These essential cookies cannot be disabled as they are necessary for the website to function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Services</h2>
              <p className="text-base leading-relaxed">
                Apart from Google Analytics, we do not use any other third-party cookies or tracking technologies on our website. If we add additional services in the future, we will update this Cookie Policy accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Do Not Track Signals</h2>
              <p className="text-base leading-relaxed">
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how websites should respond to DNT signals. We do not currently respond to DNT signals, but we only use cookies for Google Analytics as described in this Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Cookie Policy</h2>
              <p className="text-base leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices, the cookies we use, or for legal or regulatory reasons. We will notify you of any material changes by posting the updated Policy on our website and updating the &quot;Last updated&quot; date.
              </p>
              <p className="text-base leading-relaxed mt-4">
                We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p className="text-base leading-relaxed">
                If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <p className="text-base leading-relaxed mt-4">
                Email: <a href="mailto:privacy@fystack.io" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">privacy@fystack.io</a>
              </p>
            </section>

            <section className="bg-muted/50 p-6 rounded-lg mt-8">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <p className="text-base leading-relaxed">
                <strong>Fystack uses cookies solely for Google Analytics to understand website usage and improve our Services.</strong> We do not use cookies for advertising, cross-site tracking, or selling your information. You can manage or disable cookies through your browser settings or by using the Google Analytics opt-out tool.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
