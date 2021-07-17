import React, { useEffect } from "react";
import Title from "../general/Title";
import Project from "./Project";
import { Link } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = ({ projects, title, showLink }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          // returns for each project a single entry
          return <Project key={project.id} index={index} {...project} />;
        })}
      </div>
      {showLink ? (
        <Link
          to="projects"
          className="btn center-btn"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          <span className="btn">all projects</span>
        </Link>
      ) : (
        ""
      )}
    </section>
  );
};

export default Projects;
