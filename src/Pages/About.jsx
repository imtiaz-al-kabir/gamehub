import { motion } from "motion/react";

const About = () => {
  return (
    <div className="min-h-screen  text-white px-6 py-16 flex flex-col items-center">
      <title>About-GameHub</title>
      <motion.h1
        className="text-4xl md:text-6xl !font-orbitron font-bold text-red-500 mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        About Our GameHub Portal
      </motion.h1>
      <motion.div
        className="max-w-4xl bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl flex flex-col gap-6 text-center"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
          Welcome to our ultimate gaming hub! 🎮 Here you can explore the most
          popular games, discover hidden gems, and stay up-to-date with the
          latest releases. Our portal is designed to give gamers an immersive
          experience, combining stunning visuals, smooth navigation, and
          detailed game information.
        </p>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          We are passionate about gaming and strive to provide the best
          experience for every player. From action-packed shooters to relaxing
          sandbox worlds, our platform brings it all together in one place.
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 inline-block
          bg-gradient-to-r from-red-600 to-red-400 text-white rounded-xl font-semibold hover:from-red-500 hover:to-pink-500  duration-300
          px-6 py-3  transition-all shadow-lg shadow-red-500/50"
        >
          Explore Games
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;
