import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Brain, Flame, Github, MapPin, Plus, Sparkles } from "lucide-react";
import { useRef } from "react";
import { SectionHeader } from "./Section";
import firenotesLogo from "@/assets/firenotes.png";
import evalaILogo from "@/assets/evalai.png";

type Project = {
  title: string;
  tag: string;
  desc: string;
  tech: string[];
  Icon: typeof MapPin;
  href?: string;
  repo?: string;
  accent: string;
  upcoming?: boolean;
  logo?: string;
};

const projects: Project[] = [
  {
    title: "Firebase Notes App",
    tag: "Shipped",
    desc: "A full-stack mobile notes app built with Flutter and Firebase. Real-time note sync via Cloud Firestore, secure Email/Password and Google Sign-In, and a clean dark/light theme UI powered by Provider for state management.",
    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Provider", "Google Sign-In"],
    Icon: Flame,
    href: "https://github.com/shabareesh390/FireNotes.git",
    repo: "https://github.com/shabareesh390/FireNotes.git",
    accent: "linear-gradient(135deg, #fbbf24, #f97316)",
    logo: firenotesLogo,
  },
  {
    title: "EvalAI",
    tag: "Shipped",
    desc: "Developed a Flutter-based mobile application that automates the grading of handwritten student answer sheets using Google Gemini AI. The app analyzes answers, compares them with expected responses, assigns marks, and generates personalized feedback highlighting strengths, weaknesses, and missing concepts. Built with Firebase for secure authentication and report storage, it also includes performance analytics dashboards, PDF report generation, and customizable grading settings to streamline the evaluation process for educators.",
    tech: ["Flutter", "Dart", "Google Gemini AI", "Firebase", "Provider", "fl_chart", "Google ML Kit", "PDF Generation", "Analytics"],
    Icon: Brain,
    repo: "https://github.com/shabareesh390/EvalAI",
    accent: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    logo: evalaILogo,
  },
  {
    title: "PathPilot",
    tag: "In Progress",
    desc: "Currently building PathPilot — a smart campus navigation companion in Flutter for MITE. It will help students, faculty, and visitors locate classrooms, departments, and facilities through an interactive map and smart search. Work in progress.",
    tech: ["Flutter", "Dart", "Material 3"],
    Icon: MapPin,
    accent: "linear-gradient(135deg, #f0abfc, #a78bfa)",
    upcoming: true,
  },
  {
    title: "More Coming Soon",
    tag: "Planned",
    desc: "Exploring AI-powered Flutter experiences and a full-stack side project after PathPilot. Watch this space.",
    tech: ["AI", "Full Stack", "Flutter"],
    Icon: Sparkles,
    accent: "linear-gradient(135deg, #fde68a, #f0abfc)",
    upcoming: true,
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="glass-strong group relative overflow-hidden rounded-3xl p-7"
    >
      <div
        className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: p.accent }}
      />
      <div className="relative flex items-start justify-between">
        {p.logo ? (
          <img src={p.logo} alt={p.title} className="h-14 w-14 rounded-2xl object-cover" />
        ) : (
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{ background: p.accent }}
          >
            <p.Icon className="h-7 w-7 text-background" />
          </div>
        )}
        <span className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
          {p.tag}
        </span>
      </div>

      <h3 className="relative mt-6 font-display text-2xl font-bold">{p.title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <span key={t} className="rounded-full border border-border bg-white/[0.03] px-2.5 py-1 text-[11px]">
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {p.upcoming ? "Drafting" : "Case study soon"}
        </span>
        <div className="flex items-center gap-3">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs transition-all hover:bg-white/15"
            >
              <Github className="h-3.5 w-3.5" />
              Git Repo
            </a>
          )}
          <a
            href={p.href ?? "#"}
            target={p.href ? "_blank" : undefined}
            rel={p.href ? "noopener noreferrer" : undefined}
            aria-label="View project"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all group-hover:bg-white/15"
          >
            {p.upcoming ? <Plus className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Featured Work"
          title={<>Projects that <span className="text-gradient">solve real problems</span></>}
          subtitle="A focused selection — each one taught me how to ship better software."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
