"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TechLogo } from "./TechChip";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="The toolkit."
          description="A broad stack across languages, frameworks, data systems and machine learning."
        />

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.05}>
              <div className="grid gap-5 border-t border-line pt-6 md:grid-cols-[180px_1fr] md:gap-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">{group.label}</h3>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                  {group.skills.map((s) => (
                    <TechLogo key={s} name={s} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
