"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Download, FileText, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DOCUMENTS, isExternalFileUrl } from "./data";

function matches(query: string, haystack: string[]) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return haystack.some((field) => field.toLowerCase().includes(q));
}

export default function DocumentsClient() {
  const [query, setQuery] = useState("");

  const results = useMemo(
    () =>
      DOCUMENTS.filter((doc) =>
        matches(query, [doc.title, doc.description, ...doc.keywords])
      ),
    [query]
  );

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-3">
          Documents
        </h1>
        <p className="text-slate-500 mb-8">
          Search by keyword to find and download a document.
        </p>

        <div className="relative mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documents..."
            className="pl-10 h-12"
          />
        </div>

        <ul className="space-y-3">
          {results.map((doc) => (
            <li
              key={doc.slug}
              className="flex items-center justify-between gap-4 border border-slate-200 rounded-lg p-4 hover:border-[#3b82f6] transition-colors"
            >
              <Link
                href={`/documents/${doc.slug}`}
                className="flex items-start gap-3 min-w-0"
              >
                <FileText className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="font-semibold text-slate-800 truncate">
                    {doc.title}
                  </p>
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {doc.description}
                  </p>
                </div>
              </Link>
              <a
                href={doc.fileUrl}
                {...(isExternalFileUrl(doc.fileUrl)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : { download: true })}
                className="flex items-center gap-1.5 text-sm font-medium text-[#3b82f6] flex-shrink-0 hover:underline"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </li>
          ))}

          {results.length === 0 && (
            <li className="text-center text-slate-400 py-12">
              No documents match &ldquo;{query}&rdquo;.
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
