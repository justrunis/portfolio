import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Jobs({ delay }) {
  const { t } = useTranslation("global");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
      className="mt-8 w-full"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        {t("about.jobs")}
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-start bg-base-300 p-6 rounded-lg shadow-md w-full sm:w-3/4 mx-auto border-2"
      >
        <div className="w-full mb-4">
          <h3 className="text-xl font-bold text-secondary-content">
            {t("about.jobTitle")}
          </h3>
          <p className="text-lg mt-1 text-secondary-content">
            {t("about.jobTitle1")}
          </p>
        </div>

        <div className="w-full mb-4">
          <h3 className="text-xl font-bold text-secondary-content">
            {t("about.jobDescription")}
          </h3>
          <p className="text-lg mt-1 text-secondary-content">
            {t("about.jobDescription1")}
          </p>
        </div>

        <div className="w-full mb-4">
          <h3 className="text-xl font-bold text-secondary-content">
            {t("about.jobExperience")}
          </h3>
          <p className="text-lg mt-1 text-secondary-content">
            {t("about.jobExperience1")}
          </p>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-bold text-secondary-content">
            {t("about.jobTime")}
          </h3>
          <p className="text-lg mt-1 text-secondary-content">
            {t("about.jobTime1")}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
