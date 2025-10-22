import React from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
           <div className="min-h-screen bg-gradient-to-br from-red-800 via-black to-black flex justify-center items-center px-6 py-16">
      {/* Contact Card */}
      <motion.div
        className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col gap-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-orbitron font-bold text-red-500 text-center">
          Sign up
        </h1>
        <p className="text-gray-200 text-center">
          Welcome Back
        </p>

        <form className="flex flex-col gap-4">
          <motion.input
            type="text"
            placeholder="Enter Name"
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Enter Email"
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="text"
            placeholder="Enter Photo URL"
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="password"
            placeholder="Enter Password"
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-red-500/50 transition-all duration-300 mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </form>
        <p>alreadey have account please <Link to="/login">Login</Link> </p>
      </motion.div>
    </div> 
        </div>
    );
};

export default Register;