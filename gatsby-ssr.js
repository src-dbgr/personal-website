import React from "react";
import GlobalContextProvider from "./src/context/GlobalContextProvider";
import { AnimatePresence } from "framer-motion";

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
