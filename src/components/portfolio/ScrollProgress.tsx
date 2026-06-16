import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--cyan), var(--violet), var(--magenta))",
      }}
    />
  );
}
