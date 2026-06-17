"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { stats, education, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Engineering across the full stack and the ML lifecycle."
        />

        {/* Bento grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[minmax(0,1fr)] lg:grid-cols-4">
          {/* Intro — large */}
          <Reveal className="col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-line bg-card p-7 card-hover">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Profile
              </div>
              <p className="mt-6 text-xl font-medium leading-snug text-ink sm:text-2xl">
                I build production-grade web apps and machine-learning systems —
                owning problems end to end and shipping clear, reliable outcomes
                with cross-functional teams.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted">
                <span className="rounded-full bg-paper px-3 py-1">Full-stack</span>
                <span className="rounded-full bg-paper px-3 py-1">Machine learning</span>
                <span className="rounded-full bg-paper px-3 py-1">Search & data</span>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="flex h-full flex-col justify-center rounded-3xl border border-line bg-card p-6 card-hover">
                <div className="font-display text-4xl font-bold text-ink">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}

          {/* Location / contact */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-line bg-card p-6 card-hover">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Based in
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-ink">London</div>
                <div className="text-sm text-muted">United Kingdom</div>
              </div>
            </div>
          </Reveal>

          {/* Availability */}
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-accent p-6 text-paper card-hover">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-paper/80">
                Status
              </div>
              <div className="flex items-center gap-2 font-display text-xl font-bold">
                <span className="h-2.5 w-2.5 rounded-full bg-paper" />
                Open to roles
              </div>
            </div>
          </Reveal>

          {/* Education — wide */}
          <Reveal className="col-span-2 lg:col-span-4">
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-card p-7 card-hover sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Education
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  {education.degree}
                </h3>
                <p className="text-sm text-muted">{education.school}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.slice(0, 6).map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-muted"
                  >
                    {c}
                  </span>
                ))}
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  +{education.coursework.length - 6} more
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
