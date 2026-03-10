"use client";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "ראשי", href: "#hero" },
  { label: "האתגר", href: "#problem" },
  { label: "הצצה לקורס", href: "#audio-preview" },
  { label: "מודולים", href: "#modules" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon-cyan/30 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Right: owner name */}
        <span className="text-lg font-bold text-glow-magenta text-neon-magenta">
          אלכס גולדבלט
        </span>

        {/* Center: nav links */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 transition-colors hover:text-neon-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Left: CTA */}
        <Button
          asChild
          size="sm"
          className="border border-neon-magenta bg-transparent text-neon-magenta hover:bg-neon-magenta hover:text-black"
        >
          <a href="#lead-form">הרשמה</a>
        </Button>
      </div>
    </header>
  );
}
