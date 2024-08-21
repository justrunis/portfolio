import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation("global");

  const initialStyle = { scale: 0 };
  const animateStyle = { scale: 1 };
  const transitionStyle = { duration: 0.5 };
  const hoverStyle = { scale: 1.1 };
  const tapStyle = { scale: 0.9 };

  const links = [
    {
      href: "https://github.com/justrunis",
      label: t("contact.github"),
      icon: <FaGithub className="text-4xl inline" />,
    },
    {
      href: "https://www.linkedin.com/in/justinas-runevicius-9268081bb/",
      label: t("contact.linkedin"),
      icon: <FaLinkedin className="text-4xl inline" />,
    },
    {
      href: "mailto:justrunis@gmail.com",
      label: t("contact.email"),
      icon: <IoIosMail className="text-4xl inline" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto flex flex-col items-center justify-center bg-secondary text-secondary-content p-6 my-16 sm:border-4 sm:border-base rounded-lg shadow-lg xl:w-1/2"
    >
      <h1 className="text-4xl font-bold text-center mt-8">
        {t("contact.title")}
      </h1>
      <div>
        <p className="text-center mt-4">{t("contact.description")}</p>
        <div className="flex flex-col lg:flex-row gap-5 justify-center mt-4">
          {links.map(({ href, label, icon }, index) => (
            <motion.a
              key={index}
              initial={initialStyle}
              animate={animateStyle}
              transition={transitionStyle}
              whileHover={hoverStyle}
              whileTap={tapStyle}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center justify-center gap-2 mx-2 bg-base-300 rounded-lg p-2"
            >
              <p className="inline">{label}</p>
              {icon}
            </motion.a>
          ))}
        </div>
        <p></p>
      </div>
    </motion.div>
  );
}
