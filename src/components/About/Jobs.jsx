import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Jobs({ delay = 0 }) {
  const { t } = useTranslation("global");

  const jobs = [
    {
      title: "about.jobTitle1",
      description: "about.jobDescription1",
      experience: "about.jobExperience1",
      time: "about.jobTime1",
    },
    {
      title: "about.jobTitle2",
      description: "about.jobDescription2",
      experience: "about.jobExperience2",
      time: "about.jobTime2",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="mt-8 w-full flex flex-col items-center justify-around gap-5"
    >
      <h2 className="text-2xl font-semibold text-center">{t("about.jobs")}</h2>

      {jobs.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.2 + index * 0.2 }}
          className="flex flex-col items-start bg-base-300 p-6 rounded-lg shadow-md w-full sm:w-3/4 mx-auto border-2"
        >
          <div className="w-full mb-4">
            <h3 className="text-xl font-bold text-secondary-content">
              {t("about.jobTitle")}
            </h3>
            <p className="text-lg mt-1 text-secondary-content">
              {t(job.title)}
            </p>
          </div>

          <div className="w-full mb-4">
            <h3 className="text-xl font-bold text-secondary-content">
              {t("about.jobDescription")}
            </h3>
            <p className="text-lg mt-1 text-secondary-content">
              {t(job.description)}
            </p>
          </div>

          <div className="w-full mb-4">
            <h3 className="text-xl font-bold text-secondary-content">
              {t("about.jobExperience")}
            </h3>
            <p className="text-lg mt-1 text-secondary-content">
              {t(job.experience)}
            </p>
          </div>

          <div className="w-full">
            <h3 className="text-xl font-bold text-secondary-content">
              {t("about.jobTime")}
            </h3>
            <p className="text-lg mt-1 text-secondary-content">{t(job.time)}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
