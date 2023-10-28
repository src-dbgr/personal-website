import { Link } from "gatsby";
import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImSoundcloud } from "react-icons/im";
import { IoIosPaperPlane } from "react-icons/io";

const data = [
  {
    id: 1,
    icon: <FaGithubAlt className="social-icon"></FaGithubAlt>,
    url: "https://www.github.com/src-dbgr",
    type: "external",
  },
  {
    id: 2,
    icon: <FaXTwitter className="social-icon"></FaXTwitter>,
    url: "https://www.x.com/smlblm",
    type: "external",
  },
  {
    id: 3,
    icon: <IoIosPaperPlane className="social-icon"></IoIosPaperPlane>,
    url: "/contact",
    type: "internal",
  },
  {
    id: 4,
    icon: <ImSoundcloud className="social-icon"></ImSoundcloud>,
    url: "https://soundcloud.com/ivorycone",
    type: "external",
  },
];
const links = data.map((link) => {
  if (link.type === "internal") {
    return (
      <li key={link.id}>
        <Link className="social-link" to={link.url}>
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
