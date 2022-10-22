describe("Article", () => {
  context("User can open articles", () => {
    it("First article", () => {
      // opening first article
      cy.visit("/");
      cy.get('[href="/article/1"]').click();

      // checking if category is correct
      cy.get("#category").contains(/gaming/i);
    });
    it("Second article", () => {
      // opening first article
      cy.visit("/");
      cy.get('[href="/article/2"]').click();

      // checking if category is correct
      cy.get("#category").contains(/science/i);
    });
    it("Article not found", () => {
      // opening an article that doesn't exist
      cy.visit("/article/123");

      // checking if error box appears.
      // using a 10 sec timeout to wait for 4 api call fails
      cy.get("#error-box", { timeout: 10000 }).should(
        "be.visible"
      );
    });
  });
});

export {};
