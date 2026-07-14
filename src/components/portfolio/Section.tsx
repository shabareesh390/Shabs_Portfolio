import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-600 shadow-sm">
        {eyebrow}
      </div>
      <h2 className="mt-6 font-sans text-3xl font-bold md:text-[40px] text-gray-900 tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-gray-600">{subtitle}</p>}
    </motion.div>
  );
}
