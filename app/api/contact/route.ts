import { NextResponse } from "next/server";

export const revalidate = 0; // No caching for form submissions

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email to pravita@payaana.in
    const emailSubject = encodeURIComponent(
      `New Contact Form Submission from ${name}`
    );
    const emailBody = encodeURIComponent(
      `New Contact Form Submission\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "Not provided"}\n\n` +
        `Message:\n${message}\n\n` +
        `Submitted at: ${new Date().toLocaleString()}`
    );

    // Send to form service (Web3Forms)
    const formServiceUrl =
      process.env.FORM_SERVICE_URL || "https://api.web3forms.com/submit";
    const formServiceAccessKey = process.env.FORM_SERVICE_ACCESS_KEY;

    if (formServiceAccessKey) {
      try {
        const formData = {
          access_key: formServiceAccessKey,
          subject: `New Contact Form Submission from ${name}`,
          from_name: name,
          email: email,
          phone: phone || "Not provided",
          message: message,
          to_email: "pravita@payaana.in",
        };

        const formResponse = await fetch(formServiceUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        const formResult = await formResponse.json();

        if (formResponse.ok && formResult.success) {
          console.log("Contact form submitted successfully via form service");
        } else {
          console.error("Form service error:", formResult);
        }
      } catch (error) {
        console.error("Error sending to form service:", error);
        // Continue even if form service fails - we still return success to user
      }
    } else {
      // Log the submission if no form service is configured
      console.log("Contact form submission:", {
        name,
        email,
        phone: phone || "Not provided",
        message,
        timestamp: new Date().toISOString(),
        emailTo: "pravita@payaana.in",
        note: "FORM_SERVICE_ACCESS_KEY not configured - add it to .env.local",
      });
    }

    return NextResponse.json(
      {
        message:
          "Thank you! Your message has been received. We'll get back to you soon.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
