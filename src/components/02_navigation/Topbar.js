import { GlobalDispatchContext } from "../../context/GlobalContextProvider";
import React, { useContext } from "react";
import PageLinks from "../../data/constants/Links";

const Topbar = (props) => {
  const dispatch = useContext(GlobalDispatchContext);
  return (
    <aside
      className={`topbar ${props.topBarIsOpen ? "show-topbar" : ""}`}
      onClick={() => {
        props.toggleTopBar();
        dispatch({ type: "NAV_TOGGLE_LOGO" });
      }}
    >
      <div className="top-container">
        <PageLinks
          styleClass="topbar-links"
          darkTheme={props.darkTheme}
          toggleDarkTheme={props.toggleDarkTheme}
        />
      </div>
    </aside>
  );
};

export default Topbar;
