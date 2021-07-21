import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  theme: "light",
  animation: true,
  navopen: false,
  navlogoscale: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    }
    case "LAUNCH_ANIMATION": {
      return {
        ...state,
        animation: false,
      };
    }
    case "NAV_TOGGLE_LOGO": {
      return {
        ...state,
        navopen: state.navopen ? false : true,
      };
    }
    case "NAV_SCALE_TRIGGER": {
      return {
        ...state,
        navlogoscale: state.navlogoscale ? false : true,
      };
    }
    default:
      throw new Error("Bad Action Type");
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
