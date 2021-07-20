import React, { useEffect } from "react";
import Title from "../general/Title";
import loadable from "@loadable/component";
import { Link } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css";
const Blog = loadable(() => import("./Blog"));

export const BlogsSection = ({ blogs, title, showLink }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <section className="section">
      <Title title={title} />
      <div
        className="section-center blogs-center"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />;
        })}
      </div>
      <Link
        to="/blogs"
        className="btn center-btn"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        <span className="btn">All Blog Articles</span>
      </Link>
    </section>
  );
};
export default BlogsSection;