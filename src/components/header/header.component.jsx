import React from "react";
import { NavLink } from "react-router-dom";
const activeStyle = { color: "#F15B2A" };
const Header = () => (
  <nav>
    <NavLink to="/" activeStyle={activeStyle}>
      Home
    </NavLink>
    {" | "}
    <NavLink to="/courses" activeStyle={activeStyle}>
      Courses
    </NavLink>
    {" | "}
    <NavLink to="aboutus" activeStyle={activeStyle}>
      About Us
    </NavLink>
    {" | "}
  </nav>
);

export default Header;
