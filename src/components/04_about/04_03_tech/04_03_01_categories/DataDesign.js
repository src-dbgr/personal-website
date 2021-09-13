import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TechTable from "./TechTable";

const query = graphql`
  {
    allStrapiTechstack(
      filter: { active: { eq: true }, categorylabel: { eq: "D_DataDesign" } }
      sort: { fields: skilllevel, order: DESC }
    ) {
      nodes {
        imgurl
        skillcategory
        skilldescription
        skilllevel
        skillleveltag
        skilltitle
        skilltype
        techurl
      }
    }
  }
`;

const DataDesign = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiTechstack: { nodes: datades },
  } = data;
  return <TechTable caption="Data / Design" technologies={datades} />;
};

export default DataDesign;
