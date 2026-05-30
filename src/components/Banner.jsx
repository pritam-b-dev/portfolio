import React from "react";
import { FaGithub } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 animate-fade-in">
        <p
          className="text-xs font-semibold mb-6 tracking-[0.3em] uppercase px-4 py-2 rounded-full border inline-block"
          style={{
            color: "var(--accent)",
            borderColor: "var(--accent)",
            background: "color-mix(in srgb, var(--accent) 8%, transparent)",
          }}
        >
          ✦ Available for work
        </p>
        <h1
          className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none"
          style={{ letterSpacing: "-0.03em" }}
        >
          Pritam
          <br />
          <span style={{ color: "var(--accent)" }}>Bhowmick</span>
        </h1>
        <p
          className="text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Full-Stack Web Developer
          <br />
          Deeply focused. Relentlessly committed.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#projects">
            <button
              className="px-7 py-3 font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
              style={{
                background: "var(--accent)",
                color: "#fff",
                boxShadow:
                  "0 4px 20px color-mix(in srgb, var(--accent) 30%, transparent)",
              }}
            >
              View Projects
            </button>
          </a>
          <a href="https://github.com/pritam-b-dev" target="_blank">
            <button
              className="px-7 py-3 font-semibold rounded-xl border-2 transition-all duration-200 hover:scale-105 cursor-pointer flex items-center gap-2"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              <FaGithub size={18} />
              GitHub
            </button>
          </a>
          <a href="#contact">
            <button
              className="px-7 py-3 font-semibold rounded-xl border-2 transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: "var(--muted)" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 3v14M3 10l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
