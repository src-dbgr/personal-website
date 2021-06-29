import React from "react";
import triangle from "../../assets/images/navigation/triangle_clr.svg";
import circle from "../../assets/images/navigation/toggle_menu_alt.svg";
import PageLinks from "../../data/constants/links";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={triangle} alt="logo" />
          <button type="button" className="toggle-btn">
            <img src={circle} alt="logo" />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
