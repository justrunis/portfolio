import { motion } from "framer-motion";

const imageURL =
  "https://avatars.githubusercontent.com/u/79092651?s=400&u=7f95b754e55f350a431a89f6b8b5428c24a807bf&v=4";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto flex flex-col items-center justify-center bg-secondary text-secondary-content p-6 my-16 border-4 border-base rounded-lg shadow-lg xl:w-1/2"
    >
      <motion.h2
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-bold text-center mt-4"
      >
        Hi, my name is
      </motion.h2>
      <motion.h2
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
        className="text-4xl font-bold text-center mt-4"
      >
        justrunis
      </motion.h2>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-row items-center justify-center w-1/3"
      >
        <motion.p
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-4"
        >
          I am a web developer based in Kaunas, Lithuania. I specialize in
          building websites and web applications.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
