import React from "react";
import { Link } from "gatsby";
import Threejsrender from "./Threejs/Threejsrender";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-description-wrapper">
            <div className="underline"></div>
            <h4>HI, MY NAME IS</h4>
            <h1>
              <span className="highlight">
                <span>S</span>
                <span>A</span>
                <span>M</span>
                <span>U</span>
                <span>E</span>
                <span>L</span>
              </span>
            </h1>
            <h2>
              I BUILD <span className="highlight">IT</span> STUFF
            </h2>
            <div className="hero-description">
              I'm a software developer and machine learning enthusiast who
              specializes in solving real world IT problems.
            </div>
            <Link to="/contact" className="btn">
              GET IN TOUCH
            </Link>
          </div>
        </article>
        <div className="hero-img">
          <Threejsrender />
        </div>
      </div>
    </header>
  );
};

export default Hero;
