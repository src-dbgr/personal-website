import React from "react";
import Title from "../general/Title";
import { Link } from "gatsby";
import Blog from "./Blog";

export const BlogsSection = ({ blogs, title, showLink }) => {
  return (
    <section id="sctn_blog" className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />;
        })}
      </div>
      <Link to="/blog" className="btn center-btn">
        <span className="btn">All Blog Articles</span>
      </Link>
    </section>
  );
};
export default BlogsSection;
