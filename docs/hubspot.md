# Lead Magnet Flow Implementation Plan

## Overview

Implement a lead magnet flow for Ghost blog posts similar to Alchemy.

Example flow:

Ghost Blog Post
→ CTA Box
→ Landing Page
→ Lead Form
→ HubSpot Form Submission
→ HubSpot Contact Created
→ Thank You Page

## Goal

Allow marketing to collect leads (name + email) before providing access to downloadable resources such as:

* PDF Guides
* Reports
* Whitepapers
* Checklists
* Research Documents

## Phase 1 Scope (Current MVP)

### CTA inside Ghost

Marketing team will use Ghost HTML Card to insert a CTA block.

CTA contains:

* Title
* Short Description
* Button Text
* Landing Page URL

Example:

Download Stablecoin Guide

Learn stablecoin fundamentals and best practices.

[ Download Guide ]

Button redirects to:

/resources/stablecoin-guide

---

## Landing Page

Create reusable dynamic landing page.

Route:

/resources/[slug]

Examples:

/resources/stablecoin-guide
/resources/defi-report-2026
/resources/crypto-tax-guide

Landing page contains:

### Resource Information

* Title
* Description
* Hero Image (optional)

### Lead Form

Required fields:

* Name
* Email

Hidden fields:

* resource_id
* utm_source
* utm_medium
* utm_campaign

---

## UTM Tracking

Automatically capture UTM values from URL.

Example:

/resources/stablecoin-guide?utm_source=google&utm_medium=cpc&utm_campaign=stablecoin-launch

Capture:

utm_source = google
utm_medium = cpc
utm_campaign = stablecoin-launch

Do not display these fields to users.

---

## HubSpot Integration

### Data Storage

Use HubSpot Forms API.

No custom backend required.

No database required.

HubSpot will act as lead storage.

### HubSpot Contact Properties

Create custom properties:

* resource_id
* utm_source
* utm_medium
* utm_campaign

Property type:

Single-line text

### HubSpot Form Fields

Form must contain:

* firstname
* email
* resource_id
* utm_source
* utm_medium
* utm_campaign

---

## Frontend Submission

Submit form directly to:

https://api.hsforms.com/submissions/v3/integration/submit/{PORTAL_ID}/{FORM_ID}

Payload:

{
"fields": [
{
"name": "firstname",
"value": "John Doe"
},
{
"name": "email",
"value": "[john@email.com](mailto:john@email.com)"
},
{
"name": "resource_id",
"value": "stablecoin-guide"
},
{
"name": "utm_source",
"value": "google"
},
{
"name": "utm_medium",
"value": "cpc"
},
{
"name": "utm_campaign",
"value": "stablecoin-launch"
}
]
}

---

## Success Flow

After successful submission:

Redirect to:

/thank-you

Display:

Thank you!

Our team will send the requested resource within 24 hours.

---

## Technical Requirements

### Framework

Next.js App Router

### Form Handling

Use React state or React Hook Form.

### API Layer

No backend required.

Submit directly to HubSpot Forms API.

### Loading State

Disable submit button during request.

### Error Handling

Show error message if submission fails.

---

## Future Phase 2

Not included in current implementation.

Possible enhancements:

* Automated PDF delivery
* Email automation
* HubSpot workflows
* Airtable integration
* Notion integration
* Strapi integration
* Marketing automation

Expected future flow:

User submits form
→ HubSpot Contact Created
→ HubSpot Workflow Triggered
→ Automated Email Sent
→ Correct PDF Delivered

---

## Deliverables

### Pages

* /resources/[slug]
* /thank-you

### Components

* ResourceHero
* LeadForm
* SuccessMessage

### Integrations

* HubSpot Forms API
* UTM Tracking

### Testing

Verify:

* Contact created in HubSpot
* UTM values stored correctly
* resource_id stored correctly
* Redirect works correctly
* Mobile responsive
