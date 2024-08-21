import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import icon from "/icon.jpg";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";
import i18n from "i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getLanguage = () => i18n.language.toUpperCase();

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng.toLowerCase());
    setIsDropdownOpen(false); // Close dropdown after language change
  };

  return (
    <header className="bg-base-300 text-base-content p-4">
      <div className="mx-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-row  items-center gap-2 text-xl font-bold">
          <motion.img
            src={icon}
            alt="Logo"
            className="h-12 w-12 rounded-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          />
          <h2 className="inline-block ml-2">{t("home.name")}</h2>
        </div>

        {/* Hamburger Icon */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden py-2 px-4 text-xl block hover:text-primary focus:text-primary"
          onClick={toggleMenu}
        >
          {!isMenuOpen && <FaBars />}
        </motion.button>

        {/* Navigation Links */}
        {!isMenuOpen && (
          <nav
            className={`lg:flex lg:space-x-6 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <NavLink href="/">{t("header.home")}</NavLink>
            <NavLink href="/about">{t("header.about")}</NavLink>
            <NavLink href="/projects">{t("header.projects")}</NavLink>
            <NavLink href="/contact">{t("header.contact")}</NavLink>
            <LanguageDropdown
              isDropdownOpen={isDropdownOpen}
              toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}
              currentLanguage={getLanguage()}
              handleChangeLanguage={handleChangeLanguage}
            />
          </nav>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}
