import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      designation,
      schoolName,
      mobileNumber,
      emailId,
      city,
      state,
      board,
      otherBoard,
      studentStrength,
      grades,
    } = body;

    // Validation checks for required fields
    if (
      !designation ||
      !schoolName ||
      !mobileNumber ||
      !city ||
      !state ||
      !board ||
      !studentStrength ||
      !grades
    ) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;
    const serviceId = process.env.EMAILJS_SERVICE_ID || "default_service";
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const recipientEmail = process.env.RECIPIENT_EMAIL || "services@sparkvr.in";

    // Validation of environment configurations
    if (!publicKey) {
      return NextResponse.json(
        { error: "EmailJS Public Key is not configured in .env.local" },
        { status: 500 }
      );
    }
    
    if (!templateId || templateId === "template_xxxxxx") {
      return NextResponse.json(
        { error: "Please configure your actual EMAILJS_TEMPLATE_ID in your .env.local file to receive form submissions." },
        { status: 500 }
      );
    }

    // Format board name if "Other" is chosen
    const finalBoard = board === "Other" && otherBoard ? `Other (${otherBoard})` : board;

    // Generate a single formatted summary in case a generic template is used
    const summaryMessage = `
New Lead from SparkVR Contact Form:
------------------------------------------
Full Name: ${fullName || "Not Provided"}
Designation: ${designation}
School Name: ${schoolName}
Mobile Number: ${mobileNumber}
Email ID: ${emailId || "Not Provided"}
City: ${city}
State: ${state}
Board: ${finalBoard}
Total Student Strength: ${studentStrength}
School Grades: ${grades}
------------------------------------------
    `.trim();

    // Prepare template parameters
    const templateParams = {
      name: fullName || `${designation} at ${schoolName}`,
      time: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      }),
      to_email: recipientEmail,
      fullName: fullName || "Not Provided",
      designation,
      schoolName,
      mobileNumber,
      emailId: emailId || "Not Provided",
      city,
      state,
      board: finalBoard,
      studentStrength,
      grades,
      message: summaryMessage, // Available as {{message}} in simple template formats
    };

    // POST request to EmailJS REST API
    const emailJsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: templateParams,
      }),
    });

    if (!emailJsResponse.ok) {
      const errorText = await emailJsResponse.text();
      console.error("EmailJS sending failed:", errorText);
      return NextResponse.json(
        { error: `EmailJS sending failed: ${errorText}` },
        { status: emailJsResponse.status }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully via EmailJS." });
  } catch (error: any) {
    console.error("Error sending email through EmailJS:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send message." },
      { status: 500 }
    );
  }
}
