import React, { useEffect } from "react";
import Title from "../general/Title";
import { StaticImage } from "gatsby-plugin-image";
import { BsCircleFill } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const About = ({ infomain }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
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
          <p>{infomain}</p>
          <ul className="skill-set">
            <li>Python</li>
            <li>Java</li>
            <li>K8s</li>
            <li>TensorFlow</li>
            <li>JS</li>
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
    </section>
  );
};

export default About;
