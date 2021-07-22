/// <reference types="cypress"/>
/// <reference types = "cypress-xpath" />


beforeEach(() => {
    cy.intercept('**/message-bus/**').as('message')
    cy.intercept('**/latest.json?**').as('json')
    cy.visit('http://www.discourse.org/');
});

context('Atividade de Automação 1', () => {
    it('Imprimir o título de todos os tópicos fechados', () => {

        cy.acessaValidaDemo()

        cy.window().scrollTo('bottom').as('scroll')

        cy.wait('@message')
        cy.wait('@json')

        cy.window('@scroll')

        cy.titulosFechados()
    });



    it('Imprimir quantidade de itens de cada categoria e dos que não possui categoria', () => {

        cy.acessaValidaDemo()

        cy.window().scrollTo('bottom').as('scroll')

        cy.wait('@json')
        cy.wait('@message')

        cy.window('@scroll')

        let date = []
        cy.get('[class="category-name"]')
            .each(($el) => {
                date.push($el.text())
            })

        cy.arrayCategorias(date)
        cy.get('tr.category-uncategorized').its('length').as('semCategoria')
    });


    it(' Imprimir o título do tópico que contém o maior número de views;', () => {

        cy.acessaValidaDemo()

        cy.window().scrollTo('bottom').as('scroll')

        cy.wait('@json')
        cy.wait('@message')

        cy.window('@scroll')

        let views = []
        cy.xpath('//td[@class="num views "]//span[@class="number"]')
            .each(($el) => {
                views.push($el.text())
            })

        cy.maiorNumeroDeViews(views)

    });

});

