// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTWp2FLEAYwU7dt3a1uDbR_j7DfT3Jizo",
  authDomain: "coffee-store-dev.firebaseapp.com",
  projectId: "coffee-store-dev",
  storageBucket: "coffee-store-dev.firebasestorage.app",
  messagingSenderId: "996887637357",
  appId: "1:996887637357:web:2c7bc775ad8ab4100c3e64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
