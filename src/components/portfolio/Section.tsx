import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div className="glass mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
