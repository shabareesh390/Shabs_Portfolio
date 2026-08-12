import { Brain, Shield, Sparkles } from "lucide-react";
import { SectionHeader } from "./Section";
import tallymatchLogo from "@/assets/TallyMatch.png";
import scamshieldLogo from "@/assets/scam_shield.png";
import croplensLogo from "@/assets/CropLens.png";
import codexHackathonCert from "@/assets/CodexHackathon.png";
import { ProjectCard, type Project } from "./Projects";

export const hackathonProjects: Project[] = [
  {
    title: "TallyMatch – AI Reconciliation Agent",
    tag: "ChatGPT Codex Hackathon",
    desc: "An AI-powered UPI/bank reconciliation agent built for the ChatGPT Codex Hackathon 2026 under the \"AI for Bharat's Businesses\" track. It automatically matches bank settlement statements against a business's sales ledger by parsing messy real-world exports (CSV/PDF). It matches obvious transactions using rule-based logic, while an AI agent handles ambiguous cases—proposing likely matches with confidence scores and plain-language explanations before self-reviewing its own guesses.",
    tech: ["React", "Vite", "TanStack Router", "Python Serverless", "OpenAI API", "pandas", "pdfplumber", "Vercel"],
    Icon: Brain,
    href: "https://codex-hackathon-tallymatch.vercel.app/",
    repo: "https://github.com/shabareesh390/Codex_Hackathon",
    accent: "bg-emerald-500",
    logo: tallymatchLogo,
    certImage: codexHackathonCert,
  },
  {
    title: "ScamShield : Real-Time Detection of Phishing & Synthetic Media Scams",
    tag: "SEBI TechSprint Hackathon",
    desc: "Built for SEBI Securities Market TechSprint Hackathon — an AI-powered Flutter mobile app that detects phishing messages, suspicious links, and deepfake investment videos targeting retail investors in India's securities markets. Powered by OpenAI API with real-time community scam reporting via Firebase Firestore.",
    tech: ["Flutter", "Dart", "Firebase", "OpenAI API", "Provider", "Google ML Kit", "Cloud Firestore", "Firebase Auth"],
    Icon: Shield,
    href: "https://drive.google.com/file/d/1XH8_GCAQicW3EA9TZkoKSbyrpEuqaVrW/view?usp=drive_link",
    repo: "https://github.com/shabareesh390/ScamShield",
    accent: "bg-green-500",
    logo: scamshieldLogo,
  },
  {
    title: "CropLens",
    tag: "SBI Hackathon @ GFF 2026",
    desc: "Built a web-based assessment platform for SBI Hackathon @ GFF 2026, That modernizes Kisan Credit Card (KCC) loan approval by replacing manual field surveys with satellite-based analysis. Bank officers initiate an assessment using a farmer's Record of Rights number, locate the exact farm boundary on an interactive Google Maps satellite view, and trigger a Python backend that computes an NDVI-based crop health score, estimates yield across crop varieties like Paddy, Cotton, and Sugarcane, and projects income using live MSP pricing. The system combines these signals into a 100-point credit score and a data-driven loan recommendation, with Firebase handling officer authentication and assessment records.",
    tech: ["React", "Vite", "TanStack Router", "Leaflet", "Google Maps API", "Python", "Firebase Auth", "Firestore", "NDVI Analysis"],
    Icon: Sparkles,
    href: "https://croplensmap.vercel.app",
    repo: "https://github.com/shabareesh390/CropLens",
    accent: "bg-teal-500",
    logo: croplensLogo,
  },
];

export function Hackathons() {
  return (
    <section id="hackathons" className="relative py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="Hackathons"
          title={<>Building under <span className="text-blue-600">pressure</span></>}
          subtitle="Showcasing projects and their certificates from various hackathons."
        />
        
        {/* Projects Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Projects</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {hackathonProjects.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
