import React, { useEffect } from "react";
import Title from "../general/Title";
import { Link } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css";
import Blog from "./Blog";

export const BlogsSection = ({ blogs, title, showLink }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <section id="sctn_blog" className="section">
      <Title title={title} />
      <div
        className="section-center blogs-center"
        data-aos="fade"
        data-aos-once="true"
      >
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />;
        })}
      </div>
      <Link
        to="/blogs"
        className="btn center-btn"
        data-aos="fade"
        data-aos-once="true"
      >
        <span className="btn">All Blog Articles</span>
      </Link>
    </section>
  );
};
export default BlogsSection;
