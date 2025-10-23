import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    googleSignin,
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    loginUser,
    signOutUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
