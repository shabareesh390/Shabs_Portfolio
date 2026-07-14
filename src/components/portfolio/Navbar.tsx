import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
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
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-b border-gray-100" : ""
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight text-gray-900">
          Shabareesh S Gowda
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex primary-btn py-2 px-5 text-sm"
        >
          Let's Talk
        </a>
        <a
          href="#contact"
          className="md:hidden primary-btn py-1.5 px-4 text-xs"
        >
          Hire
        </a>
      </nav>
    </motion.header>
  );
}
