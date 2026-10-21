import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { otherProjects, work } from "@/content/site";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/cn";

export function Work() {
  return (
    <section id="trabajos" className="shell py-20 md:py-28">
      <SectionHeader
        title="Trabajos"
        intro="Sitios en producción para clientes reales. Cada uno resolvió un problema concreto: mostrar mejor, ordenar el catálogo o recibir consultas sin depender de las redes."
      />

      <div className="mt-16 space-y-20 md:space-y-28">
        {work.map((item, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <article
              key={item.slug}
              className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
            >
              <div
                className={cn(
                  "lg:col-span-7",
                  !imageFirst && "lg:order-2",
                )}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                  aria-label={`Ver el sitio de ${item.title}`}
                >
                  <div className="overflow-hidden border border-ink/15 bg-white p-2">
                    <div className="overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        width={1600}
                        height={1000}
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
                      />
                    </div>
                  </div>
                  <p className="mt-3 font-display text-[11px] text-muted">
                    {item.domain}
                  </p>
                </a>
              </div>

              <div
                className={cn(
                  "lg:col-span-5",
                  !imageFirst && "lg:order-1",
                )}
              >
                <p className="font-display text-[11px] font-medium text-muted">
                  {item.category} · {item.year}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg text-muted">{item.challenge}</p>
                <p className="mt-5 border-l-2 border-lime pl-4 text-ink">
                  {item.result}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-ink/15 px-2 py-1 font-display text-[11px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-1 border-b border-ink/30 pb-1 font-display text-sm font-semibold transition-colors hover:border-forest hover:text-forest"
                >
                  Ver sitio
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-20 border-t border-ink/15 pt-8">
        <p className="font-display text-sm font-semibold">También en producción</p>
        <ul className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
          {otherProjects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <p className="font-display text-lg font-semibold transition-colors group-hover:text-forest">
                  {project.name}
                </p>
                <p className="mt-2 text-muted">{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
