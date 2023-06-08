describe('Button', () => {
  beforeEach(() => {
    cy.visit('/button')
  })
  it('passes', () => {
    cy.get('button').should('contain.text', 'btn')
  })
})
