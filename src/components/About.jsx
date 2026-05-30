import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-28 max-w-4xl">
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: "var(--accent)" }}
      >
        ✦ About
      </p>
      <h2
        className="text-4xl font-black mb-10"
        style={{ letterSpacing: "-0.02em" }}
      >
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="shrink-0 group">
          <div
            className="w-40 h-40 rounded-2xl overflow-hidden border-2 transition-all duration-300 group-hover:scale-105"
            style={{ borderColor: "var(--accent)" }}
          >
            <Image
              src="/pritam-bhowmick.jpg"
              alt="Pritam Bhowmick"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          I thrive on creative challenges. I think deeply, plan carefully, and
          pour genuine effort into bringing ideas to life through code.
        </p>
      </div>
    </section>
  );
};

export default About;
