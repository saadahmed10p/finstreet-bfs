/// <reference types = "cypress"/>

describe('filtering', () =>{

it('filters', () => {
    cy.get('.new-todo').type("Clean Room{enter}") 
    cy.get('.new-todo').type("Learn Cypress{enter}") 

    cy.get('.todo-list li:nth-child(2) .toggle').click()

    cy.get('.todo-list li').should('have.length', 2)   
})

})