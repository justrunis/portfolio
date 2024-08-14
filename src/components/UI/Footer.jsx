import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-8 p-6">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="https://github.com/justrunis"
            className="text-xl text-primary hover:text-primary-focus"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://twitter.com/justrunis"
            className="text-xl text-primary hover:text-primary-focus"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/justrunis"
            className="text-xl text-primary hover:text-primary-focus"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} justrunis. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
