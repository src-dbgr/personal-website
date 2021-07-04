import React from "react";
import { Link } from "gatsby";
import { CSSTransition } from "react-transition-group";
import { navDelay } from "@utils";
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  );
});

const links = function ({ styleClass }) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={navDelay}
      classNames="fadedown"
    >
      <ul className={`page-links ${styleClass ? styleClass : ""}`}>
        {tempLinks}
      </ul>
    </CSSTransition>
  );
};

export default links;
