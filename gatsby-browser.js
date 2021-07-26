import "./src/assets/css/main.css";
import { AnimatePresence } from "framer-motion";
import React from "react";
import GlobalContextProvider from "./src/context/GlobalContextProvider";

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
