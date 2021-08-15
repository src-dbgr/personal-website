import React, { useEffect } from "react";
import Title from "../general/Title";
import { StaticImage } from "gatsby-plugin-image";
import { BsCircleFill } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <section id="about" className="section about-component-section">
      <Title title="About" />
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4323"
        height="80"
        className="triangle-two"
        viewBox="0 0 4323 80"
      >
        <path d="M4296 39.8c-5.6 5.2-35.6 17.8-39.7 5.6-3.2 1.8-36.2 8.3-44 4-4.9 2.1-33.2-.3-37.7 1.6-2.1-.8-47.7 6.8-47.7 7.6 0 2.6-39-11.8-39-7.7 0 8.6-35.2-10.6-35.2-9.8s-42.9 1.9-42.9.5-39.6-1.2-39.6-2c0 2-40.5-4.7-40.5-6.5 0-.1-38.2 9.9-38.2 10.9 0-11.2-43.1-4.8-43.1-4.2s-40 6.9-40 3.2c0 .9-36.2 6.8-36.2 8s-42 10.7-42 3.2c0-5.2-40.3 13.6-40.3 9.9 0-1.5-47.4-12.1-47.4-6.5 0 1.3-37.9 6.8-37.9 2.4 0-7.4-38.1 8.3-38.1 5.9s-38.5-7.5-38.5-5.3c0-5.1-38.9 11.4-38.9 5.1 0-.5-38.4-1.1-38.4-2.1 0-3.7-37.3-2.4-37.3-5.5 0-1.5-38 .9-38-1.6 0 3-39.8 2.6-39.8 3.3 0-4.7-38.2-4.2-38.2-1.5s-37.9-6.5-37.9-2.2c0-2.8-35.6-5.7-35.6-5.9s-37.5-5.4-37.5-2.4c0-4.7-35.7-6.5-35.7-5.9 0-1-39 .9-39-1.4 0 5.3-40.9-3.4-40.9.7 0-2.7-34.4-4.7-34.4-7.3 0 6.6-44.4 2-44.4 4.8 0-.8-38.6 3.4-38.6-2.1 0 8.2-32.7-5-32.7-9.4 0-9.1-38.7-.4-38.7-1.9s-41.6 11-41.6 2.5c0-2.9-35.4-12.6-35.4-6.5 0-.2-38.3-4.7-38.3-2.3 0 8.7-39.7-5.7-39.7 1.4 0 .3-35.9-7.9-35.9-11.8 0-8.5-40.7 2.6-40.7 7.7 0-1.6-39.5-3.6-39.5-8 0 3.1-39.1 3-39.1 4.5 0 5.2-39.5-1.7-39.5.9 0 5.8-37.9 5.8-37.9 6.1 0-4-40.7 2.8-40.7 4.6 0-1.4-41.7-2.2-41.7-4.5 0-.4-44.2 1.2-44.2-5.6 0-8.9-43.9-5.2-43.9-3.8 0 6.4-29.6-3.8-29.6-5.3 0-4.9-33.5-7.6-33.5-2.3 0 14.3-31.7 5.2-31.7 6.4 0 4-40.9-5.3-40.9-6.1 0-6.8-35.9 6.1-35.9 11.2 0 1.9-41.6-4.9-41.6-8.5 0 6.5-43.1-.6-37.7 5-1.7-2.2-41.6-3.7-39.4-.4-3.2-1.3-32.6 4-38.2.7 8.7 10.4-29.8 3.9-40.2-1.7-1 2.1-35.7 4-38 3.9 7.2 2-44.5 4.3-37.9 4.4-2.6.6-39.2 4.1-38.8 3.8-.6-4.7-7.5-7.3-15.3-8.5-5.6 1.2-10.7 3.8-11.1 8.5.2.3-26.5-3.2-28.4-3.8 4.8-.1-32.9-2.4-27.7-4.4-1.7.1-27-1.8-27.7-3.9-7.6 5.6-35.8 12.1-29.5 1.7-4 3.3-25.6-2-27.9-.7 1.6-3.3-27.5-1.8-28.8.4 4-5.6-27.5 1.5-27.5-5 0 3.6-30.4 10.4-30.4 8.5 0-5.1-26.2-18-26.2-11.2 0 .8-29.9 10.1-29.9 6.1 0-1.2-23.2 7.9-23.2-6.4 0-5.3-24.5-2.6-24.5 2.3 0 1.5-21.6 11.7-21.6 5.3 0-1.4-32.1-5.1-32.1 3.8 0 6.8-32.3 5.2-32.3 5.6 0 2.3-30.4 3.1-30.4 4.5 0-1.8-29.7-8.6-29.7-4.6 0-.3-27.7-.3-27.7-6.1 0-2.6-29 4.3-29-.9 0-1.5-28.5-1.4-28.5-4.5 0 4.4-28.9 6.4-28.9 8 0-5.1-29.7-16.2-29.7-7.7 0 3.9-26.2 12.1-26.2 11.8 0-7.1-29.1 7.3-29.1-1.4 0-2.4-27.9 2.1-27.9 2.3 0-6.1-25.9 3.6-25.9 6.5 0 8.5-30.4-4-30.4-2.5s-28.3-7.2-28.3 1.9c0 4.4-23.9 17.6-23.9 9.4 0 5.5-28.2 1.3-28.2 2.1 0-2.8-32.5 1.8-32.5-4.8 0 2.6-25 4.6-25 7.3 0-4.1-30 4.6-30-.7 0 2.3-28.4.4-28.4 1.4 0-.6-26.2 1.2-26.2 5.9 0-3-27.3 1.7-27.3 2.4s-26.1 3.1-26.1 5.9c0-4.3-27.7 5.2-27.7 2.2s-27.9-3.2-27.9 1.5c0-.7-29.1-.3-29.1-3.3 0 2.5-27.7.1-27.7 1.6 0 3.1-27.3 1.8-27.3 5.5 0 1-28.1 1.6-28.1 2.1 0 6.3-28.4-10.2-28.4-5.1 0-2.2-28.1 3.9-28.1 5.3s-27.9-13.3-27.9-5.9c0 4.4-27.7-1.1-27.7-2.4 0-5.6-34.6 5-34.6 6.5 0 3.7-29.4-15.1-29.4-9.9 0 7.5-30.7-1.9-30.7-3.2S376 43.9 376 43c0 3.7-29.2-3-29.2-3.2s-31.5-7-31.5 4.2c0-1-27.9-11-27.9-10.9 0 1.8-29.6 8.5-29.6 6.5 0 .8-28.9 1.5-28.9 2s-31.4 0-31.4-.5-25.7 18.4-25.7 9.8c0-4.1-28.5 10.3-28.5 7.7 0-.8-33.3-8.4-34.8-7.6-3.3-1.9-24.1.5-27.6-1.6-5.7 4.3-29.8-2.2-32.2-4-3 12.2-24.9-.4-29-5.6-5.2 4.9-14.9 5.8-19.7 5.1V250h4323V44.9c-6.5.7-19.8-.2-27-5.1z"></path>
      </svg>
    </section>
  );
};

export default About;
