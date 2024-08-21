import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TitleSection = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <motion.h2
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-center mt-4"
      >
        {t("home.title")}
      </motion.h2>
      <motion.h2
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
        className="text-3xl font-bold text-center mt-4"
      >
        {t("home.name")}
      </motion.h2>
    </>
  );
};

export default TitleSection;
