/// <reference types = "cypress"/>

import { TodoPage } from "../page-objects/todo-page"

describe('Todo tasks', () => {

    const todoPage = new TodoPage()

    it('should navigate to the TOdoMVC App',() => {
       
        todoPage.navigate()
        
        todoPage.addTodo('Clean Room')    
    
        todoPage.validateTodoTxt('Clean Room')
    
        //cy.get('label').should('not.be.checked')
    
        //cy.get('.toggle').click()
    
        todoPage.clearCompleted()
    
        //cy.get('.todo-list').should('not.have.descendants', 'li')
    })


} )
