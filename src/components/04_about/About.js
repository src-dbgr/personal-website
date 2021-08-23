import React, { useEffect } from "react";
import Title from "../general/Title";
import { StaticImage } from "gatsby-plugin-image";
import { BsCircleFill } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io5";
import { Link } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <section id="about" className="section about-component-section">
      <Title title="Welcome" />
      <div className="section-center about-component-center">
        <article
          key="1"
          className="about-component shadow-box"
          data-aos="fade"
          data-aos-once="true"
        >
          <div className="ball-icon-wrapper">
            <BsCircleFill
              id="bs-circle-fill"
              className="about-component-icon"
            />
            <IoTriangleSharp
              id="io-triangle-sharp"
              className="about-component-icon"
            />
          </div>
          <h4>Who am I?</h4>
          <div className="underline"></div>
          <p>
            My name is <span>S</span>
            <span>a</span>
            <span>m</span>
            <span>u</span>
            <span>e</span>
            <span>l</span> and I enjoy creating things in the digital space. My
            deep interest in information technology started back in 2011 when I
            decided to study Business Informatics at the University of Mannheim.
            This kicked-off my journey exploring the binary landscape.
            Fast-forward to today, and I've had the privilege of working at the
            University of Mannheim and SAP as a software developer. These
            practical experiences taught me a ton in the recent years. My main
            interest these days tends towards Deep Learning applications
            preferably in an organizational realm tackling real life problems.
            Building accessible, inclusive products and digital experiences
            while harnessing state-of-the-art technologies is what I strive for.
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="skill-set">
            <li>Java</li>
            <li>Python</li>
            <li>Kubernetes</li>
            <li>JavaScript</li>
            <li>Tensorflow</li>
            <li>Go</li>
          </ul>
        </article>
        <article
          key="2"
          className="about-component about-img-container"
          data-aos="fade"
          data-aos-once="true"
        >
          <div className="about-img">
            <StaticImage
              src="../../assets/images/about/var_5.png"
              alt="about-img"
              className="about-default-img"
              placeholder="blur-up"
              quality={90}
              formats={["auto", "webp"]}
              width={500}
            />
            <StaticImage
              src="../../assets/images/about/var_1.png"
              alt="about-img"
              className="about-hover-img"
              placeholder="blur-up"
              quality={90}
              formats={["auto", "webp"]}
              width={500}
            />
          </div>
        </article>
      </div>
      <Link
        to="/about"
        className="btn center-btn"
        data-aos="fade"
        data-aos-once="true"
      >
        <span className="btn">about</span>
      </Link>
    </section>
  );
};

export default About;
