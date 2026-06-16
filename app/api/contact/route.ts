import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  role: z.string().min(1),
  solutionsInterest: z.string().min(1),
  expectedVolume: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 422 });
  }

  const { email, role, solutionsInterest, expectedVolume, message } = parsed.data;

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_CONTACT_FORM_ID;

  const fields = [
    { name: "email", value: email },
    { name: "lead_role", value: role },
    { name: "solutions_interest", value: solutionsInterest },
    ...(expectedVolume ? [{ name: "expected_volume", value: expectedVolume }] : []),
    ...(message ? [{ name: "message", value: message }] : []),
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
