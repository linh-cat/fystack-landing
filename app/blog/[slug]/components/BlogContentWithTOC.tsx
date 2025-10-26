"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

type Heading = {
  id: string;
  text: string;
  level: number;
};

type HeadingWithNumber = Heading & {
  number: string;
};

const INDENT_BY_LEVEL: Record<number, string> = {
  2: "",
  3: "pl-4",
  4: "pl-6",
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

interface BlogContentWithTOCProps {
  html: string;
}

export default function BlogContentWithTOC({ html }: BlogContentWithTOCProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const headingElements = Array.from(
      container.querySelectorAll<HTMLHeadingElement>("h2, h3, h4")
    );

    const usedIds = new Set<string>();
    const generatedHeadings: Heading[] = [];

    headingElements.forEach((heading, index) => {
      const text = heading.textContent?.trim() ?? "";
      if (!text) return;

      const baseSlug = slugify(text) || `section-${index + 1}`;
      let uniqueSlug = baseSlug;
      let suffix = 1;

      while (usedIds.has(uniqueSlug)) {
        uniqueSlug = `${baseSlug}-${suffix++}`;
      }

      usedIds.add(uniqueSlug);
      heading.id = uniqueSlug;
      heading.style.scrollMarginTop = "6rem";

      generatedHeadings.push({
        id: uniqueSlug,
        text,
        level: Number(heading.tagName.replace("H", "")),
      });
    });

    setHeadings(generatedHeadings);
    if (generatedHeadings.length > 0) {
      setActiveId(generatedHeadings[0].id);
    }
  }, [html]);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      const viewportOffset = 160;

      const currentHeading = headings
        .map((heading) => document.getElementById(heading.id))
        .filter((element): element is HTMLElement => element !== null)
        .reduce<HTMLElement | null>((closest, element) => {
          const elementOffset = element.offsetTop;
          if (elementOffset <= scrollOffset + viewportOffset) {
            if (!closest) return element;
            return elementOffset > closest.offsetTop ? element : closest;
          }
          return closest;
        }, null);

      const nextHeadingId = currentHeading?.id ?? headings[0]?.id ?? null;

      if (nextHeadingId) {
        setActiveId((currentId) =>
          currentId === nextHeadingId ? currentId : nextHeadingId
        );
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [headings]);

  const numberedHeadings = useMemo<HeadingWithNumber[]>(() => {
    if (headings.length === 0) return [];

    const counters: Record<number, number> = { 2: 0, 3: 0, 4: 0 };

    return headings.map((heading) => {
      const level = heading.level;
      if (level === 2) {
        counters[2] += 1;
        counters[3] = 0;
        counters[4] = 0;
      } else if (level === 3) {
        if (counters[2] === 0) counters[2] = 1;
        counters[3] += 1;
        counters[4] = 0;
      } else if (level === 4) {
        if (counters[2] === 0) counters[2] = 1;
        if (counters[3] === 0) counters[3] = 1;
        counters[4] += 1;
      }

      const numberSegments = [
        counters[2],
        level >= 3 ? counters[3] : undefined,
        level >= 4 ? counters[4] : undefined,
      ].filter((segment) => segment !== undefined);

      return {
        ...heading,
        number: numberSegments.join("."),
      };
    });
  }, [headings]);

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
      <div
        ref={contentRef}
        className="prose prose-lg font-sans prose-headings:font-sans max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-code:bg-gray-900 prose-code:text-white prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white prose-pre:border prose-pre:border-gray-700 prose-pre:overflow-auto prose-pre:p-4 prose-img:rounded-lg prose-img:shadow-sm prose-img:w-full prose-img:max-h-[600px] prose-img:object-contain prose-iframe:w-full prose-iframe:aspect-video prose-iframe:rounded-lg prose-iframe:shadow-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {numberedHeadings.length > 0 && (
        <nav
          aria-label="Table of contents"
          className="hidden lg:block self-start sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto text-sm text-muted-foreground border-l border-border/40 pl-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/80 mb-3">
            On this page
          </p>
          <ul className="space-y-2">
            {numberedHeadings.map((heading) => (
              <li
                key={heading.id}
                className={INDENT_BY_LEVEL[heading.level] ?? "pl-6"}
              >
                <a
                  href={`#${heading.id}`}
                  className={clsx(
                    "flex gap-2 items-start rounded-md px-2 py-1 transition-colors leading-snug",
                    activeId === heading.id
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={activeId === heading.id ? "true" : undefined}
                  onClick={() => setActiveId(heading.id)}
                >
                  <span
                    className={clsx(
                      "min-w-[2.25rem] text-right tabular-nums",
                      activeId === heading.id
                        ? "text-primary font-semibold"
                        : "text-muted-foreground/80"
                    )}
                  >
                    {heading.number}
                  </span>
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
