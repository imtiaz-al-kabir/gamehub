import { motion } from "motion/react";
import { use } from "react";
import GameCard from "../Components/GameCard";
import Loading from "../Components/Loading";
import { DataContext } from "../Context/DataContext";

const Games = () => {
  const { games } = use(DataContext);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (!games || games.length === 0) {
    return <Loading />;
  }
  return (
    <div className="py-10 container mx-auto">
      <title>Games - GameHub</title>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5"
      >
        {games.map((game) => (
          <motion.div key={game.id} variants={cardVariants}>
            <GameCard game={game} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Games;
