import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      return;
    }
    toast.success(`Thank you, ${name}! Your message has been sent.`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-6 py-16">
      <title>Contact-GameHub</title>
      <motion.div
        className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col gap-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-orbitron font-bold text-red-500 text-center">
          Contact Us
        </h1>
        <p className="text-gray-200 text-center">
          Have questions or want to collaborate? Fill out the form below and
          we’ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <motion.input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="
              bg-gradient-to-r from-red-600 to-red-400 text-white font-semibold hover:from-red-500 hover:to-pink-500 transition-all duration-300
              px-6 py-3 rounded-xl shadow-lg shadow-red-500/50 mt-2
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
