/// <reference types="Cypress" />
import { allGalleriesPage } from "../page_objects/allGalleries";
import { loginPage } from "../page_objects/loginPage";

describe("all galleries page tests", () => {
  beforeEach("visit gallery app and log in", () => {
    // cy.visit("/login");
    // loginPage.login("test2612@test.com", "test1234");
    // cy.url().should("not.include", "/login");
    cy.loginViaBackend();
    cy.registerViaBackend("Lola", "Lola", "test1993@test.com", "test1234");
    cy.visit("/");
  });

    

  it("all galleries successully loaded", () => {
    allGalleriesPage.allGalleriesHeading
      .should("be.visible")
      .and("have.text", "All Galleries");

    allGalleriesPage.galleriesGrid.children().should("have.length", 10);
    allGalleriesPage.galleriesGrid.children().each((el) => {
      expect(el).to.exist;
    });
    cy.get("button").should("have.length", 2);
  });

  it("test pagination", () => {
    allGalleriesPage.galleriesGrid.children().should("have.length", 10);
    allGalleriesPage.loadMoreButton.click();
    allGalleriesPage.galleriesGrid.children().should("have.length", 20);
    allGalleriesPage.loadMoreButton.click();
  });

  it("search for specific gallery", () => {
    let searchTerm = "sad je najnovija galerija";

    allGalleriesPage.search(searchTerm);
    cy.wait(500);
    allGalleriesPage.singleGalleryHeading.click();
    cy.get("h1").should("have.text", searchTerm);
  });
});