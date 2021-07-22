Cypress.Commands.add('arrayCategorias', (date) => {
    date.reduce((todasCategorias, categoria) => {
        if (categoria in todasCategorias) {
            todasCategorias[categoria]++;
        } else {
            todasCategorias[categoria] = 1;
        }

        cy.wrap(todasCategorias).as('categoriasNoconsole')
        return todasCategorias

    }, {})

})

Cypress.Commands.add('titulosFechados', () => {
    let date = []
    cy.get('tr[class*=closed]').find('.link-top-line').find('a')
        .each(($el) => {
            date.push($el.text())
            cy.log(`Título de todos os tópicos fechados - ${date},`)
        })

})

Cypress.Commands.add('acessaValidaDemo', () => {
    cy.get('#main > :nth-child(2) > :nth-child(4) > a')
        .invoke('removeAttr', 'target')
        .should('have.attr', 'href', 'https://try.discourse.org')
        .click()

})

Cypress.Commands.add('maiorNumeroDeViews', (view) => {
    cy.get(view).then((visu) => {
        var max = Math.max(...visu)
        cy.xpath(`//span[@title="this topic has been viewed ${max} times"]`).parents().then((valor) => {
            cy.wrap(valor[1]).find("span[class='link-top-line']").invoke('text').then((texto) => {
                cy.writeFile('path/to/Maiorvisu.txt', `${texto}`)
                cy.log(`Tópico que contém o maior número de views - ${texto}`)
            })

        })


    })

})




