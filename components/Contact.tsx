"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

const methods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: MailIcon, external: false },
  { label: "LinkedIn", value: "in/nahid-001-nayan", href: profile.linkedin, icon: LinkedInIcon, external: true },
  { label: "GitHub", value: "github.com/Nahid-os", href: profile.github, icon: GitHubIcon, external: true },
];

function LondonClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/London",
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="tabular-nums">{time ?? "--:--"}</span>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-paper sm:p-12 lg:p-14">
            {/* ambient glows */}
            <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-accent/30 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-accent/15 blur-[110px]" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Left */}
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  05 — Contact
                </div>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl">
                  Let&apos;s build something great together.
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-paper/65 sm:text-lg">
                  I&apos;m open to full-stack and machine-learning roles. Whether you have a
                  question or just want to say hi, my inbox is always open.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/[0.06] px-3.5 py-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Available for work
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/[0.06] px-3.5 py-1.5 text-paper/70">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" strokeLinecap="round" />
                    </svg>
                    <LondonClock /> London
                  </span>
                </div>
              </div>

              {/* Right: contact methods */}
              <div className="space-y-3">
                {methods.map(({ label, value, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-paper/10 bg-paper/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-paper/[0.08]"
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-paper/10 text-paper transition-colors duration-300 group-hover:bg-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-paper/45">
                        {label}
                      </div>
                      <div className="truncate font-medium text-paper">{value}</div>
                    </div>
                    <span className="text-paper/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
