import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  firstname: z.string().min(1),
  email: z.string().email(),
  resourceId: z.string().min(1),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  howDidYouHear: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 422 });
  }

  const { firstname, email, resourceId, utmSource, utmMedium, utmCampaign, howDidYouHear } =
    parsed.data;

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;

  const fields = [
    { name: "firstname", value: firstname },
    { name: "email", value: email },
    { name: "resource_id", value: resourceId },
    ...(utmSource ? [{ name: "utm_source", value: utmSource }] : []),
    ...(utmMedium ? [{ name: "utm_medium", value: utmMedium }] : []),
    ...(utmCampaign ? [{ name: "utm_campaign", value: utmCampaign }] : []),
    ...(howDidYouHear ? [{ name: "how_did_you_hear", value: howDidYouHear }] : []),
  ];

  const hsRes = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    }
  );

  if (!hsRes.ok) {
    return NextResponse.json({ success: false, error: "HubSpot submission failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
