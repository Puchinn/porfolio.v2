import Image from "next/image";

import { site } from "@/content/site";

export function About() {
  return (
    <section id="sobre-mi" className="shell py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-ink/15 bg-paper-deep">
            <Image
              src="/me.webp"
              alt="Retrato de Esteban Sayago"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-display text-[11px] text-muted">
            {site.name} · {site.location} · {site.timezone}
          </p>
        </div>

        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Trabajás con quien escribe el código.
          </h2>

          <div className="mt-6 space-y-5 text-lg text-muted">
            <p>
              Soy Esteban Sayago, desarrollador fullstack. Desde 2021 construyo
              sitios y aplicaciones para comercios, estudios y proyectos
              culturales.
            </p>
            <p>
              En 2024 trabajé en No Country integrando modelos de OpenAI para
              TalkIAmos: generación de texto y audio en producción. Ahí aprendí
              que la IA sirve cuando resuelve una tarea concreta, no cuando es
              una vidriera.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-lime pl-5 font-body text-xl italic text-ink">
            “Prefiero perder una venta antes que prometer algo que no puedo
            entregar.”
          </blockquote>

          <p className="mt-6 text-lg text-muted">
            Automatización y video con IA son las áreas que estoy incorporando.
            Si tu proyecto va por ahí, te digo de entrada qué puedo resolver y
            qué no.
          </p>
        </div>
      </div>
    </section>
  );
}
