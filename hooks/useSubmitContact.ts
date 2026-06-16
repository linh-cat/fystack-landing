"use client";

import { useState } from "react";

export type ContactPayload = {
  email: string;
  role: string;
  solutionsInterest: string;
  expectedVolume?: string;
  message?: string;
};

export function useSubmitContact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(payload: ContactPayload) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
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
