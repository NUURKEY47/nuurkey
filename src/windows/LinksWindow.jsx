import React from "react";
import { SITE_DATA } from "../data/siteData.js";

function LinkIcon({ id }) {
  switch (id) {
    case "github":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path className="duo-fill" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect className="duo-fill" x="2" y="2" width="20" height="20" rx="4" />
          <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
        </svg>
      );
    case "twitter":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path className="duo-fill" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );
    case "rentora":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path className="duo-fill" d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
          <path d="M9 9h.01M9 13h.01M9 17h.01" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect className="duo-fill" x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" />
        </svg>
      );
    case "tiktok":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect className="duo-fill" x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 12a3 3 0 1 0 3 3V6c.6 1.8 2.2 3 4 3" />
        </svg>
      );
    case "forexflow":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect className="duo-fill" x="3" y="3" width="18" height="18" rx="3" />
          <path d="m7 15 4-4 3 3 4-5" />
        </svg>
      );
    default:
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect className="duo-fill" x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
  }
}

export default function LinksWindow() {
  return (
    <div className="space-y-6 py-2">
      <div className="flex flex-wrap items-center justify-center gap-8 py-2 text-center">
        {SITE_DATA.linksGrid.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="module-tile flex flex-col items-center justify-center gap-2 cursor-pointer"
          >
            <LinkIcon id={item.id} />
            <span className="mono text-xs sm:text-sm font-semibold">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="pt-2 flex justify-center">
        <div
          className="px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-xs text-center"
          style={{ color: "var(--ink-muted)" }}
        >
          clicking any of the links will open a new tab!
        </div>
      </div>
    </div>
  );
}
