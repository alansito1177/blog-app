import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Navbar({ isAuth, logOutFunc }) {
  return (
    <nav className="navbar navbar-dark bg-secondary">
      <div className="container-fluid justify-content-evenly">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        {!isAuth ? (
          <Link className="navbar-brand" to="/login">
            Login
          </Link>
        ) : (
          <>
            <Link className="navbar-brand" to="/create-post">
              Create Post
            </Link>
            <button className="btn btn-danger" onClick={logOutFunc}>
              Log Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
