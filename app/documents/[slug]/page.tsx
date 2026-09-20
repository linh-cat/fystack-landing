import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DOCUMENTS, isExternalFileUrl } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return DOCUMENTS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = DOCUMENTS.find((d) => d.slug === slug);
  if (!doc) return {};

  const title = `${doc.title} | Fystack Documents`;
  const url = `https://fystack.io/documents/${slug}`;

  return {
    title,
    description: doc.description,
    keywords: doc.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: doc.description,
      type: "article",
      url,
      siteName: "Fystack",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: doc.description,
      site: "@fystack",
    },
  };
}

export default async function DocumentPage({ params }: Props) {
  const { slug } = await params;
  const doc = DOCUMENTS.find((d) => d.slug === slug);
  if (!doc) notFound();

  const isExternal = isExternalFileUrl(doc.fileUrl);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: doc.title,
    description: doc.description,
    url: `https://fystack.io/documents/${slug}`,
    keywords: doc.keywords.join(", "),
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/documents" className="hover:text-[#3b82f6]">
                Documents
              </Link>
              <span className="mx-1.5">/</span>
              {doc.title}
            </nav>

            <div className="flex items-start gap-3 mb-4">
              <FileText className="w-8 h-8 text-[#3b82f6] flex-shrink-0 mt-1" />
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-800">
                {doc.title}
              </h1>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {doc.description}
            </p>

            {doc.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {doc.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}

            <a
              href={doc.fileUrl}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { download: true })}
              className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              <Download className="w-4 h-4" />
              Download {doc.title}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
