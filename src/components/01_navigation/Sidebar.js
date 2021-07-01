import React from "react";
import { FaTimes } from "react-icons/fa"
import Links from "../../data/constants/links";

const Sidebar = (props) => {
  return (
    <aside className={`sidebar ${props.sideBarIsOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={props.toggleSideBar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${props.sideBarIsOpen ? "sidebar-links" : ""} `} />
      </div>
    </aside>
  );
};

export default Sidebar;
