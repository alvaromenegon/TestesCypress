/// <reference types="cypress" />

describe('Cenario 2', () => {
    it('Teste de Catalogo', () => {
        cy.visit('/');
        cy.wait(100);
        cy.get('input[id=user-name]').type('standard_user');
        cy.wait(100)
        cy.get('input[id=password]').type('secret_sauce');
        cy.wait(100)
        cy.get('#login-button').click();
        cy.wait(100);
        cy.url().should('include', '/inventory.html');
        cy.wait(100);
        cy.get('.inventory_list').should('be.visible');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').should('have.length', 6);
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('.inventory_item_desc').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('.inventory_item_price').should('have.text', '$29.99');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('img[class=inventory_item_img]').should('have.attr', 'src', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg');
        cy.wait(100);
        cy.get('.select_container').find('.product_sort_container').select('Price (low to high)');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('.inventory_item_name').should('have.text', 'Sauce Labs Onesie');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('.inventory_item_desc').should('have.text', "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('.inventory_item_price').should('have.text', '$7.99');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('img[class=inventory_item_img]').should('have.attr', 'src', '/static/media/red-onesie-1200x1500.2ec615b2.jpg');
        cy.wait(100);
        cy.get('.select_container').find('.product_sort_container').select('Name (Z to A)');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('.inventory_item_name').should('have.text', 'Test.allTheThings() T-Shirt (Red)');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('.inventory_item_desc').should('have.text', 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('.inventory_item_price').should('have.text', '$15.99');
        cy.wait(100);
        cy.get('.inventory_list').find('.inventory_item').first().find('img[class=inventory_item_img]').should('have.attr', 'src', '/static/media/red-tatt-1200x1500.30dadef4.jpg');
        cy.wait(100);
        cy.get('button[id=add-to-cart-test.allthethings()-t-shirt-(red)]').click();
        cy.wait(100);
        cy.get('span[class=shopping_cart_badge]').should('have.text', '1');
        cy.wait(100);
        cy.get('button[id=add-to-cart-test.allthethings()-t-shirt-(red)]').should('have.text', 'Remove');
        cy.wait(100);
        cy.get('a.shopping_cart_link').should('not.have.descendants', 'span.shopping_cart_badge');
        cy.wait(100);
        cy.get('a.shopping_cart_link').click();
        cy.wait(100);
    })
})
