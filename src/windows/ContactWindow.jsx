import React from "react";
import { SITE_DATA } from "../data/siteData.js";

export default function ContactWindow() {
  const { contact, profile } = SITE_DATA;

  return (
    <div className="text-center space-y-5 py-2 px-2 font-normal">
      <h2 className="mono text-xl sm:text-2xl font-semibold tracking-tight">
        {contact.heading}
      </h2>

      <p
        className="text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-normal"
        style={{ color: "var(--ink-muted)" }}
      >
        {contact.description}
      </p>

      {/* Clean Original Developer Mail Illustration */}
      <div className="py-2 flex justify-center">
        <div
          className="w-28 h-28 rounded-2xl border flex items-center justify-center"
          style={{
            borderColor: "var(--card-border)",
            background: "var(--bg-footer-band)",
          }}
        >
          <svg
            className="w-16 h-16 text-teal-800 dark:text-teal-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <rect x="2" y="4" width="20" height="16" rx="3" fill="currentColor" fillOpacity="0.15" />
            <path d="m2 7 10 7 10-7" />
            <path d="M16 19h4M18 17v4" />
          </svg>
        </div>
      </div>

      <div className="space-y-1 text-xs sm:text-sm font-normal">
        <p>
          {contact.emailLabel}
          <a
            href={`mailto:${profile.email}`}
            className="underline font-normal"
            style={{ color: "var(--accent-primary)" }}
          >
            {profile.email}
          </a>
        </p>
        <p style={{ color: "var(--ink-muted)" }}>{contact.subButtonNote}</p>
      </div>

      <div className="pt-1 flex justify-center">
        <a
          href={`mailto:${profile.email}`}
          className="px-6 py-2.5 rounded-lg font-medium text-xs sm:text-sm text-white hover:opacity-90 transition"
          style={{ background: "var(--accent-primary)" }}
        >
          {contact.buttonText}
        </a>
      </div>
    </div>
  );
}
