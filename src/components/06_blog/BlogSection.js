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
        height="80"
        className="triangle-three"
        viewBox="0 0 4323 80"
      >
        <path d="M2161.5 250H0V15.5c5.4 1.5 10.4 3.3 11.8 5.4 18.8.1 39.2-2 26.2 2.8 3 3 20.5 2 28.8 1.6 6.2-2.2 21.3-5.9 25.4-5 5.7-6.2 20.7 7.9 24.1 10.5-.2-2 24.6-8.7 28.2-7.1-12.1 3.1 0 6.4 25.9 9-5.8 5.8 14.2-2.1 26.7-1.2 2.1-6.1 23.6 5.8 28 1.4 7.7 4.3 29.4 11.2 28 5.3 5.4-1.4 21.6-5.4 27.9-2.1-5-3 28.4-13 28.4-8.1s27.9 11.1 27.9-1.1c0 11.6 27.8-2.1 27.8-2s28.7 8 28.7 6.2c0-7.1 26.8-13.4 26.8-7.8s28.5 1.1 28.5 1.8c0 8.3 27.8 3.4 27.8-1.8 0-3.3 30.3-6 30.3 3.9 0 2 25.3-3.9 25.3-8.4 0-2 23.9-16.2 23.9-11.1 0 0 29.5-3.8 29.5-1.1 0-5.6 28.3-7.7 28.3-6 0-3.9 29.2 13.8 29.2 12.4s27.4 0 27.4-.7c0 1.6 30.4-.6 30.4-2.2 0 10.4 13.4 20.3 13.4 16.4 0-8.6 25.4 2.6 25.4 5.1 0-3.6 27.6 1.4 27.6-1.3 0-8.5 27.1 2.9 27.1-2.9s27.4-.1 27.4 2.6c0-.7 26.7 7.4 26.7 5 0 4.5 28.6-3.8 28.6-2.3s25.3 10.8 25.3 13.8c0 .6 28.9-12.2 28.9-4.4 0 5.6 28-3.3 28 .2s29.1-8.6 29.1 4.9c0-1.5 26-12.2 26-10.2 0-2 29.1-5.6 29.1-9.1 0 2.7 34.2-5 34.2.7 0-10.3 32-13.7 32-4.2 0-3.5 29.7.5 29.7 2.9 0-4.4 28-1.4 28-1.2 0-6.2 28.6-4.8 28.6-5.3 0 7.1 27.6 5.8 27.6 8.7 0-1.8 30.3-13.5 30.3-8.1 0-1.7 28.6-.3 28.6 2.2 0 9.7 27.5 4.3 27.5 5.1s25.2 11.9 25.2 11.1c0 1.9 28.8-4.7 28.8.7 0 0 32.6-18.2 32.6-9.6 0 1.4 23.9 19.7 23.9 15.4s28.1-.1 28.1 4.1 29.7.3 29.7 1.1c0 5.9 30.3-5.3 30.3-3.6s29.8-1.2 29.8-4.5c0 1.9 28.9 2.9 28.9 5.4s29.3-4.6 29.3-3.8 29.4-6.7 29.4 5.7c0-1.5 28.8-2.6 28.8-10.1 0-4.8 30.1 9.7 30.1 10.5 0 11.4 28.6-3.1 28.6-8.1 0 7.8 29.7-3 29.7 3.3 0-1.6 28.6-12.6 28.6-6.3 0 4.5 28 3.5 28 2.5 0 3.2 28.3 6.5 28.3 6.7 0 15.5 27.6 3.9 27.6-.3s26.3-15.1 26.3-12.9c0-9.6 28.1-2.2 28.1 4.7 0-7.9 28.1 8 28.1 4.1s27.3-6.9 27.3-3.3c0-4 30.1-.8 27.6-.3-1.8 3 32.2-.2 30.1-1.5-11.6-.8 24.7-6.1 29.2-4.4 6.6-7.2 35.3-6.2 29.8-1.3 4.6 3.9 34.3-5.6 29.5-7.7 6.9-.5 22.9-1.9 31 1.7 1.2-1.1 10.6 1.2 18.5 3.8 7.9-2.6 17.3-4.9 18.5-3.8 8.1-3.6 24.1-2.2 31-1.7-4.8 2.1 24.9 11.6 29.5 7.7-5.5-4.9 23.2-5.9 29.8 1.3 4.5-1.7 40.8 3.6 29.2 4.4-2.1 1.3 31.9 4.5 30.1 1.5-2.5-.5 27.6-3.7 27.6.3 0-3.6 27.3-.1 27.3 3.3s28.1-12 28.1-4.1c0-6.9 28.1-14.3 28.1-4.7 0-2.2 26.3 8.3 26.3 12.9s27.6 15.8 27.6.3c0-.2 28.3-3.5 28.3-6.7 0 1 28 2 28-2.5 0-6.3 28.6 4.7 28.6 6.3 0-6.3 29.7 4.5 29.7-3.3 0 5 28.6 19.5 28.6 8.1 0-.8 30.1-15.3 30.1-10.5 0 7.5 28.8 8.6 28.8 10.1 0-12.4 29.4-4.2 29.4-5.7s29.3 5 29.3 3.8 28.9-3.5 28.9-5.4c0 3.3 29.8 6.1 29.8 4.5s30.3 9.5 30.3 3.6c0-.8 29.7 3.1 29.7-1.1s28.1-7 28.1-4.1 23.9-14 23.9-15.4c0-8.6 32.6 9.6 32.6 9.6 0-5.4 28.8 1.2 28.8-.7 0 .8 25.2-10 25.2-11.1s27.5 4.6 27.5-5.1c0-2.5 28.6-3.9 28.6-2.2 0-5.4 30.3 6.3 30.3 8.1 0-2.9 27.6-1.6 27.6-8.7 0 .5 28.6-.9 28.6 5.3 0-.2 28-3.2 28 1.2 0-2.4 29.7-6.4 29.7-2.9 0-9.5 32-6.1 32 4.2 0-5.7 34.2 2 34.2-.7 0 3.5 29.1 7.1 29.1 9.1 0-2 26 8.7 26 10.2 0-13.5 29.1-1.7 29.1-4.9s28 5.4 28-.2c0-7.8 28.9 5 28.9 4.4 0-3 25.3-13.3 25.3-13.8s28.6 6.8 28.6 2.3c0 2.4 26.7-5.7 26.7-5 0-2.7 27.4-7.2 27.4-2.6s27.1-5.6 27.1 2.9c0 2.7 27.6-2.3 27.6 1.3 0-2.5 25.4-13.7 25.4-5.1 0 3.9 13.4-6 13.4-16.4 0 1.6 30.4 3.8 30.4 2.2 0 .7 27.4-.4 27.4.7s29.2-16.3 29.2-12.4c0-1.7 28.3.4 28.3 6 0-2.7 29.5 1.1 29.5 1.1 0-5.1 23.9 9.1 23.9 11.1 0 4.5 25.3 10.4 25.3 8.4 0-9.9 30.3-7.2 30.3-3.9 0 5.2 27.8 10.1 27.8 1.8 0-.7 28.5 3.4 28.5-1.8s26.8.7 26.8 7.8c0 1.8 28.7-5.2 28.7-6.2s27.8 13.6 27.8 2c0 12.2 27.9 5.9 27.9 1.1s33.4 5.1 28.4 8.1c6.3-3.3 22.5.7 27.9 2.1-1.4 5.9 20.3-1 28-5.3 4.4 4.4 25.9-7.5 28-1.4 12.5-.9 32.5 7 26.7 1.2 25.9-2.6 38-5.9 25.9-9 3.6-1.6 28.4 5.1 28.2 7.1 3.4-2.6 18.4-16.7 24.1-10.5 4.1-.9 19.2 2.8 25.4 5 8.3.4 25.8 1.4 28.8-1.6-13-4.8 7.4-2.7 26.2-2.8 1.4-2.1 6.4-3.9 11.8-5.4V250z"></path>
      </svg>
    </section>
  );
};
export default BlogsSection;
