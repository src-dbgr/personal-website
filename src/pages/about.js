import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/general/Layout";
import Title from "../components/general/Title";
import { BsCircleFill } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import Technologies from "../components/04_about/04_03_tech/Technologies";
import Stations from "../components/04_about/04_02_stations/Stations";
import FadeInSection from "../hooks/FadeInSection";
import Seo from "../components/general/Seo";

const AboutPage = ({
  data: {
    allStrapiAbout: { nodes: about },
    allStrapiStation: { nodes: stations },
    // allStrapiStation: { distinct: categories },
    allStrapiStationctgry: { nodes: categories },
  },
}) => {
  const [isDefault, setDefault] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  function flipRadioButton() {
    setDefault((isDefault) => !isDefault);
  }

  const { title, stack, image, info } = about[0];
  return (
    <Layout darkFooter={false}>
      <Seo title="About" />
      <section className="about-page">
        <Title title={title} />
        <div className="section section-center about-component-center">
          <FadeInSection>
            <article key="1" className="about-component shadow-box">
              <div className="ball-icon-wrapper">
                <BsCircleFill
                  id="bs-circle-fill"
                  className="about-component-icon"
                />
                <IoTriangleSharp
                  id="io-triangle-sharp"
                  className="about-component-icon"
                />
              </div>
              <h4>Who am I?</h4>
              <div className="underline"></div>
              <div className={`about-text ${isExpanded ? 'expanded' : 'colappsed'}`}>
                <p>{info}</p>
              </div>
              <button className="about-btn-toggle" onClick={toggleExpand}>
                {isExpanded ? 'SHOW LESS' : 'SHOW MORE'}
              </button>
              <div className="about-stack">
                {stack.map((item) => {
                  return <span key={item.id}>{item.title}</span>;
                })}
              </div>
            </article>
          </FadeInSection>
          <FadeInSection>
            <article key="2" className="about-component about-img-container">
              <div className="about-img" id="paimg">
                <GatsbyImage
                  image={getImage(image.localFile)}
                  className="about-default-img"
                  alt={title}
                />
              </div>
            </article>
          </FadeInSection>
        </div>
        <FadeInSection>
          <div id="resume" className="about-download">
            <div className="resume-wrapper">
              <a
                href={isDefault ? "/resume_sb_df.pdf" : "/resume_sb_wh.pdf"}
                className="btn center-btn"
              >
                <span className="btn">
                  <MdFileDownload className="icon-margin" />
                  RÉSUMÉ
                </span>
              </a>
              <div className="about-download-radio-wrapper">
                <p>RÉSUMÉ BACKGROUND:</p>
                <label>
                  <input
                    type="radio"
                    value="White"
                    name="resume"
                    checked={!isDefault}
                    onChange={flipRadioButton}
                  />
                  <span className="overlay"></span>
                  <span className="text-radio">WHITE</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="Default"
                    name="resume"
                    checked={isDefault}
                    onChange={flipRadioButton}
                  />
                  <span className="overlay"></span>
                  <span className="text-radio">DEFAULT</span>
                </label>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <Technologies />
        </FadeInSection>
        <FadeInSection>
          <Stations stations={stations} categories={categories} />
        </FadeInSection>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        stack {
          id
          title
        }
        info
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [WEBP, PNG]
                quality: 80
                blurredOptions: { width: 100 }
                backgroundColor: "transparent"
                width: 500
              )
            }
          }
        }
      }
    }
    allStrapiStation(
      sort: { order: DESC, fields: Order_Id }
      filter: { Activated: { eq: true } }
    ) {
      nodes {
        Date
        Description
        From_Month
        From_Year
        Order_Id
        To_Month
        To_Year
        To_Text
        Graduation
        Institution
        stack {
          id
          title
        }
        urls {
          id
          title
          url
        }
        stationctgry {
          title
          description
          icon {
            id
            url
            mime
          }
        }
      }
    }
    allStrapiStationctgry {
      nodes {
        title
        description
        icon {
          id
          url
          mime
        }
      }
    }
  }
`;

export default AboutPage;
