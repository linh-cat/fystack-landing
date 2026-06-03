import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";
import { z } from "zod";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const bodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  resourceId: z.string().min(1),
  howDidYouHear: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = bodySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false }, { status: 422 });
    }

    const { name, email, resourceId, howDidYouHear, utmSource, utmMedium, utmCampaign } =
      parsed.data;

    type NotionProperties = NonNullable<Parameters<typeof notion.pages.create>[0]["properties"]>;

    const properties: NotionProperties = {
      Name: {
        title: [{ text: { content: name } }],
      },
      Email: {
        email,
      },
      "Resource ID": {
        rich_text: [{ text: { content: resourceId } }],
      },
      "UTM Source": {
        rich_text: [{ text: { content: utmSource || "" } }],
      },
      "UTM Medium": {
        rich_text: [{ text: { content: utmMedium || "" } }],
      },
      "UTM Campaign": {
        rich_text: [{ text: { content: utmCampaign || "" } }],
      },
    };

    if (howDidYouHear) {
      properties["How Did You Hear"] = {
        rich_text: [{ text: { content: howDidYouHear } }],
      };
    }

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
