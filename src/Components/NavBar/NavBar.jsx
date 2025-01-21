import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
// import { MdOutlinePolicy } from "react-icons/md";
import { FaAward } from "react-icons/fa6";

// import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };
  return (
    <div className="container">
      <div className="sub-container">
        <div className="navbar-sec">
          <img className="one-pic" src="./Assets/logo.png" alt="" />
          <div className="menu" onClick={handleToggleMenu}>
            {menuOpen ? (
              <img
                src="./Assets/close.webp"
                alt="Close Menu"
                className="menu-icon1"
              />
            ) : (
              <img
                src="./Assets/menu.png"
                alt="Open Menu"
                className="menu-icon2"
              />
            )}
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""} `}>
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                {" "}
                <AiFillHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                <AiFillMessage /> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/manga" onClick={() => setMenuOpen(false)}>
                {" "}
                <FaBookOpen /> Manga
              </NavLink>
            </li>
            <li>
              <NavLink to="/award" onClick={() => setMenuOpen(false)}>
                {" "}
                <FaAward /> Awards
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
