"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message!");
      });
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-28 max-w-4xl">
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-center"
        style={{ color: "var(--accent)" }}
      >
        ✦ Contact
      </p>

      <h2
        className="text-4xl font-black mb-4 text-center"
        style={{ letterSpacing: "-0.02em" }}
      >
        Get In Touch
      </h2>

      <p
        className="mb-10 text-lg text-center"
        style={{ color: "var(--muted)" }}
      >
        Have an idea or opportunity? Let's build something amazing together.
      </p>

      <div
        className="rounded-2xl border p-8"
        style={{
          background: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border outline-none"
            style={{
              background: "var(--background)",
              borderColor: "var(--card-border)",
            }}
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl border outline-none"
            style={{
              background: "var(--background)",
              borderColor: "var(--card-border)",
            }}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl border outline-none"
            style={{
              background: "var(--background)",
              borderColor: "var(--card-border)",
            }}
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Write your message..."
            required
            className="w-full px-4 py-3 rounded-xl border outline-none resize-none"
            style={{
              background: "var(--background)",
              borderColor: "var(--card-border)",
            }}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold transition hover:scale-[1.02] cursor-pointer"
            style={{
              background: "var(--accent)",
              color: "#fff",
            }}
          >
            Send Message
          </button>
        </form>

        <div
          className="mt-8 pt-6 border-t text-center space-y-2"
          style={{ borderColor: "var(--card-border)" }}
        >
          <p style={{ color: "var(--muted)" }}>📧 pritam.bhowmick@ymail.com</p>
          <p style={{ color: "var(--muted)" }}>📞 +8801716349480</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
