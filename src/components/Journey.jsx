import React from "react";

const Journey = () => {
  return (
    <section id="journey" className="container mx-auto px-6 py-28 max-w-4xl">
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: "var(--accent)" }}
      >
        ✦ Timeline
      </p>
      <h2
        className="text-4xl font-black mb-10"
        style={{ letterSpacing: "-0.02em" }}
      >
        My Journey
      </h2>
      <div className="space-y-4">
        {[
          {
            year: "2015",
            title: "Software Support Professional",
            desc: "Started my professional career in software support, developing strong communication, customer interaction, and structured problem-solving skills.",
          },
          {
            year: "2016 – 2022",
            title: "Professional Industry Experience",
            desc: "Worked across manufacturing, insurance, and administrative roles where I strengthened responsibility, teamwork, discipline, and analytical thinking.",
          },
          {
            year: "2023",
            title: "Career Transition into Software Development",
            desc: "Made a deliberate career transition into programming. Started learning JavaScript, modern web development, backend architecture, databases, and software engineering fundamentals.",
          },
          {
            year: "2024",
            title: "Building Real-World Full-Stack Applications",
            desc: "Developed multiple production-ready projects using Next.js, Express.js, MongoDB, BetterAuth, REST APIs, authentication systems, dashboards, payments, and AI integrations.",
          },
          {
            year: "2025 — Present",
            title: "Seeking Full-Stack Software Engineer Opportunity",
            desc: "Continuously improving software engineering skills while building scalable projects and preparing for opportunities in product-based engineering teams.",
          },
        ].map((item) => (
          <div
            key={item.year}
            className="p-6 rounded-2xl border transition-all duration-200 hover:scale-[1.01] cursor-default"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            <p
              className="text-xs font-semibold mb-1 tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              {item.year}
            </p>
            <h3 className="font-black mb-2">{item.title}</h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
