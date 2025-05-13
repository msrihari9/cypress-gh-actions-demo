// describe('My First Test', () => {
//     it('Visits example site', () => {
//       cy.visit('https://example.cypress.io')
//       cy.contains('type').click()
//       cy.url().should('include', '/commands/actions')
//       cy.get('.action-email')
//         .type('fake@email.com')
//         .should('have.value', 'fake@email.com')
//     })
//   })

describe('My First Test', () => {
    it('logs in using environment vars', () => {
        cy.visit('/');
        cy.get('#username').type(Cypress.env('login_user'));
        cy.get('#password').type(Cypress.env('login_password'));
        cy.get('form').submit();
    })
})