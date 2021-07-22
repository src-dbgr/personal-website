# Personal website

- run with `gatsby develop`
- if gatsby is not recognize, check the following: [github](https://github.com/nodejs/node/issues/29287#issuecomment-524859390)
- using npx is suboptimal since it will not make the Gatsby CLI globally available see [Using npx to install Gatsby](https://www.gatsbyjs.com/docs/glossary/npm/#using-npx-to-install-gatsby)

## Adding custom javascript to gatsby

- create a js file named `gatsby-ssr.js` in **root** folder, NOT src!
- add tag lines you want to include, see the example below.
- the custom .js files you want to add at to the bottom of your project need to be placed into folder named **static**, this folder needs also to be created in the root directory of your project. You may create whatever sub-folder structure within this **static** folder as you like. The final rendered gatsby project takes content the **static** folder and passes it into the **public** folder of your gatsby project. **NOTE:** when referencing your custom .js files as a source in a script tag in the **gatsby-ssr.js** file, you do not need to type **static/<your .js file>**, you just need to provide the path the files within the static folder without typing static explicitly.
- By applying this configuration the .js files are treated as props, more specifically as "postBodyComponents" props, you can find more information about this topic in the official documentation [Gatsby Server Rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody)
  - Example of **gatsby-ssr.js**:

```
import React from "react";

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script key="1" src={"js/gsap.min.js"} type="text/javascript" async />,
    <script
      key="2"
      src={"js/morphsvg.js"}
      type="text/javascript"
      async
    />,
    <script
      key="3"
      src={"js/menu_toggle.js"}
      type="text/javascript"
      async
    />
  ]);
};

```

- You can see exactly where the files will be placed by opening the file _.cache/default-html.js_ in line #23 you see "{props.postBodyComponents}" this is the place gatsby renders the files into. Of course only if you apply the changes to this specific prop.
  - Default template of **html.js**:

```
import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
```

- You can even perform changes to the ".cache/default-html.js" file. In order to do this you need to perform the following steps:
  - Make a copy of the file ".cache/default-html.js"
  - Paste the copy into your _src_ folder and **rename** the file to **html.js**
  - apply whatever changes you want to the file, but note that gatsby places this entire content simply into the body of the finally rendered index.html file, so javascript script files will to be placed outside of the **body** tags, this can lead to weird effects such as code not running correctly, or event handler cannot be assigned, simply because the dom tree is not yet fully build but javascript tries to access certain elements. Be cautious here and research how this can be avoided.

## Global State

- adopted implementation recommendation from [Gatsby.js Global State with React Context and useReducer Hooks](https://youtu.be/ThCfN5WJ0cU)

## Page transition

- adopted implementation recommendation from [Gatsby Transition with Gatsby + Framer Motion](https://janessagarrow.com/blog/gatsby-framer-motion-page-transitions/)
