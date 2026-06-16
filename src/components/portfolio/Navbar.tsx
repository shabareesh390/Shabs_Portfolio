import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      className="fixed left-1/2 top-4 z-50 w-[min(96%,1100px)] -translate-x-1/2"
    >
      <nav
        className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}
      >
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">Shabareesh S Gowda</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="magnetic-btn magnetic-btn-hover hidden text-sm md:inline-block"
        >
          Let's Talk
        </a>
        <a
          href="#contact"
          className="magnetic-btn magnetic-btn-hover text-xs md:hidden"
        >
          Hire
        </a>
      </nav>
    </motion.header>
  );
}
