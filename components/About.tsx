"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import { stats, education } from "@/lib/data";

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
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-card p-7 card-hover sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative font-mono text-xs uppercase tracking-[0.18em] text-accent">
                ● Profile
              </div>
              <p className="relative mt-6 text-xl font-medium leading-snug text-ink sm:text-[1.7rem]">
                I build <span className="text-accent">production-grade web apps</span> and{" "}
                <span className="text-accent">machine-learning systems</span> — owning problems{" "}
                <span className="text-accent">end to end</span> and shipping clear, reliable
                outcomes with cross-functional teams.
              </p>
              <div className="relative mt-7 flex flex-wrap gap-2 text-sm">
                {["Full-stack", "Machine learning", "Search & data", "Ownership"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-paper px-3 py-1 text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stats with count-up */}
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="group flex h-full flex-col justify-center rounded-3xl border border-line bg-card p-6 card-hover">
                <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}

          {/* Location */}
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

          {/* Status */}
          <Reveal delay={0.06}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-ink p-6 text-paper card-hover">
              <div className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-accent/40 blur-2xl" />
              <div className="relative font-mono text-xs uppercase tracking-[0.18em] text-paper/60">
                Status
              </div>
              <div className="relative flex items-center gap-2 font-display text-xl font-bold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
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
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{education.degree}</h3>
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
