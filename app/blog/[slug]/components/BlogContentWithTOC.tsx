"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Script from "next/script";
import clsx from "clsx";
let prismCache: any = null;
async function loadPrism() {
  if (prismCache) return prismCache;
  const Prism = (await import("prismjs")).default;
  await Promise.all([
    import("prismjs/components/prism-javascript"),
    import("prismjs/components/prism-typescript"),
    import("prismjs/components/prism-jsx"),
    import("prismjs/components/prism-tsx"),
    import("prismjs/components/prism-css"),
    import("prismjs/components/prism-python"),
    import("prismjs/components/prism-bash"),
    import("prismjs/components/prism-json"),
    import("prismjs/components/prism-markdown"),
    import("prismjs/components/prism-sql"),
    import("prismjs/components/prism-yaml"),
    import("prismjs/components/prism-docker"),
    import("prismjs/components/prism-go"),
    import("prismjs/components/prism-rust"),
    import("prismjs/components/prism-solidity"),
    import("prismjs/components/prism-markup"),
  ]);
  prismCache = Prism;
  return Prism;
}

// Declare window.twttr type
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
      events?: {
        bind: (event: string, callback: (...args: any[]) => void) => void;
      };
    };
  }
}

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

const LANGUAGE_DISPLAY_NAMES: Record<string, string> = {
  javascript: "JavaScript",
  js: "JavaScript",
  typescript: "TypeScript",
  ts: "TypeScript",
  jsx: "JSX",
  tsx: "TSX",
  css: "CSS",
  html: "HTML",
  python: "Python",
  py: "Python",
  bash: "Bash",
  shell: "Shell",
  sh: "Shell",
  json: "JSON",
  markdown: "Markdown",
  md: "Markdown",
  sql: "SQL",
  yaml: "YAML",
  yml: "YAML",
  dockerfile: "Dockerfile",
  docker: "Docker",
  go: "Go",
  rust: "Rust",
  solidity: "Solidity",
  sol: "Solidity",
  markup: "HTML",
  xml: "XML",
  plaintext: "Plain Text",
  text: "Plain Text",
};

function enhanceCodeBlocks(container: HTMLElement, Prism: any) {
  const preElements = container.querySelectorAll<HTMLPreElement>("pre");

  preElements.forEach((pre) => {
    // Skip if already enhanced
    if (pre.parentElement?.classList.contains("code-block-wrapper")) return;

    const code = pre.querySelector("code");
    if (!code) return;

    // Extract language from class (e.g., "language-javascript")
    const langClass = Array.from(code.classList).find((cls) =>
      cls.startsWith("language-")
    );
    const langKey = langClass?.replace("language-", "") || "";
    const displayName =
      LANGUAGE_DISPLAY_NAMES[langKey] || langKey.toUpperCase() || "Code";

    // Apply Prism highlighting
    if (langKey && Prism.languages[langKey]) {
      Prism.highlightElement(code);
    }

    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrapper";

    // Create header bar
    const header = document.createElement("div");
    header.className = "code-block-header";

    // Language label
    const langLabel = document.createElement("span");
    langLabel.className = "code-block-lang";
    langLabel.textContent = displayName;

    // Copy button
    const copyBtn = document.createElement("button");
    copyBtn.className = "code-block-copy";
    copyBtn.textContent = "Copy";
    copyBtn.addEventListener("click", () => {
      const text = code.textContent || "";
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = "Copied!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copy";
          copyBtn.classList.remove("copied");
        }, 2000);
      });
    });

    header.appendChild(langLabel);
    header.appendChild(copyBtn);

    // Wrap the pre element
    pre.parentNode?.insertBefore(wrapper, pre);
    wrapper.appendChild(header);
    wrapper.appendChild(pre);
  });
}

interface BlogContentWithTOCProps {
  html: string;
}

