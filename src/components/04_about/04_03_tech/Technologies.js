import React from "react";
import {
  HiIdentification,
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleUp,
} from "react-icons/hi";
import { FaJava } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="section section-center tech-table-comp">
      <div className="timeline-legend-table-wrapper tech-table-open">
        <div className="timeline-flex-header">
          <div role="button" tabIndex={0}>
            <HiOutlineChevronDoubleDown className="timeline-flex-collapsible-icon" />
            <h4>Technologies</h4>
          </div>
        </div>
        <table className="timeline-legend-table tech-table">
          <caption>Programming Languages</caption>
          <tbody className="tablebody">
            <tr>
              <th>Technology</th>
              <th></th>
              <th>Description</th>
            </tr>
            <tr>
              <td>
                {/* <FaJava /> */}
                <img src="https://upload.wikimedia.org/wikiversity/de/b/b8/Java_cup.svg"/>
              </td>
              <td>Java</td>
              <td>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                quidem ipsum, optio iure sed quis esse! Aliquam esse dolores
                numquam! Numquam natus impedit obcaecati facere cum nisi
                voluptas voluptatem labore.
              </td>
            </tr>
          </tbody>
        </table>
        <table className="timeline-legend-table tech-table">
          <caption>Libraries / Frameworks</caption>
          <tbody className="tablebody">
            <tr>
              <th>Technology</th>
              <th></th>
              <th>Description</th>
            </tr>
            <tr>
              <td>Java</td>
              <td>symbol</td>
              <td>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                quidem ipsum, optio iure sed quis esse! Aliquam esse dolores
                numquam! Numquam natus impedit obcaecati facere cum nisi
                voluptas voluptatem labore.
              </td>
            </tr>
            <tr>
              <td>Java</td>
              <td>symbol</td>
              <td>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                quidem ipsum, optio iure sed quis esse! Aliquam esse dolores
                numquam! Numquam natus impedit obcaecati facere cum nisi
                voluptas voluptatem labore.
              </td>
            </tr>
          </tbody>
        </table>
        <table className="timeline-legend-table tech-table">
          <caption>Tools / Platforms</caption>
          <tbody className="tablebody">
            <tr>
              <th>Technology</th>
              <th></th>
              <th>Description</th>
            </tr>
            <tr>
              <td>Java</td>
              <td>symbol</td>
              <td>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                quidem ipsum, optio iure sed quis esse! Aliquam esse dolores
                numquam! Numquam natus impedit obcaecati facere cum nisi
                voluptas voluptatem labore.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Technologies;
