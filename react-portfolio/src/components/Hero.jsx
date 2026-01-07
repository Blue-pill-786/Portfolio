import { motion } from "framer-motion";

export default function Hero() {
  return (

    
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
       

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
            Full-Stack Engineer
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05]">
            I build{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              products
            </span>
            <br />not just websites.
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-xl">
            React, Node.js, MongoDB — focused on performance, UX, and scalable
            systems that businesses actually use.
          </p>

          <div className="mt-10 flex gap-6">
            <a className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold hover:scale-105 transition">
              View Work
            </a>
            <a className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/5 transition">
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 to-purple-600/40 blur-[120px]" />
          <div className="relative glass p-12 text-lg text-center">
            <p className="font-semibold">3+ Years Experience</p>
            <p className="text-gray-400 mt-2">Production-grade web apps</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
