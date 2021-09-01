import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { Link } from "gatsby";

const data = [
  {
    id: 1,
    icon: <FaGithubAlt className="social-icon"></FaGithubAlt>,
    url: "https://www.github.com/src-dbgr",
  },
  {
    id: 2,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com",
  },
  {
    id: 3,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://www.twitter.com/smlblm",
  },
  {
    id: 4,
    icon: <IoIosPaperPlane className="social-icon"></IoIosPaperPlane>,
    url: "https://www.twitter.com",
  },
];
const links = data.map((link) => {
  if (link.id === 4) {
    return (
      <li key={link.id}>
        <Link className="social-link" to="/contact">
          {link.icon}
        </Link>
      </li>
    );
  } else {
    return (
      <li key={link.id}>
        <a href={link.url} className="social-link">
          {link.icon}
        </a>
      </li>
    );
  }
});

const socialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};

export default socialLinks;
