import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto px-6 py-28 max-w-4xl text-center"
    >
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: "var(--accent)" }}
      >
        ✦ Contact
      </p>
      <h2
        className="text-4xl font-black mb-4"
        style={{ letterSpacing: "-0.02em" }}
      >
        Get In Touch
      </h2>
      <p className="mb-10 text-lg" style={{ color: "var(--muted)" }}>
        Open to opportunities. Let&apos;s build something great together.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="mailto:pritam.bhowmick@ymail.com">
          <button
            className="px-8 py-3 font-semibold rounded-xl transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{
              background: "var(--accent)",
              color: "#fff",
              boxShadow:
                "0 4px 20px color-mix(in srgb, var(--accent) 30%, transparent)",
            }}
          >
            Send Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/pritam-b-" target="_blank">
          <button
            className="px-8 py-3 font-semibold rounded-xl border-2 transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            LinkedIn
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
