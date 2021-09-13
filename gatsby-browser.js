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

export const onClientEntry = () => {
  if (!!window.MSCompatibleInfo) {
    window.location.replace("/ie-err.html");
  }
  console.log(
    "\n\nWelcome to:%c\n               /\\\\\\         /\\\\\\\\\\\\                                                                 \n               \\/\\\\\\        \\////\\\\\\                                                                 \n                \\/\\\\\\           \\/\\\\\\                                                                 \n     /\\\\\\\\\\\\\\\\\\\\ \\/\\\\\\           \\/\\\\\\       /\\\\\\\\\\  /\\\\\\\\\\            /\\\\\\\\\\  /\\\\\\\\\\       /\\\\\\\\\\\\\\\\  \n     \\/\\\\\\//////  \\/\\\\\\\\\\\\\\\\\\     \\/\\\\\\     /\\\\\\///\\\\\\\\\\///\\\\\\        /\\\\\\///\\\\\\\\\\///\\\\\\   /\\\\\\/////\\\\\\ \n      \\/\\\\\\\\\\\\\\\\\\\\ \\/\\\\\\////\\\\\\    \\/\\\\\\    \\/\\\\\\ \\//\\\\\\  \\/\\\\\\       \\/\\\\\\ \\//\\\\\\  \\/\\\\\\  /\\\\\\\\\\\\\\\\\\\\\\  \n       \\////////\\\\\\ \\/\\\\\\  \\/\\\\\\    \\/\\\\\\    \\/\\\\\\  \\/\\\\\\  \\/\\\\\\       \\/\\\\\\  \\/\\\\\\  \\/\\\\\\ \\//\\\\///////   \n         /\\\\\\\\\\\\\\\\\\\\ \\/\\\\\\\\\\\\\\\\\\   /\\\\\\\\\\\\\\\\\\ \\/\\\\\\  \\/\\\\\\  \\/\\\\\\  /\\\\\\ \\/\\\\\\  \\/\\\\\\  \\/\\\\\\  \\//\\\\\\\\\\\\\\\\\\\\ \n         \\//////////  \\/////////   \\/////////  \\///   \\///   \\///  \\///  \\///   \\///   \\///    \\//////////  \n\n",
    "color: #3d8b68;"
  );
};
