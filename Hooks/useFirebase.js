import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  getIdToken,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import firebaseInitialize from "../firebase/firebaseinitialize";
import axios from "axios";
import Swal from "sweetalert2";
import { Router } from "next/router";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsloading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = (navigate, location) => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        if (result.user) {
          Router.push("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsloading(false));
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {})
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
        getIdToken(user).then((idToken) => setToken(idToken));
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unSubscribed;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  return {
    signInUsingGoogle,
    logOut,
    user,
  };
};

export default useFirebase;
