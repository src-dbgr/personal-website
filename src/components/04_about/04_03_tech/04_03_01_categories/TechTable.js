import React from "react";

const TechTable = ({ caption, technologies }) => {
  console.log("caption: " + caption);
  console.log("Technlologies");
  console.log(technologies);
  return (
    <table className="timeline-legend-table tech-table">
      <caption>{caption}</caption>
      <tbody className="tablebody">
        <tr>
          <th>Technology</th>
          <th></th>
          <th>Description</th>
        </tr>
        {technologies.map((technology, i) => {
          return (
            <tr key={i}>
              <td>
                <img src={technology.imgurl} />
              </td>
              <td>{technology.skilltitle}</td>
              <td>{technology.skilldescription}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TechTable;
