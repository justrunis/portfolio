import { motion } from "framer-motion";

export default function Card({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto flex flex-col items-center justify-center bg-secondary text-secondary-content p-6 my-16 border-4 border-base rounded-lg shadow-lg xl:w-1/2"
    >
      {children}
    </motion.div>
  );
}
