import { motion } from "motion/react";
import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleLogin from "../Components/GoogleLogin";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { loginUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        result.user;
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/40 to-black flex justify-center items-center px-6 py-16">
      <motion.div
        className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border border-red-500/20"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-center text-red-500 !font-orbitron drop-shadow-md">
          Login Now
        </h1>
        <p className="text-gray-300 text-center mb-2">
          Welcome back, fellow gamer 👾
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <motion.input
            name="email"
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            name="password"
            type="password"
            placeholder="Enter Password"
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            whileFocus={{ scale: 1.02 }}
          />

          <div className="flex justify-end text-sm">
            <Link
              to="/forgot-password"
              className="text-red-400 hover:text-red-300 transition font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <motion.button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-red-600/40 transition-all duration-300 mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-500/40"></div>
          </div>
          <div className="relative flex justify-center text-gray-400 text-sm bg-transparent">
            <span className="bg-black px-3">OR</span>
          </div>
        </div>
        <GoogleLogin />

        <p className="text-center text-gray-300 mt-4">
          Don't have an account?{" "}
          <Link
            className="text-red-500 font-semibold hover:text-red-400 transition"
            to="/register"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
