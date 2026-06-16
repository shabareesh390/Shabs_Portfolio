import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gradient font-display"
            >
              SSG
            </motion.div>
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full w-full"
                style={{ background: "linear-gradient(90deg, var(--cyan), var(--violet))" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
