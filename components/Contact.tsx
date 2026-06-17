"use client";

import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-paper sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />

            <div className="relative">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                05 — Contact
              </div>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Let&apos;s build something great together.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-paper/70">
                I&apos;m open to full-stack and machine-learning roles. Whether you have a
                question or just want to say hi, my inbox is always open.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-paper transition-all hover:bg-paper hover:text-ink"
                >
                  {profile.email}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-paper/10"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
