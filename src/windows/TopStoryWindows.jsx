import React, { useState } from "react";
import { SITE_DATA } from "../data/siteData.js";

const ARCH_STEPS = [
  {
    id: "auth",
    label: "1. Auth & Validation",
    title: "Stateless JWT, Role Guards (RBAC) & Zod Schemas",
    desc: "Every incoming request is verified through JWT middleware, role-based access closures (Admin, Landlord, Tenant), and strict Zod payload validation before reaching any controller.",
  },
  {
    id: "layers",
    label: "2. 4-Layer API",
    title: "Routes ➔ Controller ➔ Service ➔ Repository",
    desc: "Clean separation of concerns: Controllers handle HTTP requests/responses, Services enforce business logic and ownership security (IDOR protection), and Repositories run Prisma SQL queries.",
  },
  {
    id: "db",
    label: "3. ACID Database",
    title: "PostgreSQL, Prisma ORM, B-Tree Indexes & $transaction",
    desc: "Financial operations—such as recording M-Pesa C2B payments and updating invoice ledgers—are wrapped inside atomic PostgreSQL transactions with unique receipt constraints.",
  },
  {
    id: "vps",
    label: "4. Docker & VPS",
    title: "Docker Compose + Linux VPS + Caddy HTTPS + Cloudflare",
    desc: "The React UI, Express API, and PostgreSQL database run inside isolated Docker containers on a Linux VPS, with Caddy managing automatic SSL and Cloudflare securing the edge.",
  },
];

/**
 * FULL-PAGE ENGINEERING & DEVOPS LANDING PAGE
 * Replaces the main desktop view when clicked, with a '← back to home' button in the navbar.
 */
