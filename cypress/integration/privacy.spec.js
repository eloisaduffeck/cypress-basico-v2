it('Testa a pagina da política de privaciade de forma independente', function(){
  cy.visit('./src/privacy.html')
  cy.contains('Talking About Testing').should('be.visible')
})