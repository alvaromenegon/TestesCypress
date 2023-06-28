/// <reference types="cypress" />

describe('Cenario 1', () => {
  it('Login e Navegação', () => {
    cy.visit('/');
    cy.wait(200);
    cy.get('input[id=user-name]').type('standard_user');
    cy.wait(100)
    cy.get('input[id=password]').type('secret_sauce');
    cy.wait(100)
    cy.get('#login-button').click();
    cy.wait(100);
    cy.url().should('include', '/inventory.html');
    cy.wait(100);
    cy.get('button[id=react-burger-menu-btn]').click();
    cy.wait(100);
    cy.get('.bm-menu-wrap').should('be.visible');
    cy.wait(100);
    cy.get('button[id=react-burger-cross-btn]').click();
    cy.wait(100);
    cy.get('.bm-menu-wrap').should('not.be.visible'); 
    cy.wait(100);
    cy.get('.shopping_cart_link').click();
    cy.wait(100);
    cy.url().should('include', '/cart.html');
    cy.wait(100);
    cy.get('button[id=checkout]').click();
    cy.wait(100);
    cy.url().should('include', '/checkout-step-one.html');
    cy.wait(100);
    cy.get('button[id=cancel]').click();
    cy.wait(100);
    cy.url().should('include', '/cart.html');
    cy.wait(100);
    cy.get('button[id=continue-shopping]').click();
    cy.wait(100);
    cy.url().should('include', '/inventory.html');
    cy.wait(100);
    cy.get('button[id=react-burger-menu-btn]').click();
    cy.wait(100);
    cy.get('a[id=logout_sidebar_link]').click();
    cy.wait(100);
    cy.url().should('include', '/index.html');
  })
})


