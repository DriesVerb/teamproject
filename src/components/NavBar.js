import React from "react";
import Logo from "../logo/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navBar container bg-dark col-12 mx-0 px-0 d-flex row justify-content-around"
      expend="sm"
    >
      <h2 className="title my-sm-auto ml-sm-2 px-sm-2  ">
        <img className="logo" src={Logo} alt="logo" />
      </h2>
      <ul className="navItems d-flex mb-sm-2 px-sm-3 justify-content-between align-items-center">
        <li>
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ borderBottom: "2px solid #558b2f  " }}
            className="navLink"
            to="/countryhits"
          >
            Country Hits
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ borderBottom: "2px solid #558b2f  " }}
            className="navLink"
            to="/topbands"
          >
            Top Bands
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
