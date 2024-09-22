import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHHEFO9PLDTom6EFSuhVdGYJ0RI3WiPOs",
  authDomain: "tracker-13234.firebaseapp.com",
  projectId: "tracker-13234",
  storageBucket: "tracker-13234.appspot.com",
  messagingSenderId: "1092401191091",
  appId: "1:1092401191091:web:cd5ff16aeabdf61bd278c6",
  measurementId: "G-WS2WGWE5LX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };