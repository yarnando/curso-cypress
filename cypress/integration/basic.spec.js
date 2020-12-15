/// <reference types="cypress" />

describe('Cypress basics', () => {

    it.only('Should visit a page and assert title', () => {
       cy.visit('https://www.wcaquino.me/cypress/componentes.html') 
        //should espera a promise (o cy.title é uma promise), como se fosse o 'then'
        //title = title DA ABA
        //cy.pause()

        cy.title().then(title => {
            console.log(title);
        })

        cy.title().should('be.equal', 'Campo de Treinamento')
        //cy.title().should('contain', 'Campo').debug()

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })

})