import { NextResponse } from "next/server";

/**
 * Safe /api/send route for Next.js App Router.
 * - Will NOT throw during build if RESEND_API_KEY is missing.
 * - Will attempt to send email only when RESEND_API_KEY and FROM_EMAIL are present.
 * - Otherwise returns a 200 "received but not sent" response (safe for staging/build).
 */

// small helper to escape user input for HTML
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const email = (body?.email || "").trim();
    const subject = (body?.subject || "").trim();
    const message = (body?.message || "").trim();

    // basic validation
    if (!email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields (email, subject, message).",
        },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM_EMAIL = process.env.FROM_EMAIL; // example: "you@domain.com"

    // If no API key or FROM_EMAIL configured, accept the request but skip sending.
    if (!RESEND_API_KEY || !FROM_EMAIL) {
      // Log the payload for debugging (won't break build)
      console.warn(
        "Resend not configured. Skipping actual email send. Received:",
        {
          email,
          subject,
          message: message.slice(0, 200) + (message.length > 200 ? "..." : ""),
        }
      );

      return NextResponse.json({
        success: true,
        sent: false,
        message:
          "Message received successfully, but email sending is disabled (missing RESEND_API_KEY or FROM_EMAIL).",
      });
    }

    // Dynamic import to avoid module-level side effects during build
    const { Resend } = await import("resend");
    const resend = new Resend(RESEND_API_KEY);

    // build simple safe HTML body
    const html = `
      <div style="font-family:system-ui,Arial,sans-serif;line-height:1.4;color:#111">
        <h2 style="margin-bottom:8px">${escapeHtml(subject)}</h2>
        <p><strong>From:</strong> ${escapeHtml(email)}</p>
        <hr style="margin:12px 0"/>
        <div>${escapeHtml(message).replace(/\n/g, "<br/>")}</div>
      </div>
    `;

    // send email (to owner + sender)
    const data = await resend.emails.send({
      from: FROM_EMAIL, // must be a verified sender per your Resend account rules
      to: [FROM_EMAIL, email],
      subject: subject,
      html,
      // text: message, // optional plain text
    });

    return NextResponse.json({ success: true, sent: true, data });
  } catch (err) {
    console.error("Error in /api/send:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Server error while handling request.",
        error: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}
