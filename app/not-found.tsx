import Link from "next/link";

import { buttonClass } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col justify-center py-20">
      <p className="font-display text-[11px] text-muted">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Esta página no existe.
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        Puede que el link esté viejo o mal escrito. Volvé al inicio y seguimos
        desde ahí.
      </p>
      <Link href="/" className={buttonClass("primary", "mt-8 self-start")}>
        Volver al inicio
      </Link>
    </section>
  );
}
