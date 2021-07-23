import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";
import { Link } from "gatsby";

function isBrowser() {
  return typeof window !== "undefined";
}

function getValue(key, defaultValue) {
  return isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : defaultValue;
}

function setValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function useStickyState(defaultValue, key) {
  const [value, setter] = useState(() => {
    return getValue(key, defaultValue);
  });

  useEffect(() => {
    setValue(key, value);
  }, [key, value]);

  return [value, setter];
}

const CookieConsent = () => {
  const location = useLocation();
  if (isBrowser()) {
    initializeAndTrack(location);
  }

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    "CONSENTRXCSQECJWXXK"
  );

  const EnableAnalytics = () => {
    let checkbox = false;
    try {
      checkbox = document.getElementById("analytics-checkbox").checked;
    } catch (err) {
      console.log("issue resolving consent checkbox status");
    }
    console.log("checkbox status: " + checkbox);
    if (checkbox) {
      //   document.cookie = "sb-google-analytics-ecuosp=true";
      setCookie("sb-google-analytics-ecuosp", true, 30);
    }
    setBannerHidden(true);
  };

  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }

  return (
    <>
      {!bannerHidden && (
        <div className="cookie-consent">
          <div className="cookie-text">
            <span>
              This website uses cookies and other tracking technologies. Google
              Analytics is active only if "Statistics" is set "enabled". If
              "Statistics" remains disabled no tracking is in place. Google
              Analytics helps to analyze this website's traffic, and to
              understand where visitors are coming from. Your Identity remains
              anonymous.
              <Link className="link" to="/privacy">
                Learn more
              </Link>
            </span>
          </div>
          <div className="cookie-interactives">
            <div className="cookie-allow-analytics-toggle">
              <span>Technically required</span>
              <label className="switch-enabled" value="on">
                <input type="checkbox" />
                <span className="slider-enabled">
                  <span className="enabled-text-required">required</span>
                </span>
              </label>
              <span>Statistics</span>
              <label className="switch">
                <input id="analytics-checkbox" type="checkbox" />
                <span className="slider">
                  <span className="enabled-text-variable">enabled</span>
                  <span className="disabled-text-variable">disabled</span>
                </span>
              </label>
            </div>
            <div className="cookie-buttons">
              <button className="btn" onClick={EnableAnalytics}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
