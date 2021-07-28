import { GlobalStateContext } from "../../context/GlobalContextProvider";
import React, { useEffect, useContext } from "react";
import { Link } from "gatsby";
import Threejsrender from "./Threejs/Threejsrender";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  const navanimation = useContext(GlobalStateContext).navanimation;

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-description-wrapper">
            <div
              className="underline"
              data-aos={`${navanimation ? "fade" : ""}`}
              data-aos-once="true"
            ></div>
            <h4
              data-aos={`${navanimation ? "fade" : ""}`}
              data-aos-once="true"
              data-aos-delay={`${navanimation ? "200" : "0"}`}
            >
              HI, MY NAME IS
            </h4>
            <h1 className="big-heading">
              <span
                className="highlight"
                data-aos={`${navanimation ? "fade" : ""}`}
                data-aos-delay={`${navanimation ? "400" : "0"}`}
                data-aos-once="true"
              >
                <span>S</span>
                <span>A</span>
                <span>M</span>
                <span>U</span>
                <span>E</span>
                <span>L</span>
              </span>
            </h1>
            <h2
              data-aos={`${navanimation ? "fade" : ""}`}
              data-aos-delay={`${navanimation ? "600" : "0"}`}
              data-aos-once="true"
              className="big-heading"
            >
              I BUILD <span className="highlight">IT</span> STUFF
            </h2>
            <div
              className="hero-description"
              data-aos={`${navanimation ? "fade" : ""}`}
              data-aos-once="true"
              data-aos-delay={`${navanimation ? "800" : "0"}`}
            >
              <p>
                I AM A SOFTWARE DEVELOPER AND MACHINE LEARNING ENTHUSIAST WHO
                SPECIALIZES IN SOLVING REAL WORLD IT PROBLEMS.
              </p>
            </div>

            <Link
              to="/contact"
              data-aos={`${navanimation ? "fade" : ""}`}
              data-aos-once="true"
              data-aos-delay={`${navanimation ? "1000" : "0"}`}
            >
              <div className="btn">GET IN TOUCH</div>
            </Link>
          </div>
        </article>
        <div
          className="hero-img"
          data-aos={`${navanimation ? "fade" : ""}`}
          data-aos-once="true"
          data-aos-delay={`${navanimation ? "1200" : "0"}`}
        >
          <Threejsrender />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4323"
        height="250"
        fill="none"
        className="triangle-one"
        viewBox="0 0 4323 250"
        data-aos={`${navanimation ? "fade-up" : ""}`}
        data-aos-once="true"
      >
        <defs>
          <linearGradient
            id="a"
            x1="2161.5"
            x2="2161.5"
            y1="250"
            data-name="Unbenannter Verlauf 28"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              className="triangle-gradient-one"
              offset="0"
              stopColor="#96948d"
            ></stop>
            <stop
              className="triangle-gradient-two"
              offset="1"
              stopColor="#b5b2a6"
            ></stop>
          </linearGradient>
        </defs>
        <path fill="url(#a)" d="M4323 250L0 0v250z"></path>
      </svg>
    </header>
  );
};

export default Hero;
