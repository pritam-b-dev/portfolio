"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--accent) 12%, var(--background))"
          : "transparent",
        borderBottom: scrolled ? "1px solid var(--nav-border)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight cursor-pointer">
          PB
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                style={{ color: "var(--foreground)" }}
                className="text-sm font-medium hover:opacity-60 transition-opacity cursor-pointer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
