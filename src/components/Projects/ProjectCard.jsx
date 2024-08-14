import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    websiteURL,
    gitHubRepositoryURL,
    usedTechnologies,
  } = project;

  return (
    <div className="flex flex-col justify-between bg-base-300 text-base-content shadow-lg rounded-lg overflow-hidden p-6">
      {/* Title and Description */}
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2"> {title} </h2>
        <p className="text-sm md:text-base">{description}</p>
      </div>

      {/* Technologies Used */}
      <div className="mb-4">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Technologies Used:
        </h3>
        <ul className="list-disc list-inside pl-4 text-sm md:text-base">
          {usedTechnologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        {websiteURL.length > 0 && (
          <a
            href={websiteURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline text-sm md:text-base"
          >
            <FaLink className="mr-2" />
            <span>Visit Project</span>
          </a>
        )}
        {gitHubRepositoryURL.length > 0 && (
          <a
            href={gitHubRepositoryURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline text-sm md:text-base"
          >
            <FaGithub className="mr-2" />
            <span>Visit Repository</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
