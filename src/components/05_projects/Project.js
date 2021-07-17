import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ image, title, description, github, stack, url, index }) => {
  useEffect(() => {
    Aos.init({ duration: 500, disable: "mobile" });
  }, []);

  // checks whether an image has been set, if noc image is set, don't render --> lines 9-11
  return (
    <article className="project">
      {image && (
        // <Image fluid={image.childImageSharp.fluid} className="project-img" />
        <div className="project-img" data-aos="slide-right" data-aos-once="true">
          <GatsbyImage
            image={getImage(image.localFile)}
            className="project-img shadow-box-dark"
            alt={title}
            //   formats={["avif", "webp", "auto"]}
          />
        </div>
      )}
      <div className="project-info" data-aos="slide-left" data-aos-once="true">
        <span className="project-number">
          {index % 2 === 0 ? <BsCircleFill /> : <IoTriangleSharp />}
        </span>
        <h3>{title || "Title Prop not set"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Project;
