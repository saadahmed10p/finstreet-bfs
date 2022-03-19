export class InqDetails{

    clickInquiry(){
        cy.get('tbody > :nth-child(1)').click()
    }

    clickLogOut(){
        cy.contains('button', 'Ausloggen').click()
    }
}