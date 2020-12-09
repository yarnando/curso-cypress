/// <reference types="cypress" />
describe('Esperas...', () => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html') 
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel' , () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys' , () => {
        cy.get('#novoCampo').should('not.exist')        
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist') 
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
    })

    it.only('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
            //quando nao acha algo, ele retorna ao comando anterior
        cy.get('#lista li span')
            .should('contain', 'Item 2')
        
    })

})
