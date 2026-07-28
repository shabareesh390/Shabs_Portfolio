import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Section";
import certGenAI from "@/assets/Gen_AI_Microsoft_LinkedIn.png";
import certOracle from "@/assets/Oracle_Cert.png";
import certWebDash from "@/assets/cert-webdash.png";
import certJava from "@/assets/LetsUpgrade_Java_Bootcamp.png";
import certSql from "@/assets/LetsUpgrade_SQL_bootcamp.png";
import certInfosys from "@/assets/cert-infosys-c.png";
import certInfosysAI from "@/assets/cert-infosys-ai.png";
import certDeloitte from "@/assets/deloitte_cert.png";
import certJPMorganChase from "@/assets/JPMorganChase_Cert.png";
import certCampusCrew from "@/assets/CampusCrew_Cert.jpeg";
import certWalmart from "@/assets/walmart_Cert.png";
import certQuantium from "@/assets/Quantium_Cert.png";
import certSkyScanner from "@/assets/SkyScanner_Cert.png";
import certCodec from "@/assets/CodecTechnology.png";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  tag: string;
  accent: string;
  buttonPos?: "left" | "right";
};

const certificates: Certificate[] = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "July 2026",
    image: certGenAI,
    tag: "Certification",
    accent: "linear-gradient(135deg, #0284c7, #3b82f6)",
  },
  {
    title: "Oracle Agentic AI Foundations Associate (2026)",
    issuer: "Oracle",
    date: "July 2026",
    image: certOracle,
    tag: "Certification",
    accent: "linear-gradient(135deg, #f87171, #dc2626)",
  },
  {
    title: "Deloitte Certificate",
    issuer: "Deloitte",
    date: "June 2026",
    image: certDeloitte,
    tag: "Certification",
    accent: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    title: "JPMorgan Chase Certificate",
    issuer: "JPMorgan Chase",
    date: "July 2026",
    image: certJPMorganChase,
    tag: "Certification",
    accent: "linear-gradient(135deg, #0d4a8b, #2f80ed)",
  },
  {
    title: "Advanced Software Engineer Virtual Intern",
    issuer: "Walmart",
    date: "July 2026",
    image: certWalmart,
    tag: "Certification",
    accent: "linear-gradient(135deg, #0ea5e9, #2563eb)",
    buttonPos: "left",
  },
  {
    title: "Quantium Software Engineering Virtual Intern",
    issuer: "Quantium",
    date: "July 2026",
    image: certQuantium,
    tag: "Certification",
    accent: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    buttonPos: "left",
  },
  {
    title: "Front-End Software Engineering Virtual Experience",
    issuer: "Skyscanner",
    date: "July 2026",
    image: certSkyScanner,
    tag: "Certification",
    accent: "linear-gradient(135deg, #0284c7, #38bdf8)",
  },
  {
    title: "Java Bootcamp",
    issuer: "LetsUpgrade",
    date: "2024",
    image: certJava,
    tag: "Bootcamp",
    accent: "linear-gradient(135deg, #f97316, #fcd34d)",
  },
  {
    title: "WEB DASH 3.0",
    issuer: "MITE · Dept. of CSE",
    date: "February 2026",
    image: certWebDash,
    tag: "Webdesigning",
    accent: "linear-gradient(135deg, #fde68a, #f0abfc)",
  },
  {
    title: "SQL Bootcamp",
    issuer: "LetsUpgrade",
    date: "2024",
    image: certSql,
    tag: "Bootcamp",
    accent: "linear-gradient(135deg, #3b82f6, #93c5fd)",
  },
  {
    title: "C Programming Course",
    issuer: "Infosys Springboard",
    date: "December 2025",
    image: certInfosys,
    tag: "Course",
    accent: "linear-gradient(135deg, #a78bfa, #67e8f9)",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "April 2026",
    image: certInfosysAI,
    tag: "Course",
    accent: "linear-gradient(135deg, #67e8f9, #818cf8)",
  },
  {
    title: "Codec Technology Certificate",
    issuer: "Codec Technology",
    date: "2026",
    image: certCodec,
    tag: "Certification",
    accent: "linear-gradient(135deg, #10b981, #14b8a6)",
  },
  {
    title: "CampusCrew Certificate",
    issuer: "CampusCrew",
    date: "July 2026",
    image: certCampusCrew,
    tag: "Certification",
    accent: "linear-gradient(135deg, #22c55e, #3b82f6)",
  },
];

export function Certificates() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const total = certificates.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);
  const current = certificates[index];

  return (
    <section id="certificates" className="relative py-32 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="Certificates"
          title={<>Achievements & <span className="text-blue-600">credentials</span></>}
          subtitle="A growing collection — every certificate marks a new skill earned."
        />

        <div className="relative mx-auto max-w-5xl mt-12">
          {/* Glow */}
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-20 blur-3xl transition-all duration-700"
            style={{ background: current.accent }}
          />

          <div className="premium-card relative overflow-hidden rounded-3xl p-5 md:p-8 bg-white">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-8">
              {/* Image */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.button
                    key={current.image}
                    type="button"
                    onClick={() => setLightbox(current.image)}
                    initial={{ opacity: 0, x: 40, scale: 0.97 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -40, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
                  >
                    <img
                      src={current.image}
                      alt={current.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className={`absolute bottom-3 ${current.buttonPos === 'left' ? 'left-3' : 'right-3'} flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[11px] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100`}>
                      <ExternalLink className="h-3 w-3" /> View full
                    </div>
                  </motion.button>
                </AnimatePresence>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm"
                      style={{ background: current.accent }}
                    >
                      <Award className="h-3 w-3" /> {current.tag}
                    </span>
                    <h3 className="mt-4 font-sans text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
                      {current.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-gray-600">{current.issuer}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-400">{current.date}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Previous"
                      onClick={() => go(-1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-blue-600"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      aria-label="Next"
                      onClick={() => go(1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-blue-600"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="font-mono text-xs font-semibold text-gray-400">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {certificates.map((c, i) => (
              <button
                key={c.title}
                aria-label={`Go to ${c.title}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-blue-600" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/80 p-4 backdrop-blur-sm"
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightbox}
              alt="Certificate Full View"
              className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
