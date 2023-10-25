/// <reference types="cypress" />
describe("my form", () => {
  beforeEach(() => {
    cy.viewport(1440, 842);
    // cy.intercept("GET", "api/ingredients", { fixtures: "ingredients.json" });
    cy.visit("/");
  });
  it("Open ingredient modal, close by escape", () => {
    cy.get("p").contains("Краторная булка N-200i").click({ force: true });
    cy.get("body").type("{esc}");
    cy.get("p").contains("Краторная булка N-200i").click({ force: true });
    cy.get('[data-close="close"]').click();
  });

  it("should login, create order", () => {
    cy.visit("/login");
    cy.wait(500);
    cy.get('input[name="email"]').type("testtest@test.test");
    cy.get('input[name="password"]').type("testtest");
    cy.get("button").contains("Войти").click();
    cy.get("p").contains("Краторная булка N-200i").trigger("dragstart");
    cy.get("div").contains("Выберите начинку").trigger("drop");
    cy.get("p").contains("Соус Spicy-X").trigger("dragstart");
    cy.get("div").contains("Выберите начинку").trigger("drop");
    cy.get("button").contains("Оформить заказ").click();
    cy.wait(16000);
    cy.get('[data-close="close"]').click();
  });

  it("click on routes", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("a")
      .contains("Конструктор")
      .click()
      .location("pathname")
      .should("equal", "/");
    cy.get("a")
      .contains("Лента заказов")
      .click()
      .location("pathname")
      .should("equal", "/feed");
    cy.get("a")
      .contains("Личный кабинет")
      .click()
      .location("pathname")
      .should("equal", "/login");
    cy.get(`.header_Logo__iRDOH`)
      .click()
      .location("pathname")
      .should("equal", "/");
  });
});
