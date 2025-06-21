import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY") || "re_7Mtajhbe_AtdHr3bTYHbwGAz6ey91Xt9w");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  companyName: string;
  name: string;
  designation: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { companyName, name, designation, email, countryCode, phoneNumber, message }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission for:", email);

    // Send notification email to company
    const notificationEmail = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["sales@dyetonpaints.com"],
      subject: `New Contact Form Submission from ${name} at ${companyName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phoneNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted from Dyeton Paints website</small></p>
      `,
    });

    // Send confirmation email to customer
    const confirmationEmail = await resend.emails.send({
      from: "Dyeton Paints <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Dyeton Paints",
      html: `
        <h1>Thank you for contacting us, ${name}!</h1>
        <p>We have received your message from ${companyName} and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 16px; margin: 16px 0;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
        <p>Best regards,<br>The Dyeton Paints Team</p>
      `,
    });

    console.log("Emails sent successfully:", { notificationEmail, confirmationEmail });

    return new Response(
      JSON.stringify({ 
        success: true, 
        notificationId: notificationEmail.data?.id,
        confirmationId: confirmationEmail.data?.id 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
