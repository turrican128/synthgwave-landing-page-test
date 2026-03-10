"use client";

import { cn } from "@/lib/utils";

const navLinks = [
  { label: "ראשי", href: "#hero" },
  { label: "האתגר", href: "#problem" },
  { label: "הצצה לקורס", href: "#audio-preview" },
  { label: "מודולים", href: "#modules" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden">
      {/* Dark bg + blur */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* CRT scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.25) 2px, rgba(0,0,0,0.25) 4px)",
          opacity: 0.6,
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/60 to-transparent" />

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, #00FFFF, transparent)",
          boxShadow: "0 0 8px #00FFFF, 0 0 20px #00FFFF44",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">

        {/* Right: Owner name — split treatment */}
        <div className="flex flex-col leading-none gap-0.5 select-none">
          <span
            className="font-orbitron text-[9px] tracking-[0.5em] uppercase"
            style={{ color: "#00FFFF88" }}
          >
            Alex
          </span>
          <span
            className="font-bold text-xl tracking-wide text-white animate-flicker"
            style={{ textShadow: "0 0 14px #FF00FF, 0 0 35px #FF00FF55" }}
          >
            גולדבלט
          </span>
        </div>

        {/* Center: nav links */}
        <nav aria-label="ניווט ראשי" className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[13px] font-medium text-white/50 hover:text-neon-cyan transition-colors duration-300 py-1.5"
            >
              {link.label}
              {/* Underline that expands from center */}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full transition-all duration-300 ease-out"
                style={{
                  background: "#00FFFF",
                  boxShadow: "0 0 8px #00FFFF, 0 0 16px #00FFFF66",
                }}
              />
            </a>
          ))}
        </nav>

        {/* Left: CTA — sharp angled button */}
        <a
          href="#lead-form"
          className="font-orbitron text-[11px] font-semibold tracking-widest uppercase text-neon-magenta border border-neon-magenta/70 px-5 py-2.5 transition-all duration-300 hover:text-black hover:border-neon-magenta"
          style={{
            clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
            boxShadow: "0 0 0px transparent",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#FF00FF";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 0 20px #FF00FF, 0 0 50px #FF00FF44";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0px transparent";
          }}
        >
          הרשמה
        </a>
      </div>
    </header>
  );
}
