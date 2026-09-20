const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const

type UTMKey = (typeof UTM_KEYS)[number]

// Hostname substrings, checked in order, used to classify a referrer when the
// visitor arrives with no utm params at all (mirrors GA-style default channel grouping).
const SEARCH_ENGINES: Record<string, string> = {
  "google.": "google",
  "bing.": "bing",
  "yahoo.": "yahoo",
  "duckduckgo.": "duckduckgo",
  "baidu.": "baidu",
  "yandex.": "yandex",
}

const SOCIAL_NETWORKS: Record<string, string> = {
  "facebook.": "facebook",
  "instagram.": "instagram",
  "linkedin.": "linkedin",
  "twitter.": "twitter",
  "x.com": "x",
  "t.co": "x",
  "reddit.": "reddit",
  "t.me": "telegram",
  "telegram.": "telegram",
  "youtube.": "youtube",
}

/**
 * Best-effort utm_source/utm_medium derived from document.referrer, for visitors
 * who show up with no utm params and no attribution stored yet (organic search,
 * social links, other referring sites, or a typed/bookmarked direct visit).
 */
function deriveUtmFromReferrer(): Partial<Record<UTMKey, string>> {
  const referrer = document.referrer

  if (!referrer) {
    return { utm_source: "direct", utm_medium: "none" }
  }

  let referrerHost: string
  try {
    referrerHost = new URL(referrer).hostname
  } catch {
    return { utm_source: "direct", utm_medium: "none" }
  }

  if (referrerHost === window.location.hostname) {
    return {}
  }

  for (const [needle, source] of Object.entries(SEARCH_ENGINES)) {
    if (referrerHost.includes(needle)) return { utm_source: source, utm_medium: "organic" }
  }

  for (const [needle, source] of Object.entries(SOCIAL_NETWORKS)) {
    if (referrerHost.includes(needle)) return { utm_source: source, utm_medium: "social" }
  }

  return { utm_source: referrerHost, utm_medium: "referral" }
}

export function captureUTM(): Partial<Record<UTMKey, string>> {
  const params = new URLSearchParams(window.location.search)

  const utm: Partial<Record<UTMKey, string>> = {}

  UTM_KEYS.forEach((key) => {
    const value = params.get(key)

    if (value) {
      utm[key] = value
      localStorage.setItem(key, value)
    }
  })

  // No utm params on this URL, and nothing captured on an earlier visit either:
  // fall back to a referrer-derived (or "direct") source so register/login links
  // still carry attribution instead of going out with no utm_source at all.
  if (!utm.utm_source && !localStorage.getItem("utm_source")) {
    const derived = deriveUtmFromReferrer()

    Object.entries(derived).forEach(([key, value]) => {
      const utmKey = key as UTMKey
      // Don't clobber a value this same URL already provided explicitly (e.g. a
      // link with utm_medium/utm_campaign but no utm_source).
      if (value && !utm[utmKey]) {
        utm[utmKey] = value
        localStorage.setItem(utmKey, value)
      }
    })
  }

  return utm
}

export function getStoredUTM(): Partial<Record<UTMKey, string>> {
  const utm: Partial<Record<UTMKey, string>> = {}

  UTM_KEYS.forEach((key) => {
    const value = localStorage.getItem(key)
    if (value) utm[key] = value
  })

  return utm
}

/**
 * Appends the visitor's UTM params onto an outbound URL (e.g. a link to app.fystack.io),
 * so they survive the hop into the app. Syncs the current page's URL into localStorage
 * first (a fresh landing always wins), then falls back to whatever was already stored from
 * an earlier page on this site.
 */
export function appendUtmToUrl(url: string): string {
  captureUTM()
  const utm = getStoredUTM()

  const query = new URLSearchParams(utm as Record<string, string>).toString()
  if (!query) return url

  const separator = url.includes("?") ? "&" : "?"
  return `${url}${separator}${query}`
}
