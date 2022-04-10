import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div class="loginPage container">
      <p>Sign in with Google</p>
      <button class="btn btn-primary" onClick={signInWithGoogle}>
        Log in
      </button>
    </div>
  );
}

export default Login;
