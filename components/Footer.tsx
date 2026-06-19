import { profile } from "@/lib/data";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
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
function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: profile.github, icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon, external: false },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "/resume", label: "Résumé" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-paper">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-soft font-display text-base font-bold text-paper shadow-lg shadow-accent/25">
                NN
              </span>
              <div>
                <div className="font-display text-lg font-bold text-ink">{profile.shortName}</div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  Full-Stack & ML Engineer
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Crafting production-grade web applications and machine-learning systems. Based in
              London &amp; open to new opportunities.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Connect
            </h4>
            <div className="mt-5 flex gap-3">
              {socials.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-card text-ink transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-paper hover:shadow-lg hover:shadow-accent/25"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-block text-sm text-muted transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Giant name watermark — SVG scales the text to fit the width exactly */}
        <div className="mt-12 select-none" aria-hidden>
          <svg viewBox="0 0 1000 150" className="w-full" preserveAspectRatio="xMidYMid meet">
            <text
              x="500"
              y="120"
              textAnchor="middle"
              textLength="990"
              lengthAdjust="spacingAndGlyphs"
              fontSize="150"
              fontWeight="700"
              fill="#17140f"
              fillOpacity="0.05"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nahid Nayan
            </text>
          </svg>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href="#top" className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent">
            Back to top
            <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
