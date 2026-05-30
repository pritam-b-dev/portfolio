import Image from "next/image";
import ThemeToggle from "../components/ThemeToggle";
import { FaGithub } from "react-icons/fa";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Status from "../components/Status";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Journey from "../components/Journey";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default async function Home() {
  return (
    <main className="overflow-x-hidden">
      <ThemeToggle />

      <Banner />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Stats */}
      <Status />

      {/* Projects */}
      <Projects />

      {/* Education */}
      <Education />

      {/* Journey */}
      <Journey />

      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
      `}</style>
    </main>
  );
}
