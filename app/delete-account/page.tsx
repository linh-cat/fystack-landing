import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delete Your Account | Fystack",
  description:
    "How to request deletion of your Fystack Cosigner account and associated data.",
  alternates: {
    canonical: "https://fystack.io/delete-account",
  },
  openGraph: {
    title: "Delete Your Account | Fystack",
    description:
      "How to request deletion of your Fystack Cosigner account and associated data.",
    url: "https://fystack.io/delete-account",
    siteName: "Fystack",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Delete Your Account | Fystack",
    description:
      "How to request deletion of your Fystack Cosigner account and associated data.",
  },
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 max-w-4xl py-16 md:py-24">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Deleting your Fystack Cosigner account
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: 27 July 2026
          </p>

          <div className="space-y-8">
            <section>
              <p className="text-base leading-relaxed">
                To request deletion of your account and associated data, email{" "}
                <a
                  href="mailto:contact@fystack.io?subject=Delete%20account"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  contact@fystack.io
                </a>{" "}
                from your registered address with the subject{" "}
                <strong>&quot;Delete account&quot;</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                What we delete
              </h2>
              <p className="text-base leading-relaxed">
                We remove the following within 30 days of receiving your
                request:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Your account</li>
                <li>Your cosigner device registration</li>
                <li>Your email address</li>
                <li>Your push notification token</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                What we retain
              </h2>
              <p className="text-base leading-relaxed">
                Audit logs required by law may be retained for up to 12 months
                after deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
              <p className="text-base leading-relaxed">
                Questions about deletion or your data:{" "}
                <a
                  href="mailto:contact@fystack.io"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  contact@fystack.io
                </a>
              </p>
              <p className="text-base leading-relaxed mt-4">
                See also our{" "}
                <a
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
