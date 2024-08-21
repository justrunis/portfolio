import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Bio from "./Bio";
import profileImage from "../../assets/profileImage.jfif";

// Define animation variants and transition constants
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { x: 100 },
  visible: { x: 0 },
};

const imageHover = {
  rotate: 360,
};

const imageTransition = {
  duration: 0.3,
};

const titleTransition = {
  duration: 1,
  delay: 0,
};

const imageContainerTransition = {
  duration: 0,
};

export default function AboutHero({ delay }) {
  const { t } = useTranslation("global");

  return (
    <>
      {/* Title */}
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ ...titleTransition, delay }}
        className="text-4xl font-bold text-center mt-8"
      >
        {t("about.title")}
      </motion.h1>

      {/* Profile Picture */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover={imageHover}
        transition={{ ...imageContainerTransition, delay }}
        className="flex flex-row items-center justify-center w-1/3 my-4"
      >
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover={imageHover}
          transition={imageTransition}
          src={profileImage}
          alt="Profile"
          className="h-auto w-1/2 rounded-full"
        />
      </motion.div>
      <Bio />
    </>
  );
}
