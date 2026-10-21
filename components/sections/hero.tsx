import { services, site, statusLabel, type ServiceStatus } from "@/content/site";
import { cn } from "@/lib/cn";
import { buttonClass } from "@/components/ui/button";

const dot: Record<ServiceStatus, string> = {
  available: "bg-lime status-live",
  limited: "bg-warn",
  exploring: "bg-muted/50",
};

function AvailabilityPanel() {
  return (
    <>
      <aside
        aria-label="Disponibilidad de servicios"
        className="rise rise-3 border-x border-b border-ink/15 border-t-2 border-t-lime bg-white/45"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <p className="font-display text-xs font-semibold">Disponibilidad</p>
          <p className="font-display text-[11px] text-muted">Actualizado 2026</p>
        </div>

        <ul>
          {services.map((service) => (
            <li
              key={service.id}
              className="flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-4 last:border-none"
            >
              <span className="font-display text-sm font-medium">{service.name}</span>
              <span className="flex items-center gap-2 font-display text-[11px] text-muted">
                <span
                  className={cn("size-1.5 rounded-full", dot[service.status])}
                  aria-hidden="true"
                />
                {statusLabel[service.status]}
              </span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 divide-x divide-ink/10 border-t border-ink/10">
          <div className="px-5 py-4">
            <p className="font-display text-[11px] text-muted">Próximo inicio</p>
            <p className="mt-1 font-display text-sm font-semibold">Esta semana</p>
          </div>
          <div className="px-5 py-4">
            <p className="font-display text-[11px] text-muted">Respuesta</p>
            <p className="mt-1 font-display text-sm font-semibold">&lt; 24 h</p>
          </div>
        </div>
      </aside>
      <p className="mt-3 font-display text-[11px] leading-relaxed text-muted">
        Automatización y video son capacidades nuevas: consultá disponibilidad
        antes de contratar.
      </p>
    </>
  );
}

export function Hero() {
  const primaryHref = site.calUrl || "#contacto";
  const primaryLabel = site.calUrl
    ? "Agendar una llamada"
    : "Contame tu proyecto";
  const external = Boolean(site.calUrl);

  return (
    <section id="inicio" className="shell pb-20 pt-16 sm:pt-24 md:pb-28">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="rise inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper-deep/60 px-3 py-1.5 font-display text-xs font-medium">
            <span
              className="status-live size-1.5 rounded-full bg-lime"
              aria-hidden="true"
            />
            {site.availability}
          </p>

          <h1 className="rise rise-1 mt-7 font-display text-[clamp(2.75rem,6.2vw,4.9rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
            Sitios web
            <br />
            que venden.
            <br />
            IA cuando suma.
          </h1>

          <p className="rise rise-2 mt-7 max-w-xl text-xl text-muted text-pretty">
            Diseño y desarrollo sitios, asistentes con IA y automatizaciones para
            negocios que quieren crecer. Trabajás directo conmigo, de la idea al
            deploy.
          </p>

          <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
            <a
              href={primaryHref}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className={buttonClass("primary")}
            >
              {primaryLabel}
            </a>
            <a href="#trabajos" className={buttonClass("secondary")}>
              Ver trabajos
            </a>
          </div>

          <dl className="rise rise-4 mt-12 grid grid-cols-3 gap-4 border-t border-ink/15 pt-6 sm:flex sm:flex-wrap sm:gap-x-12 sm:gap-y-5">
            <div>
              <dt className="font-display text-[11px] text-muted">Desde</dt>
              <dd className="mt-1 font-display text-lg font-semibold">2021</dd>
            </div>
            <div>
              <dt className="font-display text-[11px] text-muted">
                Proyectos entregados
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold">+15</dd>
            </div>
            <div>
              <dt className="font-display text-[11px] text-muted">
                Tiempo de respuesta
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold">&lt; 24 h</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <AvailabilityPanel />
        </div>
      </div>
    </section>
  );
}
