import Image from "next/image";
import React from "react";

const Projects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/projects`);
  const projects = await res.json();

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
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
  );
};

export default Projects;
