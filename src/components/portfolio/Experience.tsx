import { motion } from "framer-motion";
import { Briefcase, Server, Smartphone, ExternalLink, Github, Award } from "lucide-react";

import deloitteCert from "../../assets/deloitte_cert.png";
import jpMorganCert from "../../assets/JPMorganChase_Cert.png";
import walmartCert from "../../assets/walmart_Cert.png";
import quantiumCert from "../../assets/Quantium_Cert.png";
import skyScannerCert from "../../assets/SkyScanner_Cert.png";

interface ExperienceLink {
  certificate?: string;
  project?: string;
  github?: string;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  logo: React.ElementType;
  date: string;
  location: string;
  type: string;
  status: string;
  bullets: string[];
  techStack: string[];
  links?: ExperienceLink;
}

const experiences: Experience[] = [
  {
    id: "walmart",
    role: "Advanced Software Engineer Virtual Intern",
    company: "Walmart",
    logo: Briefcase,
    date: "Completed",
    location: "Remote",
    type: "Internship",
    status: "Completed",
    bullets: [
      "Completed the Advanced Software Engineering Job Simulation where I solved difficult technical projects for a variety of teams at Walmart.",
      "Developed a novel version of a heap data structure in Java for Walmart’s shipping department, showcasing strong problem-solving and algorithmic skills.",
      "Designed a UML class diagram for a data processor, considering different operating modes and database connections.",
      "Created an entity relationship diagram to design a new database accounting for all requirements provided by Walmart’s pet department."
    ],
    techStack: ["Data Preprocessing", "Data Structures", "Database Design", "Java Programming", "Process Optimization", "Python Programming", "Software Architecture", "SQL Database", "UML Modeling"],
    links: {
      certificate: walmartCert,
    }
  },
  {
    id: "deloitte",
    role: "Technology Analyst Virtual Intern",
    company: "Deloitte",
    logo: Briefcase,
    date: "Completed",
    location: "Remote",
    type: "Internship",
    status: "Completed",
    bullets: [
      "Completed virtual internship focusing on data reconciliation and proposals.",
      "Developed Python scripts to convert IIoT telemetry data between JSON formats.",
      "Ensured high code quality with all unit tests passing successfully.",
      "Authored a formal software development proposal for a manufacturing dashboard.",
      "Outlined project scope, man-hour estimates, timeline, and support.",
    ],
    techStack: ["Python", "JSON", "Data Analysis", "Proposal Writing"],
    links: {
      certificate: deloitteCert,
    }
  },
  {
    id: "swe-intern",
    role: "Software Engineer Virtual Intern",
    company: "JPMorganChase",
    logo: Server,
    date: "Completed",
    location: "Remote",
    type: "Internship",
    status: "Completed",
    bullets: [
      "Engineered a transaction processing backend utilizing Java and Spring Boot.",
      "Implemented real-time event streaming with Apache Kafka for data processing.",
      "Designed entity schemas and managed database persistence with Spring Data JPA.",
      "Integrated external microservices into the transaction pipeline via REST APIs.",
      "Developed custom RESTful endpoints to securely query database records.",
    ],
    techStack: ["Java", "Spring Boot", "Apache Kafka", "REST API", "H2"],
    links: {
      certificate: jpMorganCert,
    }
  },
  {
    id: "quantium",
    role: "Quantium Software Engineering Virtual Intern",
    company: "Quantium",
    logo: Briefcase,
    date: "Completed",
    location: "Remote",
    type: "Internship",
    status: "Completed",
    bullets: [
      "Completed a job simulation involving software engineering tasks at Quantium.",
      "Built an interactive Dash application enabling the client to evaluate how price changes affected sales and profitability, including a region-filtered line chart visualisation.",
      "Implemented a Selenium-based test suite to verify core application functionality, and a bash script to automate test execution — laying groundwork for CI integration.",
      "Designed and styled an intuitive, visually engaging UI to improve usability for non-technical stakeholders."
    ],
    techStack: ["Python (Programming Language)", "Cascading Style Sheets (CSS)", "Dashboard Tools", "Data Analytics Libraries", "Data Management", "Python Testing", "Shell Scripting", "Test Automation", "Virtual Environment"],
    links: {
      certificate: quantiumCert,
    }
  },
  {
    id: "skyscanner",
    role: "Frontend Developer Virtual Intern",
    company: "Skyscanner",
    logo: Briefcase,
    date: "Completed",
    location: "Remote",
    type: "Internship",
    status: "Completed",
    bullets: [
      "Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.",
      "Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library.",
      "Customised my application and ran automated tests to ensure it rendered properly."
    ],
    techStack: ["Front-End Design", "JavaScript", "Backpack", "React Development"],
    links: {
      certificate: skyScannerCert,
    }
  },
  {
    id: "flutter",
    role: "Flutter Developer",
    company: "Independent Projects",
    logo: Smartphone,
    date: "Ongoing",
    location: "Remote",
    type: "Freelance",
    status: "Ongoing",
    bullets: [
      "Built scalable Flutter applications.",
      "Integrated Firebase Authentication.",
      "Developed REST API features.",
      "Implemented state management.",
      "Collaborated using Git & GitHub.",
    ],
    techStack: ["Flutter", "Firebase", "REST API", "Git", "Hive", "Provider"],
    links: {
      github: "https://github.com/shabareesh390?tab=repositories",
    }
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        <motion.div
          layout
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Experience
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Professional experience, internships, certifications, and impactful contributions.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-6 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline Dot with Pulse Animation */}
                <div className="absolute left-[15px] top-8 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute h-4 w-4 rounded-full bg-violet/30"
                  />
                  <div className="relative h-2.5 w-2.5 rounded-full bg-violet" style={{ boxShadow: '0 0 10px var(--color-violet)' }} />
                </div>

                {/* Card */}
                <div className="glass group relative flex flex-col gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  {/* Top Row */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet transition-transform duration-300 group-hover:scale-110">
                        <exp.logo className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <div className="text-base font-medium text-foreground/80">{exp.company}</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-3 sm:flex-col sm:items-end sm:gap-1.5">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${exp.status === 'Completed' ? 'bg-green-500/10 text-green-400' : 'bg-violet/10 text-violet'}`}>
                        {exp.status}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {exp.date} • {exp.location} • {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Middle (Bullets) */}
                  <ul className="mt-2 space-y-2.5 text-base text-muted-foreground">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/50" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom (Tech Stack & Buttons) */}
                  <div className="mt-4 flex flex-col gap-5 border-t border-white/5 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map(tech => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground transition-colors hover:bg-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.links && (
                      <div className="flex shrink-0 flex-wrap items-center gap-3">
                        {exp.links.certificate && (
                          <a href={exp.links.certificate} target="_blank" rel="noopener noreferrer" className="flex whitespace-nowrap items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-white/10 hover:text-violet">
                            <Award className="h-4 w-4" /> View Certificate
                          </a>
                        )}
                        {exp.links.project && (
                          <a href={exp.links.project} target="_blank" rel="noopener noreferrer" className="flex whitespace-nowrap items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-white/10 hover:text-violet">
                            <ExternalLink className="h-4 w-4" /> View Project
                          </a>
                        )}
                        {exp.links.github && (
                          <a href={exp.links.github} target="_blank" rel="noopener noreferrer" className="flex whitespace-nowrap items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-white/10 hover:text-violet">
                            <Github className="h-4 w-4" /> GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
