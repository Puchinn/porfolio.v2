import { nav, site } from "@/content/site";
import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10">
      <div className="shell grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="size-2.5 bg-forest" aria-hidden="true" />
            <span className="font-display text-[15px] font-semibold tracking-tight">
              Esteban Sayago
            </span>
          </a>
          <p className="mt-4 max-w-xs text-muted">
            Sitios web, IA y automatización para negocios que quieren crecer.
          </p>
          <p className="mt-6 flex items-center gap-2 font-display text-xs text-muted">
            <span className="status-live size-1.5 rounded-full bg-lime" aria-hidden="true" />
            {site.availability}
          </p>
        </div>

        <nav aria-label="Secciones" className="md:col-span-3">
          <p className="font-display text-sm font-semibold">Secciones</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="font-display text-sm font-semibold">Contacto</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 block font-display text-sm text-muted transition-colors hover:text-ink"
          >
            {site.email}
          </a>
          <p className="mt-2 font-display text-sm text-muted">
            {site.location} · {site.timezone}
          </p>
          <SocialLinks className="mt-5 flex gap-2" />
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="shell flex flex-col gap-2 py-5 font-display text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Esteban Sayago</p>
          <p>Hecho con Next.js y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
