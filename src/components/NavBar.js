import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>Navigation bar</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/charts">Chart</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
