import React from "react";

const Status = () => {
  return (
    <section className="container mx-auto px-6 py-10 max-w-4xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "2+", label: "Years Learning" },
          { num: "5+", label: "Projects Built" },
          { num: "2+", label: "Deployed Apps" },
          { num: "10+", label: "Technologies" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-2xl border transition-all duration-200 hover:scale-105 cursor-default"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            <h3
              className="text-4xl font-black mb-1"
              style={{ color: "var(--accent)" }}
            >
              {stat.num}
            </h3>
            <p
              className="text-xs font-medium"
              style={{ color: "var(--muted)" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Status;
