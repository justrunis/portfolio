import { motion } from "framer-motion";

const imageURL =
  "https://avatars.githubusercontent.com/u/79092651?s=400&u=7f95b754e55f350a431a89f6b8b5428c24a807bf&v=4";

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
      src={imageURL}
      alt="Logo"
      className="h-auto w-1/2 rounded-full"
    />
  </motion.div>
);

export default ImageSection;
