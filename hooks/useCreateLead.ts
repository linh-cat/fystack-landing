"use client";

import { useState } from "react";

export type LeadPayload = {
  firstname: string;
  lastname: string;
  email: string;
  resourceId: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  howDidYouHear?: string;
};

export function useCreateLead() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(payload: LeadPayload) {
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
  }

  return {
    submit,
    reset,
    status,
    isLoading: status === "loading",
    isError: status === "error",
    isSuccess: status === "success",
  };
}
