class award_home_class{
    expand_award_publication()
    {
       return cy.contains('পুরস্কার এবং প্রকাশনা')
    }
    expand_award()
    {
       
       return cy.get('svg[data-icon="award"]')
        //cy.get('svg[data-icon="award"]').focus(function(){
            //x= cy.get('a[href="/global/hrm2/hrm/award-publication/award/configuration"]')


        //})
      
       // return x
    }
    go_configuration_page()
    {
        return cy.get('a[href="/ictd/web/hrm2/hrm/award-publication/award/configuration"]')
    }


    configuration_page_validation()
    {
        return cy.get('.font-lg')
    }
    Click_on_add_button()
    {
        return cy.xpath('//i[contains(text(),"add")]')
    }
    varifying_dialogue()
    {
        return cy.get('.text-white.mat-dialog-title.ng-star-inserted')
    }
    type_bangla_award_type()
    {
        return cy.get(' input[id=nameBn]:visible')
    }
    type_english_award_type()
    {
        return cy.get('input[id=nameEn]:visible')
    }
    click_on_save_button()
    {
       // return cy.xpath('//button//span//span[contains(text(),"সংরক্ষণ করুন")]')
       return cy.get('.mat-button-wrapper>span:visible')
    }
    varifying_award()
    {
        return cy.get('.cdk-column-nameBn')
    }
    
    click_on_edit_button()
    {
        return  cy.get('.mat-table >tbody>tr td:nth-child(1)')
    }
    varifying_dialogue_edit()
    {
        return cy.get('h2')
    }
click_on_close_button()
{
    return cy.xpath('//button//span[contains(text(),"বন্ধ করুন")]')
}
go_award_home_page()
{
    return cy.get('a[href="/global/hrm2/hrm/award-publication/award/home"]')
}
home_page_validation()
{
   return cy.xpath('//mat-panel-title//span[contains(text(),"পুরস্কার অনুমোদন")]')
}
expand_award_on_home_page()
{
    return cy.get('i[class="icon-trophy icon font-2xl"]')
}
type_award_title()
{
    return cy.get('textarea[name="title"]')
}
click_award_type()
{
    return cy.xpath('(//span//label//mat-label[contains(text(),"পুরস্কারের ধরন")])[2]')
}
select_award_type()
{
    return cy.get('mat-option .mat-option-text')
}
click_on_date_icon()
{
    const a='button[aria-label="Open calendar"]:visible'
return cy.get(a)    
}
type_organization()
{
    return cy.get('textarea[formcontrolname="givenBy"]')
}
type_tag()
{
    return cy.get('input[role="combobox"]:visible')
}
type_comment()
{
    return cy.get('textarea[name="description"]')
}
attachment_select()
{
    
    return cy.get('button[mattooltip="নতুন তথ্য যুক্ত করুন"]')
}
draft_button()
{
    return cy.xpath('//button//span[contains(text(),"খসড়া")]')
}
validate(title)
{
    /* 
    return cy.get('tr td:visible').each(($e1, index, $list) =>{
        const text=$e1.text()
        if (text.includes(title))
        {
            cy.get('tr td:visible').find('button[mattooltip="সম্পাদন করুন"]').eq(index).click({force:true})

        }
    })*/
    return cy.get('tr:first-child td:nth-child(3):visible')
}
}

export default award_home_class;