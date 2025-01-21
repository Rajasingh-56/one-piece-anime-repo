import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="navbar-section">
          <div className="contact-info">
            <ul>
            <p> SUPPLIERS </p>
              <li>
                <NavLink>Supplier Information Center</NavLink>
              </li>
              <li>
                <NavLink>Supplier Diversity</NavLink>
              </li>
              <li>
                <NavLink>Gift Portal</NavLink>
              </li>
              <li>
                <NavLink>Open Innovation Portal</NavLink>
              </li>
            </ul>
            <ul>
            <p>COMMUNITY</p>
              <li>
              <NavLink>Events</NavLink>

              </li>
              <li>
                <NavLink>Developers</NavLink>
              </li>
              <li>
                <NavLink>Agencies & Freelances</NavLink>
              </li>
            </ul>
          
          </div>
          <div className="footer-image">

          <img className="logo-one" src="./Assets/one-piece.png" alt="" />
          <img className="logo-one" src="./Assets/one-piece.png" alt="" />
          </div>

          {/* <img className="skull" src="./Assets/skull.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
