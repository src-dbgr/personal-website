import React from "react";
import Title from "../../general/Title";
import { VscCircleFilled } from "react-icons/vsc";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import FadeInSection from "../../../hooks/FadeInSection";

const query = graphql`
  {
    allStrapiJob(sort: { fields: strapi_id, order: DESC }) {
      nodes {
        company
        short_company
        date
        desc {
          name
          id
        }
        position
        strapi_id
      }
    }
  }
`;

const Experience = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiJob: { nodes: jobs }, // jobs is an alias
  } = data;
  const [value, setValue] = React.useState(0);
  const { company, position, date, desc } = jobs[value]; // take react state value to choose the element

  return (
    <section id="sctn_experience" className="section jobs">
      <Title title="experience" />
      <FadeInSection>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.strapi_id}
                  onClick={() => setValue(index)}
                  className={`job-btn
        ${index === value ? "active-btn" : ""}
        `}
                >
                  {item.short_company}
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
      </FadeInSection>
      <Link to="/about#paimg" className="btn center-btn">
        <span className="btn">more info</span>
      </Link>
    </section>
  );
};

export default Experience;
