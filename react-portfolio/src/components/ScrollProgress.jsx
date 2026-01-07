import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-400 to-purple-600 z-[999]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
}
