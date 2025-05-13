describe('My First Test', () => {
    it('Visits example site', () => {
      cy.visit('https://dev.leaguelens.proximabiz.com/')
      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })
  