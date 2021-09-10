import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TechTable from "./TechTable";

const query = graphql`
  {
    allStrapiTechstack(
      filter: {
        active: { eq: true }
        categorylabel: { eq: "C_ToolsPlatforms" }
      }
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
      }
    }
  }
`;

const ToolsPlatforms = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiTechstack: { nodes: toolsplats },
  } = data;

  console.log(toolsplats);
  return (
    <TechTable
      caption="
    Tools / Platforms"
      technologies={toolsplats}
    />
  );
};

export default ToolsPlatforms;
