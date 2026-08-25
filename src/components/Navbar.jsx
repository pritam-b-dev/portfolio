"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaDownload } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--background) 88%, var(--accent) 12%)"
          : "transparent",
        borderBottom: scrolled ? "1px solid var(--nav-border)" : "none",
        backdropFilter: scrolled ? "blur(18px)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight hover:opacity-80 transition"
        >
          <span style={{ color: "var(--foreground)" }}>Pritam</span>
          <span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-semibold transition hover:opacity-70"
                style={{ color: "var(--foreground)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume/Pritam_Bhowmick_Resume.pdf"
            target="_blank"
            download
            className="flex items-center gap-2 text-xl font-semibold hover:opacity-70 transition"
            style={{ color: "var(--accent)" }}
          >
            <FaDownload />
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          style={{ color: "var(--foreground)" }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "var(--background)",
            borderColor: "var(--nav-border)",
          }}
        >
          <div className="flex flex-col p-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/resume/Resume_Pritam_Bhowmick.pdf"
              target="_blank"
              download
              className="flex items-center gap-2 text-base font-semibold hover:opacity-70 transition"
              style={{ color: "var(--accent)" }}
            >
              <FaDownload />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
