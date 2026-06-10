# Lead Magnet Implementation Plan

## Overview

Implement a lead magnet flow for Ghost blog posts similar to Alchemy.

Example:

- Blog Post
- CTA Box
- Landing Page
- Lead Form
- HubSpot Integration
- Thank You Page

---

# Business Goal

Allow Marketing to collect leads before providing access to downloadable resources.

Examples:

- PDF Guide
- Research Report
- Whitepaper
- Ebook
- Checklist

Current process:

```text
User submits form
    ↓
Lead saved to HubSpot
    ↓
Marketing manually sends resource within 24 hours
```

---

# Scope

## In Scope

### Ghost CTA

Marketing team can add CTA using Ghost HTML Card.

CTA contains:

- Title
- Description
- Button Text
- Landing Page URL

Example:

```html
<div class="lead-magnet">
  <h3>Download Stablecoin Guide</h3>
  <p>Learn stablecoin fundamentals and best practices.</p>

  <a href="/resources/stablecoin-guide">
    Download Guide
  </a>
</div>
```

---

### Landing Page

Create reusable landing page.

Route:

```text
/resources/[slug]
```

Examples:

```text
/resources/stablecoin-guide
/resources/defi-report-2026
/resources/crypto-tax-guide
```

Landing page includes:

#### Resource Information

- Title
- Description
- Hero Image (optional)

#### Lead Form

Required Fields:

- Name
- Email

Hidden Fields:

- resource_id
- utm_source
- utm_medium
- utm_campaign

---

### UTM Tracking

Automatically capture UTM parameters from URL.

Example:

```text
/resources/stablecoin-guide
?utm_source=google
&utm_medium=cpc
&utm_campaign=stablecoin-launch
```

Captured Values:

```json
{
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "stablecoin-launch"
}
```

Do not display these fields to users.

---

### HubSpot Integration

Use HubSpot Forms API.

No database required.

No custom CRM required.

HubSpot will store all leads.

---

# Architecture

```text
Ghost Blog
    ↓
CTA Button
    ↓
Landing Page
    ↓
Lead Form
    ↓
Serverless API
    ↓
HubSpot Forms API
    ↓
HubSpot Contact
    ↓
Thank You Page
```

---

# Technical Stack

## Frontend

- Next.js App Router
- React
- React Query
- Tailwind CSS

## Backend

Serverless API Route

```text
/api/leads
```

Hosted on Vercel.

No dedicated server.

---

# Project Structure

```text
src/
├── app/
│   ├── resources/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── thank-you/
│   │   └── page.tsx
│   │
│   └── api/
│       └── leads/
│           └── route.ts
│
├── components/
│   ├── LeadForm.tsx
│   └── ResourceHero.tsx
│
├── hooks/
│   └── useCreateLead.ts
│
├── services/
│   └── lead.service.ts
│
└── constants/
    └── resources.ts
```

---

# Resource Configuration

Create a local resource configuration.

File:

```text
constants/resources.ts
```

Example:

```ts
export const resources = {
  "stablecoin-guide": {
    title: "Stablecoin Guide",
    description: "Learn stablecoin fundamentals.",
  },

  "defi-report": {
    title: "DeFi Report 2026",
    description: "Market insights and trends.",
  },
};
```

This avoids building CMS support during MVP.

---

# Form Submission Flow

## Frontend

User submits:

```json
{
  "name": "John Doe",
  "email": "john@email.com",
  "resourceId": "stablecoin-guide",
  "utmSource": "google",
  "utmMedium": "cpc",
  "utmCampaign": "stablecoin-launch"
}
```

---

## Serverless API

Endpoint:

```http
POST /api/leads
```

Responsibilities:

- Validate request
- Validate email
- Send data to HubSpot
- Return success/failure

---

## HubSpot

Create Contact.

Store:

| Field | Value |
|---------|---------|
| firstname | John Doe |
| email | john@email.com |
| resource_id | stablecoin-guide |
| utm_source | google |
| utm_medium | cpc |
| utm_campaign | stablecoin-launch |

---

# HubSpot Setup

## Create Form

Form Name:

```text
Lead Marketing
```

Required Fields:

- firstname
- email

---

## Create Custom Contact Properties

Navigate:

```text
Settings
→ Properties
→ Contact Properties
```

Create:

```text
resource_id
utm_source
utm_medium
utm_campaign
```

Property Type:

```text
Single-line text
```

---

## Environment Variables

```env
HUBSPOT_PORTAL_ID=xxxxx
HUBSPOT_FORM_ID=xxxxx
```

---

# Success Flow

After successful submission:

Redirect:

```text
/thank-you
```

Message:

```text
Thank you!

Our team will send the requested resource
within 24 hours.
```

---

# Validation

## Name

- Required
- Max 100 characters

## Email

- Required
- Valid email format

---

# Error Handling

Show message:

```text
Something went wrong.

Please try again.
```

when HubSpot submission fails.

---

# Optional Enhancements

Not required for MVP.

## Anti-Spam

- Cloudflare Turnstile
- Google reCAPTCHA

## Duplicate Leads

Prevent duplicate:

```text
email + resource_id
```

if required.

---

# Future Phase 2

Current flow:

```text
User submits form
    ↓
HubSpot
    ↓
Marketing sends PDF manually
```

Future flow:

```text
User submits form
    ↓
HubSpot
    ↓
Workflow Triggered
    ↓
Email Automation Provider
    ↓
Automatic PDF Delivery
```

Possible Providers:

- HubSpot Workflows
- Brevo
- Mailchimp
- Customer.io
- SendGrid

---

# Deliverables

## Pages

- /resources/[slug]
- /thank-you

## Components

- ResourceHero
- LeadForm

## APIs

- POST /api/leads

## Integrations

- HubSpot Forms API

## Tracking

- UTM Capture

## QA Checklist

- Landing page loads correctly
- UTM parameters captured
- Form validation works
- HubSpot contact created
- Custom properties populated
- Thank-you page redirects correctly
- Mobile responsive