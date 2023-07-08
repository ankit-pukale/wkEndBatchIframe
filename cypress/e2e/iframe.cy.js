///<reference types="cypress"/>
describe('I frame', () => {
    it.skip('Ifram using Jquery',()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(($iframe)=>{
            let body=$iframe.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('.container-fluid .active').should('have.text',"Home")
        })
    })
    it('iframe using JS',()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((iframe)=>{
            let bdy=iframe[0].contentDocument.body
            cy.wrap(bdy).as('body2')
            cy.get('@body2').find('.container-fluid .active').should('have.text',"Home")
        })
    })
});