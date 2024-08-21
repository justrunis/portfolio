import { motion } from "framer-motion";
import { skills } from "../../data/about";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills({ delay }) {
  const { t } = useTranslation("global");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      className="mt-8 w-full"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        {t("about.programmingSkills")}
      </h2>
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center bg-base-300 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105"
          >
            <img
              src={skill.iconURL}
              alt={skill.name}
              className="h-16 w-16 mb-3"
            />
            <p className="text-lg font-medium text-secondary-content">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
