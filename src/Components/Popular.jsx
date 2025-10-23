import { motion, useAnimation } from "motion/react";
import { use, useEffect, useState } from "react";
import { CgArrowLongRightR } from "react-icons/cg";
import { Link } from "react-router";
import { DataContext } from "../Context/DataContext";
import GameCard from "./GameCard";

const Popular = () => {
  const { games } = use(DataContext);
  const [topGames, setTopGames] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    const sortedGames = [...games]
      .sort((a, b) => Number(b.ratings) - Number(a.ratings))
      .slice(0, 6);
    setTopGames(sortedGames);
  }, [games]);

  const scrollWidth = topGames.length * 320;

  useEffect(() => {
    controls.start({
      x: [0, -scrollWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    });
  }, [controls, scrollWidth]);

  return (
    <div className="overflow-hidden py-6 container mx-auto">
      <div className="flex justify-between items-center mx-5 mb-8">
        <p className="!font-orbitron font-bold text-2xl text-white ">
          POPULAR GAMES <span className="text-xs">({topGames.length})</span>
        </p>
        <Link
          to="/games"
          className="!font-orbitron btn btn-xs font-bold text-xs bg-red-600 "
        >
          More Games
          <CgArrowLongRightR size={18} />
        </Link>
      </div>

      <motion.div
        className="flex gap-6"
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() =>
          controls.start({
            x: [0, -scrollWidth],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            },
          })
        }
      >
        {topGames.concat(topGames).map((game, index) => (
          <div key={index} className="flex-shrink-0 w-[300px]">
            <GameCard game={game} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Popular;
