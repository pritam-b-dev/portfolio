import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-6 py-28 max-w-4xl">
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: "var(--accent)" }}
      >
        ✦ Skills
      </p>
      <h2
        className="text-4xl font-black mb-10"
        style={{ letterSpacing: "-0.02em" }}
      >
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-3">
        {[
          "HTML",
          "CSS",
          "Tailwind CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "BetterAuth",
          "Git",
          "GitHub",
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-sm font-medium rounded-xl border cursor-default transition-all duration-200 hover:scale-105"
            style={{
              borderColor: "var(--card-border)",
              background: "var(--card-bg)",
              color: "var(--foreground)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
