"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 mt-20 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 animate-fade-in max-w-5xl">
        <p
          className="text-xs font-semibold mb-6 tracking-[0.3em] uppercase px-4 py-2 rounded-full border inline-block"
          style={{
            color: "var(--accent)",
            borderColor: "var(--accent)",
            background: "color-mix(in srgb, var(--accent) 8%, transparent)",
          }}
        >
          Open to Full-Stack Developer Opportunities
        </p>

        <h1
          className="text-5xl md:text-8xl font-black leading-none mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          Hi, I'm <br />
          <span style={{ color: "var(--accent)" }}>Pritam Bhowmick</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          style={{ color: "var(--muted)" }}
        >
          Full-Stack Web Developer passionate about building scalable,
          AI-powered web applications using Next.js, React, TypeScript, Node.js,
          Express.js and MongoDB.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects">
            <button
              className="px-7 py-3 rounded-xl font-semibold cursor-pointer"
              style={{
                background: "var(--accent)",
                color: "#fff",
              }}
            >
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button
              className="px-7 py-3 rounded-xl border-2 font-semibold cursor-pointer transition-all hover:scale-105"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
              Contact Me
            </button>
          </a>
        </div>

        <div className="flex justify-center items-center gap-7 mt-10 text-2xl">
          <a
            href="https://github.com/pritam-b-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            style={{ color: "var(--foreground)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--foreground)")
            }
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pritam-b-"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            style={{ color: "var(--foreground)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--foreground)")
            }
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
