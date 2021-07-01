import React from "react";

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    // <script key="1" src={"js/gsap.min.js"} type="text/javascript" async />,
    // <script
    //   key="2"
    //   src={"js/morphsvg.js"}
    //   type="text/javascript"
    //   async
    // />,
    // <script
    //   key="3"
    //   src={"js/menu_toggle.js"}
    //   type="text/javascript"
    //   async
    // />
  ]);
};
