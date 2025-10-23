// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBza4rbRl59PWxWmjBraeaVIAag717e6Zc",
  authDomain: "gamehub-gamer.firebaseapp.com",
  projectId: "gamehub-gamer",
  storageBucket: "gamehub-gamer.firebasestorage.app",
  messagingSenderId: "115659253341",
  appId: "1:115659253341:web:e369ab7a6dc05073f60fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)