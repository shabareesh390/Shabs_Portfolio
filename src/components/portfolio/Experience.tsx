import { motion } from "framer-motion";
import { Briefcase, Server, Smartphone, ExternalLink, Github, Award } from "lucide-react";

import deloitteCert from "../../assets/deloitte_cert.png";
import jpMorganCert from "../../assets/JPMorganChase_Cert.png";
import walmartCert from "../../assets/walmart_Cert.png";
import quantiumCert from "../../assets/Quantium_Cert.png";
import skyScannerCert from "../../assets/SkyScanner_Cert.png";
import { SectionHeader } from "./Section";

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
    techStack: ["Python", "CSS", "Dashboard Tools", "Data Analytics Libraries", "Data Management", "Python Testing", "Shell Scripting", "Test Automation"],
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
    <section id="experience" className="relative py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          eyebrow="Timeline"
          title={<>My <span className="text-blue-600">Experience</span></>}
          subtitle="Professional experience, internships, certifications, and impactful contributions."
        />

        <div className="relative mx-auto max-w-4xl mt-12">
          {/* Vertical Line */}
          <div className="absolute left-[20px] top-4 bottom-0 w-[2px] bg-gray-200" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[15px] top-8 flex items-center justify-center">
                  <div className="relative h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.1)]" />
                </div>

                {/* Card */}
                <div className="premium-card group relative flex flex-col gap-5 p-6 md:p-8 bg-white hover:border-gray-300">
                  {/* Top Row */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-gray-100 pb-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-blue-600 transition-transform duration-300 group-hover:bg-blue-50">
                        <exp.logo className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight">{exp.role}</h3>
                        <div className="text-base font-medium text-blue-600 mt-1">{exp.company}</div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-3 sm:flex-col sm:items-end sm:gap-1.5 shrink-0">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${exp.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {exp.status}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {exp.date} • {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Middle (Bullets) */}
                  <ul className="space-y-3 text-[15px] text-gray-600">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom (Tech Stack & Buttons) */}
                  <div className="mt-2 flex flex-col gap-5 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map(tech => (
                        <span key={tech} className="rounded-md bg-gray-50 border border-gray-200 px-2.5 py-1 text-[11px] font-medium text-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.links && (
                      <div className="flex shrink-0 flex-wrap items-center gap-3">
                        {exp.links.certificate && (
                          <a href={exp.links.certificate} target="_blank" rel="noopener noreferrer" className="flex whitespace-nowrap items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600 shadow-sm">
                            <Award className="h-4 w-4" /> View Certificate
                          </a>
                        )}
                        {exp.links.project && (
                          <a href={exp.links.project} target="_blank" rel="noopener noreferrer" className="flex whitespace-nowrap items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600 shadow-sm">
                            <ExternalLink className="h-4 w-4" /> View Project
                          </a>
                        )}
                        {exp.links.github && (
                          <a href={exp.links.github} target="_blank" rel="noopener noreferrer" className="flex whitespace-nowrap items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600 shadow-sm">
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
