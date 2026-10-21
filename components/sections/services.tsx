import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/content/site";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusBadge } from "@/components/ui/status-badge";

export function Services() {
  return (
    <section id="servicios" className="shell py-20 md:py-28">
      <SectionHeader
        title="Servicios"
        intro="Web e IA son mi base. Automatización y video los estoy incorporando, con cupos acotados y un alcance claro desde el primer día."
      />

      <div className="mt-12 border-t border-ink/15">
        {services.map((service) => (
          <Link
            key={service.id}
            href={{
              pathname: "/",
              query: { servicio: service.id },
              hash: "contacto",
            }}
            className="group relative grid gap-4 border-b border-ink/15 py-8 transition-colors hover:bg-paper-deep/70 md:grid-cols-12 md:gap-6 md:px-4"
          >
            <span
              className="absolute inset-y-0 left-0 w-0 bg-forest transition-[width] duration-300 group-hover:w-[3px]"
              aria-hidden="true"
            />

            <div className="md:col-span-4">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                {service.name}
              </h3>
              <StatusBadge status={service.status} className="mt-3" />
            </div>

            <div className="md:col-span-5">
              <p className="text-muted transition-colors group-hover:text-ink">
                {service.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="border border-ink/15 px-2 py-1 font-display text-[11px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex md:col-span-3 md:items-start md:justify-end">
              <span className="inline-flex items-center gap-1 font-display text-sm font-semibold">
                Consultar
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
