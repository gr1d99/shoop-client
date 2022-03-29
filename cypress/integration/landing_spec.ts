const baseUrl = 'http://localhost:3000';

describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('displays title', () => {
    cy.contains('Ecommerce App');
  });

  describe('Large screens', () => {
    beforeEach(() => {
      cy.viewport(1024, 768);
    });

    it('redirects to products page when products link is clicked', () => {
      cy.get('#open-products').click();

      cy.url().should('eq', 'http://localhost:3000/products');
    });

    it('opens user menu', () => {
      cy.get('.user-menu-btn').click().should('have.attr', 'aria-expanded', 'true');
    });
  });
});
