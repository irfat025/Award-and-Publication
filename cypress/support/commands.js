// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//import 'cypress-file-upload';
import 'cypress-file-upload';

import login_page_class from "../support/classes/login_page_class"
import award_home_class from "../support/classes/award_home_class"


const login_object= new login_page_class()
const award_object=new award_home_class()
Cypress.Commands.add("login",(username,password)=>

{
    login_object.typeName().type(username)
    cy.wait(3000)
    login_object.typePassword().type(password)
    cy.wait(3000)
    login_object.submit().click()
    cy.wait(3000)
   

})
Cypress.Commands.add("click_on_edit_button_on_table",(title)=>{

award_object.click_on_edit_button().each(($e1, index, $list) =>{
    const text=$e1.text()
    if(text.includes(title))
    {
        cy.get('tr td:nth-child(4)').find('button[mattooltip="সম্পাদন করুন"]').eq(index).click({force:true})
    }


})
}) 
Cypress.Commands.add("click_on_view_button_on_table",(title)=>{

    award_object.click_on_edit_button().each(($e1, index, $list) =>{
        const text=$e1.text()
        
        if(text.includes(title))
        {
            cy.log('ok')
            cy.get('tr td:nth-child(4)').find('div button.btn-list:eq(1)').eq(index).click({force:true})
          
        }
    
    
    })
    }) 



    Cypress.Commands.add("Select_date",()=>{

        
      const a=  award_object.click_on_date_icon()
      a.click({force:true}).then(($a)=>{
        cy.wait(2000)
        cy.get('.mat-calendar-body-cell-content.mat-calendar-body-today')

        
        }).click()
    })
       




    Cypress.Commands.add("attachment",()=>{

        const yourFixturePath = 'abc.txt';
        const a=  award_object.attachment_select()
        const b = '//mat-label[contains(text(),"ফাইলের ধরন")]'
        a.click({force:true}).then(($a)=>{
          cy.wait(2000)
          cy.xpath(b)        
            }).click({force:true}).then(($b)=>{
                cy.contains(' ব্যক্তিগত ফাইল ')
            }).click({force:true}).then(($b)=>{
                cy.get('input[type="file"]').attachFile(yourFixturePath);
            })
      })
         
  
  
  
  
  




