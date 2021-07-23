import React, { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "../02_navigation/Navbar";
import Topbar from "../02_navigation/Topbar";
import Launch from "../01_launch/Launch";
import CookieConsent from "./CookieConsent";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";

const Layout = ({ children }) => {
  const isIndexPage = true; // TODO ==> Change, compare to location pathname or slug!

  const theme = useContext(GlobalStateContext).theme;

  useEffect(() => {
    try {
      if (document.body.classList.contains("dark-theme")) {
        if (theme === "light") {
          toggleDarkTheme();
        }
      } else {
        if (theme === "dark") {
          toggleDarkTheme();
        }
      }
    } catch (err) {
      console.log("issue occured assigning theme");
      console.error(err);
    }
    return () => {};
  }, [theme]);

  function toggleDarkTheme() {
    document.body.classList.toggle("dark-theme");
    document.documentElement.classList.toggle("htmlScrollbarDarkMode");
  }

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  function navigateToHash(isActive) {
    const isBrowser = () => typeof window !== "undefined";
    let hash = isBrowser() && window.location.hash;
    // !!"" === false // empty string is falsy
    // !!"foo" === true  // non-empty string is truthy
    if (!!hash) {
      let id = hash.replace("#", "");
      try {
        let node = document.getElementById(id);
        if (node === null) {
          console.log("Location anchor: " + hash + " could not be found");
        } else if (isActive) {
          node.scrollIntoView();
        }
      } catch (err) {
        console.error(err);
      }
    }
  }

  useEffect(() => {
    let isActive = true;
    // skip if animation has not yet finished
    if (!state.animation) {
      navigateToHash(isActive);
    }
    return () => {
      isActive = false;
    };
  }, [state.animation]);

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
          <motion.main
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3,
            }}
          >
            {children}
          </motion.main>
        </>
      )}
      <CookieConsent />
    </>
  );
};

export default Layout;
