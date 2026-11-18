import React from "react";
import { SITE_DATA } from "../data/siteData.js";

export default function WorkWindow() {
  const { workBanner, workSkills, workProjects, profile } = SITE_DATA;

  return (
    <div className="space-y-6 text-sm sm:text-[15px] font-normal leading-relaxed pr-2">
      {/* TOP BANNER CALLOUT */}
      <div
        className="p-4 rounded-lg space-y-1 font-normal"
        style={{ background: "var(--icon-fill)" }}
      >
        <p>
          {workBanner.prefix}
          <a
            href={`mailto:${profile.email}`}
            className="underline font-normal"
            style={{ color: "var(--accent-primary)" }}
          >
            {workBanner.linkText}
          </a>
        </p>
        <p className="text-xs sm:text-sm" style={{ color: "var(--ink-muted)" }}>
          {workBanner.subtext}
        </p>
      </div>

      {/* PART 1: TECHNICAL STACK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-5 border-b border-slate-200 dark:border-slate-700">
        <div className="space-y-2.5">
          <h3 className="mono text-sm font-semibold uppercase tracking-wider">
            LANGUAGES &amp; BACKEND
          </h3>
          <div className="flex flex-wrap gap-2 text-xs font-normal">
            {[...workSkills.languages, ...workSkills.backendAndDb].map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <h3 className="mono text-sm font-semibold uppercase tracking-wider">
            DEVOPS, CLOUD &amp; FRONTEND
          </h3>
          <div className="flex flex-wrap gap-2 text-xs font-normal">
            {[...workSkills.devopsAndTools, ...workSkills.frontend].map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PART 2: SELECTED PROJECTS */}
      <div className="space-y-5">
        <h3 className="mono text-sm font-semibold uppercase tracking-wider">
          SELECTED PROJECTS
        </h3>
        {workProjects.map((proj) => (
          <div
            key={proj.title}
            className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 space-y-2"
          >
            <div className="flex flex-wrap justify-between items-center gap-2">
              <h4
                className="font-medium text-base"
                style={{ color: "var(--accent-primary)" }}
              >
                {proj.title}
              </h4>
              <span className="mono text-xs" style={{ color: "var(--ink-muted)" }}>
                ({proj.period})
              </span>
            </div>

            <ul
              className="list-disc pl-5 space-y-1 text-xs sm:text-sm font-normal"
              style={{ color: "var(--ink-muted)" }}
            >
              {proj.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-normal">
              {proj.liveUrl.startsWith("http") && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                  style={{ color: "var(--accent-primary)" }}
                >
                  live project: rentora.cc ↗
                </a>
              )}
              <a
                href={proj.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="underline"
                style={{ color: "var(--accent-primary)" }}
              >
                github repository ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
