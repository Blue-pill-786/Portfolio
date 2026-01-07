import { motion } from "framer-motion";
import { expertise } from "../data/skills";

export default function Skills() {
  return (
    <section className="py-36 max-w-7xl mx-auto px-6 relative">
      
      {/* Section heading */}
      <div className="max-w-2xl mb-24">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Expertise
        </h2>
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          I focus on building real-world products with clean engineering,
          thoughtful design, and scalable architecture.
        </p>
      </div>

      {/* Expertise cards */}
      <div className="grid md:grid-cols-2 gap-12">
        {expertise.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
            className="
              group relative rounded-3xl p-10
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              transition-all
            "
          >
            {/* Glow on hover */}
            <div className="
              absolute inset-0 rounded-3xl
              opacity-0 group-hover:opacity-100
              bg-gradient-to-br from-indigo-500/20 to-purple-500/20
              transition-opacity
            " />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {item.description}
              </p>

              {/* Tech pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-1.5 rounded-full text-sm
                      border border-white/15
                      bg-white/5
                      text-gray-300
                      backdrop-blur
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
