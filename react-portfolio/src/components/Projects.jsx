import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-extrabold mb-16">
        Selected Work
      </h2>

      <div className="space-y-20">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold">{p.title}</h3>
              <p className="mt-4 text-gray-400">{p.description}</p>
              <p className="mt-3 text-sm text-gray-500">{p.tech}</p>

              <a className="inline-block mt-6 text-indigo-400 hover:underline">
                View Case Study →
              </a>
            </div>

            <div className="glass h-64 flex items-center justify-center hover:scale-[1.03] transition">
              <span className="text-gray-500">Project Preview</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
