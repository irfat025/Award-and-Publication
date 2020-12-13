class GRP_dashboard{
    GRP_Dashboard_verification()
    {
        return cy.get('.mat-menu-trigger')
    }
    go_to_HRM2()
    {
        return cy.get('img[src="assets/img/brand/HRM.svg"]')
    }
    
}
export default GRP_dashboard;