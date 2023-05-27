import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="heading">
        <h1>Header</h1>
      </div>
      <div className="navbar-links">
        <a href="/signUp">Signup</a>
        <a href="/profile">Profile</a>
      </div>
    </div>
  );
};

export default Navbar;
