const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Automation Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      reportFilename: 'Automation Report',
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    includeShadowDom: true,

    numTestsKeptInMemory: 0,
    watchForFilesChanges: false,
    chromeWebSecurity: false,
    viewportWidth: 1920, // default user settings
    viewportHeight: 1080, // default user settings
    waitForAnimation: true,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    video: true,
    videoCompression: false,
    videoUploadOnPasses: true,
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
    overwrite: true,
    failOnStatusCode: false,
    testIsolation: false,
    bail: false,
    watchForFileChanges: false,
    grepFilterSpecs: true,
    grepOmitFiltered: true
  },
});
