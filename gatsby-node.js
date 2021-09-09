const path = require("path");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /animejs/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
      fallback: { assert: require.resolve("assert/") },
    },
  });
};

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      blogs: allStrapiBlog {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.blogs.nodes.forEach((blog) => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    });
  });
};
