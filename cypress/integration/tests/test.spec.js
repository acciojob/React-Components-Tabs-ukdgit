/// <reference types="cypress"/>

describe("#Test-case-1: Checking the Tab rendering", () => {
    beforeEach(() => {
      cy.visit("http://localhost:8080/");
    });
  
    it("Tabs hirerchy", () => {
      cy.get(".tabs").find(".tab").should("be.visible");
      cy.get(".tab").find("#Home-Tab").should("be.visible");
      cy.get(".tab").find("#About-Tab").should("be.visible");
      cy.get(".tab").find("#Features-Tab").should("be.visible");
      
    });
  });

  describe("#Test-case-2: Checking the Tab Content", () => {
    before(() => {
      cy.visit("http://localhost:8080");
    });
  
    it("Tabs Names", () => {
      cy.get("#Home-Tab").should("have.text","Home")
      cy.get("#About-Tab").should("have.text","About")
      cy.get("#Features-Tab").should("have.text","Features")
      
    });
  });

  describe("#Test-case-3: Checking the ViewPort", () => {
    before(() => {
      cy.visit("http://localhost:8080");
    });
  
    it("ViewPort Check", () => {
      cy.get(".viewport").should("have.text","Pages Go Here")
      
      
    });
  });