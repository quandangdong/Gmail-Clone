import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3A0loi3qv_jwC9jrpGc-BbiVdfELK488",
  authDomain: "clone-practice-45e1b.firebaseapp.com",
  projectId: "clone-practice-45e1b",
  storageBucket: "clone-practice-45e1b.appspot.com",
  messagingSenderId: "540344428026",
  appId: "1:540344428026:web:39cbc48b6390e616c5f043",
  measurementId: "G-RJTL4PK7L5"
};

const gmailApp = initializeApp(firebaseConfig);
const db = getFirestore(gmailApp);
const auth = getAuth(gmailApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
