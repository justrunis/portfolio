import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGraduationCap, FaBook } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

export default function Education({ delay }) {
  const { t } = useTranslation("global");

  const educationItems = [
    {
      title: t("about.educationTitle1"),
      duration: "2019 - 2023",
      icon: <FaGraduationCap />,
    },
    {
      title: t("about.educationTitle2"),
      duration: "2015 - 2019",
      icon: <FaBook />,
    },
    {
      title: t("about.educationTitle3"),
      duration: "2023",
      icon: <GrCertificate />,
    },
    {
      title: t("about.educationTitle4"),
      duration: "2023 - 2024",
      icon: <GrCertificate />,
    },
    {
      title: t("about.educationTitle5"),
      duration: "2024",
      icon: <GrCertificate />,
    },
    {
      title: t("about.educationTitle6"),
      duration: "2025",
      icon: <GrCertificate />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay }}
      className="font-bold text-center mt-8"
    >
      <h2 className="text-2xl font-bold">{t("about.education")}</h2>
      <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-2">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-around gap-4 bg-base-300 border-2 rounded-lg p-4"
            style={{ maxWidth: "400px" }} // Adjust the max width here
          >
            <div className="text-3xl lg:text-6xl">{item.icon}</div>
            <div>
              <h3 className="text-lg lg:text-xl font-bold">{item.title}</h3>
              <p className="text-sm lg:text-lg">
                {t("about.duration")}: {item.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
