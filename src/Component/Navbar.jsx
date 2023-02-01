import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// import {ImCross}  from 'react-icons/im'
import "./navbar.css";
const Navbar = () => {
  const sidebar = () => {

   
  };
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-logo">
          <Link to="/ ">Land Registry </Link>
        </div>
        <div className="navbar-items">
          <ul>
            <li>
              <Link to="/user ">User </Link>
            </li>
            <li>
              <Link to="/landInspector"> Land Inspector</Link>
            </li>
            <li>
              <Link to="/landOwner">Land Owner </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={sidebar} />
        {/* <ImCross /> */}
      </div>
    </>
  );
};

export default Navbar;
