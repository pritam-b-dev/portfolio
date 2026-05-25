import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:5000/projects");
  const projects = await res.json();

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
      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <div>
          {projects.map((project) => (
            <div key={project._id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.liveUrl}>Live</a>
              <a href={project.githubUrl}>GitHub</a>
            </div>
          ))}
        </div>
      </section>
      {/* Stats */}
      <section>
        <div>
          <h3>3+</h3>
          <p>Months Learning</p>
        </div>
        <div>
          <h3>5+</h3>
          <p>Projects Built</p>
        </div>
        <div>
          <h3>2+</h3>
          <p>Deployed Apps</p>
        </div>
        <div>
          <h3>10+</h3>
          <p>Technologies</p>
        </div>
      </section>
      {/* Journey */}
      <section>
        <h2>My Journey</h2>
        <div>
          <div>
            <h3>2024 — Present</h3>
            <p>Full-Stack Web Development</p>
            <p>
              Learning modern web technologies through hands-on projects. Built
              and deployed full-stack applications using Next.js, Node.js, and
              MongoDB.
            </p>
          </div>
          <div>
            <h3>2025</h3>
            <p>Interactive Cares — Python + Django + React</p>
            <p>
              Enrolled in a structured AI/ML application development course to
              transition into AI-powered web applications.
            </p>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <a href="mailto:pritam.bhowmick@ymail.com">pritam.bhowmick@ymail.com</a>
        <a href="https://www.linkedin.com/in/pritam-b-" target="_blank">
          LinkedIn
        </a>
      </section>
    </main>
  );
}
