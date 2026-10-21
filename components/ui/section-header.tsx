export function SectionHeader({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <div className="grid gap-6 border-t border-ink/15 pt-6 lg:grid-cols-12 lg:items-start lg:gap-10">
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-5">
        {title}
      </h2>
      <p className="text-lg text-muted text-pretty lg:col-span-6 lg:col-start-7">
        {intro}
      </p>
    </div>
  );
}
