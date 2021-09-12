module.exports = {
  // In your gatsby-config.js
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: `https://www.example.com`,
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
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-ET703HRR3G", // leave empty if you want to disable the tracker
          cookieName: "sb-ggl-anlytcs-ecuosp", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
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
  ],
};
