import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useLocation } from "react-router-dom";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export const ScrollProgress = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-pyn-lightBlue via-pyn-amber to-white shadow-[0_0_24px_rgba(243,91,106,0.45)]"
      style={{ scaleX }}
    />
  );
};

export const AmbientMotion = () => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute left-[-18rem] top-[18%] h-px w-[52rem] rotate-[24deg] bg-gradient-to-r from-transparent via-pyn-lightBlue/35 to-transparent"
        animate={{ x: ["-8%", "28%", "-8%"], opacity: [0.12, 0.42, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-20rem] top-[58%] h-px w-[58rem] -rotate-[18deg] bg-gradient-to-r from-transparent via-pyn-amber/25 to-transparent"
        animate={{ x: ["12%", "-22%", "12%"], opacity: [0.08, 0.32, 0.08] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent"
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export const PageLoader = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex min-h-[45vh] items-center justify-center">
      <div className="relative h-12 w-12">
        <motion.span
          className="absolute inset-0 rounded-lg border border-pyn-blue/20 bg-white/70 backdrop-blur-xl"
          animate={prefersReducedMotion ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute inset-3 rounded-md bg-pyn-blue"
          animate={prefersReducedMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18, scale: 0.992, filter: "blur(10px)" }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10, scale: 0.996, filter: "blur(6px)" }}
        transition={{ duration: 0.42, ease: smoothEase }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
