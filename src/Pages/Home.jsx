import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import Newsletter from "../Components/Newsletter";
import Popular from "../Components/Popular";

const Home = () => {
  return (
    <div className="px-5">
      <Hero />
      <Banner/>
      <Popular/>
      <Newsletter/>
    </div>
  );
};

export default Home;
