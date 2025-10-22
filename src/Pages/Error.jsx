import { motion } from "motion/react";
import { Link } from "react-router";
const Error = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-800 via-black to-black text-white px-4">
        {/* Animated glitch "404" */}
        <motion.h1
          className="text-9xl md:text-[12rem] font-orbitron font-bold text-red-500 relative"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          404
          <span className="absolute top-0 left-0 text-red-400 opacity-50 blur-sm">
            404
          </span>
          <span className="absolute top-0 left-0 text-red-600 opacity-30 blur-sm">
            404
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl mt-6 text-gray-300 text-center max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Oops! Looks like you entered a forbidden zone.
          <br /> The game you are looking for does not exist.
        </motion.p>

        {/* Go Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="/"
            className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-red-500/50 hover:scale-105"
          >
            Return to Home
          </Link>
        </motion.div>

        {/* Optional glitch effect overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-[url('https://i.ibb.co/7k0FJ7F/noise.png')] opacity-10 animate-pulse mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Error;
