import { NextResponse } from "next/server";
import { z } from "zod";

const GUIDE_FIELDS: Record<string, string> = {
  sea: "interested_sea",
  apac: "interested_apac",
  middle_east: "interested_middle_east",
  latam: "interested_latam",
  central_asia: "interested_central_asia",
};

const schema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  resourceId: z.string().min(1),
  guides: z.array(z.string()).min(1),
  role: z.string().min(1),
  newsletterOptIn: z.boolean(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 422 });
  }

  const { firstname, lastname, email, resourceId, guides, role, newsletterOptIn, utmSource, utmMedium, utmCampaign } =
    parsed.data;

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;

  const fields = [
    { name: "firstname", value: firstname },
    { name: "lastname", value: lastname },
    { name: "email", value: email },
    { name: "resource_id", value: resourceId },
    { name: "lead_role", value: role },
    { name: "newsletter_opt_in", value: String(newsletterOptIn) },
    ...guides.map((g) => ({ name: GUIDE_FIELDS[g] ?? g, value: "true" })),
    ...(utmSource ? [{ name: "utm_source", value: utmSource }] : []),
    ...(utmMedium ? [{ name: "utm_medium", value: utmMedium }] : []),
    ...(utmCampaign ? [{ name: "utm_campaign", value: utmCampaign }] : []),
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
