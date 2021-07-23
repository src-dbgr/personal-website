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
        collectionTypes: [`job`, `project`, `blog`],
      },
    },
{
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID', // leave empty if you want to disable the tracker
          cookieName: 'sb-google-analytics-ecuosp', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
      },
    },
    // enable if neccessary 
    // {
    //   resolve: `gatsby-plugin-osano`,
    //   options: {
    //     customerId: '4E7BSdzBNik66VN',
    //     ccid: 'c66d08c0-a736-4292-9eae-bf8b6e68a601',
    //     includeInDevelopment: true,
    //   },
    // },
  ],
};
