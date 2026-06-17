"use client";

import { motion } from "framer-motion";

/** A faux browser frame wrapper for the mockups. */
function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_20px_50px_-30px_rgba(23,20,15,0.45)]">
      <div className="flex items-center gap-2 border-b border-line bg-card px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-paper px-3 py-1 font-mono text-[11px] text-muted">
          {url}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

const books = [
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", cover: "from-violet-500 to-indigo-700" },
  { title: "Harry Potter and the Deathly Hallows", author: "J.K. Rowling", cover: "from-amber-500 to-orange-700" },
  { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", cover: "from-emerald-500 to-teal-700" },
  { title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling", cover: "from-rose-500 to-red-700" },
];

const activeFilters = ["Paranormal", "4★ & up", "1951–2000", "English"];

function Heart() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/60 backdrop-blur">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="#2dd4bf">
        <path d="M12 21s-7.5-4.8-10-9.3C.4 8.5 2 5 5.3 5c2 0 3.3 1.2 4.2 2.4C10.4 6.2 11.7 5 13.7 5 17 5 18.6 8.5 17 11.7 14.5 16.2 12 21 12 21z" />
      </svg>
    </span>
  );
}

/** Dark "BookFinder" app preview, mirroring the real product UI. */
export function SearchVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900 to-indigo-950 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.7)]">
      {/* browser bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[10px] text-slate-400">
          bookfinder.app
        </span>
      </div>

      <div className="p-4">
        {/* app header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-display text-sm font-bold text-teal-400">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h11a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4z" />
              <path d="M17 6h3v14H6" />
            </svg>
            BookFinder
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#2dd4bf">
              <path d="M12 21s-7.5-4.8-10-9.3C.4 8.5 2 5 5.3 5c2 0 3.3 1.2 4.2 2.4C10.4 6.2 11.7 5 13.7 5 17 5 18.6 8.5 17 11.7 14.5 16.2 12 21 12 21z" />
            </svg>
            <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Jack
            </span>
          </div>
        </div>

        {/* search bar */}
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1 pl-3">
          <span className="text-sm text-white/85">Harry Potter</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="h-4 w-px bg-teal-400"
          />
          <button className="ml-auto flex items-center gap-1.5 rounded-md bg-teal-500 px-3 py-1.5 text-[11px] font-semibold text-slate-900">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3-3" strokeLinecap="round" />
            </svg>
            Search
          </button>
        </div>

        {/* results header */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-white">123 results found</span>
            <span className="ml-2 text-[10px] text-slate-400">6 filters applied</span>
          </div>
          <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] text-slate-300">
            Sort: Popularity ▾
          </span>
        </div>

        {/* active filter chips */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {activeFilters.map((f) => (
            <span
              key={f}
              className="flex items-center gap-1 rounded-full bg-teal-500/15 px-2 py-0.5 text-[9px] text-teal-300"
            >
              {f} <span className="text-teal-500/70">×</span>
            </span>
          ))}
        </div>

        {/* book grid */}
        <div className="mt-3 grid grid-cols-4 gap-2.5">
          {books.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div
                className={`relative flex aspect-[3/4] flex-col justify-end rounded-md bg-gradient-to-br ${b.cover} p-1.5 shadow-md`}
              >
                <div className="absolute right-1 top-1">
                  <Heart />
                </div>
                <p className="text-[8px] font-bold leading-[1.1] text-white line-clamp-3 drop-shadow">
                  {b.title}
                </p>
              </div>
              <p className="mt-1 truncate text-[8px] text-slate-400">{b.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HealthVisual() {
  const features = [
    { label: "Triglycerides", w: "92%" },
    { label: "HDL", w: "74%" },
    { label: "LDL", w: "61%" },
    { label: "Glucose", w: "48%" },
    { label: "BMI", w: "33%" },
  ];
  return (
    <Frame url="health.dashboard/predict">
      <div className="flex items-center gap-5">
        {/* risk gauge */}
        <div className="relative h-24 w-24 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="h-24 w-24 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e4e0d6" strokeWidth="3.5" />
            <motion.circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#ea580c"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="97.4"
              initial={{ strokeDashoffset: 97.4 }}
              whileInView={{ strokeDashoffset: 27 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-xl font-bold text-ink">72%</span>
            <span className="text-[9px] text-muted">risk</span>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">
            ● High risk
          </span>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Type 2 diabetes risk predicted by LightGBM + XGBoost ensemble.
          </p>
        </div>
      </div>

      {/* SHAP feature bars */}
      <div className="mt-5">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">
          SHAP — top contributing features
        </div>
        <div className="space-y-2">
          {features.map((f, i) => (
            <div key={f.label} className="flex items-center gap-3">
              <span className="w-20 flex-shrink-0 text-right text-[11px] text-ink/70">
                {f.label}
              </span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-line/60">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: f.w }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function ProjectVisual({ kind }: { kind: "search" | "health" }) {
  return kind === "search" ? <SearchVisual /> : <HealthVisual />;
}
