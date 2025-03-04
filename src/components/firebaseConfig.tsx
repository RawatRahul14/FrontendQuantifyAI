import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD7DKQFdYXoF9kQgqNS0WSQ_4f26W1D4NU",
  authDomain: "quantifyai-87931.firebaseapp.com",
  projectId: "quantifyai-87931",
  storageBucket: "quantifyai-87931.firebasestorage.app",
  messagingSenderId: "163807159533",
  appId: "1:163807159533:web:1aa469f285900adeac18e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, setDoc, doc };