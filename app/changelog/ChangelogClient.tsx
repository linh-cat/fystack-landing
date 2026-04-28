"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Rss, Sparkles } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.17 1.18a10.98 10.98 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.6.23 2.78.11 3.07.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.77 1.06.77 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import {
  allCategories,
  changelog,
  type ChangelogCategory,
  type ChangelogEntry,
} from "./data";

const categoryStyles: Record<ChangelogCategory, string> = {
  Platform: "bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/20",
  Security: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  Networks: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  Infrastructure: "bg-violet-500/10 text-violet-600 border-violet-500/20",
  Developer: "bg-sky-500/10 text-sky-600 border-sky-500/20",
  Compliance: "bg-rose-500/10 text-rose-600 border-rose-500/20",
};

export default function ChangelogClient() {
  const [selected, setSelected] = useState<ChangelogCategory | "All">("All");

  const filtered = useMemo<ChangelogEntry[]>(() => {
    if (selected === "All") return changelog;
    return changelog.filter((entry) => entry.categories.includes(selected));
  }, [selected]);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-br from-[#3b82f6]/20 via-[#8b5cf6]/10 to-transparent blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #eff5fa 1px, transparent 1px),
                linear-gradient(to bottom, #eff5fa 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse at center top, black 40%, transparent 75%)",
            }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/20 bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 px-3 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#3b82f6]" />
            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
              Product updates
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Changelog
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            New features, improvements, and fixes shipped to the Fystack
            platform. Follow along as we build the best self-hosted stablecoin
            and digital asset wallet infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="https://docs.fystack.io/changelog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#3b82f6]/40 hover:text-[#3b82f6] transition-all shadow-sm"
            >
              <Rss className="h-3.5 w-3.5" />
              Full release notes
            </Link>
            <Link
              href="https://x.com/fystack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#3b82f6]/40 hover:text-[#3b82f6] transition-all shadow-sm"
            >
              <XIcon className="h-3.5 w-3.5" />
              Follow on X
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/fystack/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#3b82f6]/40 hover:text-[#3b82f6] transition-all shadow-sm"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              Follow on LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="https://github.com/fystack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#3b82f6]/40 hover:text-[#3b82f6] transition-all shadow-sm"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Follow on GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-16 z-30 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <FilterPill
              label="All updates"
              active={selected === "All"}
              onClick={() => setSelected("All")}
            />
            {allCategories.map((cat) => (
              <FilterPill
                key={cat}
                label={cat}
                active={selected === cat}
                onClick={() => setSelected(cat)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
        <div className="relative">
          {/* vertical line */}
          <div className="hidden lg:block absolute left-[204px] top-2 bottom-2 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {filtered.map((entry, idx) => (
              <EntryRow key={entry.version} entry={entry} isFirst={idx === 0} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No updates in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium border transition-all ${
        active
          ? "bg-slate-900 text-white border-slate-900 shadow-sm"
          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
      }`}
    >
      {label}
    </button>
  );
}

function EntryRow({
  entry,
  isFirst,
}: {
  entry: ChangelogEntry;
  isFirst: boolean;
}) {
  return (
    <article className="relative grid lg:grid-cols-[180px_1fr] gap-4 lg:gap-12">
      {/* Sticky date column */}
      <div className="lg:sticky lg:top-36 lg:self-start">
        <div className="flex items-center gap-3 lg:block">
          <time
            dateTime={entry.isoDate}
            className="text-sm font-mono text-slate-500"
          >
            {entry.date}
          </time>
          <div className="lg:mt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 border border-[#3b82f6]/20 px-2.5 py-1 text-xs font-semibold font-mono text-[#3b82f6]">
              {isFirst && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#3b82f6] animate-ping" />
                  <span className="relative rounded-full h-1.5 w-1.5 bg-[#3b82f6]" />
                </span>
              )}
              {entry.version}
            </span>
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="hidden lg:block absolute left-[200px] top-2 w-2 h-2 rounded-full bg-white border-2 border-[#3b82f6] ring-4 ring-white" />

      {/* Content card */}
      <div className="relative">
        <div className="group relative rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all hover:border-[#3b82f6]/30 hover:shadow-xl hover:shadow-[#3b82f6]/5">
          {/* Decorative header */}
          <div className="relative h-40 sm:h-48 bg-gradient-to-br from-[#3b82f6]/10 via-[#8b5cf6]/5 to-white overflow-hidden border-b border-slate-100">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #eff5fa 1px, transparent 1px),
                  linear-gradient(to bottom, #eff5fa 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-[#3b82f6]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {entry.categories.map((cat) => (
                  <span
                    key={cat}
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${categoryStyles[cat]}`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-tight tracking-tight">
                {entry.title}
              </h2>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {entry.summary}
            </p>

            <ul className="space-y-4">
              {entry.highlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]/10">
                    <Check className="h-3 w-3 text-[#3b82f6]" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {h.title}
                    </div>
                    <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {entry.components && entry.components.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                <span className="text-xs text-slate-500 mr-1 pt-1">
                  Includes:
                </span>
                {entry.components.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-mono text-slate-700"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}

            <div className="pt-2">
              <Link
                href={entry.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b82f6] hover:text-[#8b5cf6] transition-colors"
              >
                Read full release notes
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