export default function BlogContentWithTOC({ html }: BlogContentWithTOCProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [twitterScriptLoaded, setTwitterScriptLoaded] = useState(false);
  
  // Load script unconditionally
  useLayoutEffect(() => {
    setTwitterScriptLoaded(!!window.twttr);
  }, []);

  const loadTwitterWidgets = useCallback(() => {
    const container = contentRef.current;
    if (!container) return;

    const embeds = container.querySelectorAll('.twitter-tweet');
    if (embeds.length === 0) return;

    let retryInterval: NodeJS.Timeout | null = null;

    const attemptLoad = () => {
      if (window.twttr?.widgets) {
        try {
          window.twttr.widgets.load(container);
          console.info('[Twitter] Widgets loaded');
          return true;
        } catch (error) {
          console.error('[Twitter] Load error:', error);
          return false;
        }
      }
      return false;
    };

    // Immediate attempt
    if (attemptLoad()) return;

    // Fast retry with shorter timeout
    let retries = 0;
    retryInterval = setInterval(() => {
      if (attemptLoad() || ++retries >= 10) {
        if (retryInterval) clearInterval(retryInterval);
      }
    }, 100);

    return () => {
      if (retryInterval) clearInterval(retryInterval);
    };
  }, []);

  useEffect(() => {
    if (twitterScriptLoaded) {
      loadTwitterWidgets();
    }
  }, [twitterScriptLoaded, loadTwitterWidgets]);
   
  useEffect(() => {
    const container = contentRef.current;
    if (!container || !twitterScriptLoaded) return;

    const observer = new MutationObserver(() => {
      const newEmbeds = container.querySelectorAll('.twitter-tweet');
      if (newEmbeds.length > 0) {
        console.info('[Twitter] New embeds detected, reloading...');
        loadTwitterWidgets();
      }
    });

    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [twitterScriptLoaded, loadTwitterWidgets]);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const headingElements = Array.from(
      container.querySelectorAll<HTMLHeadingElement>("h2, h3, h4")
    );

    const usedIds = new Set<string>();
    const generatedHeadings: Heading[] = [];

    headingElements.forEach((heading, index) => {
      // Skip headings that are inside FAQ toggle cards
      if (heading.closest('.kg-toggle-card')) {
        return;
      }

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

    // Initialize Ghost toggle cards (FAQ collapsibles) - set initial state
    const toggleCards = container.querySelectorAll<HTMLElement>('.kg-toggle-card');

    toggleCards.forEach((card) => {
      const button = card.querySelector<HTMLButtonElement>('.kg-toggle-card-icon');
      const content = card.querySelector<HTMLElement>('.kg-toggle-content');
      const heading = card.querySelector<HTMLElement>('.kg-toggle-heading');

      if (button && content && heading) {
        // Always start collapsed
        card.setAttribute('data-kg-toggle-state', 'close');
        content.style.maxHeight = '0';
        content.style.opacity = '0';
        content.style.paddingTop = '0';
        content.style.paddingBottom = '0';
        button.style.transform = 'rotate(0deg)';
        button.style.transition = 'transform 0.3s ease';

        // Style the heading to be clickable
        heading.style.cursor = 'pointer';
        heading.style.userSelect = 'none';
      }
    });

    // Use event delegation on the container
    const handleContainerClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Find if we clicked inside a toggle heading
      const toggleHeading = target.closest('.kg-toggle-heading');
      if (!toggleHeading) return;

      // Find the parent card
      const card = toggleHeading.closest('.kg-toggle-card') as HTMLElement;
      if (!card) return;

      const button = card.querySelector<HTMLButtonElement>('.kg-toggle-card-icon');
      const content = card.querySelector<HTMLElement>('.kg-toggle-content');

      if (!button || !content) return;

      const currentState = card.getAttribute('data-kg-toggle-state');
      const isOpen = currentState === 'open';

      // Toggle state
      card.setAttribute('data-kg-toggle-state', isOpen ? 'close' : 'open');

      if (isOpen) {
        // Closing
        content.style.maxHeight = '0';
        content.style.opacity = '0';
        content.style.paddingTop = '0';
        content.style.paddingBottom = '0';
        button.style.transform = 'rotate(0deg)';
      } else {
        // Opening - use a large value to ensure full content is shown
        content.style.maxHeight = '2000px';
        content.style.opacity = '1';
        content.style.paddingTop = '1rem';
        content.style.paddingBottom = '1rem';
        button.style.transform = 'rotate(180deg)';
      }
    };

    container.addEventListener('click', handleContainerClick);

    // Cleanup
    return () => {
      container.removeEventListener('click', handleContainerClick);
    };
  }, [html]);

  // Enhance code blocks with syntax highlighting, language label, and copy button.
  // Runs on every render because re-renders (e.g. Twitter script load) can re-apply
  // dangerouslySetInnerHTML and wipe Prism-enhanced DOM. The module-level prismCache
  // makes subsequent calls instant, and enhanceCodeBlocks skips already-wrapped blocks.
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    loadPrism().then((Prism) => {
      if (contentRef.current) {
        enhanceCodeBlocks(contentRef.current, Prism);
      }
    });
  });

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
    <>
      {/* Load Twitter script unconditionally */}
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.info('[Twitter Script] Loaded');
          setTwitterScriptLoaded(true);
        }}
        onError={(e) => console.error('[Twitter Script] Error:', e)}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
        <div
          ref={contentRef}
          className="prose prose-lg font-sans prose-headings:font-sans max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-code:before:content-none prose-code:after:content-none [&_:not(pre)>code]:bg-blue-50 [&_:not(pre)>code]:text-blue-700 [&_:not(pre)>code]:px-2.5 [&_:not(pre)>code]:py-1 [&_:not(pre)>code]:rounded-md [&_:not(pre)>code]:text-[0.95em] [&_:not(pre)>code]:font-medium [&_:not(pre)>code]:ring-1 [&_:not(pre)>code]:ring-blue-300 dark:[&_:not(pre)>code]:bg-blue-950 dark:[&_:not(pre)>code]:text-blue-300 dark:[&_:not(pre)>code]:ring-blue-700 prose-pre:bg-gray-900 prose-pre:text-white prose-pre:border prose-pre:border-gray-700 prose-pre:overflow-auto prose-pre:p-4 prose-img:rounded-lg prose-img:shadow-sm prose-img:w-full prose-img:max-h-[600px] prose-img:object-contain prose-iframe:rounded-lg prose-iframe:shadow-sm [&_.kg-embed-card]:relative [&_.kg-embed-card]:w-full [&_.kg-embed-card]:pb-[56.25%] [&_.kg-embed-card]:h-0 [&_.kg-embed-card]:overflow-hidden [&_.kg-embed-card_iframe]:absolute [&_.kg-embed-card_iframe]:top-0 [&_.kg-embed-card_iframe]:left-0 [&_.kg-embed-card_iframe]:w-full [&_.kg-embed-card_iframe]:h-full [&_.kg-embed-card_iframe]:border-0 [&_figure.kg-card]:my-8"
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
    </>
  );
}