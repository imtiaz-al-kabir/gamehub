import { motion } from "motion/react";
import { use, useMemo, useState } from "react";
import GameCard from "../Components/GameCard";
import { DataContext } from "../Context/DataContext";

const Games = () => {
  const { games } = use(DataContext);

  const [filter, setFilter] = useState("default");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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

  // SORTING LOGIC
  const sortedGames = useMemo(() => {
    if (!games) return [];

    let sorted = [...games];

    if (filter === "rating-high-to-low") {
      return sorted.sort((a, b) => b.ratings - a.ratings);
    }

    if (filter === "rating-low-to-high") {
      return sorted.sort((a, b) => a.ratings - b.ratings);
    }

    return games;
  }, [games, filter]);

  return (
    <div className="py-10 container mx-auto">
      <title>Games - GameHub</title>

      <h1 className="text-4xl !font-orbitron text-center pb-5 font-bold text-red-500">
        Games Collection
      </h1>

      {/* FILTER DROPDOWN */}
      <div className="flex justify-end px-5 pb-5">
        <select
          className="border p-2 rounded-md bg-white text-black shadow-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="default">Sort by Rating</option>
          <option value="rating-high-to-low">Rating: High → Low</option>
          <option value="rating-low-to-high">Rating: Low → High</option>
        </select>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5"
      >
        {sortedGames.map((game) => (
          <motion.div key={game.id} variants={cardVariants}>
            <GameCard game={game} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Games;
