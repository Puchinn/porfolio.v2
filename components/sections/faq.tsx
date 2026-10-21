import { Plus } from "lucide-react";

import { faqs } from "@/content/site";
import { SectionHeader } from "@/components/ui/section-header";

export function Faq() {
  return (
    <section id="preguntas" className="shell py-20 md:py-28">
      <SectionHeader
        title="Preguntas"
        intro="Lo que suelen preguntar antes de empezar. Si falta algo, escribime y te respondo."
      />

      <div className="mt-12 border-t border-ink/15">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            name="faq"
            className="group border-b border-ink/15"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
              <span className="font-display text-lg font-semibold sm:text-xl">
                {faq.question}
              </span>
              <Plus
                className="size-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="max-w-3xl pb-6 text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
