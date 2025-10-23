import { Outlet, useMatch } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  const match = useMatch("/games/:id");

  // ||
  // useMatch("/about")||
  // useMatch("/contact");
  return (
    <div className="bg-gradient-to-br from-black via-red-900/40 to-black ">
      <header className="sticky top-0 scroll-smooth z-50 ">
        <Navbar />
      </header>

      {/* <div className={`${match ? "" : "container mx-auto "}`}> */}
      <Outlet />
      {/* </div> */}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
