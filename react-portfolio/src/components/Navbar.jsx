import { useState } from "react";
import {
  FaBars,
  FaXmark,
  FaMoon,
  FaSun,
} from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl">Ubair</span>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme}>
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(true)}>
          <FaBars size={22} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex flex-col items-center justify-center gap-8 text-xl">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6">
  <FaXmark size={26} />
</button>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <button onClick={toggleTheme}>
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </nav>
  );
}
