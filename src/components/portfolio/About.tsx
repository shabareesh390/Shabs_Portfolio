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
    <section id="about" className="relative py-32 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="About Me"
          title={<>The developer behind the <span className="text-blue-600">commits</span></>}
          subtitle="A short story about why I build, what drives me, and where I'm going."
        />

        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="premium-card p-8 md:p-10"
          >
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
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
            <p className="mt-6 leading-relaxed text-gray-600">
              I genuinely love turning real-world friction into clean, fast
              software — like a campus navigation app that works indoors,
              without GPS. I'm currently looking for an{" "}
              <span className="text-gray-900 font-semibold">internship</span>{" "}
              where I can contribute, learn from senior engineers, and grow
              into a well-rounded full-stack and AI-curious developer.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
              {[
                ["Name", "Shabareesh S Gowda"],
                ["Location", "Mangalore, Karnataka"],
                ["Degree", "B.E. CSE · 2025–29"],
                ["Status", "Open to Internships"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">{k}</div>
                  <div className="mt-1.5 font-medium text-gray-900">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-card group relative overflow-hidden p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <p.Icon className="h-6 w-6" />
                </div>
                <h3 className="font-sans text-lg font-bold text-gray-900">{p.t}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
