import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import FadeInSection from "../../hooks/FadeInSection";
const Blog = ({ id, title, desc, slug, date, category, image }) => {
  return (
    <FadeInSection>
      <Link to={`/blog/${slug}`} className="blog shadow-box-dark" key={id}>
        <article className="blog-img-parent">
          <div className="rounded-img-child">
              <img className="blog-img"
                src={image.url}
                alt={title}
              />
          </div>
          <div className="blog-card">
            <h4>{title}</h4>
            <p className="blog-description">{desc}</p>
            <div className="blog-footer-parent">
              <div className="blog-footer">
                <p>{category}</p>
                <p>{date}</p>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </FadeInSection>
  );
};

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

export default Blog;
