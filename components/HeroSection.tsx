"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center">

      {/* Deep space base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 80%, #1a0040 0%, #0B0C10 60%)",
        }}
      />

      {/* Retro sun — striped bottom half */}
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "28%", left: "50%", transform: "translateX(-50%)" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
          style={{
            width: 340,
            height: 340,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, #FF6B00 0%, #FF1493 22%, #FF00FF 42%, #BF00FF 62%, #1a0040 82%)",
            maskImage:
              "repeating-linear-gradient(transparent 0px, transparent 8px, black 8px, black 14px)",
            WebkitMaskImage:
              "repeating-linear-gradient(transparent 0px, transparent 8px, black 8px, black 14px)",
            clipPath: "inset(50% 0 0 0)",
          }}
        />
        {/* Glow halo beneath sun */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 500,
            height: 100,
            background:
              "radial-gradient(ellipse 100% 100% at 50% 100%, #FF00FF33 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Animated perspective grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 grid-perspective opacity-70"
          animate={{ backgroundPosition: ["0px 0px", "0px 60px"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Vignette over grid */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #0B0C10 0%, transparent 30%, transparent 70%, #0B0C10 100%)",
        }}
      />

      {/* Aurora streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: 18, color: "#00FFFF", dur: 9 },
          { top: 38, color: "#FF00FF", dur: 12 },
          { top: 62, color: "#00FFFF", dur: 10 },
        ].map(({ top, color, dur }) => (
          <motion.div
            key={top}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${top}%`,
              background: `linear-gradient(to right, transparent, ${color}55, transparent)`,
            }}
            animate={{ opacity: [0, 0.8, 0], x: ["-40%", "40%"] }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: top * 0.04 }}
          />
        ))}
      </div>

      {/* CRT scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Section label */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="h-px w-10 bg-neon-cyan/40" />
          <span
            className="font-orbitron text-[10px] tracking-[0.4em] uppercase text-glow-cyan"
            style={{ color: "#00FFFF" }}
          >
            FL Studio · Synthwave · 80s
          </span>
          <span className="h-px w-10 bg-neon-cyan/40" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-glitch"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-neon-magenta text-glow-magenta">תחזירו</span>{" "}
          <span className="text-white">את שנות ה-80 לחיים.</span>
          <br />
          <span className="text-neon-cyan text-glow-cyan">בתוך FL Studio.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-white/55 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          למדו לייצר את הסאונד האנלוגי החם של Synthwave — פדים ססגוניים, בייסליינים
          מתגלגלים ותופים פנצ׳יות — הכל מבפנים FL Studio.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={scrollToForm}
            className="font-orbitron text-sm font-bold tracking-widest uppercase text-black px-12 py-4 transition-all duration-300 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #FF00FF 0%, #BF00FF 100%)",
              boxShadow: "0 0 20px #FF00FF88, 0 0 60px #FF00FF33",
              clipPath: "polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.boxShadow = "0 0 35px #FF00FF, 0 0 90px #FF00FF55";
              el.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.boxShadow = "0 0 20px #FF00FF88, 0 0 60px #FF00FF33";
              el.style.transform = "scale(1)";
            }}
          >
            אני רוצה להצטרף לקורס
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="font-orbitron text-[9px] tracking-[0.45em] uppercase text-white/20">
            SCROLL
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
