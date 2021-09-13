import React from "react";
import Title from "../components/general/Title";
import Blog from "../components/06_blog/Blog";
import Layout from "../components/general/Layout";
import Seo from "../components/general/Seo";
import { graphql } from "gatsby";
const BlogPage = ({
  data: {
    allStrapiBlog: { nodes: blogs },
  },
}) => {
  return (
    <Layout darkFooter={true}>
      <Seo
        title="Blog"
        description="Samuel IT - Discover the latest IT blog articles I have published."
      />
      <section className="blog-page">
        <Title title="All Blog Articles" />
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
                formats: [WEBP, PNG]
                blurredOptions: { width: 100 }
                transformOptions: { cropFocus: ENTROPY }
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
