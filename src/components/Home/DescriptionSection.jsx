import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const DescriptionSection = () => {
  const { t } = useTranslation("global");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="flex flex-row items-center justify-center lg:w-1/2"
    >
      <motion.p
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-4"
      >
        {t("home.description")}
      </motion.p>
    </motion.div>
  );
};

export default DescriptionSection;
