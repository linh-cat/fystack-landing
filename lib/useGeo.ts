"use client";

import { useEffect, useState } from "react";

const GEO_ENDPOINT =
  "https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=en";
// sessionStorage is scoped to the tab: the lookup is reused across navigations
// and refreshes, and discarded when the tab closes.
const CACHE_KEY = "fystack:geo:countryCode";

type Geo = {
  /** ISO 3166-1 alpha-2 code, or null while loading / on failure. */
  countryCode: string | null;
  resolved: boolean;
};

/**
 * Client-side IP geolocation. Used to gate content by country (e.g. Vietnam
 * visitors don't see the Cloud/SaaS plans). Fails open: on error the country
 * stays null and callers render the default experience.
 */
export function useGeo(): Geo {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached !== null) {
      setCountryCode(cached || null);
      setResolved(true);
      return;
    }

    let cancelled = false;
    fetch(GEO_ENDPOINT, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const code: string = data?.countryCode ?? "";
        sessionStorage.setItem(CACHE_KEY, code);
        setCountryCode(code || null);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setResolved(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { countryCode, resolved };
}

/** True only once geolocation has confirmed the visitor is in Vietnam. */
export function useIsVietnam(): boolean {
  const { countryCode } = useGeo();
  return countryCode === "VN";
}
