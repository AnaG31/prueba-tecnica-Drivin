const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    video: true,
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-password-generation')
          launchOptions.args.push('--disable-save-password-bubble')
        }
        return launchOptions
      })
    },
  },
});
