import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Navbar({ isAuth, logOutFunc }) {
  return (
    <nav class="navbar navbar-dark bg-secondary">
      <div class="container-fluid justify-content-evenly">
        <Link class="navbar-brand" to="/">
          Home
        </Link>
        <Link class="navbar-brand" to="/create-post">
          Create Post
        </Link>
        {!isAuth ? (
          <Link class="navbar-brand" to="/login">
            Login
          </Link>
        ) : (
          <button class="btn btn-danger" onClick={logOutFunc}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
