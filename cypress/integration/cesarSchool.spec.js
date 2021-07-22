/// <reference types="cypress"/>
/// <reference types = "cypress-xpath" />

beforeEach(() => {

    https://www.cesar.school/blog/page/2/
    cy.intercept('**//blog/**').as('page2')
    cy.intercept('/send**').as('send')
   

});
context('Atividade de Automação 2', () => {
    it('Capturar informações dos posts do blog', () => {
        cy.visit('https://www.cesar.school/')
        cy.get('.cc-ALLOW').click()

        cy.xpath("//span[text()='Blog']").click({ force: true })

        cy.window().scrollTo('bottom')

        cy.get('.nav-links > :nth-child(2)').click()

        cy.url().should('include', 'page/2/')
        cy.wait('@page2')
        cy.wait('@send')

        cy.xpath("((//article)[2]//a)[3]").invoke('text').then((titulo2) => {
            cy.wrap(`Título do segundo post: ${titulo2}`)
        })


        cy.xpath("(//article)[2]//time[1]").invoke('text').then((data2) => {
            cy.wrap(`Data do segundo post: ${data2}`)
        })


        cy.xpath("((//article)[3]//a)[3]").invoke('text').then((titulo3) => {
            cy.wrap(`Título do terceito post: ${titulo3}`)
        })

        cy.xpath("(//span[@class='author-name'])[3]").invoke('text').then((autor3) => {
            cy.wrap(`Autor do terceito post: ${autor3}`)
        })

        cy.get('div.onde').invoke('text').then((endereco) => {
            cy.wrap(`Endereço do School: ${endereco}`)
        })


    });
});