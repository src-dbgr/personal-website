import React, { useEffect } from "react";
import { Link } from "gatsby";
import Threejsrender from "./Threejs/Threejsrender";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-description-wrapper">
            <div
              className="underline"
              data-aos="fade-zoom-in"
              data-aos-once="true"
            ></div>
            <h4
              data-aos="fade-zoom-in"
              data-aos-once="true"
              data-aos-delay="200"
            >
              HI, MY NAME IS
            </h4>
            <h1 className="big-heading">
              <span
                className="highlight"
                data-aos="fade-zoom-in"
                data-aos-delay="400"
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
              data-aos="fade-zoom-in"
              data-aos-delay="600"
              data-aos-once="true"
              className="big-heading"
            >
              I BUILD <span className="highlight">IT</span> STUFF
            </h2>
            <div
              className="hero-description"
              data-aos="fade-zoom-in"
              data-aos-once="true"
              data-aos-delay="800"
            >
              <p>
                I AM A SOFTWARE DEVELOPER AND MACHINE LEARNING ENTHUSIAST WHO
                SPECIALIZES IN SOLVING REAL WORLD IT PROBLEMS.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn"
              data-aos="fade-zoom-in"
              data-aos-once="true"
              data-aos-delay="1000"
            >
              GET IN TOUCH
            </Link>
          </div>
        </article>
        <div
          className="hero-img"
          data-aos="fade-zoom-in"
          data-aos-once="true"
          data-aos-delay="1200"
        >
          <Threejsrender />
        </div>
      </div>
    </header>
  );
};

export default Hero;
