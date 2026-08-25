import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-28 max-w-5xl">
      <p
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        style={{ color: "var(--accent)" }}
      >
        About Me
      </p>

      <h2 className="text-4xl font-black mb-10">Who I Am</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div
            className="overflow-hidden rounded-2xl border-2"
            style={{ borderColor: "var(--accent)" }}
          >
            <Image
              src="/pritam-bhowmick.jpg"
              alt="Pritam Bhowmick"
              width={320}
              height={320}
            />
          </div>
        </div>

        <div
          className="space-y-5 leading-8 text-lg"
          style={{ color: "var(--muted)" }}
        >
          <p>
            I'm a Full-Stack Web Developer who enjoys transforming ideas into
            real-world web applications.
          </p>

          <p>
            My primary stack includes Next.js, React.js, TypeScript, Node.js,
            Express.js, Stripe, PostgreSQL, Prisma, MongoDB, Tailwind CSS and
            BetterAuth.
          </p>

          <p>
            Recently I've been focusing on AI-powered applications, integrating
            LLMs, recommendation systems and intelligent user experiences.
          </p>

          <p>
            Outside programming, I enjoy learning new technologies, solving
            challenging problems and continuously improving my development
            workflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
