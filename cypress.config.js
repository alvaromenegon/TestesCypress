const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 120000,
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "https://www.saucedemo.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
