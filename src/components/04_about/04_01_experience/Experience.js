// import React from "react"
// import Title from "../../general/Title"
// import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
// import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"

// // const query = graphql`
// //   {
// //     allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
// //       nodes {
// //         company
// //         date
// //         desc {
// //           name
// //           id
// //         }
// //         position
// //         strapiId
// //       }
// //     }
// //   }
// // `

// // constExperience = () => {
// //   const data = useStaticQuery(query)
// //   const {allStrapiJobs: { nodes: jobs}, } = data;
// //   const [value, setValue] = React.useState(0);
// //   const {company, position, date, desc} = jobs[value]; // take react state value to choose the element

//   return <section className="section jobs">
//     {/* <Title title="experience"/>
//     <div className="jobs-center">
//       <div className="btn-container">
//       {jobs.map((item, index) => {
//         return <button key={item.strapiId} 
//         onClick={() => setValue(index)}
//         className={`job-btn 
//         ${index === value ? "active-btn" : ""}
//         `}>{item.company}</button>
//       })}
//       </div>
//       <article className="job-info">
//       <h3>{position}</h3>
//       <h4>{company}</h4>
//       <p className="job-date">{date}</p>
//       {desc.map((description)=>
//         <div key={description.id} className="job-desc">
//           <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
//           <p>{description.name}</p>
//         </div>
//       )}
//       </article>
//     </div>
//     <Link to="/about" className="btn center-btn">
//       more info
//     </Link> */}
//   </section>
// }

// export default Experience
