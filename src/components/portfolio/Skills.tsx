
import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import {
  SiFlutter, SiDart, SiCplusplus, SiC, SiFirebase, SiGit, SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Brain, Lightbulb, Globe, Package, Zap } from "lucide-react";

const skills = [
  { Icon: SiFlutter, name: "Flutter", level: 85, color: "#02569B" },
  { Icon: SiDart, name: "Dart", level: 82, color: "#0175C2" },
  { Icon: FaJava, name: "Java", level: 80, color: "#f89820" },
  { Icon: SiCplusplus, name: "C++", level: 75, color: "#00599C" },
  { Icon: SiC, name: "C", level: 78, color: "#A8B9CC" },
  { Icon: Brain, name: "DSA", level: 72, color: "#a78bfa" },
  { Icon: SiFirebase, name: "Firebase", level: 70, color: "#FFCA28" },
  { Icon: SiGit, name: "Git", level: 78, color: "#F05032" },
  { Icon: SiGithub, name: "GitHub", level: 80, color: "#ffffff" },
  { Icon: Lightbulb, name: "Problem Solving", level: 85, color: "#67e8f9" },
  { Icon: Globe, name: "REST API", level: 75, color: "#3b82f6" },
  { Icon: Package, name: "Provider", level: 78, color: "#10b981" },
  { Icon: Zap, name: "Google ML Kit", level: 76, color: "#f59e0b" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title={<>My <span className="text-gradient">technical</span> toolkit</>}
          subtitle="Languages and tools I actively use, with mastery improving every week."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -8, rotateX: 6, rotateY: -6 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass group relative overflow-hidden rounded-2xl p-5 text-center"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${s.color}33, transparent 70%)`,
                }}
              />
              <s.Icon
                className="relative mx-auto h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                style={{ color: s.color }}
              />
              <div className="relative mt-3 text-sm font-semibold">{s.name}</div>
              <div className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${s.color}, var(--violet))` }}
                />
              </div>
              <div className="relative mt-1 text-[10px] text-muted-foreground">{s.level}%</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["C Programming Certified", "Hackathon-ready", "Open Source curious", "Agile mindset"].map((b) => (
            <span key={b} className="glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
