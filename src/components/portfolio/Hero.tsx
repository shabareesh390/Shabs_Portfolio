import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, FolderDot } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const phrases = [
  "Full stack developer",
  "Building AI-powered mobile apps and web solutions",
  "MERN Stack Developer",
  "Java Developer",
];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = phrases[i];
    const speed = del ? 30 : 55;
    const t = setTimeout(() => {
      const next = del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!del && next === current) setTimeout(() => setDel(true), 1600);
      else if (del && next === "") {
        setDel(false);
        setI((i + 1) % phrases.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center bg-white overflow-hidden bg-grid"
    >
      <div className="max-w-[1200px] relative z-10 mx-auto grid items-center gap-12 px-6 pt-32 md:grid-cols-[1.2fr_1fr] md:pt-24 w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600 mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span>Open for Internship Opportunities · 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-5xl font-bold leading-[1.1] md:text-7xl text-gray-900 tracking-tight"
          >
            Hi, I'm <span className="text-blue-600">Shabareesh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-2xl md:text-4xl font-semibold text-gray-700 min-h-[3em] md:min-h-[1.5em] flex items-start"
          >
            <span className="grid align-top w-full">
              <span className="invisible col-start-1 row-start-1 w-full" aria-hidden>
                {phrases.reduce((a, b) => (a.length >= b.length ? a : b))}
              </span>
              <span className="col-start-1 row-start-1 w-full text-blue-600">
                {typed}
                <span className="ml-1 inline-block h-[0.8em] w-[4px] bg-blue-600 animate-pulse -translate-y-[0.05em]" />
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-gray-600 md:text-lg leading-relaxed"
          >
            Computer Science Engineering student at MITE. I build Flutter mobile 
            apps, full-stack web applications, and AI-integrated products — 
            from idea to shipped product.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="primary-btn">
              <FolderDot className="h-4 w-4 mr-2" /> View Projects
            </a>
            <a
              href="/Shabareesh_S_Gowda_Resume.pdf"
              download="Shabareesh_S_Gowda_Resume.pdf"
              target="_blank"
              className="secondary-btn"
            >
              <Download className="h-4 w-4 mr-2" /> Download Resume
            </a>

            <div className="flex items-center gap-2 ml-2">
              {[
                { Icon: Github, href: "https://github.com/shabareesh390", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/shabareesh-s-gowda-a78490381", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:shabareesh390@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-blue-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { v: "15+", l: "Core Tech" },
              { v: "3", l: "Shipped" },
              { v: "2nd Yr", l: "B.E. CSE" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <div className="text-3xl font-bold text-gray-900 tracking-tight">{s.v}</div>
                <div className="text-[13px] font-medium text-gray-500 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm block"
        >
          <div className="relative aspect-[4/5] w-full bg-white rounded-3xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
            <img
              src={avatar}
              alt="Shabareesh S Gowda"
              className="h-full w-full rounded-2xl object-cover"
            />

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Focus</div>
                  <div className="text-sm font-semibold text-gray-900 leading-tight">Software Engineering</div>
                </div>
              </div>
            </div>


          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-gray-400 md:flex hover:text-gray-600 transition-colors"
      >
        Scroll <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
