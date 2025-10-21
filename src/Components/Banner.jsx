import { motion } from "motion/react";
import { use } from "react";
import { DataContext } from "../Context/DataContext";

const Banner = () => {
  const { data } = use(DataContext);

  const scrollWidth = data.length * 600; // approximate width of all slides

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex"
        animate={{ x: [-scrollWidth, 0] }} // slide from right to left
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 80, 
            ease: "linear",
          },
        }}
      >
        {data.map((singleImg) => (
          <img
            key={singleImg.id}
            src={singleImg.coverPhoto}
            alt="image"
            className="h-[300px] md:h-[400px] lg:h-[500px] rounded-xl mr-4"
          />
        ))}
        {/* Duplicate images for seamless loop */}
        {data.map((singleImg) => (
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
