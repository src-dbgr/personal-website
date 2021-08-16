import React from "react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitter,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";

const data = [
  {
    id: 1,
    icon: <FaGithubAlt className="social-icon"></FaGithubAlt>,
    url: "https://www.github.com",
  },
  {
    id: 2,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com",
  },
  {
    id: 3,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <IoIosPaperPlane className="social-icon"></IoIosPaperPlane>,
    url: "https://www.twitter.com",
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};
