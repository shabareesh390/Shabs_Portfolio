import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { SectionHeader } from "./Section";

const USER = "shabareesh390";

export function GitHubSection() {
  return (
    <section id="github" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="GitHub"
          title={<>Building <span className="text-gradient">in public</span></>}
          subtitle="Explore my repositories and open-source contributions on GitHub."
        />

        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> Visit my GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
