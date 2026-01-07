import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="flex justify-center py-32">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "60%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
    </div>
  );
}
