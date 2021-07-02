import React from "react";
import Navbar from "./01_navigation/Navbar";
import Sidebar from "./01_navigation/Sidebar";
import Launch from "./Launch";

const Layout = ({ children }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false);

  const toggleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  return (
    <>
      <Navbar toggleSideBar={toggleSideBar} sideBarIsOpen={sideBarIsOpen} />
      <Sidebar toggleSideBar={toggleSideBar} sideBarIsOpen={sideBarIsOpen} />
      <Launch />
      {children}
    </>
  );
};

export default Layout;
