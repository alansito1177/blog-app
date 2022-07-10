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
    <div className="loginPage fluid-container App text-white">
      <div className="text-center p-4">
        <h1>Start Posting Now</h1>
        <p>Sign in with Google</p>
        <button className="btn btn-primary" onClick={signInWithGoogle}>
          Log in
        </button>
      </div>
    </div>
  );
}

export default Login;
