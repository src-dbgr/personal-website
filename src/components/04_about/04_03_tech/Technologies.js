import React from "react";
import {
  HiIdentification,
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleUp,
} from "react-icons/hi";
import { FaJava } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import ProgrammingLangs from "./04_03_01_categories/ProgrammingLangs";
import LibsFrameworks from "./04_03_01_categories/LibsFrameworks";
import ToolsPlatforms from "./04_03_01_categories/ToolsPlatforms";
import DataDesign from "./04_03_01_categories/DataDesign";

const query = graphql`
  {
    allStrapiTechstack(
      filter: { active: { eq: true } }
      sort: { order: ASC, fields: categorylabel }
    ) {
      distinct(field: categorylabel)
    }
  }
`;

const Technologies = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiTechstack: { distinct: categories },
  } = data;

  console.log(categories);

  return (
    <div className="section section-center tech-table-comp">
      <div className="timeline-legend-table-wrapper tech-table-open">
        <div className="timeline-flex-header">
          <div role="button" tabIndex={0}>
            <HiOutlineChevronDoubleDown className="timeline-flex-collapsible-icon" />
            <h4>Technologies</h4>
          </div>
        </div>
        <ProgrammingLangs />
        <LibsFrameworks />
        <ToolsPlatforms />
        <DataDesign />
      </div>
    </div>
  );
};

export default Technologies;
