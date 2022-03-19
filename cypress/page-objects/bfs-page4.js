export class Page4{
    
    selectCompany(){
        cy.get('input[name=company-details-existing-user-company]').click()
        cy.get('div[id=downshift-0-item-0]').click()
    }
}