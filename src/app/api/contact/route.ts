import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

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

    const finalBoard = board === "Other" && otherBoard ? `Other (${otherBoard})` : board;

    // Save the lead to Firestore first — this is the source of truth for the
    // admin dashboard. Even if the email notification below fails, the
    // enquiry is already recorded and visible in /admin/enquiries.
    let leadSaved = false;
    try {
      await addDoc(collection(db, "enquiries"), {
        fullName: fullName || "",
        designation,
        schoolName,
        mobileNumber,
        emailId: emailId || "",
        city,
        state,
        board: finalBoard,
        studentStrength,
        grades,
        status: "New",
        createdAt: serverTimestamp(),
        createdAtString: new Date().toISOString(),
      });
      leadSaved = true;
    } catch (firestoreError) {
      console.error("[API/Contact] Error saving lead to Firestore:", firestoreError);
    }

    // Best-effort email notification. Failures here must NOT turn into an
    // error response for the visitor as long as the lead was saved above —
    // the team can still see it in the dashboard even if the email never went out.
    let emailError: string | null = null;
    try {
      const publicKey = process.env.EMAILJS_PUBLIC_KEY;
      const privateKey = process.env.EMAILJS_PRIVATE_KEY;
      const serviceId = process.env.EMAILJS_SERVICE_ID || "default_service";
      const templateId = process.env.EMAILJS_TEMPLATE_ID;
      const recipientEmail = process.env.RECIPIENT_EMAIL || "services@sparkvr.in";

      if (!publicKey) {
        throw new Error("Server configuration error: EmailJS Public Key is missing.");
      }
      if (!templateId || templateId === "template_xxxxxx") {
        throw new Error("Server configuration error: EMAILJS_TEMPLATE_ID is missing or invalid.");
      }

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
        throw new Error(`EmailJS sending failed: ${errorText}`);
      }
    } catch (err: any) {
      emailError = err?.message || "Failed to send email notification.";
      console.error("[API/Contact] Email notification failed:", emailError);
    }

    if (leadSaved) {
      // The lead is safely recorded — always report success to the visitor,
      // regardless of whether the email notification went out.
      return NextResponse.json({
        success: true,
        message: emailError
          ? "Enquiry received. Email notification failed, but your submission is saved."
          : "Enquiry received and email notification sent.",
      });
    }

    if (!emailError) {
      // Rare: Firestore save failed but the email notification made it through.
      return NextResponse.json({
        success: true,
        message: "Enquiry sent, but could not be saved to our database. Please contact us if this repeats.",
      });
    }

    // Both the database save and the email notification failed — this is a
    // genuine failure and the visitor should know their submission was lost.
    return NextResponse.json(
      { error: "Failed to submit your enquiry. Please try again or contact us directly." },
      { status: 500 }
    );
  } catch (error: any) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send message." },
      { status: 500 }
    );
  }
}
