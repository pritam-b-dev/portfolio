import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center py-8 text-xs border-t"
      style={{ borderColor: "var(--card-border)", color: "var(--muted)" }}
    >
      © 2026 Pritam Bhowmick. Built with Next.js, Express.js & MongoDB.
    </footer>
  );
};

export default Footer;
