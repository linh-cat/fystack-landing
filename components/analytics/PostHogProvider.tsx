"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "@posthog/react"

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode
}) {
  if (!POSTHOG_KEY) {
    return children
  }

  return <PHProvider client={posthog}>{children}</PHProvider>
}