export function EngineeringLandingPage({ onBack, darkMode, onToggleTheme }) {
  const { profile, workSkills } = SITE_DATA;
  const [stackFilter, setStackFilter] = useState("all");
  const [activeStep, setActiveStep] = useState(0);

  const filteredSkills = () => {
    if (stackFilter === "backend") return [...workSkills.languages, ...workSkills.backendAndDb];
    if (stackFilter === "devops") return workSkills.devopsAndTools;
    if (stackFilter === "frontend") return workSkills.frontend;
    return [
      ...workSkills.languages,
      ...workSkills.backendAndDb,
      ...workSkills.devopsAndTools,
      ...workSkills.frontend,
    ];
  };

  return (
    <div className="h-screen w-screen overflow-y-auto font-normal">
      {/* STICKY TOP NAVBAR */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b px-6 sm:px-12 h-16 flex items-center justify-between"
        style={{
          background: "var(--card-surface)",
          borderColor: "var(--card-border)",
        }}
      >
        <button
          type="button"
          onClick={onBack}
          className="mono text-xs sm:text-sm flex items-center gap-2 cursor-pointer hover:underline"
          style={{ color: "var(--accent-primary)" }}
        >
          <span>←</span>
          <span>back to nuurkey.dev</span>
        </button>

        <div className="flex items-center gap-5 mono text-xs sm:text-sm">
          <a href="#stack" className="hover:underline hidden sm:inline">
            stack
          </a>
          <a href="#architecture" className="hover:underline hidden sm:inline">
            architecture
          </a>
          <a href="#rentora" className="hover:underline hidden sm:inline">
            rentora.cc
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="text-xl cursor-pointer hover:scale-110 transition"
            title="Toggle Theme"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </header>

      {/* MAIN LANDING PAGE CONTAINER */}
      <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16 space-y-14">
        {/* 1. HERO & BACKGROUND */}
        <section className="space-y-4">
          <span
            className="mono text-xs uppercase tracking-wider"
            style={{ color: "var(--accent-primary)" }}
          >
            engineering &amp; infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight leading-tight">
            building reliable{" "}
            <span style={{ color: "var(--accent-primary)" }}>
              backend systems &amp; DevOps pipelines
            </span>{" "}
            from the ground up.
          </h1>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--ink-muted)" }}
          >
            I’m Noor Mohamed Abdikadir, a backend-focused software engineer based in Nairobi (B.Sc. in Information Technology, Mount Kenya University). I build production REST APIs, relational PostgreSQL architectures, and Dockerized Linux VPS deployments—understanding every layer below the abstraction.
          </p>
        </section>

        {/* 2. INTERACTIVE TECH STACK */}
        <section id="stack" className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="mono text-sm sm:text-base font-semibold uppercase tracking-wider">
              TECH STACK
            </h2>
            <div className="flex flex-wrap gap-2 mono text-xs">
              {[
                { id: "all", label: "all" },
                { id: "backend", label: "backend & db" },
                { id: "devops", label: "devops & vps" },
                { id: "frontend", label: "frontend" },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setStackFilter(t.id)}
                  className={`px-3 py-1 rounded-full border cursor-pointer transition ${
                    stackFilter === t.id
                      ? "border-teal-600 underline"
                      : "border-slate-300 dark:border-slate-700 opacity-75 hover:opacity-100"
                  }`}
                  style={stackFilter === t.id ? { color: "var(--accent-primary)" } : {}}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs sm:text-sm pt-1">
            {filteredSkills().map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700"
                style={{ background: "var(--card-surface)" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 3. INTERACTIVE ARCHITECTURE EXPLORER */}
        <section id="architecture" className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          <h2 className="mono text-sm sm:text-base font-semibold uppercase tracking-wider">
            HOW I ARCHITECT &amp; TACKLE PROJECTS
          </h2>
          <p className="text-xs sm:text-sm" style={{ color: "var(--ink-muted)" }}>
            click any layer below to see how a request flows through my backend systems:
          </p>

          {/* Interactive Step Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mono text-xs">
            {ARCH_STEPS.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-lg border text-left cursor-pointer transition ${
                  activeStep === idx
                    ? "border-teal-600"
                    : "border-slate-200 dark:border-slate-700 opacity-75 hover:opacity-100"
                }`}
                style={
                  activeStep === idx
                    ? { background: "var(--icon-fill)", color: "var(--accent-primary)" }
                    : { background: "var(--card-surface)" }
                }
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Selected Step Display */}
          <div
            className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5"
            style={{ background: "var(--card-surface)" }}
          >
            <h3
              className="text-base sm:text-lg font-medium"
              style={{ color: "var(--accent-primary)" }}
            >
              {ARCH_STEPS[activeStep].title}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              {ARCH_STEPS[activeStep].desc}
            </p>
          </div>
        </section>

        {/* 4. RENTORA MAIN FEATURES */}
        <section id="rentora" className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mono text-sm sm:text-base font-semibold uppercase tracking-wider">
              FLAGSHIP PROJECT: RENTORA (RENTORA.CC)
            </h2>
            <a
              href={profile.rentoraUrl}
              target="_blank"
              rel="noreferrer"
              className="mono text-xs underline"
              style={{ color: "var(--accent-primary)" }}
            >
              visit rentora.cc ↗
            </a>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-[15px]" style={{ color: "var(--ink-muted)" }}>
            <li>
              automated monthly cron invoicing engine using O(1) Set deduplication to prevent duplicate tenant billing,
            </li>
            <li>
              idempotent M-Pesa Daraja C2B payment webhooks wrapped in PostgreSQL ACID transactions (prisma.$transaction),
            </li>
            <li>
              instant multi-channel SMS (Africa’s Talking) and email (Resend) payment receipts and monthly statements, and
            </li>
            <li>
              containerized React, Express, and PostgreSQL stack deployed on a Linux VPS with Caddy HTTPS and Cloudflare.
            </li>
          </ul>
        </section>

        {/* 5. BOTTOM HIRE / CONTACT CTA */}
        <section className="pt-4 pb-10 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-medium">
              open for remote Backend &amp; DevOps / CI-CD roles
            </h3>
            <p className="text-xs sm:text-sm" style={{ color: "var(--ink-muted)" }}>
              reach out directly via email at{" "}
              <a
                href={`mailto:${profile.email}`}
                className="underline"
                style={{ color: "var(--accent-primary)" }}
              >
                {profile.email}
              </a>
            </p>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="mono text-xs underline cursor-pointer self-start sm:self-center"
            style={{ color: "var(--accent-primary)" }}
          >
            ← return to main hub
          </button>
        </section>
      </div>
    </div>
  );
}

const FX_STEPS = [
  {
    label: "1. Session Timing",
    title: "London & New York Session Liquidity Sweeps",
    detail:
      "Instead of staring at charts all day, I focus strictly on London and NY session opens where institutional liquidity sweeps key highs and lows before displacement.",
  },
  {
    label: "2. Mistake Replay",
    title: "Daily Mistake-Only Backtesting",
    detail:
      "Most traders backtest winning setups just to feel good. Every day, I isolate only my losing or mistimed executions, replay them candle-by-candle, and refine my entry rules.",
  },
  {
    label: "3. Data Analytics",
    title: "Tracking Expectancy in ForexFlow Analytics",
    detail:
      "Every trade is logged with structured R-Multiple risk data so I can track Profit Factor, Win Rate %, and session performance quantitatively.",
  },
];

/**
 * FULL-PAGE FOREX & FOREXFLOW LANDING PAGE
 * Replaces the main desktop view when clicked, with a '← back to home' button in the navbar.
 */
export function ForexLandingPage({ onBack, darkMode, onToggleTheme }) {
  const { profile } = SITE_DATA;
  const [activeFxStep, setActiveFxStep] = useState(0);

  return (
    <div className="h-screen w-screen overflow-y-auto font-normal">
      {/* STICKY TOP NAVBAR */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b px-6 sm:px-12 h-16 flex items-center justify-between"
        style={{
          background: "var(--card-surface)",
          borderColor: "var(--card-border)",
        }}
      >
        <button
          type="button"
          onClick={onBack}
          className="mono text-xs sm:text-sm flex items-center gap-2 cursor-pointer hover:underline"
          style={{ color: "var(--accent-primary)" }}
        >
          <span>←</span>
          <span>back to nuurkey.dev</span>
        </button>

        <div className="flex items-center gap-5 mono text-xs sm:text-sm">
          <a href="#journey" className="hover:underline hidden sm:inline">
            background
          </a>
          <a href="#protocol" className="hover:underline hidden sm:inline">
            mistake protocol
          </a>
          <a href="#launch" className="hover:underline hidden sm:inline">
            upcoming site
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="text-xl cursor-pointer hover:scale-110 transition"
            title="Toggle Theme"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </header>

      {/* MAIN LANDING PAGE CONTAINER */}
      <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16 space-y-14">
        {/* 1. HERO & 4-YEAR BACKGROUND */}
        <section id="journey" className="space-y-4">
          <span
            className="mono text-xs uppercase tracking-wider"
            style={{ color: "var(--accent-primary)" }}
          >
            quantitative forex desk • since 2023
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight leading-tight">
            snr trader —{" "}
            <span style={{ color: "var(--accent-primary)" }}>
              turning discipline into payouts.
            </span>
          </h1>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--ink-muted)" }}
          >
            I have been actively trading the Forex markets for 4 years (since 2023). Through four years of real screen time, market cycles, and earning profitable payouts, I learned that consistency comes strictly from probability, risk management, and mistake-driven backtesting.
          </p>
        </section>

        {/* 2. INTERACTIVE MISTAKE PROTOCOL */}
        <section id="protocol" className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          <h2 className="mono text-sm sm:text-base font-semibold uppercase tracking-wider">
            MISTAKE-DRIVEN BACKTESTING PROTOCOL
          </h2>
          <p className="text-xs sm:text-sm" style={{ color: "var(--ink-muted)" }}>
            click any step below to see how I approach the markets every day:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mono text-xs">
            {FX_STEPS.map((s, idx) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setActiveFxStep(idx)}
                className={`p-3 rounded-lg border text-left cursor-pointer transition ${
                  activeFxStep === idx
                    ? "border-teal-600"
                    : "border-slate-200 dark:border-slate-700 opacity-75 hover:opacity-100"
                }`}
                style={
                  activeFxStep === idx
                    ? { background: "var(--icon-fill)", color: "var(--accent-primary)" }
                    : { background: "var(--card-surface)" }
                }
              >
                {s.label}
              </button>
            ))}
          </div>

          <div
            className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5"
            style={{ background: "var(--card-surface)" }}
          >
            <h3
              className="text-base sm:text-lg font-medium"
              style={{ color: "var(--accent-primary)" }}
            >
              {FX_STEPS[activeFxStep].title}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              {FX_STEPS[activeFxStep].detail}
            </p>
          </div>
        </section>

        {/* 3. FOREXFLOW ANALYTICS */}
        <section className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
          <h2 className="mono text-sm sm:text-base font-semibold uppercase tracking-wider">
            FOREXFLOW ANALYTICS (TYPESCRIPT PLATFORM)
          </h2>
          <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-[15px]" style={{ color: "var(--ink-muted)" }}>
            <li>
              building a custom trade-journaling application focused on quantitative session analysis,
            </li>
            <li>
              automated calculations for Profit Factor, Win Rate %, and Risk-to-Reward (R-Multiple) metrics, and
            </li>
            <li>
              built with TypeScript, Node.js, PostgreSQL, and React.
            </li>
          </ul>
        </section>

        {/* 4. LAST SECTION: UPCOMING FOREX WEBSITE ANNOUNCEMENT */}
        <section id="launch" className="pt-2 pb-12 border-t border-slate-200 dark:border-slate-800">
          <div
            className="p-6 rounded-xl border border-slate-300 dark:border-slate-700 space-y-2"
            style={{ background: "var(--icon-fill)" }}
          >
            <span
              className="mono text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--accent-primary)" }}
            >
              announcement • launching soon
            </span>
            <h3 className="text-lg sm:text-xl font-medium">
              Dedicated Forex &amp; ForexFlow Analytics Website Coming Soon
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              I am building a standalone website dedicated entirely to my Forex trading desk, backtesting logs, and ForexFlow Analytics. Want updates when it launches? Email me at{" "}
              <a
                href={`mailto:${profile.email}`}
                className="underline"
                style={{ color: "var(--accent-primary)" }}
              >
                {profile.email}
              </a>
              .
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onBack}
                className="mono text-xs underline cursor-pointer"
                style={{ color: "var(--accent-primary)" }}
              >
                ← back to nuurkey.dev main window
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
