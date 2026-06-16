import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
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
  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <div
          className="rounded-full mix-blend-difference transition-all duration-200"
          style={{
            width: hover ? 48 : 12,
            height: hover ? 48 : 12,
            background: "white",
            transform: "translate(-50%,-50%)",
            opacity: hover ? 0.4 : 0.9,
          }}
        />
      </motion.div>
    </>
  );
}
