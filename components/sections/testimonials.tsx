import { testimonials } from "@/content/site";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * Se renderiza solo cuando hay testimonios cargados en content/site.ts.
 * Mientras el array esté vacío, la sección no aparece en la página.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonios" className="shell py-20 md:py-28">
      <SectionHeader
        title="Testimonios"
        intro="Clientes que ya pasaron por acá, en sus propias palabras."
      />

      <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <li
            key={`${testimonial.name}-${testimonial.company ?? ""}`}
            className="flex flex-col justify-between border-t border-ink/20 pt-6"
          >
            <blockquote className="text-lg text-ink">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-6">
              <p className="font-display text-sm font-semibold">
                {testimonial.name}
              </p>
              <p className="font-display text-xs text-muted">
                {testimonial.role}
                {testimonial.company ? ` · ${testimonial.company}` : ""}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
