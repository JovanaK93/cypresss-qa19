/// <reference types="Cypress" />
import { loginPage } from "../page_objects/loginPage";

describe("all galleries page test", () => {
    beforeEach("visit gallery app and log in", () => {
        cy.visit("/login");
        loginPage.login("nedovic.filip@gmail.com", "Test12345");
        cy.url().should("not.include", "/login");

    });

    it("all galleries successfully loaded", () => {
        allGalleriesPage.allGalleriesHeading
        .should("be.visible")
        .and("have.text", "All Galleries");
    })
})