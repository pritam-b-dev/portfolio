"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    level: 90,
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
    level: 88,
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
    level: 85,
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
    level: 90,
    skills: ["Git", "GitHub", "Postman", "MongoDB Atlas", "Vercel"],
  },
];

const Skills = () => {
  const [open, setOpen] = useState("Frontend");

  return (
    <section id="skills" className="container mx-auto max-w-4xl px-6 py-28">
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: "var(--accent)" }}
      >
        ✦ Skills
      </p>

      <h2 className="text-4xl font-black mb-12">Technical Skills</h2>

      <div className="space-y-5">
        {skillCategories.map((category) => {
          const isOpen = open === category.title;

          return (
            <div
              key={category.title}
              className="rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? "" : category.title)}
                className="w-full p-6 text-left cursor-pointer"
              >
                <div className="flex justify-between items-center mb-5">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    {category.title}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="flex-1 h-2.5 rounded-full overflow-hidden"
                    style={{
                      background: "var(--card-border)",
                    }}
                  >
                    <div
                      className="relative h-full rounded-full overflow-hidden transition-all duration-700"
                      style={{
                        width: `${category.level}%`,
                        background:
                          "linear-gradient(90deg,#1b4332 0%,#2d6a4f 55%,#40916c 100%)",
                        boxShadow: "0 0 10px rgba(45,106,79,.35)",
                      }}
                    >
                      <span className="shimmer"></span>
                    </div>
                  </div>

                  <span
                    className="text-sm font-semibold min-w-[44px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {category.level}%
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          borderColor: "var(--accent)",
                          color: "var(--foreground)",
                          background:
                            "color-mix(in srgb,var(--accent) 8%,transparent)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
