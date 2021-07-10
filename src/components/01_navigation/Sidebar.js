import React from "react";
import Links from "../../data/constants/Links";

const Sidebar = (props) => {
  return (
    <aside className={`sidebar ${props.sideBarIsOpen ? "show-sidebar" : ""}`}>
      <div className="side-container">
        <Links styleClass="sidebar-links"/>
      </div>
    </aside>
  );
};

export default Sidebar;
