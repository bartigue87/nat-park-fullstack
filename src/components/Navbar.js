import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <img className="logo" src={logo} />
      <ul className="nav-items">
        <li>Home</li>
        <li>Map</li>
        <li>Explore</li>
        <li>Friends</li>
      </ul>
    </div>
  );
}
