import React, { useState, useEffect, useRef } from "react";
import { MdWork } from "react-icons/md";
import {
  FaUniversity,
  FaSchool,
  FaPencilRuler,
  FaGraduationCap,
  FaLink,
} from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";

const Stations = ({ stations }) => {
  const [inViewCount, setInViewCount] = useState(0);
  const [nodes, setNodes] = useState(null);
  const initialRun = useRef(true);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", check);
    };
  }, []);

  function refreshEventListener() {
    window.removeEventListener("scroll", check);
    window.addEventListener("scroll", check);
  }

  useEffect(() => {
    if (nodes !== null && inViewCount >= nodes.length) {
      console.log("remove event listener");
      window.removeEventListener("scroll", check);
    }
    return () => {};
  }, [inViewCount]);

  // trigger once station nodes are loaded
  useEffect(() => {
    if (initialRun.current) {
      initialRun.current = false;
      return;
    }
    refreshEventListener();
    return () => {
      //
    };
  }, [nodes]);

  function check() {
    if (nodes !== null) {
      for (var i = 0; i < nodes.length; i++) {
        if (
          isElementInViewport(nodes[i]) &&
          !nodes[i].classList.contains("in-view")
        ) {
          nodes[i].classList.add("in-view");
          setInViewCount((inViewCount) => inViewCount + 1);
        }
      }
    }
  }

  // check whether the considered element is somewhere visible
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left <
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */ &&
      rect.top <
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */
    );
  }

  function collectElements() {
    let found_nodes = document.querySelectorAll(".timeline-node");
    setNodes(found_nodes);
  }

  // check whether everything is loaded
  (function ready() {
    // If the body element and the #main element exist
    if (nodes !== null) {
      return;
    } else {
      if (document.querySelectorAll(".timeline-node").length > 10) {
        // Return so that we don't call requestAnimationFrame() again
        collectElements();
        return;
      }
    }
    // If the body element isn't found, run ready() again at the next pain
    setTimeout(ready, 200);
  })();

  return (
    <div className="section section-center ">
      <section className="timeline">
        <div className="timeline-heading-wrapper">
          <div className="timeline-heading">
            <time>STATIONS</time>
          </div>
        </div>
        <ul>
          {stations.map((station) => {
            return (
              <li key={station.Order_Id}>
                <div className="timeline-node shadow-box">
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
                  {station.urls.length > 0 && (
                    <div className="timeline-from-to timeline-resources">
                      <div className="timeline-links">
                        <h4>Resources / Certificates:</h4>
                        {station.urls.map((url) => {
                          return (
                            <table key={url.id}>
                              <tbody>
                                <tr className="timeline-link-element">
                                  <td>
                                    <FaLink className="timeline-link-icon" />
                                  </td>
                                  <td>
                                    <a href={url.url}>{url.title}</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          );
                        })}
                      </div>
                    </div>
                  )}

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
