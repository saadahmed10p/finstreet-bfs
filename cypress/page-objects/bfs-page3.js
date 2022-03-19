export class Page3{
    
    clickSalutation(){
        cy.get('[data-testid="woman"] > .styles__StyledIconWrapper-sc-12dna3e-1').click()
    }

    enterUserDetails(firstName, lastName, phone, email){

        cy
        .get('[data-testid="person-first-name"]').type(firstName)
        .get('[data-testid="person-last-name"]').type(lastName)
        .get('[data-testid="person-phone-no"]').type(phone)
        .get('[data-testid="person-email"]').type(email)
    }

    clickLoginText(){
        cy.contains('a','jetzt anmelden').click()
    }

    enterPassword(pass){
        cy.get('input[type=password]').type(pass)
    }

    clickLoginBtn(){
        cy.get('button[data-testid="login-button"]').click()    
    }

    checkCompanyPage(){
        cy.contains('span','1. Unternehmen')
    }
}