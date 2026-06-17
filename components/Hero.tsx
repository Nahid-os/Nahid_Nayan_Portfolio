"use client";

import { motion } from "framer-motion";
import { profile, featuredTech, techIcons } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

function LogoMarquee() {
  const row = [...featuredTech, ...featuredTech];
  return (
    <div className="marquee-mask relative overflow-hidden py-2">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((name, i) => {
          const icon = techIcons[name];
          return (
            <div key={name + i} className="flex items-center gap-2.5 opacity-80">
              {icon ? (
                <i className={`${icon} text-3xl leading-none`} aria-hidden />
              ) : (
                <span className="h-2 w-2 rounded-full bg-accent" />
              )}
              <span className="whitespace-nowrap text-sm font-medium text-muted">
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 swiss-grid opacity-60" />
      <div className="pointer-events-none absolute -right-32 -top-20 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* meta rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line pb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for work
          </span>
          <span>{profile.location}</span>
          <span className="hidden sm:inline">Portfolio — 2026</span>
        </motion.div>

        {/* headline */}
        <div className="grid gap-10 pt-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="font-mono text-sm text-accent"
            >
              Md Nahid Husen Nayan
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-4 font-display text-[2.7rem] font-bold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-[5.5rem]"
            >
              Full-Stack
              <br />& <span className="text-accent-underline">Machine</span>
              <br />
              Learning Engineer
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="lg:pb-4"
          >
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all hover:bg-accent"
              >
                View my work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 border-y border-line py-5"
        >
          <p className="mb-3 px-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Tools I build with
          </p>
          <LogoMarquee />
        </motion.div>
      </div>
    </section>
  );
}
