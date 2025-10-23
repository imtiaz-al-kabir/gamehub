import { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const Logout = () => {
  const { signOutUser } = use(AuthContext);
  const handleLogout = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <button
      onClick={handleLogout}
      className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-400 text-white rounded-lg font-semibold hover:from-red-500 hover:to-pink-500 transition-all duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
