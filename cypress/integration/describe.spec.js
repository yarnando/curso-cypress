/// <reference types="cypress" />
//esse reference faz aparecer as sugestoes de comandos do cypress

describe('Should group tests...', () => {

    describe.skip('Should group more specific tests...', () => {
        it('A specific test...', () => {

        })        
    })

    describe('Should group more specific tests...', () => {
        it.only('A specific test2...', () => {

        })        
    })

    it('A internal test...', () => {

    })
})