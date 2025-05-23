import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSENGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID

  // apiKey: "AIzaSyBAfjo8hwOurFqjKb2PqEILKFvqQJmheMs",
  // authDomain: "film--box.firebaseapp.com",
  // projectId: "film--box",
  // storageBucket: "film--box.firebasestorage.app",
  // messagingSenderId: "743605480092",
  // appId: "1:743605480092:web:593b8e549c086012b09b59"
 
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)