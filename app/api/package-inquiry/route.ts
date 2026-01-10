import { NextResponse } from "next/server";

export const revalidate = 0; // No caching for form submissions

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      travelers,
      travelDate,
      message,
      packageName,
      packageId,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !travelers) {
      return NextResponse.json(
        { message: "Name, email, phone, and number of travelers are required" },
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
      `New Package Inquiry: ${packageName || "Package"}`
    );
    const emailBody = encodeURIComponent(
      `New Package Inquiry\n\n` +
        `Package: ${packageName || "N/A"}\n` +
        `Package ID: ${packageId || "N/A"}\n\n` +
        `Contact Details:\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Number of Travelers: ${travelers}\n` +
        `Preferred Travel Date: ${travelDate || "Not specified"}\n\n` +
        `Additional Message:\n${message || "None"}\n\n` +
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
          subject: `New Package Inquiry: ${packageName || "Package"}`,
          from_name: name,
          email: email,
          phone: phone,
          package_name: packageName || "N/A",
          package_id: packageId || "N/A",
          number_of_travelers: travelers,
          preferred_travel_date: travelDate || "Not specified",
          message: message || "None",
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
          console.log(
            "Package inquiry submitted successfully via form service"
          );
        } else {
          console.error("Form service error:", formResult);
        }
      } catch (error) {
        console.error("Error sending to form service:", error);
        // Continue even if form service fails - we still return success to user
      }
    } else {
      // Log the submission if no form service is configured
      console.log("Package inquiry submission:", {
        name,
        email,
        phone,
        travelers,
        travelDate,
        message,
        packageName,
        packageId,
        timestamp: new Date().toISOString(),
        emailTo: "pravita@payaana.in",
        note: "FORM_SERVICE_ACCESS_KEY not configured - add it to .env.local",
      });
    }

    return NextResponse.json(
      {
        message:
          "Thank you! Your inquiry has been submitted. We'll get back to you soon.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing package inquiry:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
