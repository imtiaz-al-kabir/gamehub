import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-black text-white">
      <motion.div
        className="w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      ></motion.div>

      <motion.h2
        className="mt-6 text-2xl font-bold tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0.3, 1, 0.3],
          y: [10, 0, 10],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading<span className="text-red-500">...</span>
      </motion.h2>
    </div>
  );
};

export default Loading;
