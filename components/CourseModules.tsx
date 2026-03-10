"use client";

import { motion } from "framer-motion";

const modules = [
  {
    num: "01",
    title: "מכונות תופים רטרו",
    desc: "LinnDrum, TR-808 — איך לבנות גרוב שנות ה-80 אמיתי עם ה-step sequencer של FL.",
    color: "#FF00FF",
  },
  {
    num: "02",
    title: "בייסליין סינתי",
    desc: "Moog-style בייסליינים עם Sytrus ו-Vital — גלידה סינתטית שתגרום לרצפה לרעוד.",
    color: "#00FFFF",
  },
  {
    num: "03",
    title: "פדים ואטמוספרה",
    desc: "שכבות Pad עשירות עם Chorus, Reverb ו-Tape Saturation ליצירת מרחב קינמטי.",
    color: "#BF00FF",
  },
  {
    num: "04",
    title: "ליד ואריה",
    desc: "מלודיות Lead חדות עם Arp, Glide ו-Pitch Bend שנשמעות ישר מ-1984.",
    color: "#FF00FF",
  },
  {
    num: "05",
    title: "מיקס רטרו",
    desc: "Compression וינטג׳, EQ אנלוגי ו-Tape Delay — איך לגרום למיקס להישמע ישן בצורה הנכונה.",
    color: "#00FFFF",
  },
  {
    num: "06",
    title: "פרויקט מסיים",
    desc: "בנו טרק Synthwave שלם מאפס — ומוכן לשיתוף.",
    color: "#BF00FF",
  },
];

export function CourseModules() {
  return (
    <section id="modules" className="py-28 px-4 max-w-5xl mx-auto">

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
          // COURSE MODULES
        </span>
        <span className="h-px flex-1 max-w-16 bg-neon-cyan/30" />
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-black text-center mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        מה{" "}
        <span className="text-neon-magenta text-glow-magenta">תלמדו</span>{" "}
        בקורס
      </motion.h2>

      <motion.p
        className="text-center text-sm mb-16 font-orbitron tracking-widest uppercase"
        style={{ color: "#ffffff33" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        6 מודולים · מ-0 לטרק גמור
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.title}
            className="group relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: `1px solid ${mod.color}22`,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ borderColor: `${mod.color}55` }}
          >
            {/* Terminal top bar */}
            <div
              className="flex items-center gap-2 px-4 py-2 border-b"
              style={{
                borderColor: `${mod.color}22`,
                background: `${mod.color}08`,
              }}
            >
              <span
                className="font-orbitron text-[9px] tracking-[0.3em] uppercase"
                style={{ color: `${mod.color}88` }}
              >
                MODULE_{mod.num}
              </span>
              <div className="flex-1" />
              {/* Terminal dots */}
              <span className="w-2 h-2 rounded-full" style={{ background: `${mod.color}44` }} />
              <span className="w-2 h-2 rounded-full" style={{ background: `${mod.color}66` }} />
              <span className="w-2 h-2 rounded-full" style={{ background: `${mod.color}99` }} />
            </div>

            <div className="p-5 pt-4">
              {/* Module number - large faded */}
              <span
                className="font-orbitron font-black text-5xl leading-none select-none block mb-3"
                style={{ color: mod.color, opacity: 0.12 }}
              >
                {mod.num}
              </span>

              <h3
                className="font-bold text-base mb-2 -mt-8"
                style={{ color: mod.color, textShadow: `0 0 10px ${mod.color}44` }}
              >
                {mod.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{mod.desc}</p>
            </div>

            {/* Corner accent */}
            <div
              className="absolute bottom-0 left-0 w-8 h-px"
              style={{ background: mod.color, boxShadow: `0 0 6px ${mod.color}` }}
            />
            <div
              className="absolute bottom-0 left-0 h-8 w-px"
              style={{ background: mod.color, boxShadow: `0 0 6px ${mod.color}` }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
