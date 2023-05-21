require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // In your gatsby-config.js
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    title: "Samuel IT",
    description:
      "Samuel is a software engineer who specializes in solving real world IT problems.",
    siteUrl: "https://www.sblm.me",
    author: "@sblm",
    image: "/og2.png",
    twitterUsername: "@smlblm",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-loadable-components-ssr",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {

      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        // queryLimit: 1000, // Defaults to 100
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
    {
      resolve: `@spencerwhyte/gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-ET703HRR3G", // leave empty if you want to disable the tracker
          cookieName: "sb-ggl-anlytcs-ecuosp", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
          cookieFlags: "samesite=none;secure",
        },
        // googleTagManager: {
        //   trackingId: "GTM-57K3LVT", // leave empty if you want to disable the tracker
        //   cookieName: "sb-google-tagmanager", // default
        //   dataLayerName: "dataLayer", // default
        // },
        // facebookPixel: {
        //   pixelId: "YOUR_FACEBOOK_PIXEL_ID", // leave empty if you want to disable the tracker
        //   cookieName: "sb-facebook-pixel", // default
        // },
        // tikTokPixel: {
        //   pixelId: "YOUR_TIKTOK_PIXEL_ID", // leave empty if you want to disable the tracker
        //   cookieName: "sb-tiktok-pixel", // default
        // },
        // hotjar: {
        //   hjid: "YOUR_HOTJAR_ID",
        //   hjsv: "YOUR_HOTJAR_SNIPPET_VERSION",
        //   cookieName: "sb-hotjar", // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Samuel B`,
        short_name: `SBLM`,
        start_url: `/`,
        background_color: `#b5aba6`,
        theme_color: `#3d8b68`,
        display: `standalone`,
        icon: `src/assets/images/icons/fav.png`,
      },
    },
    // `gatsby-plugin-offline`, // this must be placed AFTER gatsby-plugin-manifest!!!
  ],
};
