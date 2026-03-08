"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitLead } from "@/lib/submitLead";

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValid = name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("loading");
    try {
      await submitLead({ name: name.trim(), email: email.trim() });
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "שגיאה לא ידועה");
      setStatus("error");
    }
  };

  return (
    <section id="lead-form" className="py-24 px-4">
      <div className="max-w-lg mx-auto">
        <motion.div
          className="bg-white/5 border border-neon-magenta/30 rounded-2xl p-8 md:p-12
                     shadow-neon-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {status === "success" ? (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-6xl mb-4">🎛️</div>
              <h3 className="text-2xl font-black text-neon-cyan text-glow-cyan mb-3">
                נרשמת בהצלחה!
              </h3>
              <p className="text-gray-300">
                נחזור אליך בקרוב עם כל הפרטים על הקורס.
              </p>
            </motion.div>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-black text-center mb-2">
                הצטרפו לרשימת ההמתנה
              </h2>
              <p className="text-gray-400 text-center mb-8">
                השאירו פרטים ונעדכן אתכם כשהקורס נפתח לרישום
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-200 mb-2 block">
                    שם מלא
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="השם שלך"
                    className="bg-white/10 border-neon-purple/30 focus:border-neon-cyan
                               text-white placeholder:text-gray-600"
                    disabled={status === "loading"}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-200 mb-2 block">
                    אימייל
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="bg-white/10 border-neon-purple/30 focus:border-neon-cyan
                               text-white placeholder:text-gray-600 text-left"
                    dir="ltr"
                    disabled={status === "loading"}
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">{errorMsg}</p>
                )}

                <Button
                  type="submit"
                  disabled={!isValid || status === "loading"}
                  className="w-full bg-neon-magenta hover:bg-neon-magenta/80 text-black font-bold
                             text-lg py-6 shadow-neon-magenta disabled:opacity-50 disabled:cursor-not-allowed
                             transition-all duration-300"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      שולח...
                    </span>
                  ) : (
                    "אני רוצה להצטרף לקורס"
                  )}
                </Button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
