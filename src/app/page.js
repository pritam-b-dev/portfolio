import Image from "next/image";
import ThemeToggle from "../components/ThemeToggle";
import { FaGithub } from "react-icons/fa";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/projects`);
  const projects = await res.json();

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <main className="overflow-x-hidden">
      <ThemeToggle />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
        {/* Background subtle grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 animate-fade-in">
          <p
            className="text-xs font-semibold mb-6 tracking-[0.3em] uppercase px-4 py-2 rounded-full border inline-block"
            style={{
              color: "var(--accent)",
              borderColor: "var(--accent)",
              background: "color-mix(in srgb, var(--accent) 8%, transparent)",
            }}
          >
            ✦ Available for work
          </p>
          <h1
            className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            Pritam
            <br />
            <span style={{ color: "var(--accent)" }}>Bhowmick</span>
          </h1>
          <p
            className="text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Full-Stack Web Developer
            <br />
            Deeply focused. Relentlessly committed.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#projects">
              <button
                className="px-7 py-3 font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  boxShadow:
                    "0 4px 20px color-mix(in srgb, var(--accent) 30%, transparent)",
                }}
              >
                View Projects
              </button>
            </a>
            <a href="https://github.com/pritam-b-dev" target="_blank">
              <button
                className="px-7 py-3 font-semibold rounded-xl border-2 transition-all duration-200 hover:scale-105 cursor-pointer flex items-center gap-2"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
              >
                <FaGithub size={18} />
                GitHub
              </button>
            </a>
            <a href="#contact">
              <button
                className="px-7 py-3 font-semibold rounded-xl border-2 transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
              >
                Contact Me
              </button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ color: "var(--muted)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 3v14M3 10l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto px-6 py-28 max-w-4xl">
        <p
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          ✦ About
        </p>
        <h2
          className="text-4xl font-black mb-10"
          style={{ letterSpacing: "-0.02em" }}
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="shrink-0 group">
            <div
              className="w-40 h-40 rounded-2xl overflow-hidden border-2 transition-all duration-300 group-hover:scale-105"
              style={{ borderColor: "var(--accent)" }}
            >
              <Image
                src="/pritam-bhowmick.jpg"
                alt="Pritam Bhowmick"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            I thrive on creative challenges. I think deeply, plan carefully, and
            pour genuine effort into bringing ideas to life through code.
          </p>
        </div>
      </section>

      {/* Skills */}
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

      {/* Stats */}
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

      {/* Projects */}
      <section
        id="projects"
        className="container mx-auto px-4 sm:px-6 py-20 md:py-28 max-w-5xl"
      >
        <p
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          ✦ Work
        </p>

        <h2
          className="text-3xl sm:text-4xl font-black mb-10"
          style={{ letterSpacing: "-0.02em" }}
        >
          Projects
        </h2>

        {/* Featured Projects */}
        <div className="space-y-8 mb-12">
          {featured.map((project) => (
            <div
              key={project._id}
              className="rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                {project.thumbnail && (
                  <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto lg:h-auto relative bg-zinc-900">
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    Featured Project
                  </span>

                  <h3 className="text-2xl md:text-3xl font-black mb-3">
                    {project.name}
                  </h3>

                  <p
                    className="text-sm md:text-base leading-relaxed mb-6"
                    style={{ color: "var(--muted)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full border"
                        style={{
                          borderColor: "var(--accent)",
                          color: "var(--accent)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="text-sm font-semibold hover:opacity-70 transition-opacity"
                      style={{ color: "var(--accent)" }}
                    >
                      Live →
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-sm font-semibold hover:opacity-70 transition-opacity"
                      style={{ color: "var(--muted)" }}
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {others.map((project) => (
            <div
              key={project._id}
              className="rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full flex flex-col"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              {project.thumbnail && (
                <div className="w-full aspect-video relative bg-zinc-900">
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-black text-xl mb-2 line-clamp-2">
                  {project.name}
                </h3>

                <p
                  className="text-xs md:text-sm leading-relaxed mb-4 text-ellipsis line-clamp-3 flex-1"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies?.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[10px] rounded-full border"
                      style={{
                        borderColor: "var(--accent)",
                        color: "var(--accent)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="text-xs font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: "var(--accent)" }}
                  >
                    Live →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-xs font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: "var(--muted)" }}
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Education */}
      <section
        id="education"
        className="container mx-auto px-6 py-28 max-w-4xl"
      >
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

      {/* Journey */}
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

      {/* Contact */}
      <section
        id="contact"
        className="container mx-auto px-6 py-28 max-w-4xl text-center"
      >
        <p
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          ✦ Contact
        </p>
        <h2
          className="text-4xl font-black mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          Get In Touch
        </h2>
        <p className="mb-10 text-lg" style={{ color: "var(--muted)" }}>
          Open to opportunities. Let&apos;s build something great together.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:pritam.bhowmick@ymail.com">
            <button
              className="px-8 py-3 font-semibold rounded-xl transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                background: "var(--accent)",
                color: "#fff",
                boxShadow:
                  "0 4px 20px color-mix(in srgb, var(--accent) 30%, transparent)",
              }}
            >
              Send Email
            </button>
          </a>
          <a href="https://www.linkedin.com/in/pritam-b-" target="_blank">
            <button
              className="px-8 py-3 font-semibold rounded-xl border-2 transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              LinkedIn
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-8 text-xs border-t"
        style={{ borderColor: "var(--card-border)", color: "var(--muted)" }}
      >
        © 2026 Pritam Bhowmick. Built with Next.js, Express.js & MongoDB.
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
      `}</style>
    </main>
  );
}
