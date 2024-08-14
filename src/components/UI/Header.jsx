import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import icon from "../../../public/icon.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-base-300 text-base-content p-4">
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mx-5 flex justify-between items-center"
      >
        {/* Logo */}
        <div className="flex flex-row  items-center gap-2 text-xl font-bold">
          <motion.img
            src={icon}
            alt="Logo"
            className="h-12 w-12 rounded-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          />
          <h2 className="inline-block ml-2">justrunis</h2>
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
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        )}
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}
