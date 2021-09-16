import React from "react";
import Layout from "../components/general/Layout";
import Hero from "../components/03_hero/Hero";
import About from "../components/04_about/About";
import Experience from "../components/04_about/04_01_experience/Experience";
import Projects from "../components/05_projects/Projects";
import BlogsSection from "../components/06_blog/BlogSection";
import Seo from "../components/general/Seo";
import { graphql } from "gatsby";
const index = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
    allStrapiBlog: { nodes: blogs },
  } = data;

  return (
    <Layout darkFooter={true}>
      <Seo title="Home" />
      <Hero />
      <About />
      <Experience />
      <Projects projects={projects} title="Featured Projects" showLink />
      <BlogsSection blogs={blogs} title="Latest Blog Articles" />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProject(
      filter: { featured: { eq: true } }
      sort: { fields: orderid, order: ASC }
    ) {
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
    allStrapiBlog(sort: { order: DESC, fields: date }, limit: 3) {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [WEBP, PNG]
                blurredOptions: { width: 100 }
                transformOptions: { cropFocus: ENTROPY }
                quality: 80
                width: 800
                height: 300
                backgroundColor: "transparent"
              )
            }
          }
        }
      }
    }
  }
`;

export default index;
