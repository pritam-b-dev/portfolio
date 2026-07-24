import React from "react";

const Education = () => {
  return (
    <section id="education" className="container mx-auto max-w-5xl px-6 py-28">
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: "var(--accent)" }}
      >
        ✦ Education
      </p>

      <h2
        className="text-4xl font-black mb-5"
        style={{ letterSpacing: "-0.02em" }}
      >
        Academic Background
      </h2>

      <p
        className="max-w-2xl text-lg leading-8 mb-12"
        style={{ color: "var(--muted)" }}
      >
        My academic foundation in Computer Science introduced me to software
        engineering, algorithms, databases, and programming. Today, I continue
        expanding those fundamentals through real-world full-stack projects.
      </p>

      <div
        className="rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1"
        style={{
          background: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Bachelor Degree
            </p>

            <h3 className="text-2xl font-black mb-2">
              B.Sc. (Hons.) in Computer Science & Engineering
            </h3>

            <p
              className="text-lg font-medium"
              style={{ color: "var(--muted)" }}
            >
              Daffodil International University
            </p>
          </div>

          <div className="grid gap-3 text-sm" style={{ color: "var(--muted)" }}>
            <div>
              <span className="font-semibold">Graduated:</span> 2015
            </div>

            <div>
              <span className="font-semibold">Batch:</span> 26th
            </div>

            <div>
              <span className="font-semibold">Field:</span> Computer Science &
              Engineering
            </div>

            <div>
              <span className="font-semibold">Status:</span> Completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
