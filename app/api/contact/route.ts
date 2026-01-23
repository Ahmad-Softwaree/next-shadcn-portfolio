import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { email, message } = body;

  try {
    const data = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>",
      to: [process.env.EMAIL as string],
      subject: "New Portfolio Contact",
      html: `
        <h3>New message from ${email}</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
