import React from "react";
import triangle from "../../assets/images/navigation/triangle_clr.svg";
import PageLinks from "../../data/constants/links";

const Navbar = (props) => {
    // gsap_script.src = "../assets/animations/menu_toggle/gsap.min.js";
    // morph_script.src = "../assets/animations/menu_toggle/morph.svg.min.js";
    // menu_toggle_script.src = ../assets/animations/menu_toggle/menu_toggle.js";

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img id="nav_main_logo" src={triangle} alt="img" />
          <button
            type="button"
            className="toggle-btn"
            onClick={props.toggleSideBar}
          >
            <svg
              id="toggle"
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="200"
              viewBox="0 0 250 200"
            >
              <defs>
                <radialGradient
                  id="circle_gradient"
                  data-name="circle_gradient"
                  cx="125"
                  cy="100"
                  r="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9a988e" />
                  <stop offset="1" stop-color="#51656a" />
                </radialGradient>
                <linearGradient
                  id="triangle_gradient"
                  data-name="triangle_gradient"
                  x1="512.1"
                  y1="96.4"
                  x2="762.1"
                  y2="96.4"
                  gradientTransform="matrix(-1, 0, 0, 1, 762.1, 3.6)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ac4a9c" />
                  <stop offset="1" stop-color="#00af64" />
                </linearGradient>
              </defs>
              <path
                id="circle_nav"
                d="M125,0A100,100,0,1,0,225,100,100,100,0,0,0,125,0Z"
                fill="url(#circle_gradient)"
              />
              <path
                id="triangle_nav"
                d="M0,0,124.3,200,250,0Z"
                fill="url(#triangle_gradient)"
              />
            </svg>

            {/* <svg
              id="toggle"
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="250"
              viewBox="0 0 250 250"
            >
              <defs>
                <radialGradient
                  id="circle_gradient"
                  data-name="circle_gradient"
                  cx="125"
                  cy="125"
                  r="125"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9a988e" />
                  <stop offset="1" stop-color="#51656a" />
                </radialGradient>
                <linearGradient
                  id="triangle_gradient"
                  data-name="triangle_gradient"
                  x1="512.1"
                  y1="121.4"
                  x2="762.1"
                  y2="121.4"
                  gradientTransform="matrix(-1, 0, 0, 1, 762.1, 3.6)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ac4a9c" />
                  <stop offset="1" stop-color="#00af64" />
                </linearGradient>
              </defs>
              <path
                id="circle_nav"
                d="M125,0A125,125,0,1,0,250,125,125,125,0,0,0,125,0Z"
                fill="url(#circle_gradient)"
              />
              <path
                id="triangle_nav"
                d="M0,0,124.3,250,250,0Z"
                fill="url(#triangle_gradient)"
              />
            </svg> */}
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
