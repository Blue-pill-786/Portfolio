import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-extrabold mb-16">
        Selected Work
      </h2>

      <div className="space-y-20">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? "md:grid-flow-dense" : ""
            }`}
          >
            <div>
              <h3 className="text-3xl font-bold">{p.title}</h3>

              <p className="mt-4 text-gray-400">
                {p.description}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                {p.tech}
              </p>

              <div className="mt-6">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  View Project →
                </a>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-gray-400 hover:underline"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>

            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="glass overflow-hidden rounded-xl hover:scale-[1.03] transition"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-64 object-cover"
              />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}