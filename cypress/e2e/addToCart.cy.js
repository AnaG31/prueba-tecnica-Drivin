describe('add to cart', () =>{
    
    it('agregar y eliminar productos desde products page', () =>{
    cy.visit('/')
    cy.loginExitoso()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('be.visible')
      .and('contain', '2')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain', '1')
    })
 
    it('verificar filtro', () =>{
      cy.visit('/')
      cy.loginExitoso()
      cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
      cy.get('[data-test="inventory-item"]').first()
      .should('contain', 'Test.allTheThings() T-Shirt (Red)')
      cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
      cy.get('[data-test="inventory-item"]').first()
      .should('contain', '7.99')
    })
})