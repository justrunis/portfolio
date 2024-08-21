import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NavLink({ href, children, onClick }) {
  return (
    <Link
      to={href}
      className="py-2 px-4 text-xl block lg:inline-block hover:text-secondary focus:text-secondary"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
