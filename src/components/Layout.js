import React, { useState, useEffect } from "react";
import Navbar from "./01_navigation/Navbar";
import Topbar from "./01_navigation/Topbar";
import Launch from "./Launch";
import { CSSTransition } from "react-transition-group";
import { navDelay } from "@utils";

const Layout = ({ children }) => {
  const isIndexPage = true; // TODO ==> Change, compare to location pathname or slug!
  const [isLaunching, setIsLaunching] = useState(isIndexPage);
  const [topBarIsOpen, setTopBarIsOpen] = React.useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTopBar = () => {
    setTopBarIsOpen(!topBarIsOpen);
  };

  useEffect(() => {
    return () => {
      document.body.classList.toggle("dark-theme");
      document.documentElement.classList.toggle("htmlScrollbarDarkMode");
    };
  }, [darkTheme]);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      {isIndexPage && isLaunching ? (
        <Launch finishLaunching={() => setIsLaunching(false)} />
      ) : (
        <>
          <CSSTransition
            in={true}
            appear={true}
            timeout={navDelay}
            classNames="fade"
          >
            <Navbar
              toggleTopBar={toggleTopBar}
              toggleDarkTheme={toggleDarkTheme}
              darkTheme={darkTheme}
              topBarIsOpen={topBarIsOpen}
            />
          </CSSTransition>
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
