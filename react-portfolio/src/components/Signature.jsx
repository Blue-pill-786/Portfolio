import { motion } from "framer-motion";

export default function Signature() {
  return (
    <section className="py-40 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-7xl font-extrabold leading-tight"
      >
        Code is my tool.
        <br />
        <span className="text-indigo-400">
          Impact is my goal.
        </span>
      </motion.h2>
    </section>
  );
}
