import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h1>Logo</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/auth">Login</Link>
        <Link to="/password-change">Change Password</Link>
      </div>
    </div>
  );
};

export default NavBar;
