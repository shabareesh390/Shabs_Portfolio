import { motion } from "framer-motion";
import { Briefcase, Smartphone } from "lucide-react";

const roles = [
  {
    Icon: Briefcase,
    title: "Technology Analyst Virtual Intern",
    desc: "Internship • Deloitte • Remote\nCompleted Deloitte's Technology Analyst Virtual Internship on Forage, gaining hands-on experience in client data reconciliation and software development proposal writing.\n• Developed Python scripts to convert IIoT telemetry data from two different JSON formats into a unified output format, with all unit tests passing successfully.\n• Authored a formal software development proposal for a real-time manufacturing status dashboard for Daikibo Industrials, covering project scope, man-hour estimates, timeline, and post-delivery support.",
  },
  {
    Icon: Briefcase,
    title: "Software Engineer Virtual Intern",
    desc: "Remote virtual internship • Enterprise software engineering simulation focused on backend architecture and distributed systems.\n\n• Engineered a transaction processing backend utilizing Java and the Spring Boot framework.\n\n• Implemented real-time event streaming with Apache Kafka to consume and process transaction data.\n\n• Designed entity schemas and managed database persistence using Spring Data JPA and H2.\n\n• Integrated external microservices into the transaction pipeline via REST APIs using RestTemplate.\n\n• Developed and exposed custom RESTful endpoints to securely query and surface database records.",
  },
  { Icon: Smartphone, title: "Flutter Development", desc: "Cross-platform mobile apps with Dart, Firebase & clean architecture." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.div
          layout
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Currently seeking <span className="text-gradient">internships</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Available immediately for remote</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
               style={{ background: "var(--gradient-primary)" }} />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl"
                   style={{ background: "var(--gradient-primary)" }}>
                <Briefcase className="h-6 w-6 text-background" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Open for Opportunities</h3>
                <p className="text-base text-muted-foreground">2026 Internship · Remote / On-site</p>
              </div>
            </div>
            <a href="#contact" className="magnetic-btn magnetic-btn-hover">Reach Out</a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass group rounded-2xl p-5 transition-all hover:bg-white/[0.08]"
              >
                <r.Icon className="h-7 w-7 text-cyan transition-transform group-hover:scale-110" />
                <h4 className="mt-4 font-display text-xl font-semibold">{r.title}</h4>
                <p className="mt-1 whitespace-pre-line text-base leading-relaxed text-muted-foreground">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
