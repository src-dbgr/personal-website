import React, { useEffect } from "react";
import Title from "../general/Title";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { BsCircleFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const query = graphql`
  {
    file(relativePath: { eq: "hero/hero-img-sam.webp" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  return (
    <section id="about" className="section about-component-section">
      <Title title="About"/>
      <div className="section-center about-component-center">
        <article
          key="1"
          className="about-component shadow-box"
          data-aos="slide-right"
          data-aos-once="true"
        >
          <BsCircleFill className="about-component-icon" />
          <h4>Who am I?</h4>
          <div className="underline"></div>
          <p>
            My name is <span>S</span>
            <span>a</span>
            <span>m</span>
            <span>u</span>
            <span>e</span>
            <span>l</span> and I enjoy creating things that live on the
            internet. My deep interest in information technology started back in
            2011 when I decided to study Business Informatics at the University
            of Mannheim. This kicked-off my journey exploring the binary
            landscape. Fast-forward to today, and I've had the privilege of
            working at an advertising agency, a start-up, a huge corporation,
            and a student-led design studio. My main focus these days is
            building accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients. Here are a few technologies
            I've been working with recently:
          </p>
        </article>
        <article
          key="2"
          className="about-component about-img-container"
          data-aos="slide-left"
          data-aos-once="true"
        >
          <div className="about-hover-wrapper">
            <div className="about-img">
              <StaticImage
                // src="../../assets/images/about/hero-colors-dark-soft-edge.png"
                src="../../assets/images/about/var_5.png"
                alt="about-img"
                className="about-default-img"
                placeholder="blur-up"
                formats={["auto", "webp", "avif"]}
              />
              <StaticImage
                // src="../../assets/images/about/hero-colors-green-clean.png"
                // src="../../assets/images/about/hero-no-fx-3.png"
                src="../../assets/images/about/var_1.png"
                alt="about-img"
                className="about-hover-img"
                placeholder="blur-up"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
