/// <reference types="cypress" />

describe('Cenario 4', () => {
    it('Finalizar Compra', () => {
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
        cy.get('button[id=add-to-cart-sauce-labs-backpack]').click();
        cy.wait(100);
        cy.get('button[id=add-to-cart-sauce-labs-onesie]').click();
        cy.wait(100);
        cy.get('a.shopping_cart_link').click();
        cy.wait(100);
        cy.url().should('include', '/cart.html');
        cy.wait(100);
        cy.get('.cart_item').should('have.length', 2);
        cy.wait(100);
        cy.get('button[id=checkout]').click();
        cy.wait(100);
        cy.url().should('include', '/checkout-step-one.html');
        cy.wait(100);
        cy.get('input[id=first-name]').type('Nome');
        cy.wait(100);
        cy.get('input[id=last-name]').type('Sobrenome');
        cy.wait(100);
        cy.get('input[id=postal-code]').type('00000000');
        cy.wait(100);
        cy.get('input[id=continue]').click();
        cy.wait(100);
        cy.url().should('include', '/checkout-step-two.html');
        cy.wait(100);
        cy.get('.cart_item').should('have.length', 2);
        cy.wait(100);
        cy.get('button[id=finish]').click();
        cy.wait(100);
        cy.url().should('include', '/checkout-complete.html');
        cy.wait(100);
        cy.get('h2[class=complete-header]').should('have.text', 'Thank you for your order');
        cy.wait(100);
        cy.get('div[class=complete-text]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        cy.wait(100);
        cy.get('button[id=back-to-products]').click();
        cy.wait(100);
        cy.url().should('include', '/inventory.html');
        cy.wait(100);
        cy.get('a.shopping_cart_link').should('not.have.descendants', 'span.shopping_cart_badge');
        cy.wait(100);
        cy.get('button[id=react-burger-menu-btn]').click();
        cy.wait(100);
        cy.get('a[id=logout_sidebar_link]').click();
        cy.wait(100);
        cy.url().should('be.equal', 'https://www.saucedemo.com/');

    })
})