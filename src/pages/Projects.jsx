import { motion } from "framer-motion";
import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../data/projects";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("global");

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="container mx-auto flex flex-col items-center justify-center bg-secondary text-secondary-content p-6 my-16 rounded-lg shadow-lg"
    >
      <h1 className="text-4xl font-bold text-center mt-8">
        {t("projects.title")}
      </h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-center mt-4"
      >
        {t("projects.description")}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 0.4} />
        ))}
      </div>
    </motion.div>
  );
}
