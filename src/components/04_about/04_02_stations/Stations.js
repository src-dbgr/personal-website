import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaUniversity, FaSchool, FaPencilRuler } from "react-icons/fa";

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
                      ) : (
                        <FaPencilRuler />
                      )}
                      <div className="timeline-from-to-category">
                        <div className="timeline-width">
                          <h4>Category:</h4>
                        </div>
                        <div>{station.cvcategory.cvcategory}</div>
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
                    </div>
                  </div>
                  <p>{station.Description}</p>
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
