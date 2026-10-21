# estebansayago.dev.ar — v3

Sitio de servicios para captar clientes: desarrollo web, IA aplicada, automatización y video con IA.

La versión anterior (Astro) sigue intacta en `main`. Esta rama (`feat/next-service-site`) es la reescritura en Next.js.

## Stack

- Next.js 16.4 (App Router, Turbopack)
- React 19.3
- Tailwind CSS 4
- TypeScript 6
- pnpm 12
- Resend (formulario)
- Vercel Analytics + Speed Insights

## Requisitos

- Node.js 24 o superior
- pnpm 12 (se activa solo con Corepack, está fijado en `packageManager`)

## Desarrollo

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

El sitio queda en `http://localhost:3000`.

## Scripts

```bash
pnpm dev        # servidor de desarrollo
pnpm build      # build de producción
pnpm start      # servir el build
pnpm lint       # ESLint
pnpm typecheck  # TypeScript
```

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá:

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública para metadata, sitemap y JSON-LD |
| `RESEND_API_KEY` | Envío del formulario de contacto |
| `CONTACT_TO_EMAIL` | Casilla que recibe las consultas |
| `CONTACT_FROM_EMAIL` | Remitente verificado en Resend |
| `NEXT_PUBLIC_WHATSAPP` | Opcional. Número con código de país, sin `+` ni espacios |
| `NEXT_PUBLIC_CAL_URL` | Opcional. Link de agenda; si está vacío, el CTA lleva al formulario |

### Formulario sin configurar

Si falta `RESEND_API_KEY`, el formulario no envía: muestra un aviso con el email de contacto. Es intencional, para no perder consultas en silencio.

El límite de envíos (3 cada 10 minutos por IP) vive en memoria. Alcanza para un sitio de una persona; si el tráfico crece, conviene moverlo a Upstash Redis.

## Contenido

Casi todo el texto vive en `content/site.ts`: servicios, casos, proceso, FAQ, datos de contacto y testimonios.

### Testimonios

La sección está implementada pero **no se renderiza mientras el array esté vacío**. Para publicarla, agregá objetos en `testimonials`:

```ts
export const testimonials: Testimonial[] = [
  {
    quote: "Texto del testimonio.",
    name: "Nombre y apellido",
    role: "Puesto",
    company: "Empresa",
    image: "/testimonials/nombre.webp", // opcional
  },
];
```

## Estructura

```
app/
  layout.tsx          # metadata, fuentes, header/footer
  page.tsx            # composición de secciones + JSON-LD
  globals.css         # tokens de Tailwind 4
  actions/contact.ts  # server action + Resend
  sitemap.ts / robots.ts
components/
  sections/           # hero, servicios, trabajos, proceso, about, faq, contacto
  ui/                 # botones, badges, iconos
  contact-form.tsx
content/site.ts       # única fuente de contenido
public/
  work/               # capturas de los casos
  og.png              # imagen para redes
  me.webp
```

## Deploy

En Vercel: importar el repo, seleccionar la rama y configurar las variables de entorno. El dominio actual (`estebansayago.dev.ar`) se cambia recién cuando el preview esté aprobado.

El workflow de GitHub Actions (`ci.yml`) corre lint, typecheck y build en cada push y PR.
