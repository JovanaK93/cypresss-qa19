/// <reference types="Cypress" />

describe("login tests", () => {

    it("login with unregistered user", () => {
        cy.visit("/");
        cy.get("a[href='/login']").click();
        cy.get("#email").type("teeest@gmail.com")
        cy.get("#password").type("test1234");
        cy.get("button").click();
        cy.url().should("contain", "/login");
    });

    it("login without email address provided", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get("a[href='/login']").click();
        cy.get("#password").type("test1234");
        cy.get("button").click();
        cy.url().should("contain", "/login");
    });

    it.only("login without password provided", () => {
        cy.visit("/");
        cy.get("a[href='/login']").click();
        cy.get("#email").type("test2612@test.com")
        cy.get("button").click();
        cy.url().should("contain", "/login");
    });

    it("login with valid credentials", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        // cy.get("a[href='/login']").click();
        cy.get(".nav-link").eq(1).click();
        //  cy.get("input[id='email']")
        cy.get("#email").type("test2612@test.com");
        cy.get("#password").type("test1234");
        cy.get("button").click();
    
    });

    it.only("logout", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(1).click();
        //cy.get("a[href='/login']").click();
        cy.get("#email").type("test2612@test.com")
        cy.get("#password").type("test1234");
        cy.get("button").click();
        cy.url().should("not.contain", "/login");
        //cy.wait(3000);
        cy.get(".nav-link").eq(3).click();

    })
});

{
    /* <a data-v-4295d220="" href="/login" class="nav-link nav-buttons">
            Login
          </a>  */

    /*      <input 
          data-v-15717af5="" 
          type="email" 
          id="email" 
          required="required" 
          class="form-control"></input> */
}




