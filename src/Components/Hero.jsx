import banner from "../assets/banner.png";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-10">
      <h1 className="!font-orbitron font-bold text-2xl sm:text-5xl ">
        Find Your Desire Game
      </h1>

      <div className="px-5">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
