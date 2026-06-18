"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profile, featuredTech, techIcons } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 35 : 80;
    const t = setTimeout(() => {
      const next = deleting
        ? current.substring(0, sub.length - 1)
        : current.substring(0, sub.length + 1);
      setSub(next);
      if (!deleting && next === current) setTimeout(() => setDeleting(true), 1500);
      else if (deleting && next === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [sub, deleting, index, words]);

  return (
    <span className="text-accent">
      {sub}
      <span className="ml-0.5 inline-block h-[1.05em] w-[2px] -translate-y-[2px] animate-pulse bg-accent align-middle" />
    </span>
  );
}

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function CapIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 9 12 5 2 9l10 4 10-4Z" />
      <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

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
              <span className="whitespace-nowrap text-sm font-medium text-muted">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [glow, setGlow] = useState({ x: 0.7, y: 0.2 });

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setGlow({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  }

  const facts = [
    { icon: <PinIcon />, label: "Based in", value: "London, United Kingdom" },
    { icon: <CapIcon />, label: "Education", value: "First-Class BSc (Hons) CS" },
    { icon: <SparkIcon />, label: "Focus", value: "Full-Stack · Machine Learning" },
  ];

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden pt-28 sm:pt-36"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0 swiss-grid opacity-50" />
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-200"
        style={{
          background: `radial-gradient(600px circle at ${glow.x * 100}% ${glow.y * 100}%, rgba(234,88,12,0.10), transparent 60%)`,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]"
      />

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

        <div className="grid gap-10 pt-12 lg:grid-cols-[1.45fr_1fr] lg:items-center">
          {/* left: name + role */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="font-mono text-sm text-accent"
            >
              — Hello, I&apos;m
            </motion.p>

            <h1 className="mt-3 font-display text-[2.9rem] font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {["Md Nahid", "Husen", "Nayan"].map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease }}
                    className={`inline-block ${i === 2 ? "text-accent-underline" : ""}`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="mt-5 h-8 font-display text-xl font-medium text-ink sm:text-2xl"
            >
              <Typewriter words={profile.taglines} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all hover:bg-accent"
              >
                View my work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* right: at-a-glance card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-line bg-card p-6 shadow-[0_30px_60px_-35px_rgba(23,20,15,0.4)] sm:p-7">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />

              <div className="relative flex items-center gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-soft font-display text-xl font-bold text-paper shadow-lg shadow-accent/25">
                  NN
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-card bg-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                </div>
                <div>
                  <div className="font-display text-lg font-bold leading-tight text-ink">
                    {profile.shortName}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    Open to opportunities
                  </div>
                </div>
              </div>

              <div className="relative mt-6 space-y-4">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-paper text-accent">
                      {f.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        {f.label}
                      </div>
                      <div className="truncate text-sm font-medium text-ink">{f.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 border-t border-line pt-5">
                <Link
                  href="/resume"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-center text-sm font-semibold text-paper transition-all hover:scale-[1.02]"
                >
                  View résumé
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 border-y border-line py-5"
        >
          <p className="mb-3 px-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Tools I build with
          </p>
          <LogoMarquee />
        </motion.div>

        {/* scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
        >
          Scroll to explore
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
