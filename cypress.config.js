// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://example.cypress.io',
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const env = process.env.ENV || 'dev'; // Default to 'dev'
      const configFilePath = `./cypress/config/${env}.json`;

      if (fs.existsSync(configFilePath)) {
        const fileConfig = require(configFilePath);
        return { ...config, ...fileConfig };
      }

      console.warn(`⚠️ Config file not found: ${configFilePath}`);
      return config;
    },
  },
});
