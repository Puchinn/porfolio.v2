import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "lime";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-forest text-paper hover:bg-forest-soft",
  secondary: "border border-ink/20 text-ink hover:border-ink/60",
  lime: "bg-lime text-ink hover:bg-[#a9d423]",
};

export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}
