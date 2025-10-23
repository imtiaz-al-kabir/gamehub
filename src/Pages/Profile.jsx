import { updateProfile } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/firebaseConfig";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setEmail(user.email || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, { displayName: name, photoURL })
      .then(() => setSuccess("Profile updated successfully!"))
      .catch((err) => console.error(err));
    setSuccess("Profile updated successfully! (Demo)");
  };

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return (
    <div className="min-h-screen  flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-red-500 text-center">
          My Profile
        </h1>
        <div className="flex justify-center">
          <img
            src={photoURL || <FaUserCircle className="text-white" />}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-red-500 object-cover"
          />
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            value={email}
            disabled
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="p-3 rounded-lg bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />

          <button
            type="submit"
            className="px-3 md:px-5 py-2 bg-gradient-to-r from-red-600 to-red-400 text-white rounded-lg font-semibold hover:from-red-500 hover:to-pink-500 transition-all duration-300"
          >
            Update Profile
          </button>
        </form>

        {success && <p className="text-green-400 text-center">{success}</p>}
      </div>
    </div>
  );
};

export default Profile;
