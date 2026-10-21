import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Work } from "@/components/sections/work";
import { faqs, site } from "@/content/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#servicio`,
        name: `${site.name} — Desarrollo web, IA y automatización`,
        url: site.url,
        email: site.email,
        description:
          "Desarrollo de sitios web, asistentes con IA y automatizaciones para negocios.",
        areaServed: "AR",
        availableLanguage: ["es"],
        sameAs: [site.github, site.linkedin],
        knowsAbout: [
          "Desarrollo web",
          "Next.js",
          "Inteligencia artificial",
          "Automatización",
          "Video con IA",
        ],
        founder: {
          "@type": "Person",
          name: site.name,
          url: site.linkedin,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Work />
      <Process />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
