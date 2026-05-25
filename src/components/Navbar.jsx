"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
        {/* Logo + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <span className="font-bold text-xl tracking-tight cursor-pointer">
            Pritam-B-dev
          </span>
        </div>

        {/* Desktop Menu */}
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

      {/* Mobile Dropdown Menu  */}
      {isOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--nav-border)]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium py-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--foreground)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
