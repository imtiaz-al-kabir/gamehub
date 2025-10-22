import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import Popular from "../Components/Popular";

const Home = () => {
  return (
    <div className="px-5">
      <Hero />
      <Banner/>
      <Popular/>
    </div>
  );
};

export default Home;
