"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { nav } from "@/content/site";
import { buttonClass } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="size-2.5 bg-forest" aria-hidden="true" />
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Esteban Sayago
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <a
              href="#contacto"
              className={buttonClass("primary", "px-5 py-2.5")}
            >
              Hablemos
            </a>
          </div>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="menu-movil" className="border-t border-ink/10 bg-paper md:hidden">
          <nav aria-label="Principal móvil" className="shell flex flex-col py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-3 font-display text-base font-medium last:border-none"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className={buttonClass("primary", "mt-4 w-full")}
            >
              Hablemos
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
