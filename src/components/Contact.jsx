import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto max-w-5xl px-6 py-28 text-center"
    >
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: "var(--accent)" }}
      >
        ✦ Contact
      </p>

      <h2
        className="text-4xl font-black mb-5"
        style={{ letterSpacing: "-0.02em" }}
      >
        Let's Build Something Great Together
      </h2>

      <p
        className="max-w-2xl mx-auto text-lg leading-8 mb-12"
        style={{ color: "var(--muted)" }}
      >
        I'm actively looking for Full-Stack Developer opportunities and always
        open to collaborating on meaningful products. Feel free to reach out.
      </p>

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        <div
          className="rounded-2xl border p-6"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
        >
          <FaEnvelope
            size={28}
            className="mx-auto mb-4"
            color="var(--accent)"
          />
          <h3 className="font-bold mb-2">Email</h3>
          <p style={{ color: "var(--muted)" }}>pritam.bhowmick@ymail.com</p>
        </div>

        <div
          className="rounded-2xl border p-6"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
        >
          <FaLinkedin
            size={28}
            className="mx-auto mb-4"
            color="var(--accent)"
          />
          <h3 className="font-bold mb-2">LinkedIn</h3>
          <p style={{ color: "var(--muted)" }}>
            Connect with me professionally.
          </p>
        </div>

        <div
          className="rounded-2xl border p-6"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
        >
          <FaGithub size={28} className="mx-auto mb-4" color="var(--accent)" />
          <h3 className="font-bold mb-2">GitHub</h3>
          <p style={{ color: "var(--muted)" }}>Explore my open-source work.</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://mail.google.com/mail/?view=cm&to=pritam.bhowmick@ymail.com"
          target="_blank"
        >
          <button
            className="px-8 py-3 rounded-xl font-semibold cursor-pointer hover:scale-105 transition"
            style={{
              background: "var(--accent)",
              color: "#fff",
            }}
          >
            Send Email
          </button>
        </a>

        <a href="https://github.com/pritam-b-dev" target="_blank">
          <button
            className="px-8 py-3 rounded-xl border-2 font-semibold cursor-pointer hover:scale-105 transition"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            GitHub
          </button>
        </a>

        <a href="https://www.linkedin.com/in/pritam-b-" target="_blank">
          <button
            className="px-8 py-3 rounded-xl border-2 font-semibold cursor-pointer hover:scale-105 transition"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            LinkedIn
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
