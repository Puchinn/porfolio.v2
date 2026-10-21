"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";

import { submitContact, type ContactState } from "@/app/actions/contact";
import { isServiceId, services, type ServiceId } from "@/content/site";
import { buttonClass } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 w-full border-b border-ink/25 bg-transparent py-2.5 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-forest";

const errorClass = "mt-1 font-display text-[11px] text-warn";

export function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("servicio");
  const initialService: ServiceId | "no-se" = isServiceId(requested ?? undefined)
    ? (requested as ServiceId)
    : "no-se";
  const [service, setService] = useState<ServiceId | "no-se">(initialService);
  const [lastInitial, setLastInitial] =
    useState<ServiceId | "no-se">(initialService);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const serviceRef = useRef<HTMLSelectElement>(null);
  const budgetRef = useRef<HTMLSelectElement>(null);

  if (initialService !== lastInitial) {
    setLastInitial(initialService);
    setService(initialService);
  }

  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  // React 19 resetea el formulario al terminar la acción. Los inputs de texto se
  // restauran solos, pero los <select> necesitan volver a sincronizarse.
  useEffect(() => {
    if (serviceRef.current && serviceRef.current.value !== service) {
      serviceRef.current.value = service;
    }
    if (budgetRef.current && budgetRef.current.value !== budget) {
      budgetRef.current.value = budget;
    }
  }, [state, service, budget]);

  if (state.status === "success") {
    return (
      <div className="flex h-full min-h-[28rem] flex-col justify-center border border-ink/10 bg-paper p-8 text-ink sm:p-10">
        <CheckCircle2 className="size-10 text-forest" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-semibold">
          Mensaje enviado.
        </h3>
        <p className="mt-2 max-w-sm text-muted">
          Te respondo en menos de 24 horas hábiles. Si querés adelantar, podés
          escribirme por WhatsApp o email.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="border border-ink/10 bg-paper p-6 text-ink sm:p-8"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-display text-[11px] font-semibold text-muted"
          >
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Cómo te llamás"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={cn(inputClass, state.errors?.name && "border-warn")}
          />
          {state.errors?.name ? (
            <p className={errorClass}>{state.errors.name}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-display text-[11px] font-semibold text-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vos@empresa.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={cn(inputClass, state.errors?.email && "border-warn")}
          />
          {state.errors?.email ? (
            <p className={errorClass}>{state.errors.email}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="service"
            className="font-display text-[11px] font-semibold text-muted"
          >
            Qué necesitás
          </label>
          <select
            id="service"
            name="service"
            ref={serviceRef}
            value={service}
            onChange={(event) =>
              setService(event.target.value as ServiceId | "no-se")
            }
            className={cn(inputClass, "bg-paper")}
          >
            <option value="no-se">Todavía no lo sé</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
          {state.errors?.service ? (
            <p className={errorClass}>{state.errors.service}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="budget"
            className="font-display text-[11px] font-semibold text-muted"
          >
            Presupuesto estimado
          </label>
          <select
            id="budget"
            name="budget"
            ref={budgetRef}
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            className={cn(inputClass, "bg-paper")}
          >
            <option value="">Prefiero hablarlo</option>
            <option value="menos-500">Menos de USD 500</option>
            <option value="500-1500">USD 500 – 1.500</option>
            <option value="1500-3000">USD 1.500 – 3.000</option>
            <option value="mas-3000">Más de USD 3.000</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="font-display text-[11px] font-semibold text-muted"
        >
          Contame el proyecto
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Qué hacés, qué necesitás resolver y para cuándo."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={cn(
            inputClass,
            "resize-y",
            state.errors?.message && "border-warn",
          )}
        />
        {state.errors?.message ? (
          <p className={errorClass}>{state.errors.message}</p>
        ) : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="mt-6 border-l-2 border-warn pl-3 font-display text-sm text-warn"
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className={buttonClass("lime", "mt-8 w-full")}
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          "Enviar consulta"
        )}
      </button>

      <p className="mt-4 font-display text-[11px] leading-relaxed text-muted">
        Tus datos se usan solo para responderte. Nada de listas de correo ni
        terceros.
      </p>
    </form>
  );
}
