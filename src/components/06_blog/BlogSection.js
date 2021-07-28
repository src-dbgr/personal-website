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
        to="/blog"
        className="btn center-btn"
        data-aos="fade"
        data-aos-once="true"
      >
        <span className="btn">All Blog Articles</span>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4323"
        height="250"
        fill="none"
        className="triangle-three"
        viewBox="0 0 4323 250"
      >
        <path d="M4323 250L0 0 0 250 4323 250z"></path>
      </svg>
    </section>
  );
};
export default BlogsSection;
