import React from "react";
import Layout from "../components/general/Layout";
import Hero from "../components/03_hero/Hero";
import About from "../components/04_about/About";
import Experience from "../components/04_about/04_01_experience/Experience";
import Projects from "../components/05_projects/Projects";
import BlogsSection from "../components/06_blog/BlogSection";
import { graphql } from "gatsby";
// import Sound from "../components/Sound";
const index = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
    allStrapiBlog: { nodes: blogs },
  } = data;

  return (
    <>
      <Layout darkFooter={true}>
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} title="Featured Projects" showLink />
        <BlogsSection blogs={blogs} title="Latest Blog Articles" />
        {/* <Sound src="https://www.free-stock-music.com/music/punch-deck-brahe.mp3" /> */}
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
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
                formats: [AUTO, WEBP]
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
                formats: [AUTO, WEBP]
                blurredOptions: { width: 100 }
                transformOptions: { cropFocus: ENTROPY }
                avifOptions: { quality: 75 }
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
