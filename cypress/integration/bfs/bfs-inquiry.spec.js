/// <reference types = "cypress"/>

import { InqDetails } from "../../page-objects/bfs-inq-details";
import { Page1 } from "../../page-objects/bfs-page1";
import { Page2 } from "../../page-objects/bfs-page2";
import { Page3 } from "../../page-objects/bfs-page3";
import { Page4 } from "../../page-objects/bfs-page4";
import { Thankyou } from "../../page-objects/bfs-thankyou";
import { Bfs } from "../../page-objects/finstreet-fe-access"; 

describe ('BFS Inquiry',()=>{

    const bfsInq = new Bfs()
    const page1 = new Page1()
    const page2 = new Page2()
    const page3 = new Page3()
    const page4 = new Page4()
    const thank = new Thankyou()
    const inq_details = new InqDetails()

    //  before(function(){
    //   cy.fixture('example').then(function(data){
    //       this.data=data
    //  }) 
    // cy.log('hello = '+this.data.baseURL)    
    // })

    after(function(){
        inq_details.clickLogOut()
    })

    it('Access FE',()=>{

        cy.window().then((win) => {
            win.sessionStorage.clear()
          })

        //Access FE
        cy.fixture('example').then(function(data){
        bfsInq.accessCreds(data.baseURL)
        bfsInq.verifyLoginBtn()
        })    
    })

    it('BFS Inquiry - Page 1', ()=>{

        //Click Purpose
        page1.clickPurposeMachine()

        //Verify and Enter funding amount
        page1.verifyFundingField()
        cy.fixture('example').then(function(data){
        page1.fundingAmountMachine(data.fundingAmount)
    })      
        //Enter machine price and count
        cy.fixture('example').then(function(data){
        page1.machinePrice(data.machinePrice)    
        page1.machineCount(data.machineCount)
        })

        //Enter Description
        cy.fixture('example').then(function(data){
        page1.machineDescription(data.machineDescription)
    })

        //Click Forward button
        page1.clickFurther()
    })

   it('BFS Inquiry - Page 2', ()=>{

    //Click on NO
    page2.clickFurtherNeeds();

    //Click Proceed
    page1.clickFurther()
   })

   it('BFS Inquiry - Page 3',()=>{

    //Click Salutation
    page3.clickSalutation()

    //Enter user details
    cy.fixture('example').then(function(data){
        page3.enterUserDetails(data.firstName, data.lastName, data.phone, data.email)       
    })

    //Click logintext
    page3.clickLoginText()

    //Enter Password
    cy.fixture('example').then(function(data){
    page3.enterPassword(data.pass)
    })

    //Clcik Login Button
    page3.clickLoginBtn()

    //Check Comapny Page is Opened
    page3.checkCompanyPage()

   })

   it('BFS Inquiry - Page 4', () =>{

    //Select Company
    page4.selectCompany()

    //Click Proceed
    page1.clickFurther()
   })
   
   it('BFS Inquiry - Review Page', () =>{

    //Click Proceed
    page1.clickFurther()
   })
 
   it('BFS Inquiry - Thankyou Page', () =>{

    //Click Listing Tab
    thank.clickListing()  
   })

   it('BFS Inquiry - Inquiry Details', () =>{

    //Click On Created Inquiry
    inq_details.clickInquiry()    
   })
})