"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[60%] grid-perspective opacity-40"
          animate={{ backgroundPosition: ["0px 0px", "0px 60px"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          className="text-neon-cyan text-sm font-medium tracking-widest uppercase mb-4 text-glow-cyan"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          FL Studio · Synthwave · שנות ה-80
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-black leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-neon-magenta text-glow-magenta">תחזירו</span>{" "}
          את שנות ה-80 לחיים.{" "}
          <span className="text-neon-cyan text-glow-cyan">בתוך FL Studio.</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          למדו לייצר את הסאונד האנלוגי החם של Synthwave — פדים ססגוניים, בייסליינים
          מתגלגלים ותופים פנצ׳יות — הכל מבפנים FL Studio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={scrollToForm}
            className="bg-neon-magenta hover:bg-neon-magenta/80 text-black font-bold text-lg px-10 py-6
                       shadow-neon-magenta animate-pulse transition-all duration-300
                       hover:shadow-[0_0_20px_#FF00FF,0_0_60px_#FF00FF]"
          >
            אני רוצה להצטרף לקורס
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
