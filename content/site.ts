export type ServiceId = "web" | "ia" | "automatizacion" | "video";
export type ServiceStatus = "available" | "limited" | "exploring";

export type Service = {
  id: ServiceId;
  name: string;
  summary: string;
  detail: string;
  deliverables: string[];
  status: ServiceStatus;
};

export type WorkCase = {
  slug: string;
  title: string;
  category: string;
  year: string;
  challenge: string;
  result: string;
  tags: string[];
  href: string;
  domain: string;
  image: string;
  imageAlt: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  /** Opcional: foto en /public/testimonials */
  image?: string;
};

export const site = {
  name: "Esteban Sayago",
  role: "Desarrollador fullstack",
  email: "estebansayagodev@gmail.com",
  linkedin: "https://www.linkedin.com/in/esteban-sayago/",
  github: "https://github.com/Puchinn",
  location: "Buenos Aires, Argentina",
  timezone: "GMT-3",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://estebansayago.dev.ar",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  calUrl: process.env.NEXT_PUBLIC_CAL_URL ?? "",
  availability: "Disponible para nuevos proyectos",
};

export const statusLabel: Record<ServiceStatus, string> = {
  available: "Disponible",
  limited: "Cupos limitados",
  exploring: "En exploración",
};

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas", href: "#preguntas" },
];

export const services: Service[] = [
  {
    id: "web",
    name: "Desarrollo web",
    summary:
      "Sitios y aplicaciones que cargan rápido, se ven bien y convierten visitas en consultas.",
    detail:
      "Diseño y construyo desde una landing de una página hasta una aplicación con login, pagos y panel de administración. Next.js, React y TypeScript, con foco en velocidad, SEO y una experiencia clara en el celular.",
    deliverables: [
      "Landing y sitios institucionales",
      "E-commerce",
      "Aplicaciones a medida",
      "Mantenimiento",
    ],
    status: "available",
  },
  {
    id: "ia",
    name: "IA aplicada",
    summary:
      "Asistentes que responden con tu información real, generan contenido o resuelven tareas dentro de tu producto.",
    detail:
      "Ya integré modelos de OpenAI en producción para generación de texto y audio en TalkIAmos. Ahora armo asistentes que trabajan con tu catálogo, tus documentos o tu base de conocimiento, sin inventar respuestas.",
    deliverables: [
      "Chatbots con tus datos (RAG)",
      "Generación de contenido",
      "Integración con OpenAI",
      "Clasificación y resúmenes",
    ],
    status: "available",
  },
  {
    id: "automatizacion",
    name: "Automatización",
    summary:
      "Conecto las herramientas que ya usás para que dejes de copiar y pegar entre planillas, mails y WhatsApp.",
    detail:
      "Formularios que crean contactos en tu CRM, pedidos que se avisan por WhatsApp, reportes que se arman solos. Estoy sumando esta práctica con cupos acotados: primero reviso tu caso y te confirmo con franqueza si puedo resolverlo.",
    deliverables: [
      "n8n / Make / Zapier",
      "Integración con CRM",
      "Avisos por WhatsApp y email",
      "Reportes automáticos",
    ],
    status: "limited",
  },
  {
    id: "video",
    name: "Video con IA",
    summary:
      "Piezas cortas para redes y demos de producto, generadas y editadas con IA.",
    detail:
      "Video vertical, subtítulos y variantes para campañas. Es la capacidad más nueva de mi stack: la tomo como proyecto piloto, con un alcance chico y una primera pieza de prueba antes de escalar.",
    deliverables: [
      "Reels y shorts",
      "Demos de producto",
      "Subtítulos automáticos",
      "Variantes para anuncios",
    ],
    status: "exploring",
  },
];

export function isServiceId(value: string | undefined): value is ServiceId {
  return services.some((service) => service.id === value);
}

