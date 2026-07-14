import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  {
    period: "2025 — 2029",
    school: "Mangalore Institute of Technology and Engineering (MITE)",
    degree: "B.E. Computer Science Engineering",
    note: "Currently in 2nd year. Focused on DSA, app development & engineering fundamentals.",
  },
  {
    period: "2023 — 2025",
    school: "St Joachim's Composite PU College",
    degree: "Pre-University · PCMCs",
    note: "Physics, Chemistry, Mathematics & Computer Science.",
  },
  {
    period: "2019 — 2023",
    school: "Shree Gopala Krishna High School, Bilinele",
    degree: "Secondary Education",
    note: "Where the curiosity for computers started.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Education"
          title={<>The <span className="text-gradient">journey</span> so far</>}
        />
        <div className="relative mx-auto max-w-4xl mt-12">
          {/* Vertical Line */}
          <div className="absolute left-[20px] top-4 bottom-0 w-[2px] bg-gray-200" />

          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[15px] top-8 flex items-center justify-center">
                  <div className="relative h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.1)]" />
                </div>

                {/* Card */}
                <div className="premium-card group relative flex flex-col gap-4 p-6 md:p-8 bg-white hover:border-gray-300">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-gray-100 pb-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-blue-600 transition-transform duration-300 group-hover:bg-blue-50">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight">{it.school}</h3>
                        <div className="text-base font-medium text-blue-600 mt-1">{it.degree}</div>
                      </div>
                    </div>
                    <div className="flex shrink-0">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                        {it.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {it.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
