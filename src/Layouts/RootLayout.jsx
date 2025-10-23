import { Outlet, useMatch } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  const match = 
  useMatch("/games/:id") 
  
  
  // || 
  // useMatch("/about")||
  // useMatch("/contact");
  return (
    <div className="bg-gradient-to-b from-[#212224] via-[#462022] to-black">
      <header className="sticky top-0 scroll-smooth z-50 ">
        <Navbar />
      </header>

      {/* <div className={`${match ? "" : "container mx-auto "}`}> */}
        <Outlet />
      {/* </div> */}
      <Footer/>
    </div>
  );
};

export default RootLayout;
