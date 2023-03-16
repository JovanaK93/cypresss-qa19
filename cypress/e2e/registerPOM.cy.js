/// <refernce types="Cypress" />
import { registerPage } from "../page_objects/registerPage";
import { faker } from "@faker-js/faker";
import { loginPage } from "../page_objects/loginPage";

describe("register tests with POM", () => {
  const userData = {
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(8, true) + 1,
    randomNewPassword: faker.internet.password(8, true) + 1
  };

  beforeEach("visit gallery app and click the register button", () => {
    cy.visit("/");
    registerPage.registerNavbarLink.click();
    cy.url().should("not.include", "/register");
  });

  it("register with already existing email address", () => {
        registerPage.firstNameInput.type(userData.randomFirstName);
        registerPage.lastNameInput.type(userData.randomLastName);
        registerPage.emailInput.type("jovanakolarski@yahoo.com");
        registerPage.passwordInput.type(userData.randomPassword);
        registerPage.passwordConfirmationInput.type(userData.randomPassword);
        registerPage.tcCheckbox.check();
        registerPage.submitButton.click();
        registerPage.errorMessage
        .should("be.visible")
        .and("have.text", "The email has already been taken.")
  });

  it("register with invalid password confirmation", () => {
        registerPage.firstNameInput.type(userData.randomFirstName);
        registerPage.lastNameInput.type(userData.randomLastName);
        registerPage.emailInput.type(userData.randomEmail);
        registerPage.passwordInput.type(userData.randomPassword);
        registerPage.passwordConfirmationInput.type(userData.randomNewPassword);
        registerPage.tcCheckbox.check();
        registerPage.submitButton.click();
        registerPage.errorMessage.should("be.visible");
        registerPage.errorMessage.should("have.text", "The password confirmation does not match.");
  });

  it("register without acception terms and conditions", () => {
    registerPage.firstNameInput.type(userData.randomFirstName);
    registerPage.lastNameInput.type(userData.randomLastName);
    registerPage.emailInput.type(userData.randomEmail);
    registerPage.passwordInput.type(userData.randomPassword);
    registerPage.passwordConfirmationInput.type(userData.randomPassword);
    registerPage.submitButton.click();
    registerPage.errorMessage.should("be.visible");
    registerPage.errorMessage.should("have.text", "The terms and conditions must be accepted.");
  });

  it("register with valid credentials", () => {
    registerPage.firstNameInput.type(userData.randomFirstName);
    registerPage.lastNameInput.type(userData.randomLastName);
    registerPage.emailInput.type(userData.randomEmail);
    registerPage.passwordInput.type(userData.randomPassword);
    registerPage.passwordConfirmationInput.type(userData.randomPassword);
    registerPage.tcCheckbox.check();
    registerPage.submitButton.click();
});

  it.only("register via backend", () => {
    cy.registerViaBackend(
      userData.firstNameInput,
      userData.lastNameInput,
      userData.emailInput,
      userData.passwordInput
    );
    console.log("pre", userData.randomEmail, userData.randomPassword);
    console.log("posle", userData.randomEmail, userData.randomNewPassword)
    cy.visit("/");
  });
});