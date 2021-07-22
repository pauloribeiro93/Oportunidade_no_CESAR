![https://github.com/pauloribeiro93/Oportunidade_no_CESAR/blob/main/.github/workflows/main.yml](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
## Oportunidade_no_CESAR


### 🛠️ Ferramentas Utilizadas

- Visual Studio Code 1.54 
- Cmder 1.3

### :package: Packages 

- cypress: "^7.7.0",
- cypress-xpath: "^1.6.2"
- cypress-multi-reporters: "^1.5.0",
- mocha: "^9.0.2",
- mochawesome: "^6.2.2",
- mochawesome-merge: "^4.2.0",
- mochawesome-report-generator: "^5.2.0"

### :computer: Preparando o Ambiente

#### Windows:Win10
```
Node.js 10 ou 12 e superior (https://nodejs.org/en/)
```


##### Clone o projeto do GitHub em um diretório:

```
cd "seu diretorio"
git clone https://github.com/pauloribeiro93/Oportunidade_no_CESAR.git

```

##### :runner: Execute o seguinte comando para instalar as dependências

```
npm i
```

##### :memo: Fluxo do cenário de "Atividade de Automação 1":

  1. Acessar a página do Discourse (https://www.discourse.org/) ;

  3. Fazer scroll até o final da página;
  
  4. Imprimir:
      a. O título de todos os tópicos fechados (são os que tem um cadeado ao lado esquerdo do título) ;
      b. Quantidade de itens de cada categoria e dos que não possui categoria (termo logo abaixo do título);
      c. O título do tópico que contém o maior número de views;
      
##### :memo: Fluxo do cenário de "Atividade de Automação 2":
  
  1. Abrir o menu “School”
  2. Clicar a opção “Blog”
  3. Ir para a segunda página da lista de posts
  4. Ainda na página de lista, capture as seguintes informações do segundo post da página:
      a. Imprimir título
      b. Imprimir data de publicação
  5. Acessar o terceiro post da página: 
      a. Imprimir título
      b. Imprimir autor
  6. Ir até o final da página:
      a. Imprimir endereço do cesar school

## ⚙️ Executando os testes

##### Utilize o seguinte comando para executar o cenário de teste: 

``````
npm run cy:open
``````

##### Visualização do Teste:
  
  
##### Para gerar o relatorio use os comandos abaixo: 

``````
npm run report:merge
npm run report:mocha
``````




## ✒️ Autor


## Paulo Ribeiro

[![Linkedin Badge](https://img.shields.io/badge/-Paulo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ribeiro-paulo/)](https://www.linkedin.com/in/ribeiro-paulo/) 
[![Outlook Badge](https://img.shields.io/badge/-Paulo_Ribeiro-0078d4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:pauloribeiro93@hotmail.com)](mailto:pauloribeiro93@hotmail.com)

