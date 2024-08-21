import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("global");

  return (
    <footer className="bg-base-200 text-base-content mt-8 p-6">
      <div className="flex flex-col gap-2 text-center">
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/justrunis"
            className="text-xl text-primary hover:text-primary-focus"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://twitter.com/justrunis"
            className="text-xl text-primary hover:text-primary-focus"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/justrunis"
            className="text-xl text-primary hover:text-primary-focus"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-sm">
            © {new Date().getFullYear()} {t("home.name")}
          </p>
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
