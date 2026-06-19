import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiFlutter, a as SiDart, F as FaJava, b as SiCplusplus, c as SiC, d as SiFirebase, e as SiGit, f as SiGithub } from "../_libs/react-icons.mjs";
import { A as AnimatePresence, m as motion, u as useMotionValue, a as useSpring, b as useScroll, c as useMotionValueEvent, d as useTransform } from "../_libs/framer-motion.mjs";
import { S as Sparkles, D as Download, G as Github, L as Linkedin, M as Mail, A as ArrowDown, C as CodeXml, T as Target, R as Rocket, a as Lightbulb, B as Brain, b as Globe, P as Package, Z as Zap, F as Flame, c as MapPin, d as GraduationCap, e as Briefcase, f as Smartphone, E as ExternalLink, g as Award, h as ChevronLeft, i as ChevronRight, X, j as Plus, k as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-Cxz2d4BI.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "portfolio" },
      { name: "description", content: "A premium, recruiter-focused personal portfolio website showcasing skills, projects, and experience." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "portfolio" },
      { property: "og:description", content: "A premium, recruiter-focused personal portfolio website showcasing skills, projects, and experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "portfolio" },
      { name: "twitter:description", content: "A premium, recruiter-focused personal portfolio website showcasing skills, projects, and experience." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/513f7d55-8eec-44b5-aead-cb3a4d3d6542/id-preview-481c644c--17d3bbf9-2dff-4ac6-a64e-90291496bf02.lovable.app-1781148284607.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/513f7d55-8eec-44b5-aead-cb3a4d3d6542/id-preview-481c644c--17d3bbf9-2dff-4ac6-a64e-90291496bf02.lovable.app-1781148284607.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
function Loader() {
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 z-[200] flex items-center justify-center bg-background",
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.5 },
            className: "text-4xl font-bold text-gradient font-display",
            children: "SSG"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[2px] w-48 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { x: "-100%" },
            animate: { x: "100%" },
            transition: { duration: 1.2, ease: "easeInOut" },
            className: "h-full w-full",
            style: { background: "linear-gradient(90deg, var(--cyan), var(--violet))" }
          }
        ) })
      ] })
    }
  ) });
}
function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [hover, setHover] = reactExports.useState(false);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => {
      const t = e.target;
      setHover(!!t.closest("a,button,[data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);
  if (!visible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block",
      style: { x: sx, y: sy },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-full mix-blend-difference transition-all duration-200",
          style: {
            width: hover ? 48 : 12,
            height: hover ? 48 : 12,
            background: "white",
            transform: "translate(-50%,-50%)",
            opacity: hover ? 0.4 : 0.9
          }
        }
      )
    }
  ) });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left",
      style: {
        scaleX,
        background: "linear-gradient(90deg, var(--cyan), var(--violet), var(--magenta))"
      }
    }
  );
}
function Particles() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);
    const count = window.innerWidth < 768 ? 40 : 90;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3 * dpr,
      vy: (Math.random() - 0.5) * 0.3 * dpr,
      r: (Math.random() * 1.6 + 0.4) * dpr,
      h: Math.random() > 0.5 ? 200 : 290
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.h}, 90%, 70%, 0.7)`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          const max = 120 * dpr;
          if (d < max) {
            ctx.strokeStyle = `hsla(260, 80%, 70%, ${0.12 * (1 - d / max)})`;
            ctx.lineWidth = 0.5 * dpr;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref,
      className: "pointer-events-none fixed inset-0 z-0 opacity-60",
      "aria-hidden": true
    }
  );
}
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = reactExports.useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 1.4 },
      className: "fixed left-1/2 top-4 z-50 w-[min(96%,1100px)] -translate-x-1/2",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: `flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${scrolled ? "glass-strong shadow-elegant" : "glass"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", className: "font-display text-lg font-bold tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Shabareesh S Gowda" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-1 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                className: "rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
                children: l.label
              }
            ) }, l.href)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "magnetic-btn magnetic-btn-hover hidden text-sm md:inline-block",
                children: "Let's Talk"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "magnetic-btn magnetic-btn-hover text-xs md:hidden",
                children: "Hire"
              }
            )
          ]
        }
      )
    }
  );
}
const avatar = "/assets/avatar-59YB8gpP.jpg";
const phrases = [
  "Building Mobile Apps & Solving Real-World Problems",
  "Flutter Developer crafting fluid experiences",
  "Java & C++ engineer with a love for algorithms",
  "Exploring AI & Full Stack Development"
];
function useTyping() {
  const [i, setI] = reactExports.useState(0);
  const [text, setText] = reactExports.useState("");
  const [del, setDel] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
function Hero() {
  const typed = useTyping();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      className: "relative flex min-h-[100svh] items-center overflow-hidden bg-grid",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -left-32 top-20 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-blob",
              style: { background: "radial-gradient(circle, var(--violet), transparent 60%)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-blob",
              style: {
                background: "radial-gradient(circle, var(--cyan), transparent 60%)",
                animationDelay: "-6s"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0",
            style: { background: "var(--gradient-glow)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative z-10 mx-auto grid items-center gap-12 px-6 pt-32 md:grid-cols-[1.4fr_1fr] md:pt-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 1.5, duration: 0.6 },
                className: "glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Open for Internship Opportunities · 2026" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 1.6, duration: 0.8 },
                className: "mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl",
                children: [
                  "Hi, I'm ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient animate-gradient", children: "Shabareesh" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "grid align-top", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "invisible col-start-1 row-start-1", "aria-hidden": true, children: phrases.reduce((a, b) => a.length >= b.length ? a : b) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-start-1 row-start-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: typed }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-gradient-to-b from-cyan to-violet" })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 1.8, duration: 0.6 },
                className: "mt-6 max-w-xl text-base text-muted-foreground md:text-lg",
                children: "Computer Science Engineering student at MITE. Flutter & Java developer sharpening DSA daily, shipping real-world apps, and exploring AI & Full-Stack development."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 2, duration: 0.6 },
                className: "mt-8 flex flex-wrap items-center gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "magnetic-btn magnetic-btn-hover inline-flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                    " Hire Me"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: window.location.origin + "/Shabareesh_S_Gowda_Resume.pdf",
                      download: "Shabareesh_S_Gowda_Resume.pdf",
                      target: "_blank",
                      className: "glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:bg-white/10",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                        " Download Resume"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-1 flex items-center gap-2", children: [
                    { Icon: Github, href: "https://github.com/shabareesh390", label: "GitHub" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/shabareesh-s-gowda-a78490381", label: "LinkedIn" },
                    { Icon: Mail, href: "mailto:shabareesh390@gmail.com", label: "Email" }
                  ].map(({ Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": label,
                      className: "glass flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:bg-white/10 hover:text-cyan",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
                    },
                    label
                  )) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 2.4, duration: 0.8 },
                className: "mt-12 grid max-w-md grid-cols-3 gap-4",
                children: [
                  { v: "9+", l: "Core Tech" },
                  { v: "2", l: "2 projects shipped" },
                  { v: "1st Yr", l: "B.E. CSE" }
                ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-3 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gradient", children: s.v }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: s.l })
                ] }, s.l))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 1.7, duration: 0.8 },
              className: "relative mx-auto w-full max-w-sm",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square animate-float", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 rounded-[2rem] blur-2xl opacity-60",
                    style: { background: "var(--gradient-primary)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full overflow-hidden rounded-[2rem] glass-strong p-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: avatar,
                      alt: "Shabareesh S Gowda",
                      className: "h-full w-full rounded-[1.7rem] object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 glass-strong rounded-2xl px-4 py-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Currently" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Advancing Flutter Development" })
                  ] })
                ] }),
                [
                  { t: "Flutter", c: "top-2 -left-6" },
                  { t: "Java", c: "top-1/3 -right-8" },
                  { t: "DSA", c: "bottom-24 -left-10" },
                  { t: "Firebase", c: "-bottom-4 right-4" }
                ].map((chip, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 2 + i * 0.15 },
                    className: `absolute glass-strong rounded-full px-3 py-1 text-xs font-medium ${chip.c} animate-float`,
                    style: { animationDelay: `${i * 0.5}s` },
                    children: chip.t
                  },
                  chip.t
                ))
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.a,
          {
            href: "#about",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 2.6 },
            className: "absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex",
            children: [
              "Scroll ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-4 w-4 animate-bounce" })
            ]
          }
        )
      ]
    }
  );
}
function SectionHeader({ eyebrow, title, subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      layout: true,
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7 },
      className: "mx-auto mb-14 max-w-2xl text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold md:text-5xl", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: subtitle })
      ]
    }
  );
}
const pillars = [
  { Icon: CodeXml, t: "Clean Code", d: "Idiomatic Dart, Java & C++ with a focus on readability and structure." },
  { Icon: Target, t: "Problem Solver", d: "Daily DSA practice. Always reaching for the optimal solution." },
  { Icon: Rocket, t: "Ship Fast", d: "Prototype → iterate → ship. Real users, real feedback." },
  { Icon: Lightbulb, t: "Always Learning", d: "AI, full-stack, system design — growing across the stack." }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "About Me",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "The developer behind the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "commits" })
        ] }),
        subtitle: "A short story about why I build, what drives me, and where I'm going."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-[1.1fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          layout: true,
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "glass-strong rounded-3xl p-8 md:p-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-foreground/90", children: [
              "I'm a first-year",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient font-semibold", children: "Computer Science Engineering" }),
              " ",
              "student at Mangalore Institute of Technology and Engineering. My days are spent shipping Flutter apps, sharpening my fundamentals in Java, C and C++, and crawling through Data Structures & Algorithms one problem at a time."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: [
              "I genuinely love turning real-world friction into clean, fast software — like a campus navigation app that works indoors, without GPS. I'm currently looking for an",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "internship" }),
              " ",
              "where I can contribute, learn from senior engineers, and grow into a well-rounded full-stack and AI-curious developer."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-3 text-sm", children: [
              ["Name", "Shabareesh S Gowda"],
              ["Location", "Puttur, Karnataka"],
              ["Degree", "B.E. CSE · 2025–29"],
              ["Status", "Open to Internships"]
            ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-white/[0.02] p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: k }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-medium", children: v })
            ] }, k)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: pillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          layout: true,
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08 },
          whileHover: { y: -6 },
          className: "glass group relative overflow-hidden rounded-2xl p-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60",
                style: { background: "var(--gradient-primary)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(p.Icon, { className: "h-6 w-6 text-cyan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-lg font-semibold", children: p.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.d })
          ]
        },
        p.t
      )) })
    ] })
  ] }) });
}
const skills = [
  { Icon: SiFlutter, name: "Flutter", level: 85, color: "#02569B" },
  { Icon: SiDart, name: "Dart", level: 82, color: "#0175C2" },
  { Icon: FaJava, name: "Java", level: 80, color: "#f89820" },
  { Icon: SiCplusplus, name: "C++", level: 75, color: "#00599C" },
  { Icon: SiC, name: "C", level: 78, color: "#A8B9CC" },
  { Icon: Brain, name: "DSA", level: 72, color: "#a78bfa" },
  { Icon: SiFirebase, name: "Firebase", level: 70, color: "#FFCA28" },
  { Icon: SiGit, name: "Git", level: 78, color: "#F05032" },
  { Icon: SiGithub, name: "GitHub", level: 80, color: "#ffffff" },
  { Icon: Lightbulb, name: "Problem Solving", level: 85, color: "#67e8f9" },
  { Icon: Globe, name: "REST API", level: 75, color: "#3b82f6" },
  { Icon: Package, name: "Provider", level: 78, color: "#10b981" },
  { Icon: Zap, name: "Google ML Kit", level: 76, color: "#f59e0b" }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Skills",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "My ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "technical" }),
          " toolkit"
        ] }),
        subtitle: "Languages and tools I actively use, with mastery improving every week."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5", children: skills.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.45, delay: i * 0.05 },
        whileHover: { y: -8, rotateX: 6, rotateY: -6 },
        style: { transformStyle: "preserve-3d" },
        className: "glass group relative overflow-hidden rounded-2xl p-5 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              style: {
                background: `radial-gradient(circle at 50% 0%, ${s.color}33, transparent 70%)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            s.Icon,
            {
              className: "relative mx-auto h-10 w-10 transition-transform duration-300 group-hover:scale-110",
              style: { color: s.color }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-3 text-sm font-semibold", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: 0 },
              whileInView: { width: `${s.level}%` },
              viewport: { once: true },
              transition: { duration: 1, delay: i * 0.05 },
              className: "h-full rounded-full",
              style: { background: `linear-gradient(90deg, ${s.color}, var(--violet))` }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1 text-[10px] text-muted-foreground", children: [
            s.level,
            "%"
          ] })
        ]
      },
      s.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-2", children: ["C Programming Certified", "Hackathon-ready", "Open Source curious", "Agile mindset"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass rounded-full px-4 py-1.5 text-xs text-muted-foreground", children: b }, b)) })
  ] }) });
}
const firenotesLogo = "/assets/firenotes-DZOjBYoB.png";
const evalaILogo = "/assets/evalai-CKv48tSo.png";
const projects = [
  {
    title: "Firebase Notes App",
    tag: "Shipped",
    desc: "A full-stack mobile notes app built with Flutter and Firebase. Real-time note sync via Cloud Firestore, secure Email/Password and Google Sign-In, and a clean dark/light theme UI powered by Provider for state management.",
    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Provider", "Google Sign-In"],
    Icon: Flame,
    href: "https://github.com/shabareesh390/FireNotes.git",
    repo: "https://github.com/shabareesh390/FireNotes.git",
    accent: "linear-gradient(135deg, #fbbf24, #f97316)",
    logo: firenotesLogo
  },
  {
    title: "EvalAI",
    tag: "Shipped",
    desc: "Developed a Flutter-based mobile application that automates the grading of handwritten student answer sheets using Google Gemini AI. The app analyzes answers, compares them with expected responses, assigns marks, and generates personalized feedback highlighting strengths, weaknesses, and missing concepts. Built with Firebase for secure authentication and report storage, it also includes performance analytics dashboards, PDF report generation, and customizable grading settings to streamline the evaluation process for educators.",
    tech: ["Flutter", "Dart", "Google Gemini AI", "Firebase", "Provider", "fl_chart", "Google ML Kit", "PDF Generation", "Analytics"],
    Icon: Brain,
    repo: "https://github.com/shabareesh390/EvalAI",
    accent: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    logo: evalaILogo
  },
  {
    title: "PathPilot",
    tag: "In Progress",
    desc: "Currently building PathPilot — a smart campus navigation companion in Flutter for MITE. It will help students, faculty, and visitors locate classrooms, departments, and facilities through an interactive map and smart search. Work in progress.",
    tech: ["Flutter", "Dart", "Material 3"],
    Icon: MapPin,
    accent: "linear-gradient(135deg, #f0abfc, #a78bfa)",
    upcoming: true
  },
  {
    title: "More Coming Soon",
    tag: "Planned",
    desc: "Exploring AI-powered Flutter experiences and a full-stack side project after PathPilot. Watch this space.",
    tech: ["AI", "Full Stack", "Flutter"],
    Icon: Sparkles,
    accent: "linear-gradient(135deg, #fde68a, #f0abfc)",
    upcoming: true
  }
];
function ProjectCard({ p, i }) {
  const ref = reactExports.useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, delay: i * 0.1 },
      ref,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" },
      className: "glass-strong group relative overflow-hidden rounded-3xl p-7",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-70",
            style: { background: p.accent }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between", children: [
          p.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.logo, alt: p.title, className: "h-14 w-14 rounded-2xl object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex h-14 w-14 items-center justify-center rounded-2xl",
              style: { background: p.accent },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.Icon, { className: "h-7 w-7 text-background" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground", children: p.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-6 font-display text-2xl font-bold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-3 text-sm leading-relaxed text-muted-foreground", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-5 flex flex-wrap gap-1.5", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-white/[0.03] px-2.5 py-1 text-[11px]", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: p.upcoming ? "Drafting" : "Case study soon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            p.repo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: p.repo,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs transition-all hover:bg-white/15",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3.5 w-3.5" }),
                  "Git Repo"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: p.href ?? "#",
                target: p.href ? "_blank" : void 0,
                rel: p.href ? "noopener noreferrer" : void 0,
                "aria-label": "View project",
                className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all group-hover:bg-white/15",
                children: p.upcoming ? /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Featured Work",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Projects that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "solve real problems" })
        ] }),
        subtitle: "A focused selection — each one taught me how to ship better software."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { p, i }, p.title)) })
  ] }) });
}
const items = [
  {
    period: "2025 — 2029",
    school: "Mangalore Institute of Technology and Engineering (MITE)",
    degree: "B.E. Computer Science Engineering",
    note: "Currently in 1st year. Focused on DSA, app development & engineering fundamentals."
  },
  {
    period: "2023 — 2025",
    school: "St Joachim's Composite PU College",
    degree: "Pre-University · PCMCs",
    note: "Physics, Chemistry, Mathematics & Computer Science."
  },
  {
    period: "2019 — 2023",
    school: "Shree Gopala Krishna High School, Bilinele",
    degree: "Secondary Education",
    note: "Where the curiosity for computers started."
  }
];
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "education", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Education",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "The ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "journey" }),
          " so far"
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-4 top-2 bottom-2 w-px md:left-1/2 md:-translate-x-1/2",
          style: { background: "linear-gradient(180deg, transparent, var(--violet), transparent)" }
        }
      ),
      items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: i * 0.1 },
          className: `relative mb-10 grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative ${i % 2 === 1 ? "md:text-right" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute top-3 -left-[1.55rem] md:left-auto md:right-auto ${i % 2 === 0 ? "md:-left-[3.6rem]" : "md:-right-[3.6rem]"} h-4 w-4 rounded-full border-2 border-background`,
                  style: { background: "var(--gradient-primary)", boxShadow: "0 0 20px var(--violet)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-2xl p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-widest text-cyan", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4" }),
                  " ",
                  it.period
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-lg font-bold", children: it.school }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gradient-accent font-medium", children: it.degree }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: it.note })
              ] })
            ] })
          ]
        },
        it.school
      ))
    ] })
  ] }) });
}
const roles = [
  { Icon: CodeXml, title: "Software Development Internship", desc: "Java / C++ backends, tooling, or full-stack feature work." },
  { Icon: Brain, title: "AI / ML Learning Role", desc: "Eager to learn applied AI inside a real product team." },
  { Icon: Smartphone, title: "Flutter Development", desc: "Cross-platform mobile apps with Dart, Firebase & clean architecture." }
];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Experience",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Currently seeking ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "internships" })
        ] }),
        subtitle: "Available immediately for remote"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "mx-auto mb-12 max-w-3xl space-y-4 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg md:text-xl leading-relaxed font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Independently designed and implemented" }),
            " a full-stack cross-platform notes application using Flutter and Firebase with real-time synchronization through Cloud Firestore."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg md:text-xl leading-relaxed font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Independently developed" }),
            " multimodal AI-based answer analysis, automated mark allocation, and personalized feedback generation including strengths, weaknesses, and missing concepts."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl",
              style: { background: "var(--gradient-primary)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex h-12 w-12 items-center justify-center rounded-2xl",
                  style: { background: "var(--gradient-primary)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-6 w-6 text-background" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: "Open for Opportunities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "2026 Internship · Remote / On-site" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "magnetic-btn magnetic-btn-hover", children: "Reach Out" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: roles.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "glass group rounded-2xl p-5 transition-all hover:bg-white/[0.08]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(r.Icon, { className: "h-7 w-7 text-cyan transition-transform group-hover:scale-110" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-display text-lg font-semibold", children: r.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: r.desc })
              ]
            },
            r.title
          )) })
        ]
      }
    )
  ] }) });
}
const certWebDash = "/assets/cert-webdash-DErUD8Ic.png";
const certInfosys = "/assets/cert-infosys-c-CPyvlKPP.png";
const certInfosysAI = "/assets/cert-infosys-ai-DoFv-wMS.png";
const certificates = [
  {
    title: "WEB DASH 3.0 — Participation",
    issuer: "MITE · Dept. of CSE (IoT & Cyber Security with Blockchain)",
    date: "February 2026",
    image: certWebDash,
    tag: "Webdesigning",
    accent: "linear-gradient(135deg, #fde68a, #f0abfc)"
  },
  {
    title: "C Programming Course",
    issuer: "Infosys Springboard",
    date: "December 2025",
    image: certInfosys,
    tag: "Course",
    accent: "linear-gradient(135deg, #a78bfa, #67e8f9)"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "April 2026",
    image: certInfosysAI,
    tag: "Course",
    accent: "linear-gradient(135deg, #67e8f9, #818cf8)"
  }
];
function Certificates() {
  const [index, setIndex] = reactExports.useState(0);
  const [lightbox, setLightbox] = reactExports.useState(null);
  const total = certificates.length;
  const go = (dir) => setIndex((i) => (i + dir + total) % total);
  const current = certificates[index];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "certificates", className: "relative py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Certificates",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Achievements & ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "credentials" })
          ] }),
          subtitle: "A growing collection — every certificate marks a new skill earned."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-40 blur-3xl transition-all duration-700",
            style: { background: current.accent }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-strong relative overflow-hidden rounded-3xl p-5 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              onClick: () => setLightbox(current.image),
              initial: { opacity: 0, x: 40, scale: 0.97 },
              animate: { opacity: 1, x: 0, scale: 1 },
              exit: { opacity: 0, x: -40, scale: 0.97 },
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              className: "group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: current.image,
                    alt: current.title,
                    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[11px] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                  " View full"
                ] })
              ]
            },
            current.image
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.4 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-background",
                      style: { background: current.accent },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3 w-3" }),
                        " ",
                        current.tag
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl font-bold leading-tight md:text-3xl", children: current.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: current.issuer }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-widest text-cyan", children: current.date })
                ]
              },
              current.title
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    "aria-label": "Previous",
                    onClick: () => go(-1),
                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/15",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    "aria-label": "Next",
                    onClick: () => go(1),
                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/15",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs text-muted-foreground", children: [
                String(index + 1).padStart(2, "0"),
                " / ",
                String(total).padStart(2, "0")
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center justify-center gap-2", children: certificates.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "aria-label": `Go to ${c.title}`,
            onClick: () => setIndex(i),
            className: `h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-white" : "w-4 bg-white/25 hover:bg-white/50"}`
          },
          c.title
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: lightbox && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setLightbox(null),
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Close",
              className: "absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20",
              onClick: () => setLightbox(null),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              initial: { scale: 0.9, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.9, opacity: 0 },
              transition: { duration: 0.3 },
              src: lightbox,
              alt: "Certificate",
              className: "max-h-[90vh] max-w-[95vw] rounded-xl shadow-2xl",
              onClick: (e) => e.stopPropagation()
            }
          )
        ]
      }
    ) })
  ] });
}
const USER = "shabareesh390";
function GitHubSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "github", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "GitHub",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Building ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "in public" })
        ] }),
        subtitle: "Explore my repositories and open-source contributions on GitHub."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: `https://github.com/${USER}`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:bg-white/10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
          " Visit my GitHub"
        ]
      }
    ) })
  ] }) });
}
function Contact() {
  const [form, setForm] = reactExports.useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = reactExports.useState("idle");
  const [message, setMessage] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Contact",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Let's ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "build" }),
          " something"
        ] }),
        subtitle: "Have a role, a project, or an idea? I'd love to hear from you."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "glass-strong rounded-3xl p-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: "Get in touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Replies within 24 hours · Available 9 AM – 11 PM IST" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:shabareesh390@gmail.com", className: "flex items-center gap-3 transition hover:text-cyan", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-cyan" }),
              " shabareesh390@gmail.com"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-cyan" }),
              " Puttur, Karnataka, India"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://www.linkedin.com/in/shabareesh-s-gowda-a78490381",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-3 transition hover:text-cyan",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5 text-cyan" }),
                  " LinkedIn"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://github.com/shabareesh390",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-3 transition hover:text-cyan",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5 text-cyan" }),
                  " github.com/shabareesh390"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 glass rounded-2xl p-4 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: "Quick fact" }),
            "I respond fastest on email and LinkedIn. Recruiters welcome."
          ] })
        ]
      }
    ) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Shabareesh S Gowda" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "Crafted with care · © ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " All rights reserved."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: [
      { Icon: Github, href: "https://github.com/shabareesh390", label: "GitHub" },
      { Icon: Linkedin, href: "https://www.linkedin.com/in/shabareesh-s-gowda-a78490381", label: "LinkedIn" },
      { Icon: Mail, href: "mailto:shabareesh390@gmail.com", label: "Email" }
    ].map(({ Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": label,
        className: "glass flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-110 hover:bg-white/10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
      },
      label
    )) })
  ] }) });
}
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shabareesh S Gowda — Flutter & Software Developer" },
      {
        name: "description",
        content: "Portfolio of Shabareesh S Gowda — CSE student, Flutter & Java developer. Open for 2026 internships in mobile, full-stack and AI."
      },
      { property: "og:title", content: "Shabareesh S Gowda — Flutter & Software Developer" },
      { property: "og:description", content: "Portfolio · Flutter · Java · DSA · Open for internships." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" }
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  component: Index
});
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Certificates, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GitHubSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
