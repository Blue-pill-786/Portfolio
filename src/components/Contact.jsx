import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCheck,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

function ContactCard({ href, icon, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 px-6 py-4 rounded-2xl
      border border-white/15 bg-white/5 hover:bg-white/10
      hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]
      transition"
    >
      {icon}
      <span className="text-gray-200 font-medium">{label}</span>
    </a>
  );
}

export default function Contact() {
  const email = "ubairwani@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const handleEmailClick = () => {
    copyEmail();
    window.location.href = `mailto:${email}?subject=Hello%20Ubair&body=Hi%20Ubair,%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`;
  };

  return (
    <section id="contact" className="py-36 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
          
          {/* Email */}
          <button
            onClick={handleEmailClick}
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl
            border border-white/15 bg-white/5 hover:bg-white/10
            hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]
            transition"
          >
            {copied ? (
              <FaCheck className="text-xl text-green-400" />
            ) : (
              <FaEnvelope className="text-xl text-indigo-400 group-hover:scale-110 transition" />
            )}

            <span className="text-gray-200 font-medium">
              {copied ? "Email copied! Opening mail…" : "Email me"}
            </span>
          </button>

          {/* WhatsApp */}
          <ContactCard
            href="https://wa.me/918800104011?text=Hi%20Ubair%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            icon={
              <FaWhatsapp className="text-xl text-green-400 group-hover:scale-110 transition" />
            }
            label="WhatsApp"
          />

          {/* GitHub */}
          <ContactCard
            href="https://github.com/Blue-pill-786"
            icon={
              <FaGithub className="text-xl text-indigo-400 group-hover:scale-110 transition" />
            }
            label="GitHub"
          />

          {/* LinkedIn */}
          <ContactCard
            href="https://www.linkedin.com/in/ubairwani/"
            icon={
              <FaLinkedin className="text-xl text-indigo-400 group-hover:scale-110 transition" />
            }
            label="LinkedIn"
          />
        </div>
      </motion.div>
    </section>
  );
}