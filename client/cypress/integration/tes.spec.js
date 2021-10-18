describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.contains('GitHub').click()
    // Find a link with an href attribute containing "about" and click it
  })
})