import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/content/site";

import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const description =
  "Diseño y desarrollo sitios web, asistentes con IA y automatizaciones para negocios que quieren crecer. Trabajás directo conmigo, de la idea al deploy.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Esteban Sayago — Sitios web, IA y automatización",
    template: "%s — Esteban Sayago",
  },
  description,
  keywords: [
    "desarrollo web",
    "Next.js",
    "React",
    "inteligencia artificial",
    "automatización",
    "video con IA",
    "Buenos Aires",
    "Argentina",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: site.name,
    title: "Esteban Sayago — Sitios web, IA y automatización",
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Esteban Sayago — Sitios web, IA y automatización",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esteban Sayago — Sitios web, IA y automatización",
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f1f2ed",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="bg-paper text-ink">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2 focus:font-display focus:text-sm focus:text-paper"
        >
          Saltar al contenido
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
