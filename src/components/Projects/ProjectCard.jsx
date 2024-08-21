import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project, delay }) => {
  const {
    id,
    title,
    type,
    websiteURL,
    gitHubRepositoryURL,
    keywords,
    projectImageURL,
  } = project;

  const { t } = useTranslation("global");

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay }}
      className="flex flex-col justify-between bg-base-300 text-base-content shadow-lg rounded-lg overflow-hidden p-6"
    >
      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: delay + 0.2 }}
        className="flex flex-col justify-center items-center gap-4"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center">{title}</h2>
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          height={200}
          width={200}
          src={projectImageURL}
          alt={title}
          className="rounded-lg w-48 h-48 object-contain"
        />
        <p className="text-sm md:text-base text-center my-4">
          {t(`projects.projectDescription${id}`)}
        </p>
      </motion.div>

      {/* Keywords */}
      <div className="grid grid-cols-2 gap-2 ls:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: delay + 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center gap-2 bg-white text-black p-2 rounded-lg hover:cursor-pointer"
        >
          <p className="text-sm break-words">{type}</p>
          <p>
            {type === "Fullstack"
              ? "🌐"
              : type === "Mobile"
              ? "📱"
              : type === "Frontend"
              ? "🎨"
              : type === "Backend"
              ? "⚙️"
              : "💻"}
          </p>
        </motion.div>
        {keywords.map((keyword, index) => (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: delay + 0.4 + index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={keyword.id}
            className="flex items-center justify-center gap-2 bg-white text-black p-2 rounded-lg hover:cursor-pointer"
          >
            <p className="text-sm break-words">{keyword.name}</p>
            <p>{keyword.icon}</p>
          </motion.div>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-row justify-between gap-4 mt-4">
        {websiteURL.length > 0 && (
          <motion.a
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: delay + 1 }}
            href={websiteURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline text-sm md:text-base"
          >
            <FaLink className="mr-2" />
            <span>{t("projects.visit")}</span>
          </motion.a>
        )}
        {gitHubRepositoryURL.length > 0 && (
          <motion.a
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: delay + 1.2 }}
            href={gitHubRepositoryURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline text-sm md:text-base"
          >
            <FaGithub className="mr-2" />
            <span>{t("projects.visitRepository")}</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
