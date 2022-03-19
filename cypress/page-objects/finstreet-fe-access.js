export class Bfs{
    
    accessCreds(baseURL)
    {
        cy.visit(''+baseURL, {
        auth: {
        username: 'compeon',
        password: 'tXwG?5zWgdrd(a5R'
        }
        })
    }

    verifyLoginBtn()
    {
        cy.get('.styles__LogoImage-sc-143cfwf-1').should('be.visible')
    }
    

}