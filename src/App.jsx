import React, { useState } from "react";
import DraggableWindow from "./components/DraggableWindow.jsx";
import AboutWindow from "./windows/AboutWindow.jsx";
import WorkWindow from "./windows/WorkWindow.jsx";
import LinksWindow from "./windows/LinksWindow.jsx";
import FaqWindow from "./windows/FaqWindow.jsx";
import ContactWindow from "./windows/ContactWindow.jsx";
import {
  EngineeringLandingPage,
  ForexLandingPage,
} from "./windows/TopStoryWindows.jsx";
import { SITE_DATA } from "./data/siteData.js";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState("home"); // "home" | "engineering" | "trading"
  const [topZ, setTopZ] = useState(100);
  const [windows, setWindows] = useState({
    about: { open: false, z: 101 },
    work: { open: false, z: 102 },
    links: { open: false, z: 103 },
    faq: { open: false, z: 104 },
    contact: { open: false, z: 105 },
  });

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.body.classList.toggle("dark-mode", next);
  };

  const bringToFront = (id) => {
    setTopZ((prev) => {
      const nextZ = prev + 1;
      setWindows((w) => ({
        ...w,
        [id]: { ...w[id], z: nextZ },
      }));
      return nextZ;
    });
  };

  const openWindow = (id) => {
    if (id === "devlog") {
      setActivePage("engineering");
      return;
    }
    if (id === "fxnotes") {
      setActivePage("trading");
      return;
    }
    setTopZ((prev) => {
      const nextZ = prev + 1;
      setWindows((w) => ({
        ...w,
        [id]: { open: true, z: nextZ },
      }));
      return nextZ;
    });
  };

  const closeWindow = (id) => {
    setWindows((w) => ({
      ...w,
      [id]: { ...w[id], open: false },
    }));
  };

  // FULL-PAGE LANDING PAGE 1: ENGINEERING & DEVOPS
  if (activePage === "engineering") {
    return (
      <EngineeringLandingPage
        onBack={() => setActivePage("home")}
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
      />
    );
  }

  // FULL-PAGE LANDING PAGE 2: FOREX & FOREXFLOW
  if (activePage === "trading") {
    return (
      <ForexLandingPage
        onBack={() => setActivePage("home")}
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
      />
    );
  }

  // DEFAULT MAIN DESKTOP HUB WINDOW
  return (
    <div className="h-screen w-screen relative flex flex-col justify-between">
      {/* TOP NAVIGATION BAR */}
      <header className="fixed top-0 left-0 right-0 h-16 px-6 sm:px-10 flex items-center justify-between z-40">
        <button
          onClick={toggleTheme}
          title="Toggle Theme"
          className="text-2xl hover:scale-110 transition cursor-pointer"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Top-Right Links that switch to Full-Page Landing Pages */}
        <nav className="flex items-center gap-4 sm:gap-6 mono text-xs sm:text-sm font-normal">
          <button
            onClick={() => setActivePage("engineering")}
            className="top-story-link cursor-pointer"
          >
            engineering ↗
          </button>
          <button
            onClick={() => setActivePage("trading")}
            className="top-story-link cursor-pointer"
          >
            trading (fx) ↗
          </button>
        </nav>
      </header>

      {/* CURVED HORIZON COLORED FOOTER BAND */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[32vh] pointer-events-none z-0 transition-colors duration-300"
        style={{
          background: "var(--bg-footer-band)",
          borderTop: "1.5px solid var(--card-border)",
          borderTopLeftRadius: "50% 28px",
          borderTopRightRadius: "50% 28px",
        }}
      />

      {/* CENTER FIXED (NON-DRAGGABLE) MAIN CARD */}
      <main className="flex-1 flex flex-col items-center justify-center z-10 px-4 pt-14 sm:pt-16">
        <div className="card-stack-wrapper w-full max-w-[630px]">
          <div className="studio-card w-full overflow-hidden">
            <div className="studio-header mono text-xs sm:text-sm">
              <span>{SITE_DATA.profile.handle}</span>
              <div className="flex items-center gap-1.5 opacity-60">
                <span className="w-2.5 h-2.5 rounded-full border border-current inline-block" />
                <span className="w-2.5 h-2.5 rounded-full border border-current inline-block" />
              </div>
            </div>

            <div className="px-8 sm:px-14 py-14 sm:py-18 text-center">
              <h1 className="text-4xl sm:text-[54px] font-normal tracking-tight leading-tight">
                {SITE_DATA.profile.greetingPrefix}
                <span
                  className="font-medium"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {SITE_DATA.profile.greetingHighlight}
                </span>
              </h1>
              <p
                className="mt-3.5 text-lg sm:text-xl font-normal"
                style={{ color: "var(--ink-muted)" }}
              >
                {SITE_DATA.profile.subtitle}
              </p>

              {/* 5 BORDERLESS DUOTONE LINKS: about, work, links, faq, contact */}
              <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                <button
                  onClick={() => openWindow("about")}
                  className="module-tile flex flex-col items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <circle className="duo-fill" cx="12" cy="12" r="9" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span className="mono text-xs sm:text-sm font-normal">about</span>
                </button>

                <button
                  onClick={() => openWindow("work")}
                  className="module-tile flex flex-col items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path className="duo-fill" d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                  </svg>
                  <span className="mono text-xs sm:text-sm font-normal">work</span>
                </button>

                <button
                  onClick={() => openWindow("links")}
                  className="module-tile flex flex-col items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <rect className="duo-fill" x="3" y="4" width="18" height="16" rx="4" />
                    <path d="M9 12h6M12 9v6" />
                  </svg>
                  <span className="mono text-xs sm:text-sm font-normal">links</span>
                </button>

                <button
                  onClick={() => openWindow("faq")}
                  className="module-tile flex flex-col items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path className="duo-fill" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
                  </svg>
                  <span className="mono text-xs sm:text-sm font-normal">faq</span>
                </button>

                <button
                  onClick={() => openWindow("contact")}
                  className="module-tile flex flex-col items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                    <rect className="duo-fill" x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <span className="mono text-xs sm:text-sm font-normal">contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER SOCIALS */}
        <footer className="mt-7 flex flex-col items-center gap-2.5 z-20">
          <div className="flex items-center gap-3">
            <a href={SITE_DATA.socials.github} target="_blank" rel="noreferrer" title="GitHub" className="social-pill">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href={SITE_DATA.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="social-pill">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href={SITE_DATA.socials.twitter} target="_blank" rel="noreferrer" title="X" className="social-pill">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href={SITE_DATA.socials.instagram} target="_blank" rel="noreferrer" title="Instagram (@rentorakenya)" className="social-pill">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
          </div>
          <span className="mono text-xs" style={{ color: "var(--ink-muted)" }}>
            {SITE_DATA.profile.copyright}
          </span>
        </footer>
      </main>

      {/* POPUP WINDOWS ON MAIN HUB */}
      <DraggableWindow
        id="about"
        title="about"
        isOpen={windows.about.open}
        zIndex={windows.about.z}
        initialTop={55}
        initialLeft={Math.max(20, Math.round(window.innerWidth * 0.2))}
        widthClass="w-[92vw] sm:w-[60vw] max-w-[880px]"
        onClose={closeWindow}
        onFocus={bringToFront}
      >
        <AboutWindow openWindow={openWindow} />
      </DraggableWindow>

      <DraggableWindow
        id="work"
        title="work"
        isOpen={windows.work.open}
        zIndex={windows.work.z}
        initialTop={70}
        initialLeft={Math.max(20, Math.round(window.innerWidth * 0.2))}
        widthClass="w-[92vw] sm:w-[60vw] max-w-[880px]"
        onClose={closeWindow}
        onFocus={bringToFront}
      >
        <WorkWindow />
      </DraggableWindow>

      <DraggableWindow
        id="links"
        title="links"
        isOpen={windows.links.open}
        zIndex={windows.links.z}
        initialTop={90}
        initialLeft={Math.max(20, Math.round(window.innerWidth * 0.26))}
        widthClass="w-[90vw] sm:w-[46vw] max-w-[560px]"
        onClose={closeWindow}
        onFocus={bringToFront}
      >
        <LinksWindow />
      </DraggableWindow>

      <DraggableWindow
        id="faq"
        title="frequently asked questions"
        isOpen={windows.faq.open}
        zIndex={windows.faq.z}
        initialTop={100}
        initialLeft={Math.max(20, Math.round(window.innerWidth * 0.24))}
        widthClass="w-[90vw] sm:w-[50vw] max-w-[620px]"
        onClose={closeWindow}
        onFocus={bringToFront}
      >
        <FaqWindow />
      </DraggableWindow>

      <DraggableWindow
        id="contact"
        title="contact"
        isOpen={windows.contact.open}
        zIndex={windows.contact.z}
        initialTop={95}
        initialLeft={Math.max(20, Math.round(window.innerWidth * 0.28))}
        widthClass="w-[90vw] sm:w-[44vw] max-w-[520px]"
        onClose={closeWindow}
        onFocus={bringToFront}
      >
        <ContactWindow />
      </DraggableWindow>
    </div>
  );
}
