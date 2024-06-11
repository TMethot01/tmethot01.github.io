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
//                     <NavLink to="/sorting" activeStyle>
//                         Sorting
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
        <NavLink to="/" className="link home-link">
          Tyler Methot
        </NavLink>
      </nav>
      <nav id="right-nav">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/about" className="link">
          About
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact Me
        </NavLink>
        <NavLink to="/demo" className="link">
          Demo Library
        </NavLink>
        <NavLink to="/sorting"  className="link">
          Sorting
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
