"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { rateLimit } from "../lib/rateLimit";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "name_min")
    .max(100, "name_max"),
  email: z
    .string()
    .trim()
    .max(200, "email_max")
    .email("email_invalid"),
  subject: z
    .string()
    .trim()
    .min(2, "subject_min")
    .max(150, "subject_max"),
  message: z
    .string()
    .trim()
    .min(10, "message_min")
    .max(5000, "message_max"),
  honeypot: z.string().max(0, "spam").optional().default(""),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
  values?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
};

const ERROR_MESSAGES: Record<string, { es: string; en: string }> = {
  name_min: { es: "El nombre debe tener al menos 2 caracteres.", en: "Name must be at least 2 characters." },
  name_max: { es: "El nombre no puede superar los 100 caracteres.", en: "Name must be 100 characters or fewer." },
  email_invalid: { es: "Introduce un correo válido.", en: "Enter a valid email address." },
  email_max: { es: "El correo no puede superar los 200 caracteres.", en: "Email must be 200 characters or fewer." },
  subject_min: { es: "El asunto debe tener al menos 2 caracteres.", en: "Subject must be at least 2 characters." },
  subject_max: { es: "El asunto no puede superar los 150 caracteres.", en: "Subject must be 150 characters or fewer." },
  message_min: { es: "El mensaje debe tener al menos 10 caracteres.", en: "Message must be at least 10 characters." },
  message_max: { es: "El mensaje no puede superar los 5000 caracteres.", en: "Message must be 5000 characters or fewer." },
  spam: { es: "Mensaje rechazado.", en: "Message rejected." },
};

const FIELD_TO_KEY: Record<"name" | "email" | "subject" | "message", keyof typeof ERROR_MESSAGES> = {
  name: "name_min",
  email: "email_invalid",
  subject: "subject_min",
  message: "message_min",
};

function localizeError(code: string, locale: "es" | "en"): string {
  return ERROR_MESSAGES[code]?.[locale] ?? code;
}

function inferLocale(value: string | null): "es" | "en" {
  if (!value) return "es";
  const lowered = value.toLowerCase();
  if (lowered.startsWith("en")) return "en";
  return "es";
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const headerStore = await headers();
  const locale = inferLocale(
    (formData.get("locale")?.toString() ?? null) ||
      headerStore.get("accept-language")
  );
  const ip =
    headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerStore.get("x-real-ip") ??
    "anonymous";

  const limited = rateLimit(`contact:${ip}`);
  if (!limited.ok) {
    return {
      status: "error",
      message:
        locale === "en"
          ? "Too many requests. Please try again later."
          : "Has enviado demasiados mensajes. Inténtalo de nuevo más tarde.",
    };
  }

  const raw = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    subject: formData.get("subject")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    honeypot: formData.get("website")?.toString() ?? "",
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    const errors: ContactFormState["errors"] = {};
    (["name", "email", "subject", "message"] as const).forEach((field) => {
      const codes = fieldErrors[field];
      if (codes && codes.length > 0) {
        const code = codes[0];
        errors[field] = localizeError(
          code in ERROR_MESSAGES ? code : FIELD_TO_KEY[field],
          locale
        );
      }
    });

    return {
      status: "error",
      message:
        locale === "en"
          ? "Please fix the errors below."
          : "Revisa los campos marcados.",
      errors,
      values: {
        name: raw.name,
        email: raw.email,
        subject: raw.subject,
        message: raw.message,
      },
    };
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "juanalean2525@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not set. Form submission logged to console only."
    );
    console.info("[contact] New message", {
      from: data.email,
      name: data.name,
      subject: data.subject,
      message: data.message,
    });
    return {
      status: "success",
      message:
        locale === "en"
          ? "Message received (dev mode). Configure RESEND_API_KEY to enable real delivery."
          : "Mensaje recibido (modo dev). Configura RESEND_API_KEY para envío real.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: `[Portfolio] ${data.subject}`,
      html: [
        `<p><strong>${data.name}</strong> (${data.email}) wrote:</p>`,
        `<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
        `<hr /><p style="color:#666;font-size:12px">Sent from the portfolio contact form.</p>`,
      ].join(""),
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return {
        status: "error",
        message:
          locale === "en"
            ? "We could not send your message right now. Please try again."
            : "No hemos podido enviar tu mensaje. Inténtalo de nuevo.",
      };
    }
  } catch (err) {
    console.error("[contact] Unexpected error", err);
    return {
      status: "error",
      message:
        locale === "en"
          ? "We could not send your message right now. Please try again."
          : "No hemos podido enviar tu mensaje. Inténtalo de nuevo.",
    };
  }

  return {
    status: "success",
    message:
      locale === "en"
        ? "Thanks! Your message has been sent."
        : "¡Gracias! Tu mensaje ha sido enviado.",
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
