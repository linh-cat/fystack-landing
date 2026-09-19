const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const

type UTMKey = (typeof UTM_KEYS)[number]

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
