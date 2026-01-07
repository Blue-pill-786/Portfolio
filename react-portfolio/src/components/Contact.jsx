import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCheck,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const email = "ubairwani@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-36 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass p-12 md:p-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Let’s work together
        </h2>

        <p className="text-gray-400 max-w-xl mb-12 leading-relaxed">
          Open to full-time roles, freelance projects, and remote opportunities.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          
          {/* Email (copy) */}
          <button
  onClick={() => {
    copyEmail();
    window.location.href = `mailto:${email}?subject=Hello%20Ubair&body=Hi%20Ubair,%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`;
  }}
  className="group flex items-center gap-4 px-6 py-4 rounded-2xl
             border border-white/15 bg-white/5 hover:bg-white/10 transition"
>
  {copied ? (
    <FaCheck className="text-xl text-green-400" />
  ) : (
    <FaEnvelope className="text-xl text-indigo-400 group-hover:scale-110 transition" />
  )}

  <span className="text-gray-200 font-medium">
    {copied ? "Email copied & opening mail…" : "Email me"}
  </span>
</button>

          {/* WhatsApp */}
          <a
  href="https://wa.me/918800104011?text=Hi%20Ubair%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
  target="_blank"
  rel="noreferrer"
  className="group flex items-center gap-4 px-6 py-4 rounded-2xl
             border border-white/15 bg-white/5 hover:bg-white/10 transition"
>
            <FaWhatsapp className="text-xl text-green-400 group-hover:scale-110 transition" />
            <span className="text-gray-200">WhatsApp</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Blue-pill-786"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl
                       border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            <FaGithub className="text-xl text-indigo-400 group-hover:scale-110 transition" />
            <span className="text-gray-200">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ubairwani/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl
                       border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            <FaLinkedin className="text-xl text-indigo-400 group-hover:scale-110 transition" />
            <span className="text-gray-200">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
