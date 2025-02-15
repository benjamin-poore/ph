// app/api/send-email/route.ts
import nodemailer from "nodemailer";

interface RequestBody {
  name: string;
  email: string;
  message: string;
  botCheck: string;
}

export async function POST(req: Request): Promise<Response> {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  try {
    const { name, email, message, botCheck } =
      (await req.json()) as RequestBody;

    if (botCheck) {
      return new Response(JSON.stringify({ message: "Bot detected!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!name) {
      return new Response(JSON.stringify({ message: "Name is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: "Invalid email format." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!message) {
      return new Response(JSON.stringify({ message: "Message is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.SENDGRID_USER, // Your Mailjet API key
        pass: process.env.SENDGRID_API_KEY, // Your Mailjet API secret
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>This email inbox is not monitored. Please use tphcoregoncity@gmail.com to contact us.</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
