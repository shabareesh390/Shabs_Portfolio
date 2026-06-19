import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Target } from "lucide-react";
import { SectionHeader } from "./Section";

const pillars = [
  { Icon: Code2, t: "Clean Code", d: "Idiomatic Dart, Java & C++ with a focus on readability and structure." },
  { Icon: Target, t: "Problem Solver", d: "Daily DSA practice. Always reaching for the optimal solution." },
  { Icon: Rocket, t: "Ship Fast", d: "Prototype → iterate → ship. Real users, real feedback." },
  { Icon: Lightbulb, t: "Always Learning", d: "AI, full-stack, system design — growing across the stack." },
];

export function About() {
  return (
    <section id="about" className="relative py-40">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="About Me"
          title={<>The developer behind the <span className="text-gradient">commits</span></>}
          subtitle="A short story about why I build, what drives me, and where I'm going."
        />

        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <motion.div
            layout
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-8 md:p-10"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              Computer Science Engineering student at MITE with expertise in Flutter,
              Java, Spring Boot, Firebase, artificial intelligence, and modern
              software development. Experienced in designing and developing
              innovative applications, including an AI-powered exam evaluation system
              and an intelligent campus navigation platform. Skilled in building
              scalable backend services, mobile applications, and user-focused
              solutions. Demonstrates strong problem-solving abilities, software
              engineering fundamentals, and the capability to independently deliver
              end-to-end projects. Passionate about leveraging technology to solve
              real-world challenges and create impactful digital products.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I genuinely love turning real-world friction into clean, fast
              software — like a campus navigation app that works indoors,
              without GPS. I'm currently looking for an{" "}
              <span className="text-foreground font-medium">internship</span>{" "}
              where I can contribute, learn from senior engineers, and grow
              into a well-rounded full-stack and AI-curious developer.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {[
                ["Name", "Shabareesh S Gowda"],
                ["Location", "Puttur, Karnataka"],
                ["Degree", "B.E. CSE · 2025–29"],
                ["Status", "Open to Internships"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-white/[0.02] p-3">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
                  <div className="mt-1 font-medium">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                layout
                key={p.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-2xl p-5"
              >
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <p.Icon className="h-6 w-6 text-cyan" />
                <h3 className="mt-3 font-display text-lg font-semibold">{p.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
