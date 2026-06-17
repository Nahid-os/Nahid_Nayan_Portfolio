"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TechChip } from "@/components/TechChip";
import {
  profile,
  experiences,
  education,
  skillGroups,
  projects,
} from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

function Section({
  index,
  title,
  children,
  delay = 0,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
      className="border-t border-line pt-7"
    >
      <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
        <span className="text-accent">{index}</span>
        <span className="h-px w-6 bg-accent/40" />
        <span className="text-muted">{title}</span>
      </div>
      {children}
    </motion.section>
  );
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-paper">
      {/* Toolbar */}
      <div className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3.5">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to site
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent sm:inline-flex"
            >
              Open PDF ↗
            </a>
            <a
              href={profile.resumeFile}
              download="Md Nahid Husen Nayan - CV.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent"
            >
              Download
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Resume sheet */}
      <div className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden rounded-3xl border border-line bg-card p-7 shadow-[0_40px_80px_-50px_rgba(23,20,15,0.45)] sm:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

          {/* Header */}
          <header className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                  {profile.name}
                </h1>
                <p className="mt-2 font-display text-lg font-medium text-accent">
                  {profile.role}
                </p>
              </div>
              <div className="hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-soft font-display text-2xl font-bold text-paper shadow-lg shadow-accent/25 sm:flex">
                NN
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                linkedin.com/in/nahid-001-nayan ↗
              </a>
            </div>
          </header>

          <div className="mt-8 space-y-8">
            {/* Summary */}
            <Section index="01" title="Profile" delay={0.05}>
              <p className="leading-relaxed text-ink/80">{profile.summaryFull}</p>
            </Section>

            {/* Experience */}
            <Section index="02" title="Experience" delay={0.1}>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.role + exp.company}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="font-display text-lg font-bold text-ink">{exp.role}</h3>
                      <span className="font-mono text-xs text-muted">{exp.period}</span>
                    </div>
                    <p className="text-sm font-medium text-accent">
                      {exp.company}
                      <span className="font-normal text-muted"> · {exp.location}</span>
                    </p>
                    <ul className="mt-3 space-y-2">
                      {exp.points.map((p, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section index="03" title="Education" delay={0.15}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-display text-lg font-bold text-ink">{education.degree}</h3>
                <span className="font-mono text-xs text-muted">{education.period}</span>
              </div>
              <p className="text-sm font-medium text-accent">{education.school}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Section>

            {/* Skills */}
            <Section index="04" title="Technical Skills" delay={0.2}>
              <div className="space-y-4">
                {skillGroups.map((g) => (
                  <div key={g.label} className="sm:flex sm:gap-4">
                    <div className="mb-2 w-40 flex-shrink-0 font-mono text-xs uppercase tracking-wide text-muted sm:mb-0 sm:pt-2">
                      {g.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {g.skills.map((s) => (
                        <TechChip key={s} name={s} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Projects */}
            <Section index="05" title="Projects" delay={0.25}>
              <div className="space-y-6">
                {projects.map((p) => (
                  <div key={p.title}>
                    <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                    <p className="text-sm font-medium text-accent">{p.subtitle}</p>
                    <ul className="mt-3 space-y-2">
                      {p.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <TechChip key={s} name={s} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </motion.article>

        {/* bottom download CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href={profile.resumeFile}
            download="Md Nahid Husen Nayan - CV.pdf"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:scale-[1.03]"
          >
            Download PDF résumé
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Back to portfolio
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
