import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Signature from "./components/Signature";
import Divider from "./components/Divider";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      {/* Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/2 right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Effects */}
      <CursorGlow />
      <ScrollProgress />

      {/* App */}
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Divider />
          <Signature />
          <Contact />
          <Footer />
          
        </main>
      </div>
    </>
  );
}
