Cypress.Commands.add('fillMandatoryFieldsAndsubmit', function() {
    cy.get('#firstName').type('Eloisa')
    cy.get('#lastName').type('Silveira Duffeck')
    cy.get('#email').type('eloisa.duffeck@totvs.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})