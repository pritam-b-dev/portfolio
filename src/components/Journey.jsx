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
            title: "Early Career — Software Support",
            desc: "Started professional journey in customer support at a software company, developing communication and problem-solving skills.",
          },
          {
            year: "2016 — 2020",
            title: "Corporate & Industry Roles",
            desc: "Worked in EPZ industry and insurance head office. Built organizational, analytical, and teamwork experience.",
          },
          {
            year: "2021 — 2022",
            title: "Data-Focused Work",
            desc: "Engaged in data entry and administrative tasks, strengthening attention to detail and accuracy.",
          },
          {
            year: "2023",
            title: "Transition to Programming",
            desc: "Dedicated shift into coding. Began learning JavaScript, Node.js, and backend development fundamentals.",
          },
          {
            year: "2024 — Present",
            title: "Full-Stack Web Development",
            desc: "Learning modern web technologies through hands-on projects. Built and deployed full-stack applications using Next.js, Node.js, and MongoDB.",
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