export const work: WorkCase[] = [
  {
    slug: "distrito-barracas",
    title: "Distrito Barracas",
    category: "Sitio para eventos",
    year: "2026",
    challenge:
      "Un espacio para eventos que dependía de Instagram para mostrar el lugar, los paquetes y la galería.",
    result:
      "Un sitio propio con identidad visual a la altura del espacio, donde la reserva y la consulta están a un clic.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://distrito-barracas.vercel.app/",
    domain: "distrito-barracas.vercel.app",
    image: "/work/barracas.webp",
    imageAlt:
      "Portada del sitio de Distrito Barracas con el texto Donde tu evento soñado cobra vida",
  },
  {
    slug: "senales-viales",
    title: "Señales Viales",
    category: "Catálogo B2B",
    year: "2026",
    challenge:
      "Una fábrica de cartelería vial con un catálogo técnico disperso y consultas que llegaban una por una por WhatsApp.",
    result:
      "Un catálogo navegable por producto y un canal de cotización directo para municipios y empresas.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://senales-viales-dev.vercel.app/",
    domain: "senales-viales-dev.vercel.app",
    image: "/work/senales.webp",
    imageAlt:
      "Portada del sitio de Señales Viales con una señal de tren y el texto Venta y fabricación de carteles viales",
  },
  {
    slug: "urbano-equipamiento",
    title: "Urbano Equipamiento",
    category: "Catálogo de producto",
    year: "2026",
    challenge:
      "Mobiliario urbano que se vende por imagen: había que mostrarlo en contexto, con escala y materiales.",
    result:
      "Una galería pensada para que un municipio entienda qué está comprando antes de pedir presupuesto.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://preview-urbano.vercel.app/",
    domain: "preview-urbano.vercel.app",
    image: "/work/urbano.webp",
    imageAlt:
      "Catálogo de Urbano Equipamiento con cestos, bancos y mobiliario urbano en contexto",
  },
];

export const otherProjects = [
  {
    name: "App Presupuestos",
    description:
      "Producto propio: presupuestos con autoguardado, exportación a PDF y folio formal para estudios e independientes.",
    href: "https://app-presupuestos.vercel.app/",
  },
  {
    name: "TalkIAmos",
    description:
      "Traducción con IA desarrollada en No Country: API en NestJS y modelos de OpenAI para texto y audio.",
    href: "https://github.com/Puchinn/s14-02m-node-react",
  },
  {
    name: "Multi-Agent Architecture",
    description:
      "Laboratorio open source de agentes jerárquicos con OpenCode, MCP y modelos locales.",
    href: "https://github.com/Puchinn/Multi-Agent-Architecture-with-OpenCode-v2",
  },
];

export const processSteps = [
  {
    title: "Diagnóstico",
    description:
      "Treinta minutos para entender el negocio, el objetivo y qué existe hoy. Sin costo y sin compromiso.",
  },
  {
    title: "Propuesta",
    description:
      "Alcance, plazo y precio fijo por escrito. Si algo no entra, queda afuera desde el principio.",
  },
  {
    title: "Construcción",
    description:
      "Avances cada semana en un link de preview. Hablás conmigo, no con un intermediario.",
  },
  {
    title: "Entrega y soporte",
    description:
      "Deploy, dominio y treinta días de ajustes incluidos. Después, mantenimiento opcional.",
  },
];

export const faqs: Faq[] = [
  {
    question: "¿Cuánto cuesta un sitio?",
    answer:
      "Cada proyecto se presupuesta a medida: depende de cuántas páginas tenga, si necesita pagos o login y quién escribe el contenido. Después de una llamada de treinta minutos te mando una propuesta con precio fijo en 48 horas.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "Una landing simple lleva unas dos semanas. Un sitio con varias secciones, tres o cuatro. Una aplicación con login o pagos, entre seis y ocho. El plazo se fija en la propuesta y se mantiene salvo que cambie el alcance.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer:
      "La idea, el objetivo y, si tenés, logo, fotos y textos. Si no tenés contenido, lo armamos juntos: no entrego un sitio con texto de relleno.",
  },
  {
    question: "¿Hacés automatizaciones?",
    answer:
      "Sí, con cupos limitados. Estoy sumando esta práctica: reviso tu caso, te digo con franqueza si puedo resolverlo y arrancamos con un alcance chico. Si no es para mí, también te lo digo.",
  },
  {
    question: "¿Y video con IA?",
    answer:
      "También, como proyecto piloto. Sirve para reels, demos de producto y variantes de anuncios. Hacemos una primera pieza para validar el resultado antes de escalar.",
  },
  {
    question: "¿Trabajás con clientes de otros países?",
    answer:
      "Sí. Trabajo remoto desde Argentina (GMT-3) y coordino las reuniones dentro de tu horario.",
  },
  {
    question: "¿Qué pasa después de la entrega?",
    answer:
      "Incluyo treinta días de soporte para ajustes. Después podés contratar un mantenimiento mensual o quedarte con el código y todos los accesos.",
  },
];

/**
 * Testimonios reales.
 *
 * La sección no se renderiza mientras este array esté vacío.
 * Para publicarla, agregá objetos con esta forma:
 *
 * {
 *   quote: "Texto del testimonio.",
 *   name: "Nombre y apellido",
 *   role: "Puesto",
 *   company: "Empresa",
 *   image: "/testimonials/nombre.webp" // opcional
 * }
 */
export const testimonials: Testimonial[] = [];
