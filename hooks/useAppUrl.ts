"use client";

import { useEffect, useState } from "react";
import { appendUtmToUrl } from "@/lib/utm";

const DEFAULT_APP_URL = "https://app.fystack.io/auth";

/**
 * Returns a link to the app, with the visitor's UTM params appended once available.
 * Starts as the plain baseUrl (SSR-safe, no hydration mismatch) and upgrades after mount.
 */
export function useAppUrl(baseUrl: string = DEFAULT_APP_URL) {
  const [url, setUrl] = useState(baseUrl);

  useEffect(() => {
    setUrl(appendUtmToUrl(baseUrl));
  }, [baseUrl]);

  return url;
}
