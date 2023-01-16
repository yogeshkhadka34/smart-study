import React, { useState } from "react";
import "./styles/navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    // Setting up navbar links as components
    <>
      <a href="#Home" className="navbar__links-element">
        Home
      </a>
      <a href="#Features" className="navbar__links-element">
        Features
      </a>
      <a href="#About_Us" className="navbar__links-element">
        About Us
      </a>
      <a href="#Resources" className="navbar__links-element">
        Resources
      </a>
      <a href="#Contact_Us" className="navbar__links-element">
        Contact Us
      </a>
    </>
  );
};

const Navbar = () => {
  // Toggle logic setup for Hamburger Menu/Mobile Menu
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="navbar__container">
      {/* Company Logo */}
      <div className="navbar__logo">
        Loksewa <span>Study</span>{" "}
      </div>

      {/* Navbar links */}
      <Menu className="navbar__links"></Menu>

      {/* Navbar Login and Sign up buttons */}
      <div className="navbar__sign">
        <a href="#login">Login</a>
        <button>Sign Up</button>
      </div>

      {/* Setting up navigation bar for Mobile Menu */}
      <div className="navbar__menu">
        {/* Mobile menu toggling logic */}
        {mobileMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setMobileMenu(false)}
          ></RiCloseLine>
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setMobileMenu(true)}
          ></RiMenu3Line>
        )}

        {/* Displaying navbar links and sign in buttons in dropdown */}
        {mobileMenu && (
          <div className="navbar__menu-container">
            <div className="navbar__menu-container__links">
              <Menu></Menu>
            </div>
            <div className="navbar__menu-container__sign">
              <a href="#login">Login</a>
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
