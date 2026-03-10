"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "יואב כ.",
    role: "מפיק עצמאי",
    text: "אחרי שנה של ניסוי וטעייה, סוף סוף הבנתי למה הסאונד שלי נשמע 'נכון'. הקורס פתח לי את הראש.",
    id: "USER_001",
  },
  {
    name: "מיה ר.",
    role: "מוזיקאית ומפיקה",
    text: "הגישה ה'למה' ולא רק ה'איך' שינתה את כל האופן שבו אני מתקרבת לסשן הפקה.",
    id: "USER_002",
  },
  {
    name: "רן א.",
    role: "מפיק FL Studio",
    text: "הטרק הראשון שהוצאתי אחרי הקורס קיבל פידבק שלא קיבלתי על שום דבר שעשיתי לפני כן.",
    id: "USER_003",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 px-4 max-w-4xl mx-auto">

      {/* Section label */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="h-px flex-1 max-w-16 bg-neon-cyan/30" />
        <span
          className="font-orbitron text-[10px] tracking-[0.4em] uppercase"
          style={{ color: "#00FFFF66" }}
        >
          // TESTIMONIALS
        </span>
        <span className="h-px flex-1 max-w-16 bg-neon-cyan/30" />
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-black text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        מה אומרים{" "}
        <span className="text-neon-cyan text-glow-cyan">המפיקים</span>
      </motion.h2>

      <div className="space-y-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="relative group overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(0,255,255,0.1)",
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {/* CRT top bar */}
            <div
              className="flex items-center justify-between px-5 py-2 border-b"
              style={{
                borderColor: "rgba(0,255,255,0.1)",
                background: "rgba(0,255,255,0.03)",
              }}
            >
              <span
                className="font-orbitron text-[9px] tracking-[0.35em] uppercase"
                style={{ color: "#00FFFF55" }}
              >
                {t.id}
              </span>
              <span
                className="font-orbitron text-[9px] tracking-wider uppercase"
                style={{ color: "#00FFFF33" }}
              >
                VERIFIED ▶
              </span>
            </div>

            <div className="relative px-6 py-5 ps-8">
              {/* Giant faded quote mark */}
              <span
                className="font-orbitron font-black text-8xl leading-none absolute top-2 end-6 select-none pointer-events-none"
                style={{ color: "#00FFFF", opacity: 0.06 }}
              >
                "
              </span>

              <p className="text-white/70 text-base leading-relaxed mb-4 relative z-10">
                &quot;{t.text}&quot;
              </p>

              <footer className="flex items-center gap-3">
                <div
                  className="w-6 h-px"
                  style={{ background: "#FF00FF", boxShadow: "0 0 6px #FF00FF" }}
                />
                <span
                  className="font-bold text-sm"
                  style={{ color: "#FF00FF", textShadow: "0 0 8px #FF00FF44" }}
                >
                  {t.name}
                </span>
                <span
                  className="font-orbitron text-[10px] tracking-wider uppercase"
                  style={{ color: "#ffffff33" }}
                >
                  · {t.role}
                </span>
              </footer>
            </div>

            {/* Hover border glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ border: "1px solid rgba(0,255,255,0.25)", boxShadow: "inset 0 0 20px rgba(0,255,255,0.03)" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
