const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Update to your app's URL if needed
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
