"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";

function initials(company: string) {
  const stop = new Set(["of", "the", "and", "for"]);
  const words = company
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter((w) => w && !stop.has(w.toLowerCase()));
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've worked."
          description="From end-to-end ML ownership to technical support — building, debugging and shipping."
        />

        <div className="relative">
          {/* timeline rail */}
          <div className="absolute left-[22px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-accent/40 to-transparent sm:left-[26px]" />

          <div className="space-y-5">
            {experiences.map((exp, i) => {
              const current = /present/i.test(exp.period);
              return (
                <Reveal key={exp.role + exp.company} delay={i * 0.08}>
                  <div className="group relative pl-14 sm:pl-20">
                    {/* node */}
                    <div className="absolute left-0 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-card font-display text-sm font-bold text-ink shadow-sm transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:shadow-md sm:top-6 sm:h-[54px] sm:w-[54px] sm:rounded-2xl sm:text-base">
                      {initials(exp.company)}
                    </div>

                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="relative overflow-hidden rounded-2xl border border-line bg-card p-6 transition-colors duration-300 group-hover:border-accent/40 sm:p-7"
                    >
                      {/* growing accent edge on hover */}
                      <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />

                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                            {exp.role}
                          </h3>
                          <p className="mt-1 text-muted">
                            <span className="font-medium text-ink/80">{exp.company}</span>
                            <span className="text-muted/70"> · {exp.location}</span>
                          </p>
                        </div>

                        <span
                          className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-1.5 font-mono text-xs ${
                            current
                              ? "bg-accent/10 text-accent"
                              : "border border-line bg-paper text-muted"
                          }`}
                        >
                          {current && (
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                          )}
                          {exp.period}
                        </span>
                      </div>

                      <div className="my-5 h-px w-full bg-line" />

                      <ul className="space-y-3">
                        {exp.points.map((p, j) => (
                          <li
                            key={j}
                            className="flex gap-3 leading-relaxed text-ink/80"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70 transition-colors group-hover:bg-accent" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
