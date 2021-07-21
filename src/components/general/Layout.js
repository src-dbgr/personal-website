import React, { useEffect, useContext } from "react";
import Navbar from "../02_navigation/Navbar";
import Topbar from "../02_navigation/Topbar";
import loadable from "@loadable/component";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";
const Launch = loadable(() => import("../01_launch/Launch"));

const Layout = ({ children }) => {
  const isIndexPage = true; // TODO ==> Change, compare to location pathname or slug!

  const theme = useContext(GlobalStateContext).theme;

  useEffect(() => {
    if (document.body.classList.contains("dark-theme")) {
      if (theme === "light") {
        toggleDarkTheme();
      }
    } else {
      if (theme === "dark") {
        toggleDarkTheme();
      }
    }
    return () => {};
  }, [theme]);

  function toggleDarkTheme() {
    document.body.classList.toggle("dark-theme");
    document.documentElement.classList.toggle("htmlScrollbarDarkMode");
  }

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
          <Navbar />
          <Topbar />
          {children}
        </>
      )}
    </>
  );
};

export default Layout;
