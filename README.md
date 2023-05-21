# Personal web app

This project hosts the code base for my personal web application developed in Gatsby.js

Note:
- Text content is administered separately from this application via Strapi API
  - [strapi plugin](https://www.gatsbyjs.com/plugins/gatsby-source-strapi/)
  - Data access is performed via GraphiQL

## Local Development

### Installation & Set Up

0. Make sure you have Node installed
   - I developed this app with 
     - Node v14.17.0
     -  NPM 6.14.13

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Remove the following block from gatsby-config.js - otherwise, it will fail to run since it is looking for the data resources, consider replacing it with your custom data if you want to use this codebase

   ```sh
   {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          `job`,
          `project`,
          `blog`,
          `cookie`,
          `station`,
          `stationctgry`,
          `techstack`,
        ],
        singleTypes: [`about`],
      },
    },
   ```

3. Local development with ``

   ```sh
   gatsby develop
   ```

- if gatsby is not recognized, check the following: [github](https://github.com/nodejs/node/issues/29287#issuecomment-524859390)
- using npx is suboptimal since it will not make the Gatsby CLI globally available see [Using npx to install Gatsby](https://www.gatsbyjs.com/docs/glossary/npm/#using-npx-to-install-gatsby)

## Adding custom javascript to gatsby

- create a js file named `gatsby-ssr.js` in **root** folder, NOT src!
- add tag lines you want to include. See the example below.
- the custom .js files you want to add at the bottom of your project need to be placed into a folder named **static**. This folder also needs to be created in the root directory of your project. You may create whatever sub-folder structure within this **static** folder you like. What happens is, the final rendered gatsby project takes the content inside the **static** folder and passes it into the **public** folder of your gatsby project. **NOTE:** when referencing your custom .js files as a source in a script tag in the **gatsby-ssr.js** file, you do not need to type **static/<your .js file>**. You need to provide the path of the files within the static folder without typing static explicitly.
- With the application of this configuration, the .js files are treated as props, more specifically as "postBodyComponents" props. You can find more information about this topic in the official documentation [Gatsby Server Rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody)
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

- You can see exactly where the files will be placed by opening the file _.cache/default-html.js_ in line #23 you see "{props.postBodyComponents}" this is the place gatsby renders the files into. Of course, only if you apply the changes to this specific prop.
  - Default template of **html.js**:

- Utilization of `html.js` in this project for setting theme dependend background color in html tag
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

- You can even perform changes to the ".cache/default-html.js" file. To do this you need to complete the following steps:
  - Make a copy of the file ".cache/default-html.js"
  - Paste the copy into your _src_ folder and **rename** the file to **html.js**
  - apply whatever changes you want to the file, but note that gatsby places this entire content simply into the body of the final rendered index.html file, so javascript script files will be placed outside of the **body** tags. This may lead to weird effects such as code not running correctly, or event handler cannot be assigned, simply because the dom tree is not yet fully built, but javascript tries to access certain elements. So be cautious here and research how this can be avoided.

## Global State

- adopted implementation recommendation from [Gatsby.js Global State with React Context and useReducer Hooks](https://youtu.be/ThCfN5WJ0cU)

## Page transition

- adopted implementation recommendation from [Gatsby Transition with Gatsby + Framer Motion](https://janessagarrow.com/blog/gatsby-framer-motion-page-transitions/)

## REACT Markdown
- Added [REACT Markdown](https://github.com/remarkjs/react-markdown) for dynamic page rendering.
- Markdown [Documentation Reference](https://commonmark.org/help/)
- Markdown [Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- Markdown [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
- Markdown [Extended Syntax](https://www.markdownguide.org/extended-syntax/)
- Markdown [Online Tool Collection](https://www.markdownguide.org/tools/)

### Strapi Populate All:  
- `npm install strapi-plugin-populate-deep`

### Check for Dependency updates
- `npm i -g npm-check-updates`

### Setting a Tag
- `git tag -a v1.2 9fceb02 -m "Message here"`

Push the tag change to the remote repository

- `git push origin v1.2`

Delete a git tag locally

- `git tag -d <tag name>`

Delete a git tag remotely

- `git push --delete origin <tag name>`

Change Node Version
- [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

```
npm install 18.16.0
nvm use 18.16.0
node -v
```