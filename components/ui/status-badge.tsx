import { statusLabel, type ServiceStatus } from "@/content/site";
import { cn } from "@/lib/cn";

const dot: Record<ServiceStatus, string> = {
  available: "bg-lime",
  limited: "bg-warn",
  exploring: "bg-muted/50",
};

const tone: Record<ServiceStatus, string> = {
  available: "border-forest/25 text-forest",
  limited: "border-warn/30 text-warn",
  exploring: "border-muted/30 text-muted",
};

export function StatusBadge({
  status,
  className,
}: {
  status: ServiceStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-paper/60 px-2.5 py-1 font-display text-[11px] font-semibold",
        tone[status],
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          dot[status],
          status === "available" && "status-live",
        )}
        aria-hidden="true"
      />
      {statusLabel[status]}
    </span>
  );
}
