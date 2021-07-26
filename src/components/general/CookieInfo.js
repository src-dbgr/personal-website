import React, { useState } from "react";

const CookieInfo = ({
  title,
  description,
  category,
  vendor,
  type,
  expiration,
}) => {
  const [openInfo, setOpenInfo] = useState(false);

  function toggleInfo() {
    setOpenInfo((openInfo) => !openInfo);
    if (openInfo) {
      enableScrolling();
    } else {
      disableScrolling();
    }
  }

  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
    document.documentElement.style.overflow = "hidden";
  }

  function enableScrolling() {
    window.onscroll = null;
    document.documentElement.style.overflow = "visible";
  }

  return (
    <>
      <button className="btn" onClick={toggleInfo}>
        INFO
      </button>
      {openInfo && (
        <div className="cookie-info-parent">
          <div className="cookie-info-child">
            <div className="cookie-info-box">
              <h3>{title}</h3>
              <h4>Vendor: {vendor}</h4>
              <h4>Category: {category}</h4>
              <h4>Type: {type}</h4>
              <h4>Expiration: {expiration}</h4>
              <p>{description}</p>
            </div>
            <button className="btn cookie-info-box-btn" onClick={toggleInfo}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieInfo;
