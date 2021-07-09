import React, { useState } from "react";
import Navbar from "./01_navigation/Navbar";
import Sidebar from "./01_navigation/Sidebar";
import Launch from "./Launch";
import { CSSTransition } from "react-transition-group";
import { navDelay } from "@utils";

const Layout = ({ children }) => {
  const isIndexPage = true; // TODO ==> Change, compare to location pathname or slug!
  const [isLaunching, setIsLaunching] = useState(isIndexPage);

  const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false);

  const toggleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  return (
    <>
      {isIndexPage && isLaunching ? (
        <Launch finishLaunching={() => setIsLaunching(false)}/>
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
              sideBarIsOpen={sideBarIsOpen}
            />
          </CSSTransition>
          <Sidebar
            toggleSideBar={toggleSideBar}
            sideBarIsOpen={sideBarIsOpen}
          />
          {children}
        </>
      )}
    </>
  );
};

export default Layout;
