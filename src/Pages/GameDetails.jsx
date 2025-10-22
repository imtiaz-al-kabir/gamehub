import { motion } from "motion/react";
import { CiStar } from "react-icons/ci";
import { TbArrowRightRhombusFilled } from "react-icons/tb";
import { Link, useLocation } from "react-router";
const GameDetails = () => {
  //   const { id } = useParams();
  //   const { games } = use(DataContext);
  //   const game = games.find((g) => g.id === id);
  const location = useLocation();

  const game = location.state;
  const {
    title,
    coverPhoto,
    ratings,
    category,
    developer,
    downloadLink,
    description,
  } = game;
  console.log(game);
  if (!game)
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold text-gray-500">
        Game not found 😢
      </div>
    );

  return (
    <div
      className="relative min-h-screen  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${coverPhoto})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 py-16 flex flex-col lg:flex-row gap-10 items-center">
        {/* Game Image */}
        <motion.img
          src={coverPhoto}
          alt={title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-2xl w-[350px] h-[450px] object-cover"
        />

        {/* Game Info */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-white shadow-lg flex flex-col gap-4"
        >
          <h1 className="text-4xl font-orbitron font-bold text-red-500 mb-2">
            {title}
          </h1>

          <p className="text-gray-200 leading-relaxed">
            {description ||
              "Immerse yourself in the world of this epic game, featuring stunning visuals, engaging gameplay, and a captivating storyline."}
          </p>

          <p className="text-sm">Developed by: {developer}</p>
          <div className="flex items-center gap-2 mt-4">
            <CiStar className="text-yellow-400" />
            <p className="text-lg font-semibold">Rating: {ratings} / 5</p>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <p className="text-sm">Genre:</p>
            <span className="font-medium text-white">{category}</span>
          </div>

          <div className="mt-6 flex gap-4">
            <motion.a
              href={downloadLink || "#"}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-xl font-semibold text-white transition-all"
            >
              Play Now
            </motion.a>
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-all"
            >
              <TbArrowRightRhombusFilled size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GameDetails;
