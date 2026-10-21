"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

import { services, site } from "@/content/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message" | "service", string>>;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "").trim();

  // Si el campo oculto viene completo, es un bot: respondemos igual y no enviamos nada.
  if (honeypot) {
    return { status: "success", message: "Mensaje enviado." };
  }

  const errors: ContactState["errors"] = {};

  if (name.length < 2 || name.length > 80) {
    errors.name = "Escribí tu nombre (entre 2 y 80 caracteres).";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    errors.email = "Revisá el email: no parece válido.";
  }

  const validServices = new Set<string>([
    ...services.map((item) => item.id),
    "no-se",
  ]);

  if (!validServices.has(service)) {
    errors.service = "Elegí un servicio.";
  }

  if (message.length < 10 || message.length > 2000) {
    errors.message = "Contame un poco más (entre 10 y 2000 caracteres).";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisá los campos marcados.",
      errors,
    };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message:
        "Recibí varias consultas seguidas. Probá de nuevo en unos minutos o escribime por email.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contacto] Falta RESEND_API_KEY en el entorno.");
    return {
      status: "error",
      message: `El formulario todavía no está habilitado. Escribime a ${site.email} y te respondo igual.`,
    };
  }

  const serviceLabel =
    services.find((item) => item.id === service)?.name ?? "No especificado";

  const safe = {
    name: escapeHtml(singleLine(name)),
    email: escapeHtml(singleLine(email)),
    service: escapeHtml(serviceLabel),
    budget: escapeHtml(singleLine(budget) || "No especificado"),
    message: escapeHtml(message).replaceAll("\n", "<br />"),
  };

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Esteban Sayago <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? site.email],
      replyTo: email,
      subject: `Nueva consulta: ${singleLine(serviceLabel)} — ${singleLine(name)}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Servicio: ${serviceLabel}`,
        `Presupuesto: ${budget || "No especificado"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.6; color: #0d1412;">
          <h2 style="margin: 0 0 16px;">Nueva consulta desde el sitio</h2>
          <p style="margin: 0 0 4px;"><strong>Nombre:</strong> ${safe.name}</p>
          <p style="margin: 0 0 4px;"><strong>Email:</strong> ${safe.email}</p>
          <p style="margin: 0 0 4px;"><strong>Servicio:</strong> ${safe.service}</p>
          <p style="margin: 0 0 16px;"><strong>Presupuesto:</strong> ${safe.budget}</p>
          <hr style="border: none; border-top: 1px solid #d3d8cc; margin: 16px 0;" />
          <p style="margin: 0;">${safe.message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contacto] Resend devolvió un error:", error);
      return {
        status: "error",
        message:
          "No pudimos enviar el mensaje. Probá de nuevo o escribime por email.",
      };
    }
  } catch (error) {
    console.error("[contacto] Error inesperado:", error);
    return {
      status: "error",
      message:
        "No pudimos enviar el mensaje. Probá de nuevo o escribime por email.",
    };
  }

  return {
    status: "success",
    message: "Mensaje enviado. Te respondo en menos de 24 horas hábiles.",
  };
}
