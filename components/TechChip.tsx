import { techIcons } from "@/lib/data";

export function TechChip({ name }: { name: string }) {
  const icon = techIcons[name];
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-sm text-ink/80 transition-colors hover:border-accent/50">
      {icon ? (
        <i className={`${icon} text-base leading-none`} aria-hidden />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      )}
      {name}
    </span>
  );
}

/** Larger logo tile used in the skills grid. */
export function TechLogo({ name }: { name: string }) {
  const icon = techIcons[name];
  return (
    <div className="group flex flex-col items-center gap-2 rounded-2xl border border-line bg-card p-4 card-hover">
      <div className="flex h-10 w-10 items-center justify-center">
        {icon ? (
          <i
            className={`${icon} text-3xl leading-none transition-transform group-hover:scale-110`}
            aria-hidden
          />
        ) : (
          <span className="font-display text-lg font-bold text-accent">
            {name.slice(0, 2)}
          </span>
        )}
      </div>
      <span className="text-center text-xs font-medium text-muted">{name}</span>
    </div>
  );
}
