import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Flame, Github, MapPin, Plus, Sparkles, Code2, Shield } from "lucide-react";
import { SectionHeader } from "./Section";
import firenotesLogo from "@/assets/firenotes.png";
import evalaILogo from "@/assets/evalai.png";
import scamshieldLogo from "@/assets/scam_shield.png";
import pathpilotLogo from "@/assets/PathPilot.png";
import croplensLogo from "@/assets/CropLens.png";

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
    title: "EvalAI-Smart Evaluation System ",
    tag: "Shipped",
    desc: "Developed a Flutter-based mobile application that automates the grading of handwritten student answer sheets using Google Gemini AI. The app analyzes answers, compares them with expected responses, assigns marks, and generates personalized feedback highlighting strengths, weaknesses, and missing concepts. Built with Firebase for secure authentication and report storage, it also includes performance analytics dashboards, PDF report generation, and customizable grading settings to streamline the evaluation process for educators.",
    tech: ["Flutter", "Dart", "Google Gemini AI", "Firebase", "Provider", "fl_chart", "Google ML Kit", "PDF Generation", "Analytics"],
    Icon: Brain,
    repo: "https://github.com/shabareesh390/EvalAI",
    accent: "bg-indigo-500",
    logo: evalaILogo,
  },
  {
    title: "ScamShield : Real-Time Detection of Phishing & Synthetic Media Scams in Securities Markets",
    tag: "Shipped",
    desc: "Built for SEBI Securities Market TechSprint Hackathon — an AI-powered Flutter mobile app that detects phishing messages, suspicious links, and deepfake investment videos targeting retail investors in India's securities markets. Powered by OpenAI API with real-time community scam reporting via Firebase Firestore.",
    tech: ["Flutter", "Dart", "Firebase", "OpenAI API", "Provider", "Google ML Kit", "Cloud Firestore", "Firebase Auth"],
    Icon: Shield,
    repo: "https://github.com/shabareesh390/ScamShield",
    accent: "bg-green-500",
    logo: scamshieldLogo,
  },
  {
    title: "CropLens",
    tag: "Shipped",
    desc: "Built a web-based assessment platform for SBI Hackathon @ GFF 2026, That modernizes Kisan Credit Card (KCC) loan approval by replacing manual field surveys with satellite-based analysis. Bank officers initiate an assessment using a farmer's Record of Rights number, locate the exact farm boundary on an interactive Google Maps satellite view, and trigger a Python backend that computes an NDVI-based crop health score, estimates yield across crop varieties like Paddy, Cotton, and Sugarcane, and projects income using live MSP pricing. The system combines these signals into a 100-point credit score and a data-driven loan recommendation, with Firebase handling officer authentication and assessment records.",
    tech: ["React", "Vite", "TanStack Router", "Leaflet", "Google Maps API", "Python", "Firebase Auth", "Firestore", "NDVI Analysis"],
    Icon: Sparkles,
    href: "https://croplensmap.vercel.app",
    repo: "https://github.com/shabareesh390/CropLens",
    accent: "bg-teal-500",
    logo: croplensLogo,
  },
  {
    title: "FireNotes App",
    tag: "Shipped",
    desc: "A full-stack mobile notes app built with Flutter and Firebase. Real-time note sync via Cloud Firestore, secure Email/Password and Google Sign-In, and a clean dark/light theme UI powered by Provider for state management.",
    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Provider", "Google Sign-In"],
    Icon: Flame,
    repo: "https://github.com/shabareesh390/FireNotes.git",
    accent: "bg-orange-500",
    logo: firenotesLogo,
  },
  {
    title: "PathPilot",
    tag: "In Progress",
    desc: "Currently building PathPilot — a smart campus navigation companion in Flutter for MITE. It will help students, faculty, and visitors locate classrooms, departments, and facilities through an interactive map and smart search. Work in progress.",
    tech: ["Flutter", "Dart", "Material 3"],
    Icon: MapPin,
    accent: "bg-purple-500",
    upcoming: true,
    logo: pathpilotLogo,
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="premium-card flex flex-col group overflow-hidden bg-white"
    >
      <div className="relative h-64 w-full overflow-hidden bg-gray-100 border-b border-gray-100 flex items-center justify-center">
        {p.logo ? (
          <img
            src={p.logo}
            alt={p.title}
            className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 transition-transform duration-500 group-hover:scale-105">
            <p.Icon className="h-16 w-16 text-gray-300" />
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
            {p.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6 md:p-8">
        <h3 className="font-sans text-2xl font-bold text-gray-900">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 flex-grow">
          {p.desc}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn w-full justify-center"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          )}
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn w-full justify-center"
            >
              Live App
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </a>
          )}
          {p.upcoming && (
            <div className="primary-btn w-full justify-center opacity-80 cursor-default pointer-events-none hover:translate-y-0 hover:shadow-none">
              <Code2 className="h-4 w-4 mr-2" />
              In Progress
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="Featured Work"
          title={<>Projects that <span className="text-blue-600">solve real problems</span></>}
          subtitle="A focused selection — each one taught me how to ship better software."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
