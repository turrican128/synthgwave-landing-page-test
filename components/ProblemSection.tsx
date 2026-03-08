"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: "🎛️",
    title: "הסאונד שלך נשמע פלסטיקי",
    text: "לא משנה כמה אתה מסתובב עם ה-EQ — משהו תמיד נשמע שטוח, נקי מדי, חסר אופי.",
  },
  {
    icon: "📺",
    title: "הטוטוריאלים ב-YouTube לא מספיקים",
    text: "כולם מסבירים איך להשתמש בכלים, אבל אף אחד לא מסביר למה — ומה עושה סאונד Synthwave אמיתי.",
  },
  {
    icon: "🎸",
    title: "אתה יודע שיש שם משהו",
    text: "אתה שומע את המוזיקה של Kavinsky, Gunship, או The Midnight — ואתה יודע שאתה רוצה לייצר ככה.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
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
        className="text-gray-400 text-center text-lg mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        רוב מפיקי ה-FL Studio נתקעים בדיוק באותו מקום.
      </motion.p>

      <div className="space-y-8">
        {problems.map((problem, i) => (
          <motion.div
            key={problem.title}
            className="flex gap-6 items-start bg-white/5 border border-neon-purple/20 rounded-xl p-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <span className="text-4xl">{problem.icon}</span>
            <div>
              <h3 className="text-neon-cyan font-bold text-xl mb-2 text-glow-cyan">
                {problem.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{problem.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
