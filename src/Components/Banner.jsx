import { motion } from "motion/react";
import { use } from "react";
import { DataContext } from "../Context/DataContext";

const Banner = () => {
  const { games } = use(DataContext);

  const scrollWidth = games.length * 320;

  return (
    <div className="overflow-hidden h-[500px] ">
      <motion.div
        className="flex gap-6"
        animate={{ x: [-scrollWidth, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          },
        }}
      >
        {games.map((singleImg) => (
          <img
            key={singleImg.id}
            src={singleImg.coverPhoto}
            alt="image"
            className="h-[250px] md:h-[350px] lg:h-[450px] rounded-xl mr-4"
          />
        ))}

        {games.map((singleImg) => (
          <img
            key={singleImg.id}
            src={singleImg.coverPhoto}
            alt="image"
            className="h-[400px] md:h-[500px] lg:h-[600px] rounded-xl mr-4"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
