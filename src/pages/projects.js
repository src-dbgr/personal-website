import React from "react";
import Layout from "../components/general/Layout";
import { graphql } from "gatsby";
import Projects from "../components/05_projects/Projects";

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        github
        id
        description
        title
        url
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, AVIF, WEBP]
                blurredOptions: { width: 100 }
                transformOptions: { cropFocus: ENTROPY }
                avifOptions: { quality: 85 }
                quality: 90
                height: 480
                width: 900
                backgroundColor: "transparent"
              )
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`;

export default ProjectsPage;
