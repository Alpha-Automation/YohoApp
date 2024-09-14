const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,  // Set the width of the viewport
    viewportHeight: 720,  // Set the height of the viewport
    setupNodeEvents(on, config) {
      //
    },
    baseUrl: 'https://staging.joinyoho.com/',
    users: {
      user1: {
        username: "testuser123@yopmail.com",
        password: "Boring321"
      },
      user2: {
        username: "test@yopmail.com",
        password: "Boring321"
      }
    },
    chromeWebSecurity: false,
    pageLoadTimeout: 6000,
    defaultCommandTimeout: 6000,
    experimentalMemoryManagement: true,
    experimentalStudio: true,
    retries: {
      runMode: 0,
      openMode: 0
    },
  },
});
