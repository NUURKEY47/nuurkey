import React from "react";
import { SITE_DATA } from "../data/siteData.js";

export default function AboutWindow({ openWindow }) {
  const { about, profile } = SITE_DATA;

  return (
    <div className="space-y-6 text-sm sm:text-[15px] font-normal leading-relaxed pr-2">
      {/* Top Profile Header (Removed Moya Institute from header) */}
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-200 dark:border-slate-700">
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shrink-0 flex items-center justify-center border overflow-hidden"
          style={{
            borderColor: "var(--card-border)",
            background: "var(--bg-footer-band)",
          }}
        >
          <svg
            className="w-20 h-20 text-teal-800 dark:text-teal-300 mt-2"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="32" cy="22" r="11" fill="currentColor" fillOpacity="0.15" />
            <path
              d="M14 56c2-11 10-17 18-17s16 6 18 17"
              fill="currentColor"
              fillOpacity="0.15"
            />
            <rect x="21" y="19" width="9" height="6" rx="1.5" />
            <rect x="34" y="19" width="9" height="6" rx="1.5" />
            <line x1="30" y1="22" x2="34" y2="22" />
          </svg>
        </div>

        <div className="text-center sm:text-left">
          <h2
            className="text-2xl sm:text-3xl font-medium tracking-tight"
            style={{ color: "var(--accent-primary)" }}
          >
            {about.fullName}
          </h2>
          <p className="text-xs sm:text-sm mt-1 font-normal" style={{ color: "var(--ink-muted)" }}>
            {about.roleLine1}
          </p>
          <p className="text-xs sm:text-sm mt-0.5 font-normal" style={{ color: "var(--ink-muted)" }}>
            {about.roleLine2Prefix}
            <a
              href={about.roleLine2LinkUrl}
              target="_blank"
              rel="noreferrer"
              className="underline font-normal"
              style={{ color: "var(--accent-primary)" }}
            >
              {about.roleLine2LinkText}
            </a>
          </p>
        </div>
      </div>

      {/* Intro & Bullets */}
      <div className="space-y-3 font-normal">
        <p>{about.introLine}</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>
            architect and deploy secure{" "}
            <button
              onClick={() => openWindow("work")}
              className="underline font-normal cursor-pointer"
              style={{ color: "var(--accent-primary)" }}
            >
              RESTful APIs, PostgreSQL &amp; Prisma databases
            </button>
            ,
          </li>
          <li>
            containerize &amp; manage production apps with{" "}
            <button
              onClick={() => openWindow("devlog")}
              className="underline font-normal cursor-pointer"
              style={{ color: "var(--accent-primary)" }}
            >
              Docker, Linux VPS, Caddy &amp; Cloudflare
            </button>
            ,
          </li>
          <li>
            build and scale{" "}
            <a
              href={about.roleLine2LinkUrl}
              target="_blank"
              rel="noreferrer"
              className="underline font-normal"
              style={{ color: "var(--accent-primary)" }}
            >
              Rentora (rentora.cc)
            </a>
            , and
          </li>
          <li>
            develop{" "}
            <button
              onClick={() => openWindow("fxnotes")}
              className="underline font-normal cursor-pointer"
              style={{ color: "var(--accent-primary)" }}
            >
              ForexFlow Analytics
            </button>{" "}
            for quantitative trade journaling!
          </li>
        </ul>

        <p className="pt-2">
          interested in working with me? send me an email at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="underline font-normal"
            style={{ color: "var(--accent-primary)" }}
          >
            {profile.email}
          </a>
          ! :)
        </p>
      </div>

      {/* EDUCATION (University line only) */}
      <div className="space-y-2.5 pt-1">
        <h3 className="mono text-sm sm:text-base font-semibold tracking-wider uppercase">
          EDUCATION
        </h3>
        <div className="space-y-3">
          {about.education.map((edu) => (
            <div
              key={edu.degree}
              className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-0.5"
            >
              <div className="font-normal text-base">{edu.degree}</div>
              <div
                className="mono text-[11px] tracking-wide mt-0.5"
                style={{ color: "var(--ink-muted)" }}
              >
                {edu.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OTHER INTERESTS */}
      <div className="space-y-2 pt-1">
        <h3 className="mono text-sm sm:text-base font-semibold tracking-wider uppercase">
          OTHER INTERESTS
        </h3>
        <ul className="list-disc pl-6 space-y-1 font-normal">
          {about.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>

      {/* LANGUAGE PROFICIENCY */}
      <div className="space-y-2 pt-1 pb-2">
        <h3 className="mono text-sm sm:text-base font-semibold tracking-wider uppercase">
          LANGUAGE PROFICIENCY
        </h3>
        <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-4 py-0.5 space-y-1 font-normal">
          <p>
            i have native fluency in{" "}
            <span style={{ color: "var(--accent-primary)" }}>
              {about.languages.main[0]}
            </span>
            ,{" "}
            <span style={{ color: "var(--accent-primary)" }}>
              {about.languages.main[1]}
            </span>
            , and{" "}
            <span style={{ color: "var(--accent-primary)" }}>
              {about.languages.main[2]}
            </span>
            .
          </p>
          <p className="text-xs" style={{ color: "var(--ink-muted)" }}>
            {about.languages.note}
          </p>
        </div>
      </div>
    </div>
  );
}
