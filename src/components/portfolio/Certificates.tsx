import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Section";
import certWebDash from "@/assets/cert-webdash.png";
import certInfosys from "@/assets/cert-infosys-c.png";
import certInfosysAI from "@/assets/cert-infosys-ai.png";
import certDeloitte from "@/assets/deloitte_cert.png";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  tag: string;
  accent: string;
};

const certificates: Certificate[] = [
  {
    title: "Deloitte Certificate",
    issuer: "Deloitte",
    date: "June 2026",
    image: certDeloitte,
    tag: "Certification",
    accent: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    title: "WEB DASH 3.0 — Participation",
    issuer: "MITE · Dept. of CSE (IoT & Cyber Security with Blockchain)",
    date: "February 2026",
    image: certWebDash,
    tag: "Webdesigning",
    accent: "linear-gradient(135deg, #fde68a, #f0abfc)",
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
];

export function Certificates() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const total = certificates.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);
  const current = certificates[index];

  return (
    <section id="certificates" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Certificates"
          title={<>Achievements & <span className="text-gradient">credentials</span></>}
          subtitle="A growing collection — every certificate marks a new skill earned."
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Glow */}
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-40 blur-3xl transition-all duration-700"
            style={{ background: current.accent }}
          />

          <div className="glass-strong relative overflow-hidden rounded-3xl p-5 md:p-8">
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
                    className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white"
                  >
                    <img
                      src={current.image}
                      alt={current.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[11px] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
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
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-background"
                      style={{ background: current.accent }}
                    >
                      <Award className="h-3 w-3" /> {current.tag}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold leading-tight md:text-3xl">
                      {current.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{current.issuer}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-cyan">{current.date}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Previous"
                      onClick={() => go(-1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/15"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      aria-label="Next"
                      onClick={() => go(1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/15"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {certificates.map((c, i) => (
              <button
                key={c.title}
                aria-label={`Go to ${c.title}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-10 bg-white" : "w-4 bg-white/25 hover:bg-white/50"
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={() => setLightbox(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightbox}
              alt="Certificate"
              className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
