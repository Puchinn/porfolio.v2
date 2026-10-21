import { processSteps } from "@/content/site";
import { SectionHeader } from "@/components/ui/section-header";

export function Process() {
  return (
    <section id="proceso" className="shell py-20 md:py-28">
      <SectionHeader
        title="Proceso"
        intro="Sin sorpresas: sabés qué pasa en cada etapa y cuánto cuesta antes de empezar."
      />

      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {processSteps.map((step, index) => (
          <li key={step.title} className="border-t border-ink/20 pt-5">
            <p className="font-display text-[11px] text-muted">
              0{index + 1}
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold">
              {step.title}
            </h3>
            <p className="mt-2 text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
