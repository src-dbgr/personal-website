import React from "react";
import Title from "../general/Title";
import loadable from "@loadable/component";
const Blog = loadable(() => import("./Blog"));
export const BlogPage = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />;
        })}
      </div>
    </section>
  );
};
export default BlogPage;
