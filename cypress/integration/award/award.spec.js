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
  
    


it('TC_01 Award Admin : Configure a new award',function(){
    cy.login(this.data.award_admin, this.data.password)
grpDashboard.go_to_HRM2().click({force:true})
cy.wait(2000)
award.expand_award_publication().click({force:true})
award.expand_award().click({force:true})
award.go_configuration_page().click({force:true})
award.configuration_page_validation().should("include.text",this.data.configuration_page_validation)
award.Click_on_add_button().click({force:true})
award.varifying_dialogue().should('include.text',this.data.dialogue_varification)
award.type_bangla_award_type().type(this.data.bangla_award_type)
award.type_english_award_type().type(this.data.english_award_type)
award.click_on_save_button().click({force:true})
cy.wait(4000)
award.varifying_award().each(($e1, index, $list) => {
    const text=$e1.text()
    if ((text.includes(this.data.bangla_award_type)))
    {
        cy.log('all ok')
    }
})

})

it('TC_02 Award Admin : Edit existing award',function(){
    cy.login(this.data.award_admin, this.data.password)
grpDashboard.go_to_HRM2().click({force:true})
cy.wait(2000)
award.expand_award_publication().click({force:true})
award.expand_award().click({force:true})
award.go_configuration_page().click({force:true})

award.configuration_page_validation().should("include.text",this.data.configuration_page_validation)
cy.wait(2000)
cy.click_on_edit_button_on_table(this.data.edited_award_type)
cy.wait(3000)
award.varifying_dialogue_edit().should("includes.text",this.data.varifying_dialogue_edit)
award.type_bangla_award_type().clear().type(this.data.edited_bangla_award_type)

award.type_english_award_type().clear().type(this.data.edited_english_award_type)
award.click_on_save_button().click({force:true})
cy.wait(4000)
award.varifying_award().each(($e1, index, $list) => {
    const text=$e1.text()
    if ((text.includes(this.data.edited_bangla_award_type)))
    {
        cy.log('all ok')
    }
})

})

it('TC_03 Award Admin : View existing award',function(){
    cy.login(this.data.award_admin, this.data.password)
grpDashboard.go_to_HRM2().click({force:true})
cy.wait(2000)
award.expand_award_publication().click({force:true})
award.expand_award().click({force:true})
award.go_configuration_page().click({force:true})

award.configuration_page_validation().should("include.text",this.data.configuration_page_validation)
cy.wait(2000)
cy.click_on_view_button_on_table(this.data.edited_bangla_award_type)
cy.wait(2000)
award.click_on_close_button().click({force:true})

})



it('TC_04 User : Add an award',function(){
    cy.login(this.data.user, this.data.password)
grpDashboard.go_to_HRM2().click({force:true})
cy.wait(2000)
award.expand_award_publication().click({force:true})
award.go_award_home_page().click({force:true})
cy.wait(2000)
award.home_page_validation().should('include.text',this.data.home_page_validation)
award.expand_award_on_home_page().click({force:true})
award.Click_on_add_button().click({force:true})
award.type_award_title().type(this.data.award_title)
award.click_award_type().click({force:true})
//cy.wait(2000)
award.select_award_type().contains(this.data.edited_bangla_award_type).click({force:true})
//award.click_on_date_icon().click()
//award.select_date().click({force:true})
cy.wait(2000)
cy.Select_date()
cy.wait(2000)
award.type_organization().type(this.data.organization)
award.type_tag().type(this.data.tag).type('{enter}')

award.type_comment().type(this.data.comment)
cy.attachment()
cy.wait(5000)
award.draft_button().click({force:true})
cy.wait(3000)
award.validate().should('include.text',this.data.award_title)

})





})