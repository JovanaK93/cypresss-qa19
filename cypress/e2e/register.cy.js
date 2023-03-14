/// <reference types="Cypress" />

describe ("Registration tests", () => {

    it("Load gallery page", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
    })

    it("Try to regiter with incorrect password", () => {
      cy.visit("/register");
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcy@test.com");
      cy.get("#password").type("testpass");
      cy.get("#password-confirmation").type("testpass");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to regiter without password", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcy@test.com");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to regiter with a different confirmed password", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcy@test.com");
      cy.get("#password").type("testpass");
      cy.get("#password-confirmation").type("testpass123");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to regiter without confirmed password", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcy@test.com");
      cy.get("#password").type("testpass123");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to regiter without first name", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcy@test.com");
      cy.get("#password").type("testpass123");
      cy.get("#password-confirmation").type("testpass123");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to regiter without last name", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#email").type("testcy@test.com");
      cy.get("#password").type("testpass123");
      cy.get("#password-confirmation").type("testpass123");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to regiter without email", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#password").type("testpass123");
      cy.get("#password-confirmation").type("testpass123");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to register with invalid e-mail which does not contain @", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcytest.com");
      cy.get("#password").type("testpass123");
      cy.get("#password-confirmation").type("testpass123");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to register with invalid e-mail which contain two @", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcy@@test.com");
      cy.get("#password").type("testpass123");
      cy.get("#password-confirmation").type("testpass123");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to register with invalid email domain.", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcy@test.o");
      cy.get("#password").type("testpass123");
      cy.get("#password-confirmation").type("testpass123");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.wait(2000);
      cy.url().should("contain", "/register");
    })

    it("Try to register without a checked box 'I accept terms and conditions'", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcy123@test.com");
      cy.get("#password").type("testpass123");
      cy.get("#password-confirmation").type("testpass123");
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to register without entering any data in the fields", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Try to register with invalid e-mail which does not contain dot before the domain", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcy123@testcom");
      cy.get("#password").type("testpass123");
      cy.get("#password-confirmation").type("testpass123");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("contain", "/register");
    })

    it("Register with valid credentials", () => {
      cy.visit("/");
      cy.get(".nav-link").eq(2).click();
      cy.get("#first-name").type("Petar");
      cy.get("#last-name").type("Petrovic");
      cy.get("#email").type("testcy26@gmail.com");
      cy.get("#password").type("testpass123");
      cy.get("#password-confirmation").type("testpass123");
      cy.get(".form-check-input").check();
      cy.get("button").click();
      cy.url().should("not.contain", "/register");
    })

  })