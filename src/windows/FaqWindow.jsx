import React, { useState } from "react";
import { SITE_DATA } from "../data/siteData.js";

export default function FaqWindow() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-3 pr-1 font-normal">
      {SITE_DATA.faqs.map((item, idx) => {
        const isExpanded = openIndex === idx;
        return (
          <div
            key={item.q}
            className="rounded-lg overflow-hidden transition-all"
            style={{ background: "var(--icon-fill)" }}
          >
            <button
              type="button"
              onClick={() => toggleFaq(idx)}
              className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 cursor-pointer"
            >
              <span className="mono text-xs sm:text-sm font-medium">
                {item.q}
              </span>
              <span
                className={`mono text-sm transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>

            {isExpanded && (
              <div
                className="px-4 pb-4 pt-1 text-xs sm:text-sm font-normal leading-relaxed border-t border-teal-500/15"
                style={{ color: "var(--ink-muted)" }}
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
