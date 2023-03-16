const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://gallery-app.vivifyideas.com/",
    env: {
      testUserEmail: "test2612@test.com",
      testUserPassword: "test1234",
    },
  },
});
