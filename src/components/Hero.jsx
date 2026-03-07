import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-indigo-500/30 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600/30 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-sm uppercase tracking-widest text-indigo-400 mb-4"
          >
            Full-Stack Engineer
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-6xl md:text-7xl font-extrabold leading-[1.05]"
          >
            I build{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              products
            </span>
            <br />
            not just websites.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="mt-6 text-xl text-gray-400 max-w-xl"
          >
            React, Node.js, MongoDB — focused on performance, UX, and scalable
            systems that businesses actually use.
          </motion.p>

          {/* TECH STACK BADGES */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="flex flex-wrap gap-3 mt-6"
          >
            {["React", "Node.js", "MongoDB", "Express", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-xl bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="mt-10 flex gap-6 flex-wrap"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/5 transition"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 to-purple-600/40 blur-[120px]" />

          <div className="relative glass p-12 text-lg text-center">
            <p className="font-semibold text-xl">3+ Years Experience</p>
            <p className="text-gray-400 mt-2">
              Building production-grade web apps
            </p>

            <div className="mt-6 flex justify-center gap-4 text-sm text-gray-400">
              <span>⚡ Fast</span>
              <span>⚙ Scalable</span>
              <span>🎯 UX Focused</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}