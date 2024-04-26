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
  },
  en: {
    nav: {
      experiencia: {
        title: "Experience",
        url: "/#experience",
      },
      proyectos: {
        title: "Projects",
        url: "/#projects",
      },
      habilidades: {
        title: "Skills",
        url: "/#skills",
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
  },
  "pt-br": {
    nav: {
      experiencia: {
        title: "Experiência",
        url: "/#experiencia",
      },
      proyectos: {
        title: "Projetos",
        url: "/#projetos",
      },
      habilidades: {
        title: "Habilidades",
        url: "/#habilidades",
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
  },
};

export function getTranslation(lang: string = "es") {
  if (lang === "en") return TRANSLATIONS.en;
  if (lang === "pt-br") return TRANSLATIONS["pt-br"];
  return TRANSLATIONS.es;
}
