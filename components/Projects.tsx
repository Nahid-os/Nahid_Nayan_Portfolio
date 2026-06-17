"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TechChip } from "./TechChip";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title="Two flagship builds."
          description="Spanning full-stack engineering, search at scale and applied machine learning."
        />

        <div className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.article className="group relative overflow-hidden rounded-3xl border border-line bg-card p-7 card-hover sm:p-10">
                {/* index watermark */}
                <span className="pointer-events-none absolute -right-2 -top-8 select-none font-display text-[8rem] font-bold leading-none text-ink/[0.03] sm:text-[11rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                      Project {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-medium text-ink/70">{p.subtitle}</p>
                    <p className="mt-4 leading-relaxed text-muted">{p.description}</p>

                    <ul className="mt-6 space-y-3">
                      {p.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                          <span className="mt-0.5 font-mono text-accent">{String(j + 1).padStart(2, "0")}</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:border-l lg:border-line lg:pl-8">
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      Tech stack
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <TechChip key={s} name={s} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
