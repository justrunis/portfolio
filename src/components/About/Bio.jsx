import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const animationVariants = {
  hidden: { opacity: 0, y: -100, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Bio() {
  const { t } = useTranslation("global");

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      className="text-lg text-center mt-6 px-4"
    >
      <p>{t("about.bio")}</p>
    </motion.div>
  );
}
