import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-red-800 to-black text-gray-200 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-white mb-3">
            GameHub
          </h2>
          <p className="text-sm text-gray-400">
            Your hub for the latest gaming trends, reviews, and community
            updates.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/games" className="hover:text-white transition-colors">
                Games
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-400">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5 text-xl">
            <a href="#" className="hover:text-red-500 transition-all">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-red-500 transition-all">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500 transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-500 transition-all">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-red-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Gaming Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
