"use client";

import { motion } from "framer-motion";

export function AudioPreview() {
  return (
    <section id="audio-preview" className="py-24 px-4 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-black mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        תשמעו{" "}
        <span className="text-neon-cyan text-glow-cyan">לפני שתחליטו</span>
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-12 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        הנה דוגמה לטרק Synthwave שנוצר ב-FL Studio בשיטות שנלמד בקורס:
      </motion.p>

      <motion.div
        className="max-w-2xl mx-auto bg-white/5 border border-neon-magenta/30 rounded-2xl p-12
                   shadow-neon-sm flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-20 h-20 rounded-full bg-neon-magenta/20 border-2 border-neon-magenta
                        flex items-center justify-center shadow-neon-magenta">
          <span className="text-3xl">▶</span>
        </div>
        <p className="text-gray-500 text-sm">
          [Demo Track — יתווסף בקרוב]
        </p>
      </motion.div>
    </section>
  );
}
