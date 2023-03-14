/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");
import { faker } from '@faker-js/faker';

describe ("Registration tests with locators", () => {

    const userData = {
        randomPassword: faker.internet.password(8, true) +1,
        randomFirstName: faker.name.firstName("female"),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        shortPassword: faker.internet.password(2),
        randomEmailWithoutMonkey: faker.internet.email().replace("@", "")

    }

    beforeEach("visit gallery app and click on the register link", () => {
        cy.visit("/");
        cy.get(locators.commonFormElements.navbarLink).eq(2).click();
    })

    it("Try to regiter with incorrect password", () => {
      cy.get(locators.registerPage.firstName).type("Petar");
      cy.get(locators.registerPage.lastName).type("Petrovic");
      cy.get(locators.commonFormElements.emailInput).type("testcy@test.com");
      cy.get(locators.commonFormElements.passwordInput).type("testpass");
      cy.get(locators.registerPage.passwordConfirmedInput).type("testpass");
      cy.get(locators.registerPage.tcCheckbox).check();
      cy.get(locators.commonFormElements.submitButton).click();
      cy.url().should("contain", "/register");
    })

    it("Try to regiter without password", () => {
      cy.get(locators.registerPage.firstName).type("Petar");
      cy.get(locators.registerPage.lastName).type("Petrovic");
      cy.get(locators.commonFormElements.emailInput).type("testcy@test.com");
      cy.get(locators.registerPage.tcCheckbox).check();
      cy.get(locators.commonFormElements.submitButton).click();
      cy.url().should("contain", "/register");
    })

    it.only("Register with valid credentials", () => {

      cy.get(locators.registerPage.firstName).type(userData.randomFirstName);
      cy.get(locators.registerPage.lastName).type(userData.randomLastName);
      cy.get(locators.commonFormElements.emailInput).type(userData.randomEmail);
      cy.get(locators.commonFormElements.passwordInput).type(userData.randomPassword);
      cy.get(locators.registerPage.passwordConfirmedInput).type(userData.randomPassword);
      cy.get(locators.registerPage.tcCheckbox).check();
      cy.get(locators.commonFormElements.submitButton).click();
      cy.url().should("not.contain", "/register");
    })

  })