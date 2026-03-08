"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const modules = [
  {
    icon: "🥁",
    title: "מכונות תופים רטרו",
    desc: "LinnDrum, TR-808 — איך לבנות גרוב שנות ה-80 אמיתי עם ה-step sequencer של FL.",
  },
  {
    icon: "🎸",
    title: "בייסליין סינתי",
    desc: "Moog-style בייסליינים עם Sytrus ו-Vital — גלידה סינתטית שתגרום לרצפה לרעוד.",
  },
  {
    icon: "🌊",
    title: "פדים ואטמוספרה",
    desc: "שכבות Pad עשירות עם Chorus, Reverb ו-Tape Saturation ליצירת מרחב קינמטי.",
  },
  {
    icon: "🎹",
    title: "ליד ואריה",
    desc: "מלודיות Lead חדות עם Arp, Glide ו-Pitch Bend שנשמעות ישר מ-1984.",
  },
  {
    icon: "🎚️",
    title: "מיקס רטרו",
    desc: "Compression וינטג׳, EQ אנלוגי ו-Tape Delay — איך לגרום למיקס להישמע ישן בצורה הנכונה.",
  },
  {
    icon: "💿",
    title: "פרויקט מסיים",
    desc: "בנו טרק Synthwave שלם מאפס — ומוכן לשיתוף.",
  },
];

export function CourseModules() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-black text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        מה{" "}
        <span className="text-neon-magenta text-glow-magenta">תלמדו</span>{" "}
        בקורס
      </motion.h2>

      <motion.p
        className="text-gray-400 text-center text-lg mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        6 מודולים שיעברו אתכם מ-0 לטרק גמור
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="bg-white/5 border-neon-purple/20 hover:border-neon-cyan/50
                             transition-all duration-300 h-full hover:shadow-neon-cyan">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <span className="text-3xl">{mod.icon}</span>
                  <span className="text-lg">{mod.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">{mod.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
