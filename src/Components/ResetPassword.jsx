import { motion } from "motion/react";
import { use } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const ResetPassword = () => {
  const { resetPassword } = use(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() =>
        toast.success("🦄 Email has been sent! please check email !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch((error) => console.log(error));
    console.log("Password reset email sent to:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black/70 backdrop-blur-md rounded-2xl p-8 md:p-10 w-[90%] max-w-md border border-red-700 shadow-lg"
      >
        {/* Title */}
        <h2 className="text-3xl font-orbitron text-center text-red-500 mb-2">
          Reset Password
        </h2>
        <p className="text-center text-gray-400 mb-6 text-sm">
          Enter your email to receive a password reset link.
        </p>

        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              Email Address
            </label>
            <input
              type="email"
              required
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:border-red-500 outline-none transition-all"
              placeholder="user@you.com"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to login */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-red-400 hover:text-red-300 font-semibold"
          >
            Go back to Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
