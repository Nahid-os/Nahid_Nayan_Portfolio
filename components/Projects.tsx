"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TechChip } from "./TechChip";
import { ProjectVisual } from "./ProjectVisuals";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: -200, y: -200, on: false });
  const reversed = index % 2 === 1;

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setSpot((s) => ({ ...s, on: false }))}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-card p-6 sm:p-8 lg:p-10"
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: spot.on ? 1 : 0,
          background: `radial-gradient(420px circle at ${spot.x}px ${spot.y}px, rgba(234,88,12,0.10), transparent 70%)`,
        }}
      />

      <div
        className={`relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Text column */}
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
            <span className="text-accent">Project {String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-accent/40" />
          </div>

          <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 font-medium text-ink/70">{project.subtitle}</p>
          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

          {/* metric badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-line bg-paper px-4 py-2.5 transition-colors group-hover:border-accent/30"
              >
                <div className="font-display text-lg font-bold text-accent">{m.value}</div>
                <div className="text-[11px] uppercase tracking-wide text-muted">{m.label}</div>
              </div>
            ))}
          </div>

          {/* highlights */}
          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h, j) => (
              <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                <span className="mt-0.5 font-mono text-xs text-accent">
                  {String(j + 1).padStart(2, "0")}
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <TechChip key={s} name={s} />
            ))}
          </div>
        </div>

        {/* Visual column */}
        <div className="lg:px-2">
          <ProjectVisual kind={project.visual} />
        </div>
      </div>
    </motion.div>
  );
}

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

        <div className="space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
