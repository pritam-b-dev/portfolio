import React from "react";

const Education = () => {
  return (
    <section id="education" className="container mx-auto px-6 py-28 max-w-4xl">
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: "var(--accent)" }}
      >
        ✦ Education
      </p>
      <h2
        className="text-4xl font-black mb-10"
        style={{ letterSpacing: "-0.02em" }}
      >
        Academic Background
      </h2>
      <div
        className="p-6 rounded-2xl border transition-all duration-200 hover:scale-[1.01] flex flex-col md:flex-row justify-between items-start md:items-center"
        style={{
          background: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
      >
        {/* Left side */}
        <div>
          <p
            className="text-xs font-semibold mb-1 tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Graduated — 2015
          </p>
          <h3 className="font-black mb-2">
            B.Sc. (Hons.) in Computer Science & Engineering
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Daffodil International University
          </p>
        </div>

        {/* Right side */}
        <div
          className="text-sm mt-4 md:mt-0 text-right"
          style={{ color: "var(--muted)" }}
        >
          <p>26th Batch</p>
          <p>Certificate Serial No: 5000921</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
