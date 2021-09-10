import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TechTable from "./TechTable";

const query = graphql`
  {
    allStrapiTechstack(
      filter: {
        active: { eq: true }
        categorylabel: { eq: "B_LibsFrameworks" }
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

const LibsFrameworks = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiTechstack: { nodes: libsfames },
  } = data;

  console.log(libsfames);
  return (
    <TechTable caption="Libraries / Frameworks" technologies={libsfames} />
  );
};

export default LibsFrameworks;
