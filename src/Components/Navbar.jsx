import { use } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Logout from "./Logout";
const Navbar = () => {
  const { user } = use(AuthContext);
  const navLink = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Games",
      path: "/games",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className=" bg-gradient-to-b from-black via-[#462022] to-black text-white shadow px-3">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLink.map((link, ind) => (
                <li key={ind}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "border-b-3 border-red-600" : ""
                    }
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="text-xl flex items-center gap-2">
            <img className="size-10" src="/logo.png" alt="" />
            <h2 className="hidden sm:block">
              Game
              <span className="font-serif font-extrabold text-red-700 text-2xl">
                H
              </span>
              ub
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink.map((link, ind) => (
              <li key={ind}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-3 border-red-600" : "text-lg"
                  }
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/profile">
                <img
                  src={user.photoURL || <FaUserCircle />}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-red-600 object-cover cursor-pointer hover:scale-105 transition"
                  title={user.displayName || "User"}
                />
              </Link>

              <Logout />
            </div>
          ) : (
            <div className="flex gap-2 md:gap-4">
              <Link
                to="/login"
                className="px-3 md:px-5 py-2 bg-gradient-to-r from-red-600 to-red-400 text-white rounded-lg font-semibold hover:from-red-500 hover:to-pink-500 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-3 md:px-5 py-2 bg-gradient-to-r from-red-600 to-red-400 text-white rounded-lg font-semibold hover:from-red-500 hover:to-pink-500 transition-all duration-300"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
