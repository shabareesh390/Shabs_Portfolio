import { AnimatePresence, motion } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Section";
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

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  tag: string;
};

const certificates: Certificate[] = [
  {
    title: "Deloitte Certificate",
    issuer: "Deloitte",
    date: "June 2026",
    image: certDeloitte,
    tag: "Certification",
  },
  {
    title: "JPMorgan Chase Certificate",
    issuer: "JPMorgan Chase",
    date: "July 2026",
    image: certJPMorganChase,
    tag: "Certification",
  },
  {
    title: "Advanced Software Engineer Virtual Intern",
    issuer: "Walmart",
    date: "July 2026",
    image: certWalmart,
    tag: "Certification",
  },
  {
    title: "Quantium Software Engineering Virtual Intern",
    issuer: "Quantium",
    date: "July 2026",
    image: certQuantium,
    tag: "Certification",
  },
  {
    title: "Front-End Software Engineering Virtual Experience",
    issuer: "Skyscanner",
    date: "July 2026",
    image: certSkyScanner,
    tag: "Certification",
  },
  {
    title: "Java Bootcamp",
    issuer: "LetsUpgrade",
    date: "2024",
    image: certJava,
    tag: "Bootcamp",
  },
  {
    title: "WEB DASH 3.0",
    issuer: "MITE · Dept. of CSE",
    date: "February 2026",
    image: certWebDash,
    tag: "Webdesigning",
  },
  {
    title: "SQL Bootcamp",
    issuer: "LetsUpgrade",
    date: "2024",
    image: certSql,
    tag: "Bootcamp",
  },
  {
    title: "C Programming Course",
    issuer: "Infosys Springboard",
    date: "December 2025",
    image: certInfosys,
    tag: "Course",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "April 2026",
    image: certInfosysAI,
    tag: "Course",
  },
  {
    title: "CampusCrew Certificate",
    issuer: "CampusCrew",
    date: "July 2026",
    image: certCampusCrew,
    tag: "Certification",
  },
];

export function Certificates() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="certificates" className="relative py-32 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="Certificates"
          title={<>Achievements & <span className="text-blue-600">credentials</span></>}
          subtitle="A growing collection — every certificate marks a new skill earned."
        />

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="premium-card flex flex-row items-center gap-5 p-5 bg-white hover:border-gray-300"
            >
              <div className="h-16 w-24 md:h-20 md:w-28 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="flex flex-col flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-3.5 w-3.5 text-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    {cert.tag}
                  </span>
                </div>
                <h3 className="truncate font-sans font-bold text-gray-900 text-[15px]">
                  {cert.title}
                </h3>
                <div className="mt-1 flex items-center justify-between gap-4">
                  <p className="truncate text-xs font-medium text-gray-600">{cert.issuer}</p>
                  <p className="shrink-0 text-xs text-gray-400">{cert.date}</p>
                </div>
                <div className="mt-3">
                  <button
                    onClick={() => setLightbox(cert.image)}
                    className="inline-flex items-center text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Certificate <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
