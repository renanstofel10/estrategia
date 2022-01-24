# EXERCISE 2
Automated api tests using Supertest

## Requisites to run locally

*  [Node Installation](https://nodejs.org/en/download/)
*  [NPM Installation](https://www.npmjs.com/get-npm)

#### Attention: The machine must have all dependencies installed:

* Open the terminal and access the `estrategia/api` directory;
* Use the ```npm install``` command where the `package.json` file is found.

## Running integration tests

* In the `estrategia/api` directory, use the command `npm run test`.

## Viewing detailed test execution report

* After running the tests above, a `index.html` file will be generated in the `estrategia/reports` directory; To view, just open this file.

## Summarizing the project

* Inside the `strategy/api` folder we have the following folders: `schemas`, `specs` and `reports`

  * In the `schemas` folder are the `schema.js` files that are used to perform API contract tests;

  * In the `specs` folder are the folders with `spec.js` files that contain the executed test scenarios and the `parameters.json` file used as the data mass for the tests execution;

  * In the `reports` folder we have the files generated after running the tests;

* In the project root it is also possible to view the following files:

  * `package.json` and `package-lock.json`: File with our dependencies and scripts

  * `.env`: File with the `url` environment variable used in the tests
