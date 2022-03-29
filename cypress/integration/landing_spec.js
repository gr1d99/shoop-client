var baseUrl = 'http://localhost:3000';
describe('Landing Page', function () {
    beforeEach(function () {
        cy.visit(baseUrl);
    });
    it('displays title', function () {
        cy.contains('Ecommerce App');
    });
    describe('Large screens', function () {
        beforeEach(function () {
            cy.viewport(1024, 768);
        });
        it('redirects to products page when products link is clicked', function () {
            cy.get('#open-products').click();
            cy.url().should('eq', 'http://localhost:3000/products');
        });
        it('opens user menu', function () {
            cy.get('.user-menu-btn').click().should('have.attr', 'aria-expanded', 'true');
        });
    });
});
