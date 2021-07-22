Cypress.Commands.add('arr', (valor) => {
    valor.reduce((todasCategorias, categoria) => {
        if (categoria in todasCategorias) {
            todasCategorias[categoria]++;
        } else {
            todasCategorias[categoria] = 1;
        }

        cy.wrap(todasCategorias).as('categoriasNoconsole')
        return todasCategorias

    }, {})

})



