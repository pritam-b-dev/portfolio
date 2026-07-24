"use client";

import Image from "next/image";
import { IoClose } from "react-icons/io5";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border"
        style={{
          background: "var(--background)",
          borderColor: "var(--card-border)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-2 rounded-full"
          style={{
            background: "var(--card-bg)",
          }}
        >
          <IoClose size={24} />
        </button>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div
            className="relative w-full aspect-video"
            style={{
              background:
                "color-mix(in srgb,var(--accent) 8%, var(--background))",
            }}
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              title="Click to visit Live Site"
              className="object-contain p-8 cursor-pointer transition duration-500 hover:scale-105"
            />
          </div>
        </a>

        <div className="p-8">
          <h2 className="text-4xl font-black mb-5">{project.name}</h2>

          <p
            className="leading-8 text-lg mb-8"
            style={{ color: "var(--muted)" }}
          >
            {project.description}
          </p>

          <h3 className="text-xl font-bold mb-3">Technology Stack</h3>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border text-sm"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-3">Challenges</h3>

          <p className="leading-8 mb-8" style={{ color: "var(--muted)" }}>
            {project.challenge ||
              "Focused on building a scalable architecture, improving performance, implementing secure authentication, and delivering a polished user experience."}
          </p>

          <h3 className="text-xl font-bold mb-3">Future Improvements</h3>

          <ul
            className="list-disc pl-6 space-y-2 mb-10"
            style={{ color: "var(--muted)" }}
          >
            {(
              project.futurePlans || [
                "Add AI-powered features",
                "Improve performance",
                "Add notifications",
                "Optimize accessibility",
              ]
            ).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              className="px-6 py-3 rounded-xl font-semibold"
              style={{
                background: "var(--accent)",
                color: "#fff",
              }}
            >
              Live Demo
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              className="px-6 py-3 rounded-xl border font-semibold"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
