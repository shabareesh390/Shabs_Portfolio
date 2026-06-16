import { motion } from "framer-motion";
import { Briefcase, Brain, Code2, Smartphone } from "lucide-react";
import { SectionHeader } from "./Section";

const roles = [
  { Icon: Smartphone, title: "Flutter Internship", desc: "Cross-platform mobile apps with Dart, Firebase & clean architecture." },
  { Icon: Code2, title: "Software Development Internship", desc: "Java / C++ backends, tooling, or full-stack feature work." },
  { Icon: Brain, title: "AI / ML Learning Role", desc: "Eager to learn applied AI inside a real product team." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Experience"
          title={<>Currently seeking <span className="text-gradient">internships</span></>}
          subtitle="Available immediately for remote, hybrid, or on-site opportunities."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
               style={{ background: "var(--gradient-primary)" }} />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl"
                   style={{ background: "var(--gradient-primary)" }}>
                <Briefcase className="h-6 w-6 text-background" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Open for Opportunities</h3>
                <p className="text-sm text-muted-foreground">2026 Internship · Remote / On-site</p>
              </div>
            </div>
            <a href="#contact" className="magnetic-btn magnetic-btn-hover">Reach Out</a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass group rounded-2xl p-5 transition-all hover:bg-white/[0.08]"
              >
                <r.Icon className="h-7 w-7 text-cyan transition-transform group-hover:scale-110" />
                <h4 className="mt-4 font-display text-lg font-semibold">{r.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
