class HomePage {

    get allGalleriesHeading() {
        return cy.get("h1");
      }

    get filterBox() {
      return cy.get(":text");
    }
  
    get filterButton() {
      return cy.get(":button");
    }
  
    get loadMoreButton() {
      return cy.get(".btn.btn-custom");
    }

    get firstGalleryTitle() {
      return cy.get(".box-title").first();
    }

    homePage(filterText) {
      this.filterBox.type(filterText);
      this.filterButton.click();
      this.loadMoreButton.click();
      this.firstGalleryTitle.click();
  }
}
  
  export const homePage = new HomePage();
  