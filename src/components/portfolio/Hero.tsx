import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const phrases = [
  "Building Mobile Apps & Solving Real-World Problems",
  "Flutter Developer crafting fluid experiences",
  "Java & C++ engineer with a love for algorithms",
  "Exploring AI & Full Stack Development",
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
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-grid"
    >
      {/* Glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-blob"
          style={{ background: "radial-gradient(circle, var(--violet), transparent 60%)" }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-blob"
          style={{
            background: "radial-gradient(circle, var(--cyan), transparent 60%)",
            animationDelay: "-6s",
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 pt-32 md:grid-cols-[1.4fr_1fr] md:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-muted-foreground">
              Open for Internship Opportunities · 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl"
          >
            Hi, I'm <span className="text-gradient animate-gradient">Shabareesh</span>
            <br />
            <span className="grid align-top">
              {/* Ghost reserves the tallest phrase height at every viewport */}
              <span className="invisible col-start-1 row-start-1" aria-hidden>
                {phrases.reduce((a, b) => (a.length >= b.length ? a : b))}
              </span>
              <span className="col-start-1 row-start-1">
                <span className="text-foreground/90">{typed}</span>
                <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-gradient-to-b from-cyan to-violet" />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Computer Science Engineering student at MITE. Flutter & Java developer
            sharpening DSA daily, shipping real-world apps, and exploring AI &
            Full-Stack development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="magnetic-btn magnetic-btn-hover inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Hire Me
            </a>
            <a
              href="/Shabareesh_S_Gowda_Resume.pdf"
              download="Shabareesh_S_Gowda_Resume.pdf"
              target="_blank"
              className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <div className="ml-1 flex items-center gap-2">
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
                  className="glass flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:bg-white/10 hover:text-cyan"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {[
              { v: "9+", l: "Core Tech" },
              { v: "2", l: "projects shipped" },
              { v: "2nd Yr", l: "B.E. CSE" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-square animate-float">
            <div
              className="absolute inset-0 rounded-[2rem] blur-2xl opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] glass-strong p-2">
              <img
                src={avatar}
                alt="Shabareesh S Gowda"
                className="h-full w-full rounded-[1.7rem] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl px-4 py-3">
                <div className="text-xs text-muted-foreground">Currently</div>
                <div className="text-sm font-semibold">Advancing Flutter Development</div>
              </div>
            </div>
            {/* floating tech chips */}
            {[
              { t: "Flutter", c: "top-2 -left-6" },
              { t: "Java", c: "top-1/3 -right-8" },
              { t: "DSA", c: "bottom-24 -left-10" },
              { t: "Firebase", c: "-bottom-4 right-4" },
            ].map((chip, i) => (
              <motion.div
                key={chip.t}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + i * 0.15 }}
                className={`absolute glass-strong rounded-full px-3 py-1 text-xs font-medium ${chip.c} animate-float`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {chip.t}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
      >
        Scroll <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
