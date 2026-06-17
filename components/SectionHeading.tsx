import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent" />
        <span className="text-muted">{eyebrow}</span>
      </div>
      <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  );
}
