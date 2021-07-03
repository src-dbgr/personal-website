import React, { useState} from "react";
import Navbar from "./01_navigation/Navbar";
import Sidebar from "./01_navigation/Sidebar";
import Launch from "./Launch";

const Layout = ({ children }) => {
  const isIndexPage = false; // TODO ==> Change, compare to location pathname or slug!
  const [isLaunching, setIsLaunching] = useState(isIndexPage);

  const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false);

  const toggleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  return (
    <>
      {isIndexPage && isLaunching ? (
        <Launch finishLaunching={() => setIsLaunching(false)} />
      ) : (
        <>
          <Navbar toggleSideBar={toggleSideBar} sideBarIsOpen={sideBarIsOpen} />
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
