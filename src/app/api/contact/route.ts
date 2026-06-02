import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // In production, integrate with your CRM or email service here.
    // Examples: HubSpot, Salesforce, SendGrid, Mailchimp, GoHighLevel
    console.log("[Contact Form Submission]", {
      formType: body.formType,
      name: body.name,
      email: body.email,
      timestamp: new Date().toISOString(),
    });

    // If FORM_ENDPOINT is configured, forward to external service
    const formEndpoint = process.env.FORM_ENDPOINT;
    if (formEndpoint) {
      await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch {
    return NextResponse.json(
      { success: false, message: "Submission failed" },
      { status: 500 }
    );
  }
}
