import React, { useEffect } from "react";
import Title from "../general/Title";
import { Link } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css";
import Project from "./Project";

const Projects = ({ projects, title, showLink }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="sctn_projects" className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          // returns for each project a single entry
          return <Project key={project.orderid} index={index} {...project} />;
        })}
      </div>
      {showLink ? (
        <Link
          to="projects"
          className="btn center-btn"
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
