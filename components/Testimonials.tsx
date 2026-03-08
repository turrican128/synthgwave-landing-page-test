"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "יואב כ.",
    role: "מפיק עצמאי",
    text: "אחרי שנה של ניסוי וטעייה, סוף סוף הבנתי למה הסאונד שלי נשמע 'נכון'. הקורס פתח לי את הראש.",
  },
  {
    name: "מיה ר.",
    role: "מוזיקאית ומפיקה",
    text: "הגישה ה'למה' ולא רק ה'איך' שינתה את כל האופן שבו אני מתקרבת לסשן הפקה.",
  },
  {
    name: "רן א.",
    role: "מפיק FL Studio",
    text: "הטרק הראשון שהוצאתי אחרי הקורס קיבל פידבק שלא קיבלתי על שום דבר שעשיתי לפני כן.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-black text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        מה אומרים{" "}
        <span className="text-neon-cyan text-glow-cyan">המפיקים</span>
      </motion.h2>

      <div className="space-y-6">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            className="bg-white/5 border-s-4 border-neon-magenta rounded-xl p-6 ps-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <p className="text-gray-200 text-lg leading-relaxed mb-4">
              &quot;{t.text}&quot;
            </p>
            <footer>
              <span className="text-neon-magenta font-bold">{t.name}</span>
              <span className="text-gray-500 text-sm ms-2">— {t.role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
