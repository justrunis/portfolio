import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("global");

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
    <footer className="bg-base-200 text-base-content mt-8 p-6">
      <div className="flex flex-col gap-2 text-center">
        <div className="flex justify-center space-x-6">
          {links.map(({ href, label, icon }, index) => (
            <motion.a
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-xl text-primary hover:text-primary-focus"
            >
              {icon}
            </motion.a>
          ))}
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-sm">
            © {new Date().getFullYear()} {t("home.name")}
          </p>
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
