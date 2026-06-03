"use client";

import { useState } from "react";

const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
const ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

export type HubSpotFormPayload = {
  firstname: string;
  email: string;
  resourceId: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  howDidYouHear?: string;
};

export function useHubSpotForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(payload: HubSpotFormPayload) {
    setStatus("loading");
    try {
      const fields = [
        { name: "firstname", value: payload.firstname },
        { name: "email", value: payload.email },
        { name: "resource_id", value: payload.resourceId },
        ...(payload.utmSource ? [{ name: "utm_source", value: payload.utmSource }] : []),
        ...(payload.utmMedium ? [{ name: "utm_medium", value: payload.utmMedium }] : []),
        ...(payload.utmCampaign ? [{ name: "utm_campaign", value: payload.utmCampaign }] : []),
        ...(payload.howDidYouHear ? [{ name: "how_did_you_hear", value: payload.howDidYouHear }] : []),
      ];

      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields }),
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
