import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentsClient from "./DocumentsClient";
import { DOCUMENTS } from "./data";

const description =
  "Search and download Fystack documents — guides, specs, and reference material for custody infrastructure and MPC wallets.";
const keywords = Array.from(new Set(DOCUMENTS.flatMap((doc) => doc.keywords)));

export const metadata: Metadata = {
  title: "Documents | Fystack",
  description,
  keywords,
  alternates: {
    canonical: "https://fystack.io/documents",
  },
  openGraph: {
    title: "Documents | Fystack",
    description,
    type: "website",
    url: "https://fystack.io/documents",
    siteName: "Fystack",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documents | Fystack",
    description,
    site: "@fystack",
  },
};

export default function DocumentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <DocumentsClient />
      </main>
      <Footer />
    </div>
  );
}
