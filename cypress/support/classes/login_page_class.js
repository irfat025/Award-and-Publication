class login_page_class{
    typeName()
    {
        const a =cy.get('input[name="username"]')
        
        return a
        
    }
    typePassword()
    {
        return cy.get('input[type="password"]')
    }
    submit()
    {
        return cy.get('div:nth-child(1)>button:nth-child(1)')
    }
    selectOffice()
    {
        return cy.contains('')
    }
    
    }
    
    export default login_page_class;