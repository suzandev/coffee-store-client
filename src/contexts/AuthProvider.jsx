import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    // Implement sign-in functionality here
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    createUser,
    signInUser,
  };

  return (
    <AuthContext.Provider value={{ ...userInfo, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
