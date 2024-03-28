// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMsJBvTHkLmnHKv5S7WhiQDWUQT6Y68ds",
  authDomain: "yt-clone-fb01a.firebaseapp.com",
  projectId: "yt-clone-fb01a",
  storageBucket: "yt-clone-fb01a.appspot.com",
  messagingSenderId: "110866714060",
  appId: "1:110866714060:web:3c6917dac56d8225d22169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };

