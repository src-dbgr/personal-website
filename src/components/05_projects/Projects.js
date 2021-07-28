import React, { useEffect } from "react";
import Title from "../general/Title";
import { Link } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css";
import Project from "./Project";

const Projects = ({ projects, title, showLink }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  return (
    <section id="sctn_projects" className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects
          .sort(function (a, b) {
            // sort to make sure render order is always the same
            var idA = a.id.toUpperCase();
            var idB = b.id.toUpperCase();
            if (idA > idB) {
              return -1;
            }
            if (idA < idB) {
              return 1;
            }
            return 0;
          })
          .map((project, index) => {
            // returns for each project a single entry
            return <Project key={project.id} index={index} {...project} />;
          })}
      </div>
      {showLink ? (
        <Link
          to="projects"
          className="btn center-btn"
          data-aos="fade"
          data-aos-once="true"
        >
          <span className="btn">all projects</span>
        </Link>
      ) : (
        ""
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4323"
        height="250"
        className="triangle-two"
        viewBox="0 0 4323 250"
      >
        <path d="M0 250L4323 0 4323 250 0 250z"></path>
      </svg>
    </section>
  );
};

export default Projects;
