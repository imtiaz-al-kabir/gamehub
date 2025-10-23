import { motion } from "motion/react";
import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthContext";
const GoogleLogin = () => {
  const { googleSignin, setUser } = use(AuthContext);

  const handleGoogle = () => {
    googleSignin()
      .then((result) => setUser(result.user))
      .catch((err) => console.log(err));
  };
  return (
    <motion.button
      onClick={handleGoogle}
      className="flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold py-3 rounded-xl hover:bg-gray-200 transition-all duration-300"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      <FcGoogle size={26} />
      Sign up with Google
    </motion.button>
  );
};

export default GoogleLogin;
