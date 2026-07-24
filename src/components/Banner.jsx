"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
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
          AI-powered web applications using Next.js, React, Node.js, Express.js
          and MongoDB.
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

          <a href="/resume.pdf" target="_blank">
            <button
              className="px-7 py-3 font-semibold rounded-xl transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                background: "var(--accent)",
                color: "#fff",
              }}
            >
              Download Resume
            </button>
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-10 text-2xl">
          <a
            href="https://github.com/pritam-b-dev"
            target="_blank"
            style={{ color: "var(--foreground)" }}
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            style={{ color: "var(--foreground)" }}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
