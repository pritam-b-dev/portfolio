import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section>
        <h1>Pritam Bhowmick</h1>
        <p>
          Full-Stack Web Developer | Deeply focused. Relentlessly committed.
        </p>
        <div>
          <button>View Projects</button>
          <button>Contact Me</button>
        </div>
      </section>
      {/* About */}
      <section>
        <h2>About Me</h2>
        <p>
          I thrive on creative challenges. I think deeply, plan carefully, and
          pour genuine effort into bringing ideas to life through code.
        </p>
      </section>
      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <div>
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
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
