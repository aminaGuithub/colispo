const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true,
    reportFilename: '[status]_[datetime]-report',
    timestamp: 'shortDate',
    charts: true,
    reportPageTitle: 'Colispo Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  
  'cypress-cucumber-preprocessor': {

    nonGlobalStepDefinitions: false,

    step_definitions: './cypress/e2e/stepDefs/',

  },

  e2e: {

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on)
      return on('file:preprocessor', cucumber())
      return config;
    },

    specPattern: 'cypress/e2e/**/*.feature',

    supportFile:false

  },

})