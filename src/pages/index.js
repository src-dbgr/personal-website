import React from "react";
import Layout from "../components/general/Layout";
import Hero from "../components/03_hero/Hero";
import About from "../components/04_about/About";
import Experience from "../components/04_about/04_01_experience/Experience";
import Projects from "../components/05_projects/Projects";
import { graphql } from "gatsby";
// import Sound from "../components/Sound";
const index = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data;

  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} title="Featured Projects" showLink />
        {/* <Sound src="https://www.free-stock-music.com/music/punch-deck-brahe.mp3" /> */}
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
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
                placeholder: BLURRED
                formats: [AUTO, AVIF, WEBP]
                blurredOptions: { width: 100 }
                transformOptions: { cropFocus: ATTENTION }
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

export default index;
