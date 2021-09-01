import React, { useEffect } from "react";
import Title from "../../general/Title";
import { VscCircleFilled } from "react-icons/vsc";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css";

const query = graphql`
  {
    allStrapiJob(sort: { fields: strapiId, order: DESC }) {
      nodes {
        company
        date
        desc {
          name
          id
        }
        position
        strapiId
      }
    }
  }
`;

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  const data = useStaticQuery(query);
  const {
    allStrapiJob: { nodes: jobs }, // jobs is an alias
  } = data;
  const [value, setValue] = React.useState(0);
  const { company, position, date, desc } = jobs[value]; // take react state value to choose the element

  return (
    <section id="sctn_experience" className="section jobs">
      <Title title="experience" />
      <div className="jobs-center" data-aos="fade-up" data-aos-once="true">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn
        ${index === value ? "active-btn" : ""}
        `}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info shadow-box">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((description) => (
            <div key={description.id} className="job-desc">
              <VscCircleFilled className="job-icon"></VscCircleFilled>
              <p>{description.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link
        to="/about#resume"
        className="btn center-btn"
        data-aos="fade"
        data-aos-once="true"
      >
        <span className="btn">more info</span>
      </Link>
    </section>
  );
};

export default Experience;
