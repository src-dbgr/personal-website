import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";
import { Link } from "gatsby";
import SwitchToggle from "./SwitchToggle";
import cookiedata from "../../data/cookies/cookiedata";

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
  // cookie name definitions in file gatsby-config.js
  const cookieNames = useRef({
    gglanalytics: "sb-ggl-anlytcs-ecuosp",
    ggltagmgr: "sb-google-tagmanager",
    fbpixel: "sb-facebook-pixel",
    tiktokpixel: "sb-tiktok-pixel",
    hotjar: "sb-hotjarCheckboxState",
  });
  const onMount = useRef(false);
  const [toggleAllState, setToggleAllState] = useState(true);
  const [customize, setCustomize] = useState(false);
  const [gglAnalyticsCheckboxState, setGglAnalyticsCheckboxState] =
    useState(true);
  const [gglTagmgrCheckboxState, setGglTagmgrCheckboxState] = useState(true);
  const [fbPixelCheckboxState, setFbCheckboxPixelState] = useState(true);
  const [tiktokPixelCheckboxState, setTiktokCheckboxPixelState] =
    useState(true);
  const [hotjarCheckboxState, setHotjarCheckboxState] = useState(true);

  const toggleGglAnalytics = () => {
    setGglAnalyticsCheckboxState(
      (gglAnalyticsCheckboxState) => !gglAnalyticsCheckboxState
    );
  };
  const toggleGglTagMgr = () => {
    setGglTagmgrCheckboxState(
      (gglTagmgrCheckboxState) => !gglTagmgrCheckboxState
    );
  };
  const toggleFbPixel = () => {
    setFbCheckboxPixelState((fbPixelCheckboxState) => !fbPixelCheckboxState);
  };
  const toggleTiktokPixel = () => {
    setTiktokCheckboxPixelState(
      (tiktokPixelCheckboxState) => !tiktokPixelCheckboxState
    );
  };
  const toggleHotjar = () => {
    setHotjarCheckboxState((hotjarCheckboxState) => !hotjarCheckboxState);
  };

  const setAll = (val) => {
    setGglAnalyticsCheckboxState((gglAnalyticsCheckboxState) => val);
    setGglTagmgrCheckboxState((gglTagmgrCheckboxState) => val);
    setFbCheckboxPixelState((fbPixelCheckboxState) => val);
    setTiktokCheckboxPixelState((tiktokPixelCheckboxState) => val);
    setHotjarCheckboxState((hotjarCheckboxState) => val);
  };

  useEffect(() => {
    let active = true;
    if (!onMount.current) {
      onMount.current = true;
    } else {
      if (active) {
        setAll(toggleAllState);
      }
    }
    return () => {
      active = false;
    };
  }, [toggleAllState]);

  const toggleAll = () => {
    setToggleAllState((toggleAllState) => !toggleAllState);
  };

  const toggleCustomization = () => {
    setCustomize((customize) => !customize);
  };

  const EnableAnalytics = () => {
    if (gglAnalyticsCheckboxState) {
      setCookie(cookieNames.current.gglanalytics, true, 365);
    }
    if (gglTagmgrCheckboxState) {
      setCookie(cookieNames.current.ggltagmgr, true, 365);
    }
    if (fbPixelCheckboxState) {
      setCookie(cookieNames.current.fbpixel, true, 365);
    }
    if (tiktokPixelCheckboxState) {
      setCookie(cookieNames.current.tiktokpixel, true, 365);
    }
    if (hotjarCheckboxState) {
      setCookie(cookieNames.current.hotjar, true, 365);
    }
    setBannerHidden(true);
  };

  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }

  function isCookieInPlace(cName) {
    let containsCookie = false;
    try {
      document.cookie.split(";").forEach((element) => {
        if (element.includes(cName)) {
          containsCookie = true;
          return;
        }
      });
    } catch (err) {
      console.log("issue checking whether cookie is in place");
      console.error(err);
    }
    return containsCookie;
  }

  function removeCookie(cName) {
    if (isCookieInPlace(cName)) {
      document.cookie = cName + "=false;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  function removeAllCookies() {
    Object.values(cookieNames.current).forEach((cookie) =>
      removeCookie(cookie)
    );
  }

  const DeclineAnalytics = () => {
    try {
      removeAllCookies();
    } catch (err) {
      console.log("could not invalidate cookie");
    }
    setBannerHidden(true);
  };

  // index of array entries must map with id's of 'cookiedat.js' entries
  const toggleHandler = [
    null,
    toggleGglAnalytics,
    toggleGglTagMgr,
    toggleFbPixel,
    toggleTiktokPixel,
    toggleHotjar,
    toggleAll,
  ];
  // index of array entries must map with id's of 'cookiedat.js' entries
  const checkBoxState = [
    null,
    gglAnalyticsCheckboxState,
    gglTagmgrCheckboxState,
    fbPixelCheckboxState,
    tiktokPixelCheckboxState,
    hotjarCheckboxState,
    toggleAllState,
  ];

  return (
    <>
      {!bannerHidden && (
        <>
          <div
            className={`${
              customize ? "cookie-consent no-opacity" : "cookie-consent"
            }`}
          >
            {customize ? (
              <div className="customizeCookies">
                <div className="cookie-allow-analytics-toggle">
                  {cookiedata.map((cookie) => {
                    const {
                      id,
                      vendor,
                      category,
                      selectable,
                      title,
                      description,
                      expiration,
                      type,
                    } = cookie;
                    return (
                      <SwitchToggle
                        key={id}
                        toggleHandler={toggleHandler[id]}
                        checkBoxState={checkBoxState[id]}
                        vendor={vendor}
                        category={category}
                        title={title}
                        selectable={selectable}
                        description={description}
                        type={type}
                        expiration={expiration}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="cookie-text">
                <span>
                  This website uses cookies and other tracking technologies.
                  Google Analytics is active only if "Statistics" is set
                  "enabled". If "Statistics" remains disabled no tracking is in
                  place. Google Analytics helps to analyze this website's
                  traffic, and to understand where visitors are coming from.
                  Your Identity remains anonymous.
                  <Link className="link" to="/privacy">
                    Learn more
                  </Link>
                </span>
              </div>
            )}
            <div className="cookie-interactives">
              <div
                className={`${
                  customize ? "cookie-buttons row" : "cookie-buttons"
                }`}
              >
                <button className={"btn"} onClick={EnableAnalytics}>
                  OK
                </button>
                {!customize && (
                  <button className="btn" onClick={DeclineAnalytics}>
                    Decline
                  </button>
                )}
                <button className={"btn"} onClick={toggleCustomization}>
                  {!customize ? "CUSTOMIZE" : "CLOSE"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* <div className="cookie-interactives">
        <div
          className={`${customize ? "cookie-buttons row" : "cookie-buttons"}`}
        >
          <button className="btn" onClick={DeclineAnalytics}>
            Decline
          </button>
        </div>
      </div> */}
    </>
  );
};

export default CookieConsent;
