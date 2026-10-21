import { site } from "@/content/site";
import { Whatsapp } from "@/components/ui/social-icons";

export function WhatsAppFloat() {
  if (!site.whatsapp) return null;

  const message = "Hola Esteban, vi tu sitio y quiero consultarte por un proyecto.";
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribime por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-forest p-3.5 text-paper shadow-[0_12px_30px_rgba(13,20,18,0.25)] transition-colors hover:bg-forest-soft"
    >
      <Whatsapp className="size-5" />
      <span className="hidden font-display text-sm font-semibold sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
