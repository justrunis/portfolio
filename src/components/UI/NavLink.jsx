import React from "react";
import { motion } from "framer-motion";

export default function NavLink({ href, children, onClick }) {
  return (
    <motion.a
      href={href}
      className="py-2 px-4 text-xl block lg:inline-block hover:text-secondary focus:text-secondary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
}
