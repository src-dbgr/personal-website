import { GlobalDispatchContext,  GlobalStateContext } from "../../context/GlobalContextProvider";
import React, { useContext } from "react";
import PageLinks from "../../data/constants/Links";

const Topbar = (props) => {
  const dispatch = useContext(GlobalDispatchContext);
  const navopen = useContext(GlobalStateContext).navopen;
  return (
    <aside
      className={`topbar ${navopen ? "show-topbar" : ""}`}
      onClick={() => {
        dispatch({ type: "NAV_TOGGLE_LOGO" });
      }}
      onKeyDown={() => {
        dispatch({ type: "NAV_TOGGLE_LOGO" });
      }}
      role="presentation"
    >
      <div className="top-container">
        <PageLinks styleClass="topbar-links" />
      </div>
    </aside>
  );
};

export default Topbar;
