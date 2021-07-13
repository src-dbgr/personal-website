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
            <h4>Hi, my name is</h4>
            <h1>
              <span className="highlight">SAMUEL</span>
            </h1>
            <h2>
              I BUILD <span className="highlight">IT</span> STUFF
            </h2>
            <div className="hero-description">
              I'm a software developer and machine learning enthusiast who
              specializes in solving real world IT problems. In my last Job I
              worked as a Cloud Platform engineer for{" "}
              <span className="highlight">SAP</span> where I focussed on large
              scale messaging systems. Owing to my passion and fascination for
              Machine Learning I decided pursue a career in this area.
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
