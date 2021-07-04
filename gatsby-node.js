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
    },
  });
};
