import React, { useState, useRef, useEffect } from "react";
import triangleimg from "../../assets/images/navigation/triangle_clr.svg";
import PageLinks from "../../data/constants/links";
import anime from "animejs";

const Navbar = (props) => {
  const [scaleTrigger, setScaleTrigger] = useState(false);
  const [gradientTrigger, setGradientTrigger] = useState(false);
  const animationDuration = 500;
  const downSidePath = "M0,0,124.3,250,250,0Z";
  const upSidePath = "M250,250,125.7,0,0,250Z";
  const isFirstRun = useRef(true);
  const animation = (params) => {
    return anime({
      targets: "#triangle_nav",
      easing: "easeInOutSine",
      duration: animationDuration,
      autoplay: false,
      d: [{ value: params }],
      loop: false,
    });
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      // Change only after first run is done.
      setTimeout(() => {
        setGradientTrigger(props.sideBarIsOpen);
      }, 250);
    }
    setTimeout(() => {
      setScaleTrigger(false);
    }, 500);
    return () => {
      if (!props.sideBarIsOpen) {
        animation(upSidePath).play();
      } else {
        animation(downSidePath).play();
      }
      setScaleTrigger(true);
    };
  }, [props.sideBarIsOpen]);

  return (
    <nav
      className={`${
        props.sideBarIsOpen ? " navbar navbar_open" : "navbar navbar_closed"
      }`}
    >
      <div className="nav-center">
        <div className="nav-header">
          <img id="nav_main_logo" src={triangleimg} alt="img" />
          <button
            type="button"
            className="toggle-btn"
            onClick={props.toggleSideBar}
          >
            <svg
              id="toggle"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
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
                  <stop offset="0" stopColor="#9a988e"></stop>
                  <stop offset="1" stopColor="#51656a"></stop>
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
                  <stop offset="0" stopColor="#ac4a9c"></stop>
                  <stop offset="1" stopColor="#00af64"></stop>
                </linearGradient>
                <linearGradient
                  id="circle_gradient_magenta"
                  data-name="circle_gradient_magenta"
                  x1="187.28"
                  y1="232.76"
                  x2="62.42"
                  y2="16.49"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#9769a4"></stop>
                  <stop offset="0.3" stopColor="#52666b"></stop>
                  <stop offset="1" stopColor="#9a988e"></stop>
                </linearGradient>
                <linearGradient
                  id="circle_gradient_green"
                  data-name="circle_gradient_green"
                  x1="187.28"
                  y1="232.76"
                  x2="62.42"
                  y2="16.49"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#b5b2a6"></stop>
                  <stop offset="0.7" stopColor="#51656b"></stop>
                  <stop offset="1" stopColor="#32a169"></stop>
                </linearGradient>
              </defs>
              <path
                id="circle_nav"
                d="M125,0A125,125,0,1,0,250,125,125,125,0,0,0,125,0Z"
                fill="url(#circle_gradient)"
                className={`${scaleTrigger ? "scale" : ""}`}
              ></path>
              <path
                id="triangle_nav"
                d="M0,0,124.3,250,250,0Z"
                fill={`${
                  isFirstRun.current
                    ? "url(#triangle_gradient)"
                    : gradientTrigger
                    ? "url(#circle_gradient_magenta)"
                    : "url(#circle_gradient_green)"
                }`}
              ></path>
            </svg>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
