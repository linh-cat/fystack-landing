import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// A file hosted under /public (e.g. "/documents/foo.pdf") is same-origin and
// can use the `download` attribute; an absolute URL (Drive, etc.) can't and
// should open in a new tab instead.
export function isExternalFileUrl(url: string): boolean {
  return /^https?:\/\//.test(url);
}

// Common free / personal email providers. A signup from one of these isn't a
// business email, so we ask for a company website instead.
const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "ymail.com",
  "hotmail.com",
  "hotmail.co.uk",
  "outlook.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "pm.me",
  "gmx.com",
  "gmx.net",
  "mail.com",
  "zoho.com",
  "yandex.com",
  "yandex.ru",
  "qq.com",
  "163.com",
  "126.com",
]);

export function isBusinessEmail(email: string): boolean {
  const domain = email.trim().toLowerCase().split("@")[1];
  if (!domain) return false;
  return !FREE_EMAIL_DOMAINS.has(domain);
}

// Validates a company website. Accepts URLs with or without a protocol
// (e.g. "company.com" or "https://company.com") and requires a real host
// with a dot-separated TLD.
export function isValidWebsite(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  try {
    const url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
    if (url.protocol !== "http:" && url.protocol !== "https:") return false;
    return /^[^\s.]+(\.[^\s.]+)+$/.test(url.hostname);
  } catch {
    return false;
  }
}
