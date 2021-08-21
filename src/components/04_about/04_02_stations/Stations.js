import React from "react";
import { MdWork } from "react-icons/md";
import {
  FaUniversity,
  FaSchool,
  FaPencilRuler,
  FaGraduationCap,
} from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";

const Stations = ({ stations }) => {
  return (
    <div className="section section-center ">
      <section className="timeline">
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
          {stations.map((station) => {
            return (
              <li key={station.Order_Id}>
                <div
                  className="timeline-node shadow-box"
                  data-aos="fade"
                  data-aos-once="true"
                >
                  <div className="timeline-meta-head">
                    <div>
                      {station.cvcategory.cvcategory === "work" ? (
                        <MdWork />
                      ) : station.cvcategory.cvcategory === "school" ? (
                        <FaSchool />
                      ) : station.cvcategory.cvcategory === "internship" ? (
                        <HiIdentification />
                      ) : station.cvcategory.cvcategory === "university" ? (
                        <FaUniversity />
                      ) : station.cvcategory.cvcategory === "education" ? (
                        <FaGraduationCap />
                      ) : (
                        <FaPencilRuler />
                      )}
                      <div className="timeline-from-to-category">
                        <div className="timeline-width">
                          <h4>Category:</h4>
                        </div>
                        <div className="timeline-div-text">
                          {station.cvcategory.cvcategory}
                        </div>
                      </div>
                      <div className="timeline-from-to">
                        <div className="timeline-from-to">
                          <div className="timeline-width">
                            <h4>Institution:</h4>
                          </div>
                          <div>{station.Institution}</div>
                        </div>
                      </div>
                      <div className="timeline-from-to">
                        <div className="timeline-from-to">
                          <div className="timeline-width">
                            <h4>From:</h4>
                          </div>
                          <div>
                            {station.From_Month}/{station.From_Year}
                          </div>
                        </div>
                        <div className="timeline-from-to">
                          <div className="timeline-width-two">
                            <h4>To:</h4>
                          </div>
                          <div>
                            {station.To_Month}/{station.To_Year}
                          </div>
                        </div>
                      </div>
                      {station.Graduation != null && (
                        <div className="timeline-from-to">
                          <div className="timeline-from-to">
                            <div className="timeline-width">
                              <h4>Graduation:</h4>
                            </div>
                            <div>{station.Graduation}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p>{station.Description}</p>
                  <div className="about-stack">
                    {station.stack.map((item) => {
                      return <span key={item.id}>{item.title}</span>;
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Stations;
