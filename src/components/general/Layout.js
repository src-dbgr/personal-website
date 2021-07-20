import React, { useState, useEffect, useRef, useContext } from "react";
import Navbar from "../02_navigation/Navbar";
import Topbar from "../02_navigation/Topbar";
import loadable from "@loadable/component";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";
// import { CSSTransition } from "react-transition-group";
const Launch = loadable(() => import("../01_launch/Launch"));

const Layout = ({ children }) => {
  const isIndexPage = true; // TODO ==> Change, compare to location pathname or slug!
  const [topBarIsOpen, setTopBarIsOpen] = React.useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const isFirstRun = useRef(true);
  const toggleTopBar = () => {
    setTopBarIsOpen((topBarIsOpen) => !topBarIsOpen);
  };

  const theme = useContext(GlobalStateContext).theme;

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      document.body.classList.toggle("dark-theme");
      document.documentElement.classList.toggle("htmlScrollbarDarkMode");
    }
    return () => {};
  }, [theme]);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  // disable in production
  // disabling on first render
  // useEffect(() => {
  //   const noop = () => {};
  //   [
  //     "assert",
  //     "clear",
  //     "count",
  //     "debug",
  //     "dir",
  //     "dirxml",
  //     "error",
  //     "exception",
  //     "group",
  //     "groupCollapsed",
  //     "groupEnd",
  //     "info",
  //     "log",
  //     "markTimeline",
  //     "profile",
  //     "profileEnd",
  //     "table",
  //     "time",
  //     "timeEnd",
  //     "timeline",
  //     "timelineEnd",
  //     "timeStamp",
  //     "trace",
  //     "warn",
  //   ].forEach((method) => {
  //     window.console[method] = noop;
  //   });
  // },[]);

  return (
    <>
      {isIndexPage && state.animation ? (
        <Launch
          finishLaunching={() => {
            dispatch({ type: "LAUNCH_ANIMATION" });
          }}
        />
      ) : (
        <>
          <Navbar
            toggleTopBar={toggleTopBar}
            toggleDarkTheme={toggleDarkTheme}
            darkTheme={darkTheme}
            topBarIsOpen={topBarIsOpen}
          />
          <Topbar
            toggleTopBar={toggleTopBar}
            toggleDarkTheme={toggleDarkTheme}
            topBarIsOpen={topBarIsOpen}
            darkTheme={darkTheme}
          />
          {children}
        </>
      )}
    </>
  );
};

export default Layout;
