import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/general/Layout";
import Title from "../components/general/Title";
import ReactMarkdown from "react-markdown";

const ComponentName = ({ data }) => {
  const { content, title } = data.blog;
  return (
    <Layout darkFooter={true}>
      <section className="blog-template">
        <Title title={title} />
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown children={content} />
            <Link to="/blog" className="btn center-btn">
              <span className="btn">all blogs</span>
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlog(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`;

export default ComponentName;
