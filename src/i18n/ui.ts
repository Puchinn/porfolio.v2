const TRANSLATIONS = {
  es: {
    nav: {
      experiencia: {
        title: "Experiencia",
        url: "/#experiencia",
      },
      proyectos: {
        title: "Proyectos",
        url: "/#proyectos",
      },
      habilidades: {
        title: "Habilidades",
        url: "/#habilidades",
      },
      lang: {
        actual: "ES",
      },
    },
    section: {
      "experiencia-laboral": {
        title: "Experiencia Laboral",
        id: "experiencia",
      },
      proyectos: {
        title: "Proyectos",
        id: "proyectos",
      },
      habilidades: {
        title: "Habilidades",
        id: "habilidades",
      },
    },
    footer: {
      content: ". Casi todos los derechos reservados.",
    },
    "experiencia.button": "Saber más",
  },
  en: {
    nav: {
      experiencia: {
        title: "Experience",
        url: "/en#experience",
      },
      proyectos: {
        title: "Projects",
        url: "/en#projects",
      },
      habilidades: {
        title: "Skills",
        url: "/en#skills",
      },
      lang: {
        actual: "EN",
      },
    },
    section: {
      "experiencia-laboral": {
        title: "Experience",
        id: "experience",
      },
      proyectos: {
        title: "Projects",
        id: "projects",
      },
      habilidades: {
        title: "Skills",
        id: "skills",
      },
    },
    footer: {
      content: ". All rights reserved.",
    },
    "experiencia.button": "More info",
  },
  "pt-br": {
    nav: {
      experiencia: {
        title: "Experiência",
        url: "/pt-br#experiencia",
      },
      proyectos: {
        title: "Projetos",
        url: "/pt-br#projetos",
      },
      habilidades: {
        title: "Habilidades",
        url: "/pt-br#habilidades",
      },
      lang: {
        actual: "PT",
      },
    },
    section: {
      "experiencia-laboral": {
        title: "Experiência",
        id: "experiencia",
      },
      proyectos: {
        title: "Projetos",
        id: "projetos",
      },
      habilidades: {
        title: "Habilidades",
        id: "habilidades",
      },
    },
    footer: {
      content: ". Todos os direitos reservados.",
    },
    "experiencia.button": "Mais informações",
  },
};

export function getTranslation(lang: string = "es") {
  if (lang === "en") return TRANSLATIONS.en;
  if (lang === "pt-br") return TRANSLATIONS["pt-br"];
  return TRANSLATIONS.es;
}
