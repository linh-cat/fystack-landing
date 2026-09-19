import posthog from "posthog-js"
import { captureUTM } from "@/lib/utm"

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com"

if (POSTHOG_KEY) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: "2026-05-30",
    capture_pageview: false,
    capture_pageleave: true,
  })

  posthog.capture("$pageview")

  captureUTM()

  document.addEventListener("click", (e) => {
    const link = (e.target as HTMLElement)?.closest("a")
    if (!link) return

    try {
      const url = new URL(link.href, window.location.href)
      if (url.hostname === "docs.fystack.io") {
        posthog.capture("docs_clicked", { href: link.href })
      }
    } catch {
      // ignore unparsable hrefs
    }
  })
}

export function onRouterTransitionStart(url: string) {
  if (!POSTHOG_KEY) return

  posthog.capture("$pageview", {
    $current_url: window.location.origin + url,
  })
}
