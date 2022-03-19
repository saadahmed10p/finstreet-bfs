export class TodoPage{
   
    navigate ()
    {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    addTodo (todoText)
    {
        cy.get('.new-todo').type(todoText+"{enter}")  
    }

    validateTodoTxt (todoTxt)
    {
        cy.get('label').should('have.text', ''+todoTxt)
    }

    clearCompleted()
    {
        cy.contains('Completed').click()
    }
}