import React from "react";
import Title from "../components/general/Title";
import Blog from "../components/06_blog/Blog";
import Layout from "../components/general/Layout";
import { graphql } from "gatsby";
const BlogPage = ({
  data: {
    allStrapiBlog: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Title title="Blog" />
        <div className="section-center blogs-center">
          {blogs.map((blog) => {
            return <Blog key={blog.id} {...blog} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiBlog(sort: { order: DESC, fields: date }) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP]
                blurredOptions: { width: 100 }
                transformOptions: { cropFocus: ENTROPY }
                avifOptions: { quality: 75 }
                quality: 80
                width: 800
                height: 300
                backgroundColor: "transparent"
              )
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
