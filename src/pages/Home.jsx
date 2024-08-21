import { motion } from "framer-motion";
import TitleSection from "../components/Home/TitleSection";
import ImageSection from "../components/Home/ImageSection";
import DescriptionSection from "../components/Home/DescriptionSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto flex flex-col items-center justify-center bg-secondary text-secondary-content p-6 my-16 sm:border-4 sm:border-base rounded-lg shadow-lg xl:w-1/2"
    >
      <TitleSection />
      <ImageSection />
      <DescriptionSection />
    </motion.div>
  );
}
