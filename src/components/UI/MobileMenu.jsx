import React, { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { FaTimes } from "react-icons/fa";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

export default function MobileMenu({ isOpen, onClose }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const getLanguage = () => i18n.language.toUpperCase();

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng.toLowerCase());
    setIsDropdownOpen(false); // Close dropdown after language change
  };

  return (
    <motion.div
      className={`fixed inset-0 bg-base-200 z-10 transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex flex-col items-center pt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="py-2 px-4 text-xl block lg:inline-block hover:text-secondary focus:text-secondary"
          onClick={onClose}
        >
          <FaTimes />
        </motion.button>
        <NavLink href="/" onClick={onClose}>
          {t("header.home")}
        </NavLink>
        <NavLink href="/about" onClick={onClose}>
          {t("header.about")}
        </NavLink>
        <NavLink href="/projects" onClick={onClose}>
          {t("header.projects")}
        </NavLink>
        <NavLink href="/contact" onClick={onClose}>
          {t("header.contact")}
        </NavLink>
        <LanguageDropdown
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}
          currentLanguage={getLanguage()}
          handleChangeLanguage={handleChangeLanguage}
        />
      </nav>
    </motion.div>
  );
}
