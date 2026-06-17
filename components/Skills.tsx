"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, techIcons } from "@/lib/data";

const categories = ["All", ...skillGroups.map((g) => g.label)];

type Item = { name: string; category: string };
const allItems: Item[] = skillGroups.flatMap((g) =>
  g.skills.map((s) => ({ name: s, category: g.label }))
);
// De-duplicate for the "All" view (e.g. SQL appears in two groups).
const allUnique = Array.from(new Map(allItems.map((i) => [i.name, i])).values());

function SkillTile({ name }: { name: string }) {
  const icon = techIcons[name];
  return (
    <div className="group relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-line bg-card p-5 card-hover">
      {/* accent glow on hover */}
      <span className="pointer-events-none absolute inset-x-8 top-3 h-12 rounded-full bg-accent/0 blur-2xl transition-all duration-300 group-hover:bg-accent/30" />
      <div className="relative flex h-12 w-12 items-center justify-center">
        {icon ? (
          <i
            className={`${icon} text-[2.6rem] leading-none transition-transform duration-300 group-hover:scale-110`}
            aria-hidden
          />
        ) : (
          <span className="font-display text-xl font-bold text-accent">{name.slice(0, 2)}</span>
        )}
      </div>
      <span className="relative text-center text-xs font-medium text-muted transition-colors group-hover:text-ink">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? allUnique : allItems.filter((i) => i.category === active);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="The toolkit."
          description="A broad stack across languages, frameworks, data systems and machine learning. Filter by category to explore."
        />

        {/* Filter pills */}
        <Reveal className="mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {active === c && (
                  <motion.span
                    layoutId="skillPill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    active === c ? "text-paper" : "text-muted hover:text-ink"
                  }`}
                >
                  {c}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Logo grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          <AnimatePresence mode="popLayout">
            {items.map((it) => (
              <motion.div
                key={it.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <SkillTile name={it.name} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
