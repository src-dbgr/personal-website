import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/general/Layout";
import Title from "../components/general/Title";
import { BsCircleFill } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import Stations from "../components/04_about/04_02_stations/Stations";
const AboutPage = ({
  data: {
    allStrapiAbout: { nodes: about },
    allStrapiStation: { nodes: stations },
    // allStrapiStation: { distinct: categories },
    allStrapiStationctgry: { nodes: categories },
  },
}) => {
  const [isDefault, setDefault] = useState(true);

  function flipRadioButton() {
    setDefault((isDefault) => !isDefault);
  }

  const { title, stack, image, info } = about[0];
  return (
    <Layout darkFooter={false}>
      <section className="about-page">
        <Title title={title} />
        <div className="section section-center about-component-center">
          <article
            key="1"
            className="about-component shadow-box"
            data-aos="fade"
            data-aos-once="true"
          >
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
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
          <article
            key="2"
            className="about-component about-img-container"
            data-aos="fade"
            data-aos-once="true"
          >
            <div className="about-img">
              <GatsbyImage
                image={getImage(image.localFile)}
                className="about-default-img"
                alt={title}
              />
            </div>
          </article>
        </div>
        <div
          id="resume"
          className="about-download"
          data-aos="fade"
          data-aos-once="true"
        >
          <div className="resume-wrapper">
            <a
              href={
                isDefault
                  ? "/resume_sb_df.pdf"
                  : "/resume_sb_wh.pdf"
              }
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
                  value="Default"
                  name="resume"
                  checked={isDefault}
                  onChange={flipRadioButton}
                />
                <span className="overlay"></span>
                <span className="text-radio">DEFAULT</span>
              </label>
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
            </div>
          </div>
        </div>
        <Stations stations={stations} categories={categories} />
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
    allStrapiStation(sort: { order: DESC, fields: Order_Id }) {
      nodes {
        Date
        Description
        From_Month
        From_Year
        Order_Id
        To_Month
        To_Year
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
