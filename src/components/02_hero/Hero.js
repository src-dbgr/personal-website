import React from "react";
import { Link } from "gatsby";
import Threejsrender from "../Threejs/Threejsrender";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>
              I'm <span className="highlight">Samuel</span>
            </h1>
            <h4>developer and machine learning enthusiast</h4>
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
