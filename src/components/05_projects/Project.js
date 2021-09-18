import React, { useState } from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io5";
import FadeInSection from "../../hooks/FadeInSection";

const Project = ({ image, title, description, github, stack, url, index }) => {
  const [active, setActive] = useState(false);

  function flipActivation() {
    setActive((active) => !active);
  }

  // checks whether an image has been set, if noc image is set, don't render --> lines 9-11
  return (
    <FadeInSection>
      <div
        className="project"
        onClick={flipActivation}
        onKeyDown={flipActivation}
        role="presentation"
      >
        {image && (
          <GatsbyImage
            image={getImage(image.localFile)}
            className={
              active
                ? "project-img-active shadow-box-dark"
                : "project-img shadow-box-dark"
            }
            alt={title}
          />
        )}
        <div className="project-info shadow-box-dark">
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
              <p>
                GITHUB{" "}
                {String(github.match("[^/]+(?=/$|$)"))
                  .replace(/-/g, " ")
                  .toUpperCase()}
              </p>
            </a>
          </div>
          {url.includes("github") && (
            <div className="project-links">
              <a href={url}>
                <FaGithubSquare className="project-icon" />
                <p>
                  GITHUB{" "}
                  {String(url.match("[^/]+(?=/$|$)"))
                    .replace(/-/g, " ")
                    .toUpperCase()}
                </p>
              </a>
            </div>
          )}
        </div>
      </div>
    </FadeInSection>
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
