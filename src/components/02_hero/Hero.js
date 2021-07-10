import React from "react";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Threejsrender from "../Threejs/Threejsrender";
// import Image from "gatsby-image";

const query = graphql`
  {
    file(relativePath: { eq: "hero/hero-img-sam.webp" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  const image = getImage(data.file);
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm <span className="highlight">Samuel</span></h1>
            <h4>developer and machine learning enthusiast</h4>
            <Link to="/contact" className="btn">
              GET IN TOUCH
            </Link>
          </div>
        </article>
        {/* <GatsbyImage image={image} alt="" /> */}
        {/* <StaticImage
          src="../../assets/images/hero/hero-img-sam2.png"
          alt="hero"
          className="hero-img"
          placeholder="blur-up"
          formats={["auto", "webp", "avif"]}
        /> */}
        <div className="hero-img">
          <Threejsrender />
        </div>
      </div>
    </header>
  );
};

export default Hero;
