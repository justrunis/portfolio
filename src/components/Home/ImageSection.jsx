import { motion } from "framer-motion";
import profileImage from "../../assets/profileImage.jfif";

const ImageSection = () => (
  <motion.div
    initial={{ x: 100 }}
    animate={{ x: 0 }}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 0.3 }}
    className="flex flex-row items-center justify-center w-1/3 my-4"
  >
    <motion.img
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.3 }}
      src={profileImage}
      alt="Logo"
      className="h-auto w-1/2 rounded-full"
    />
  </motion.div>
);

export default ImageSection;
