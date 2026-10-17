import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  // TODO: Wire to Resend, Formspree, or CRM
  console.log("[Contact Form Submission]", {
    name: body.name,
    email: body.email,
    business: body.business,
    message: body.message?.slice(0, 100),
  });
  return NextResponse.json({ success: true });
}
