import { motion } from "framer-motion";
import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto flex flex-col items-center justify-center bg-secondary text-secondary-content p-6 my-16"
    >
      <h1 className="text-4xl font-bold text-center mt-8">Projects</h1>
      <p className="text-center mt-4">
        Here are some of the projects I have worked on. Click on the project
        card to view more details.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
