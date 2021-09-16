import React from "react";
import Layout from "../components/general/Layout";
import { graphql } from "gatsby";
import Projects from "../components/05_projects/Projects";
import Seo from "../components/general/Seo";

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <Layout darkFooter={false}>
      <Seo
        title="Projects"
        description="Samuel IT - Discover the latest IT projects I worked on."
      />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProject(sort: { fields: orderid, order: ASC }) {
      nodes {
        github
        orderid
        description
        title
        url
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [WEBP, PNG]
                blurredOptions: { width: 100 }
                transformOptions: { cropFocus: ENTROPY, fit: COVER }
                quality: 90
                height: 550
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
