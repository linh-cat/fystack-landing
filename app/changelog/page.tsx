import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChangelogClient from "./ChangelogClient";

export const metadata: Metadata = {
  title: "Changelog | Fystack",
  description:
    "New features, improvements, and fixes shipped to the Fystack self-hosted stablecoin and digital asset wallet infrastructure.",
  alternates: {
    canonical: "https://fystack.io/changelog",
  },
  openGraph: {
    title: "Changelog | Fystack",
    description:
      "New features, improvements, and fixes shipped to the Fystack self-hosted stablecoin and digital asset wallet infrastructure.",
    type: "website",
    url: "https://fystack.io/changelog",
    siteName: "Fystack",
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog | Fystack",
    description:
      "New features, improvements, and fixes shipped to the Fystack platform.",
    site: "@fystack",
  },
};

export default function ChangelogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <ChangelogClient />
      </main>
      <Footer />
    </div>
  );
}
