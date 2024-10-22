import { motion } from "framer-motion";
import profileImage from "../../assets/profileImage.jpg";

const imageVariants = {
  hidden: { x: 100 },
  visible: { x: 0 },
};

const imageHover = {
  rotate: 360,
};

const imageTransition = {
  duration: 0.3,
};

const ImageSection = () => (
  <motion.div
    initial={{ x: 100 }}
    animate={{ x: 0 }}
    className="flex flex-row items-center justify-center w-1/3 my-4"
  >
    <motion.img
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      whileHover={imageHover}
      transition={imageTransition}
      src={profileImage}
      alt="Profile"
      className="h-auto w-1/2 rounded-full"
    />
  </motion.div>
);

export default ImageSection;
