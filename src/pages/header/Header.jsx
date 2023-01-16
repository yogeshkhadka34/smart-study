import React from "react";
import Navbar from "../../components/Navbar";
import "./header.css";
import Heroimage from "../assets/herosection.png";

const Header = () => {
  return (
    <div className="gradient__bg header">
      {/* Markup for Navigation Bar */}
      <div className="header__navbar">
        <Navbar></Navbar>
      </div>

      <div className="header__heroarea">
        {/* Markup for Heroarea Left Section */}
        <div className="header__heroarea-container">
          {/* Title and Description */}
          <div className="header__heroarea-title">
            <h1>A complete digital platform for your aspirations</h1>
          </div>
          <div className="header__heroarea-content">
            <p>
              It is not just about delivering the lessons, it is more about the
              overall entrance test preparation process. So are you ready for
              the best and the most effective learning experience?
            </p>
          </div>

          {/* Get Started button section */}
          <div className="header__heroarea-form">
            <label>Subscribe to Stay Updated</label>
            <input type="text" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Heroarea Image section/ Image on the right side */}
        <div className="header__heroarea-image">
          <img src={Heroimage} alt="Smart Study" />
        </div>
      </div>
    </div>
  );
};

export default Header;
