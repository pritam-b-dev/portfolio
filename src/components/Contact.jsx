"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

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
    <section id="contact" className="container mx-auto max-w-6xl px-6 py-28">
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
        className="text-lg text-center mb-14"
        style={{ color: "var(--muted)" }}
      >
        Have an idea or opportunity? Let's build something amazing together.
      </p>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div
          className="lg:col-span-2 rounded-2xl border p-8 flex flex-col justify-center"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
        >
          <h3 className="text-2xl font-bold mb-5">Let's Connect</h3>

          <p className="leading-8 mb-10" style={{ color: "var(--muted)" }}>
            Whether you have a project idea, freelance opportunity, or just want
            to say hello, feel free to reach out.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "color-mix(in srgb,var(--accent) 12%,transparent)",
                  color: "var(--accent)",
                }}
              >
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Email
                </p>

                <a
                  href="mailto:pritam.bhowmick@ymail.com"
                  className="font-semibold hover:underline"
                >
                  pritam.bhowmick@ymail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "color-mix(in srgb,var(--accent) 12%,transparent)",
                  color: "var(--accent)",
                }}
              >
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Phone
                </p>

                <a
                  href="tel:+8801716349480"
                  className="font-semibold hover:underline"
                >
                  +8801716349480
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div
          className="lg:col-span-3 rounded-2xl border p-8"
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
              className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition hover:scale-[1.02] cursor-pointer"
              style={{
                background: "var(--accent)",
                color: "#fff",
              }}
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
