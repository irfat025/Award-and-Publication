/// <reference types="Cypress" />
import login_page_class from "../../support/classes/login_page_class"
import grp_dashboard_class from "../../support/classes/grp_dashboard_class"
import award_home_class from "../../support/classes/award_home_class"

describe('Award Sub-module',function(){
    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
        cy.visit(Cypress.env('url'))
    })
    /////////////***object */////////////////
    const loginPage=new login_page_class()
    const grpDashboard=new grp_dashboard_class()
  const award=new award_home_class()
  
    
  it('TC_05 User : Send award for "জিও অনাবশ্যক করতে অনুরোধ করুন " ',function(){
    cy.login(this.data.user, this.data.password)
grpDashboard.go_to_HRM2().click({force:true})
cy.wait(2000)
award.expand_award_publication().click({force:true})
award.go_award_home_page().click({force:true})
cy.wait(2000)
award.home_page_validation().should('include.text',this.data.home_page_validation)
award.expand_award_on_home_page().click({force:true})
cy.click_on_edit_button_on_table()


})








})