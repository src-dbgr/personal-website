import React from "react";
import Links from "../../data/constants/Links";

const Topbar = (props) => {
  return (
    <aside className={`topbar ${props.topBarIsOpen ? "show-topbar" : ""}`} onClick={props.toggleTopBar}>
      <div className="top-container">
        <Links
          styleClass="topbar-links"
          darkTheme={props.darkTheme}
          toggleDarkTheme={props.toggleDarkTheme}
        />
      </div>
    </aside>
  );
};

export default Topbar;
