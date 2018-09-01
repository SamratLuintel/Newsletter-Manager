import React from "react";
import { Link } from "react-router-dom";

const LoggedOutHeader = () => {
  return (
    <div className="Header Header--light">
      <div className="Header__brand">ReactMunch</div>
      <ul className="navbar">
        <Link to="/" className="navbar__navitem navbar__navitem--loggedOut">
          Home
        </Link>
        <Link
          className="navbar__navitem navbar__navitem--loggedOut"
          to="/features"
        >
          Features
        </Link>
        <li className="navbar__navitem navbar__navitem--loggedOut">
          <a href="/auth/google" className="signin">
            Sign In
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LoggedOutHeader;
