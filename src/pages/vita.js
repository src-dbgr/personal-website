import React, { useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/general/Layout";
import Title from "../components/general/Title";
import { BsCircleFill } from "react-icons/bs";
import { IoTriangleSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
const VitaPage = ({
  data: {
    allStrapiAbout: { nodes: about },
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
        <div className="section section-center ">
          <section class="timeline">
            <div className="timeline-heading-wrapper">
              <div
                className="timeline-heading"
                data-aos="fade"
                data-aos-once="true"
              >
                <time>STATIONS</time>
              </div>
            </div>
            <ul>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>1934</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium At vero
                    eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>1937</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>1940</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>1943</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>1946</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>1956</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>1957</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>1967</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>1977</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>1985</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>2000</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
              <li>
                <div data-aos="fade" data-aos-once="true">
                  <time>2005</time>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium At vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
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
                placeholder: DOMINANT_COLOR
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
  }
`;

export default VitaPage;
