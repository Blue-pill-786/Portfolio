import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Signature from "./components/Signature.jsx";
import Divider from "./components/Divider.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative">

      {/* Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/2 right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* UI effects */}
      <CursorGlow />
      <ScrollProgress />

      {/* App layout */}
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Divider />
          <Signature />
          <Contact />
        </main>

        <Footer />

      </div>

    </div>
  );
}