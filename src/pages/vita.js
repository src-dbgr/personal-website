import React, { useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/general/Layout";
import Title from "../components/general/Title";
import { BsCircleFill } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io5";
import Stations from "../components/04_about/04_02_stations/Stations";
import Aos from "aos";
import "aos/dist/aos.css";
const VitaPage = ({
  data: {
    allStrapiAbout: { nodes: about },
    allStrapiStation: { nodes: stations },
  },
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  const { title, stack, image, info } = about[0];
  stack.forEach((item) => console.log(item.title));
  console.log("title: " + title);
  console.log("stack: " + stack);
  console.log("image: " + image);
  console.log(stations);
  return (
    <Layout darkFooter={false}>
      <section className="about-page padding-top">
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
        <Stations stations={stations} />
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
                formats: [AUTO, WEBP]
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
        cvcategory {
          cvcategory
        }
      }
    }
  }
`;

export default VitaPage;
