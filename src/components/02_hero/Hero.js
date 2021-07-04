import React from "react";
import { Link } from "gatsby";
// import Image from "gatsby-image";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Samuel</h1>
            <h4>developer and machine learning enthusiast</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
          </div>
        </article>
        {/* <Image fluid={data.file.childImageSharp.fluid} className="hero-img" /> */}
      </div>
    </header>
  );
};

export default Hero;
