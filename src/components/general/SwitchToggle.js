import React from "react";
import CookieInfo from "./CookieInfo";

const SwitchToggle = ({
  id,
  toggleHandler,
  checkBoxState,
  title,
  selectable,
  description,
  category,
  vendor,
  type,
  expiration,
}) => {
  return (
    <div className="switch-content-wrapper">
      {selectable ? (
        <>
          <label className="switch">
            <input
              className="analytics-checkbox"
              type="checkbox"
              onClick={toggleHandler}
            />
            <span
              className={`${checkBoxState ? "slider sliderChecked" : "slider"}`}
            >
              <span
                className={`${
                  checkBoxState
                    ? "enabled-text-variable enableText"
                    : "enabled-text-variable"
                }`}
              >
                enabled
              </span>
              <span
                className={`${
                  checkBoxState
                    ? "disabled-text-variable disableText"
                    : "disabled-text-variable"
                }`}
              >
                disabled
              </span>
            </span>
          </label>
        </>
      ) : (
        <>
          <label className="switch-enabled" value="on">
            <input type="checkbox" />
            <span className="slider-enabled">
              <span className="enabled-text-required">required</span>
            </span>
          </label>
        </>
      )}
      <div className="switch-title">{title}</div>
      <CookieInfo
        key={id}
        title={title}
        vendor={vendor}
        category={category}
        description={description}
        type={type}
        expiration={expiration}
      />
    </div>
  );
};

export default SwitchToggle;
