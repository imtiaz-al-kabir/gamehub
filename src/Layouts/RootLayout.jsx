import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header className="sticky top-0 scroll-smooth ">
        <Navbar />
      </header>

      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
