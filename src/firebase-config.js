// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa-haPnd5BPxXGbhvfyS_GNg_tcOVv4aw",
  authDomain: "blogproject-3f9ac.firebaseapp.com",
  projectId: "blogproject-3f9ac",
  storageBucket: "blogproject-3f9ac.appspot.com",
  messagingSenderId: "282683503073",
  appId: "1:282683503073:web:81b52b2422325ba607a2a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
