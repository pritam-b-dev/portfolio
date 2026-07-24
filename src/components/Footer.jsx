import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="border-t mt-20"
      style={{ borderColor: "var(--card-border)" }}
    >
      <div className="container mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-black">
            Pritam<span style={{ color: "var(--accent)" }}>.</span>
          </h3>

          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            Full-Stack Web Developer building modern, scalable and AI-powered
            web applications.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/pritam-b-dev"
            target="_blank"
            className="transition hover:scale-110"
            style={{ color: "var(--foreground)" }}
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/pritam-b-"
            target="_blank"
            className="transition hover:scale-110"
            style={{ color: "var(--foreground)" }}
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      <div
        className="text-center text-sm py-5 border-t flex items-center justify-center gap-2"
        style={{
          borderColor: "var(--card-border)",
          color: "var(--muted)",
        }}
      >
        Built with <FaHeart color="#ef4444" size={14} /> using Next.js,
        Express.js & MongoDB.
      </div>
    </footer>
  );
};

export default Footer;
