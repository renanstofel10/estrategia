# EXERCÍCIO 2
Testes automatizados de API utilizando Supertest.

## Pré-requisitos para rodar localmente

*  [Instalação do node](https://nodejs.org/en/download/)
*  [Instalação do npm](https://www.npmjs.com/get-npm)

#### Atenção: É necessário que a máquina esteja com todas as dependencias instaladas:

* Abrir o terminal e acessar o diretório `estrategia/api`;
* Usar o comando ```npm install``` onde se ecnontra o arquivo `package.json`:

## Rodando os testes de integração

* No diretório `estrategia/api`, usar o comando: `npm run test`

## Visualizando report detalhado de execução dos testes

* Após execução dos testes acima, será gerado um arquivo `index.html` no diretório `estrategia/reports`; Para visualizar é so abrir este arquivo.

## Resumindo o projeto

* Dentro da pasta `estrategia/api` temos as pastas: `schemas`, `specs` e `reports`;

  * Na pasta `schemas` ficam os arquivos `schema.js` que são utilizados na realização dos testes de contrato de API;

  * Na pasta `specs` ficam as pastas com arquivos `spec.js` que contém os cenários de testes executados e o arquivo `parameters.json` utilizado de massa de dados para execução dos testes;

  * Na pasta `reports` temos os arquivos gerados após execução dos testes;

* Na raiz do projeto também é possível visualizar os seguintes arquivos:

  * `package.json` e `package-lock.json`: Arquivo com nossas dependências e os scripts

  * `.env`: Arquivo com a variavel de ambiente `url` utilizada nos testes
