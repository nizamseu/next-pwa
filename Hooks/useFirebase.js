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
import Router from "next/router";

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
        Router.push("/");
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

  const createNewUserUsingEmailPassword = (email, password, displayName) => {
    const URL = "https://teamssyaan.blob.core.windows.net/images/user.png";
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        profileUpdate(displayName, URL);
        Swal.fire({
          icon: "success",
          title: "Successfully Register",
          showConfirmButton: false,
          timer: 2000,
        });
        Router.push("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 2000,
        });
        setError(errorMessage);
      })
      .finally(() => setIsloading(false));
  };

  const profileUpdate = (name, URl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: URl,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithEmailPassword = (email, password) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 2000,
        }).then(function () {
          Router.push("/");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 2000,
        });
        setError(errorMessage);
      })
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
    createNewUserUsingEmailPassword,
    signInWithEmailPassword,
  };
};

export default useFirebase;
