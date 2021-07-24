 # <img src="https://www.cesar.school/wp-content/uploads/2019/09/marca_cesar_school-152x120.png"/> 
![fluxo de trabalho de exemplo](https://github.com/pauloribeiro93/Oportunidade_no_CESAR/actions/workflows/main.yml/badge.svg)

## Seleção para pessoa Engenheira de Testes

### 🛠️ Ferramentas Utilizadas

- Visual Studio Code 1.54 
- Cmder 1.3

### 	:infinity: CI/CD

- GitHub Actions

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
      <p>a. O título de todos os tópicos fechados (são os que tem um cadeado ao lado esquerdo do título)/<p> 
      <p> b. Quantidade de itens de cada categoria e dos que não possui categoria (termo logo abaixo do título)</p>
      <p>c. O título do tópico que contém o maior número de views</p>
      
##### :memo: Fluxo do cenário de "Atividade de Automação 2":
  
  1. Abrir o menu “School”
  2. Clicar a opção “Blog”
  3. Ir para a segunda página da lista de posts
  4. Ainda na página de lista, capture as seguintes informações do segundo post da página:
      <p>a. Imprimir título</p>
      <p>b. Imprimir data de publicação</p>
      
  5. Acessar o terceiro post da página: 
      <p>a. Imprimir título</p>
      <p>b. Imprimir autor</p>
      
  6. Ir até o final da página:
      <p>a. Imprimir endereço do cesar school</p>
      

## ⚙️ Executando os testes

##### Utilize o seguinte comando para executar o cenário de teste: 

``````
npm run cy:open
``````

##### Atividade de Automação 1

<img src="https://github.com/pauloribeiro93/Oportunidade_no_CESAR/blob/main/cypress/gifs/discourse.spec.js.gif"/> 


##### Atividade de Automação 2

<img src="https://github.com/pauloribeiro93/Oportunidade_no_CESAR/blob/main/cypress/gifs/cesarSchool.spec.js.gif"/> 


  
## Para gerar o relatorio use os comandos abaixo: 

``````
npm run report:merge
npm run report:mocha
``````

<img src="https://github.com/pauloribeiro93/Oportunidade_no_CESAR/blob/main/cypress/gifs/Captura%20de%20tela%202021-07-22%20165823.png"/> 

### 	:infinity: CI/CD

- GitHub Actions

Toda alteração efetuada na branch main executará o teste, gerando relatório e vídeo tanto de sucesso quanto falha. Screenshot apenas no caso de falha.  

``````
Entrar na guia Actions no GitHub >> acessar CI >> Selecionar o WorkFlow recente
``````
<img src="https://github.com/pauloribeiro93/Oportunidade_no_CESAR/blob/main/cypress/gifs/workflow.JPG"/>

## ✒️ Autor


## Paulo Ribeiro

[![Linkedin Badge](https://img.shields.io/badge/-Paulo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ribeiro-paulo/)](https://www.linkedin.com/in/ribeiro-paulo/) 
[![Outlook Badge](https://img.shields.io/badge/-Paulo_Ribeiro-0078d4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:pauloribeiro93@hotmail.com)](mailto:pauloribeiro93@hotmail.com)

