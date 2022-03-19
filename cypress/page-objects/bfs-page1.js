export class Page1 {

clickPurposeMachine(){

    cy.get('[data-testid="machine"] > .styles__StyledTitle-sc-1nytsdn-3').click()
}

fundingAmountMachine(amount){
    cy.get('[data-testid="amount"]').type(amount)
}

verifyFundingField(){
    cy.get('[data-testid="amount"]').should('be.visible')
}

machinePrice(price){
    cy.get('[data-testid="machine-price"]').type(price)
}

machineCount(count){
    cy.get('[data-testid="machine-count"]').type(count)
}

machineDescription(desc){
    cy.get('[data-testid="machine-description"]').type(desc)
}

clickFurther(){
    cy.get('[data-testid="next-step-button"]').click()
}

}