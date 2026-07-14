import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import {
  SiFlutter, SiDart, SiCplusplus, SiC, SiFirebase, SiGit, SiGithub, SiGoogle, SiAnthropic, SiCss, SiHtml5, SiJavascript, SiSpringboot,
  SiTypescript, SiSupabase, SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Brain, Lightbulb, Globe, Package, Zap, Cloud, Database } from "lucide-react";

const skills = [
  { Icon: SiFlutter, name: "Flutter", level: 85, color: "#02569B" },
  { Icon: SiDart, name: "Dart", level: 82, color: "#0175C2" },
  { Icon: FaJava, name: "Java", level: 80, color: "#f89820" },
  { Icon: SiSpringboot, name: "Spring Boot", level: 78, color: "#6DB33F" },
  { Icon: SiCplusplus, name: "C++", level: 75, color: "#00599C" },
  { Icon: SiC, name: "C", level: 78, color: "#A8B9CC" },
  { Icon: Brain, name: "DSA", level: 72, color: "#a78bfa" },
  { Icon: SiFirebase, name: "Firebase", level: 70, color: "#FFCA28" },
  { Icon: SiSupabase, name: "Supabase", level: 70, color: "#3ECF8E" },
  { Icon: SiGit, name: "Git", level: 78, color: "#F05032" },
  { Icon: SiGithub, name: "GitHub", level: 80, color: "#111827" },
  { Icon: Lightbulb, name: "Problem Solving", level: 85, color: "#0ea5e9" },
  { Icon: Globe, name: "REST API", level: 75, color: "#3b82f6" },
  { Icon: Package, name: "Provider", level: 78, color: "#10b981" },
  { Icon: Zap, name: "Google ML Kit", level: 76, color: "#f59e0b" },
  { Icon: SiGoogle, name: "Google OAuth", level: 74, color: "#4285F4" },
  { Icon: Cloud, name: "Cloud Firestore", level: 72, color: "#FF9800" },
  { Icon: SiAnthropic, name: "Anthropic Claude", level: 70, color: "#8B5CF6" },
  { Icon: SiCss, name: "CSS", level: 80, color: "#1572B6" },
  { Icon: SiHtml5, name: "HTML", level: 82, color: "#E34F26" },
  { Icon: SiJavascript, name: "JavaScript", level: 78, color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", level: 50, color: "#3178C6" },
  { Icon: Database, name: "SQL", level: 76, color: "#3b82f6" },
  { Icon: SiPython, name: "Python", level: 70, color: "#3776AB" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title={<>My <span className="text-blue-600">technical</span> toolkit</>}
          subtitle="Languages and tools I actively use, with mastery improving every week."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="premium-card group relative overflow-hidden p-5 text-center bg-white hover:border-gray-300"
            >
              <div className="flex flex-col items-center">
                <s.Icon
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: s.color }}
                />
                <div className="mt-4 font-semibold text-gray-900 text-sm tracking-tight">{s.name}</div>
                
                <div className="w-full mt-3 flex items-center justify-between text-xs text-gray-500 mb-1.5 font-medium">
                  <span>Level</span>
                  <span>{s.level}%</span>
                </div>
                <div className="relative h-1 w-full overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["C Programming Certified", "Hackathon-ready", "Open Source curious", "Agile mindset"].map((b) => (
            <span key={b} className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-medium text-gray-600">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}



