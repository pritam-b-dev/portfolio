"use client";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "Next.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "HeroUI",
      "Recharts",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "MongoDB",
      "BetterAuth",
      "JWT Authentication",
      "Cookie Authentication",
      "Stripe Integration",
    ],
  },

  {
    title: "AI",
    skills: [
      "AI Integration",
      "Prompt Engineering",
      "LLM Integration",
      "Recommendation Engine",
      "Context-aware AI Chat",
    ],
  },

  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "MongoDB Atlas", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto max-w-5xl px-6 py-28">
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: "var(--accent)" }}
      >
        ✦ Skills
      </p>

      <h2 className="text-4xl font-black mb-12">Technical Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border p-6"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            <h3
              className="text-xl font-bold mb-5"
              style={{ color: "var(--accent)" }}
            >
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl border text-sm font-medium transition hover:scale-105"
                  style={{
                    borderColor: "var(--accent)",
                    color: "var(--foreground)",
                    background:
                      "color-mix(in srgb, var(--accent) 8%, transparent)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
