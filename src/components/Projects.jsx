"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/projects`);
      const data = await res.json();
      setProjects(data);
    };

    loadProjects();
  }, []);

  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const others = projects.filter((p) => !p.featured).slice(0, 6);

  return (
    <>
      <section id="projects" className="container mx-auto max-w-6xl px-6 py-28">
        <p
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          ✦ Featured Work
        </p>

        <h2
          className="text-4xl font-black mb-5"
          style={{ letterSpacing: "-0.02em" }}
        >
          Selected Projects
        </h2>

        <p
          className="max-w-3xl text-lg leading-8 mb-16"
          style={{ color: "var(--muted)" }}
        >
          A collection of projects focused on full-stack development, AI-powered
          applications, authentication systems, scalable architecture, and
          modern user experience.
        </p>

        <div className="space-y-10">
          {featured.map((project) => (
            <div
              key={project._id}
              className="rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              <div className="grid lg:grid-cols-2">
                <div
                  className="relative aspect-video"
                  style={{
                    background:
                      "color-mix(in srgb,var(--accent) 8%, var(--background))",
                  }}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    className="object-contain p-6 transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <span
                    className="uppercase tracking-[0.2em] text-xs font-bold mb-4"
                    style={{ color: "var(--accent)" }}
                  >
                    Featured Project
                  </span>

                  <h3 className="text-3xl font-black mb-4">{project.name}</h3>

                  <p
                    className="leading-8 mb-6 line-clamp-3"
                    style={{ color: "var(--muted)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies?.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border text-xs font-medium"
                        style={{
                          borderColor: "var(--accent)",
                          color: "var(--accent)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5 flex-wrap">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      style={{ color: "var(--accent)" }}
                    >
                      Live Demo →
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      style={{ color: "var(--foreground)" }}
                    >
                      Source Code →
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      style={{ color: "var(--muted)" }}
                      className="cursor-pointer"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
          {others.map((project) => (
            <div
              key={project._id}
              className="rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              <div
                className="relative aspect-video"
                style={{
                  background:
                    "color-mix(in srgb,var(--accent) 8%, var(--background))",
                }}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-contain p-5 transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>

                <p
                  className="text-sm leading-7 line-clamp-3 flex-1"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5 mb-6">
                  {project.technologies?.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full border text-[11px]"
                      style={{
                        borderColor: "var(--accent)",
                        color: "var(--accent)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="text-sm font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    Live →
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-sm font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    GitHub →
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-semibold cursor-pointer"
                    style={{ color: "var(--muted)" }}
                  >
                    Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
