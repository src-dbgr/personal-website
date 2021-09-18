import React from "react";
import Title from "../general/Title";
import { Link } from "gatsby";
import Project from "./Project";
import FadeInSection from "../../hooks/FadeInSection";

const Projects = ({ projects, title, showLink }) => {
  return (
    <section id="sctn_projects" className="section projects">
      <Title title={title} />
      <FadeInSection>
        <div className="section-center projects-center">
          {projects.map((project, index) => {
            // returns for each project a single entry
            return <Project key={project.orderid} index={index} {...project} />;
          })}
        </div>
      </FadeInSection>
      {showLink ? (
        <Link to="projects" className="btn center-btn">
          <span className="btn">all projects</span>
        </Link>
      ) : (
        ""
      )}
    </section>
  );
};

export default Projects;
