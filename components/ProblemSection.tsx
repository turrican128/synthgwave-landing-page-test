"use client";

import { motion } from "framer-motion";

const problems = [
  {
    num: "01",
    title: "הסאונד שלך נשמע פלסטיקי",
    text: "לא משנה כמה אתה מסתובב עם ה-EQ — משהו תמיד נשמע שטוח, נקי מדי, חסר אופי.",
  },
  {
    num: "02",
    title: "הטוטוריאלים ב-YouTube לא מספיקים",
    text: "כולם מסבירים איך להשתמש בכלים, אבל אף אחד לא מסביר למה — ומה עושה סאונד Synthwave אמיתי.",
  },
  {
    num: "03",
    title: "אתה יודע שיש שם משהו",
    text: "אתה שומע את המוזיקה של Kavinsky, Gunship, או The Midnight — ואתה יודע שאתה רוצה לייצר ככה.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-28 px-4 max-w-4xl mx-auto">

      {/* Section label */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="h-px flex-1 max-w-16 bg-neon-magenta/30" />
        <span
          className="font-orbitron text-[10px] tracking-[0.4em] uppercase"
          style={{ color: "#FF00FF66" }}
        >
          // THE PROBLEM
        </span>
        <span className="h-px flex-1 max-w-16 bg-neon-magenta/30" />
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="text-3xl md:text-4xl font-black text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        אם אתה מרגיש{" "}
        <span className="text-neon-magenta text-glow-magenta">ככה</span> —
        אתה לא לבד
      </motion.h2>

      <motion.p
        className="text-center text-sm mb-16 font-orbitron tracking-widest uppercase"
        style={{ color: "#ffffff33" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        רוב מפיקי ה-FL Studio נתקעים בדיוק באותו מקום
      </motion.p>

      <div className="space-y-4">
        {problems.map((problem, i) => (
          <motion.div
            key={problem.title}
            className="relative group flex items-stretch overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,0,255,0.1)",
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            {/* Left accent bar */}
            <div
              className="w-1 shrink-0"
              style={{
                background: "linear-gradient(to bottom, #FF00FF, #BF00FF)",
                boxShadow: "0 0 10px #FF00FF55",
              }}
            />

            <div className="relative flex flex-1 items-center gap-6 px-7 py-6">
              {/* Big faded number */}
              <span
                className="font-orbitron font-black text-6xl md:text-7xl leading-none select-none shrink-0"
                style={{ color: "#FF00FF", opacity: 0.1 }}
              >
                {problem.num}
              </span>

              <div className="flex-1">
                <h3
                  className="font-bold text-lg md:text-xl mb-2"
                  style={{ color: "#00FFFF", textShadow: "0 0 10px #00FFFF44" }}
                >
                  {problem.title}
                </h3>
                <p className="text-white/55 leading-relaxed text-sm md:text-base">
                  {problem.text}
                </p>
              </div>
            </div>

            {/* Hover glow overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{
                border: "1px solid rgba(255,0,255,0.3)",
                boxShadow: "inset 0 0 20px rgba(255,0,255,0.04)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
