import React, { useState, useEffect } from "react";
import Navbar from "./01_navigation/Navbar";
import Sidebar from "./01_navigation/Sidebar";
import Launch from "./Launch";
import { CSSTransition } from "react-transition-group";
import { navDelay } from "@utils";

const Layout = ({ children }) => {
  const isIndexPage = true; // TODO ==> Change, compare to location pathname or slug!
  const [isLaunching, setIsLaunching] = useState(isIndexPage);
  const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleSideBar = () => {
    console.log("toggle!")
    setSideBarIsOpen(!sideBarIsOpen);
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
              toggleSideBar={toggleSideBar}
              toggleDarkTheme={toggleDarkTheme}
              darkTheme={darkTheme}
              sideBarIsOpen={sideBarIsOpen}
            />
          </CSSTransition>
          <Sidebar
            toggleSideBar={toggleSideBar}
            toggleDarkTheme={toggleDarkTheme}
            sideBarIsOpen={sideBarIsOpen}
            darkTheme={darkTheme}
          />
          {children}
        </>
      )}
    </>
  );
};

export default Layout;
