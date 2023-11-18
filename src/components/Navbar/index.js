import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
// import {Nav, NavLink, NavMenu } from "./NavbarElements";

// const Navbar = () => {
//     return (
//         <div>
//             <Nav>
//                 <NavMenu>
//                     <NavLink to="/" activeStyle>
//                         Home
//                     </NavLink>
//                     <NavLink to="/about" activeStyle>
//                         About
//                     </NavLink>
//                     <NavLink to="/contact" activeStyle>
//                         Contact Us
//                     </NavLink>
//                     <NavLink to="/blogs" activeStyle>
//                         Blogs
//                     </NavLink>
//                     <NavLink to="/sign-up" activeStyle>
//                         Sign Up
//                     </NavLink>
//                 </NavMenu>
//             </Nav>
//         </div>
//     );
// };
const Navbar = () => {
  return (
    <div id="nav-wrapper">
      <nav id="left-nav">
        <NavLink to="/" activeStyle className="link home-link">
          Tyler Methot
        </NavLink>
      </nav>
      <nav id="right-nav">
        <NavLink to="/" activeStyle className="link">
          Home
        </NavLink>
        <NavLink to="/about" activeStyle className="link">
          About
        </NavLink>
        <NavLink to="/contact" activeStyle className="link">
          Contact Me
        </NavLink>
        <NavLink to="/blogs" activeStyle className="link">
          Blogs
        </NavLink>
        <NavLink to="/sign-up" activeStyle className="link">
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
