import React from "react";
import triangle from "../../assets/images/navigation/triangle.svg";
import circle from "../../assets/images/navigation/circle.svg";
import PageLinks from "../../data/constants/links";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={triangle} alt="logo" />
          <button type="button" className="toggle-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
              <defs>
                <linearGradient
                  id="a"
                  x1="375.02"
                  y1="466.54"
                  x2="124.98"
                  y2="33.46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#1b282e" />
                  <stop offset="1" stopColor="#3c7350" />
                </linearGradient>
              </defs>
              <circle cx="250" cy="250" r="250" fill="url(#a)" />
            </svg>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
