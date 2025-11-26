describe("Lab_02 tester", function () {
  it("visit site", function () {
    cy.visit("http://localhost:5173/");
    cy.get('[data-test-id="d1"]').children().should("have.length", 1);
    cy.get('[data-test-id="d2"]').children().should("have.length", 2);
    cy.get('[data-test-id="d3"]').children().should("have.length", 3);
    cy.get('[data-test-id="d4"]').children().should("have.length", 4);
    cy.get('[data-test-id="d5"]').children().should("have.length", 5);
    cy.get("#rollLeft").contains("You´ve got 3 rolls left");
    cy.get("button").click();
    cy.get("#rollLeft").contains("You´ve got 2 rolls left");
    cy.get("button").click();
    cy.get("#rollLeft").contains("You´ve got 1 rolls left");
    cy.get("button").click();
    cy.get("#rollLeft").contains("You´ve got 0 rolls left");
  });
});
