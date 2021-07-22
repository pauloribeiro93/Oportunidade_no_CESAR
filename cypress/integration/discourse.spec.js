/// <reference types="cypress"/>
/// <reference types = "cypress-xpath" />


beforeEach(() => {
    cy.intercept('**/message-bus/**').as('message')
    cy.intercept('/latest.json?no_definitions=true&page=1').as('json')
    cy.intercept('**/latest.json?**').as('json2')
    cy.visit('http://www.discourse.org/');


});

context('Atividade de Automação 1', () => {
    it('Imprimir o título de todos os tópicos fechados', () => {
        cy.get('#main > :nth-child(2) > :nth-child(4) > a')
            .invoke('removeAttr', 'target')
            .click()


        cy.window().scrollTo('bottom').as('scroll')

        cy.wait('@message')
        cy.wait('@json')


        cy.window().scrollTo('bottom')

        let date = []
        cy.get('tr[class*=closed]').find('.link-top-line').find('a')
            .each(($el) => {
                date.push($el.text())
                cy.log(`Título de todos os tópicos fechados - ${date},`)
            })
    });



    it('Imprimir quantidade de itens de cada categoria e dos que não possui categoria', () => {
        cy.get('#main > :nth-child(2) > :nth-child(4) > a')
            .invoke('removeAttr', 'target')
            .click()


        cy.window().scrollTo('bottom').as('scroll')

        cy.wait('@json')
        cy.wait('@message')

        cy.window().scrollTo('bottom')

        let date = []
        cy.get('[class="category-name"]')
            .each(($el) => {
                date.push($el.text())
            })

        cy.arr(date)

        cy.get('tr.category-uncategorized').its('length').as('semCategoria')
    });


    it(' Imprimir o título do tópico que contém o maior número de views;', () => {
        cy.get('#main > :nth-child(2) > :nth-child(4) > a')
            .invoke('removeAttr', 'target')
            .click()


        cy.window().scrollTo('bottom').as('scroll')

        cy.wait('@json')
        cy.wait('@message')
        cy.wait('@json2')

        cy.window().scrollTo('bottom')

        let views = []

        cy.xpath('//td[@class="num views "]//span[@class="number"]')
            .each(($el) => {
                views.push($el.text())
            })
        cy.get(views).then((visu) => {
            var max = Math.max(...visu)
            cy.xpath(`//span[@title="this topic has been viewed ${max} times"]`).parents().then((valor) => {
                cy.wrap(valor[1]).find("span[class='link-top-line']").invoke('text').then((texto) => {
                    cy.writeFile('path/to/Maiorvisu.txt', `${texto}`)
                    cy.log(`Tópico que contém o maior número de views - ${texto}`)
                })

            })


        })


    });

});

