import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  {
    period: "2025 — 2029",
    school: "Mangalore Institute of Technology and Engineering (MITE)",
    degree: "B.E. Computer Science Engineering",
    note: "Currently in 1st year. Focused on DSA, app development & engineering fundamentals.",
  },
  {
    period: "2023 — 2025",
    school: "St Joachim's Composite PU College",
    degree: "Pre-University · PCMCs",
    note: "Physics, Chemistry, Mathematics & Computer Science.",
  },
  {
    period: "2019 — 2023",
    school: "Shree Gopala Krishna High School, Bilinele",
    degree: "Secondary Education",
    note: "Where the curiosity for computers started.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Education"
          title={<>The <span className="text-gradient">journey</span> so far</>}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px md:left-1/2 md:-translate-x-1/2"
               style={{ background: "linear-gradient(180deg, transparent, var(--violet), transparent)" }} />
          {items.map((it, i) => (
            <motion.div
              key={it.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-10 grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-2 md:gap-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="hidden md:block" />
              <div className={`relative ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <div className={`absolute top-3 -left-[1.55rem] md:left-auto md:right-auto ${
                  i % 2 === 0 ? "md:-left-[3.6rem]" : "md:-right-[3.6rem]"
                } h-4 w-4 rounded-full border-2 border-background`}
                     style={{ background: "var(--gradient-primary)", boxShadow: "0 0 20px var(--violet)" }} />
                <div className="glass-strong rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan">
                    <GraduationCap className="h-4 w-4" /> {it.period}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold">{it.school}</h3>
                  <div className="text-sm text-gradient-accent font-medium">{it.degree}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{it.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
