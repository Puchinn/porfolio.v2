import { Suspense } from "react";
import { Check } from "lucide-react";

import { site } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import {
  Github,
  Linkedin,
  Mail,
  Whatsapp,
} from "@/components/ui/social-icons";

const promises = [
  "Primera llamada de 30 minutos, sin costo",
  "Propuesta con precio fijo en 48 horas",
  "Sin compromiso ni letra chica",
];

export function Contact() {
  const whatsappHref = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        "Hola Esteban, vi tu sitio y quiero consultarte por un proyecto.",
      )}`
    : null;

  return (
    <section id="contacto" className="bg-forest text-paper">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Contame qué necesitás.
          </h2>
          <p className="mt-5 max-w-md text-xl text-paper/75">
            Respondo yo, en menos de 24 horas hábiles. Si tu proyecto no es para
            mí, también te lo digo.
          </p>

          <ul className="mt-8 space-y-3">
            {promises.map((promise) => (
              <li key={promise} className="flex items-start gap-3">
                <Check
                  className="mt-1 size-4 shrink-0 text-lime"
                  aria-hidden="true"
                />
                <span className="font-display text-sm text-paper/85">
                  {promise}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-3 border-t border-paper/15 pt-8">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 font-display text-sm text-paper/80 transition-colors hover:text-lime"
            >
              <Mail className="size-4" />
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-display text-sm text-paper/80 transition-colors hover:text-lime"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-display text-sm text-paper/80 transition-colors hover:text-lime"
            >
              <Github className="size-4" />
              GitHub
            </a>
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-display text-sm text-paper/80 transition-colors hover:text-lime"
              >
                <Whatsapp className="size-4" />
                WhatsApp
              </a>
            ) : null}
          </div>

          <p className="mt-8 font-display text-[11px] text-paper/50">
            {site.location} · {site.timezone}
          </p>
        </div>

        <div className="lg:col-span-7">
          <Suspense
            fallback={
              <div
                className="min-h-[30rem] border border-ink/10 bg-paper"
                aria-hidden="true"
              />
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
