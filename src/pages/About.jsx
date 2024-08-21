import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Skills from "../components/About/Skills";
import AboutHero from "../components/About/AboutHero";
import Jobs from "../components/About/Jobs";
import Education from "../components/About/Education";

export default function About() {
  const { t } = useTranslation("global");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto flex flex-col items-center justify-center bg-secondary text-secondary-content p-6 my-16 sm:border-4 sm:border-base rounded-lg shadow-lg xl:w-1/2"
    >
      <AboutHero delay={0.2} />
      <Education delay={0.4} />
      <Jobs delay={0.6} />
      <Skills delay={0.8} />
    </motion.div>
  );
}
