import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navBar bg-dark col-12 d-flex row justify-content-between"
      expend="lg"
    >
      <h1 className="title">WEMusic</h1>
      <ul className="navLinks d-flex justify-content-around align-items-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/searchcountry">Search by Country</NavLink>
        </li>
        <li>
          <NavLink to="/searchband">Search Band</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
