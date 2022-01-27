## EXERCISE 1
Automated UI tests using Cucumber and Protractor.

Functionality: Search and View

## Prerequisites to run locally

* [Node Installation](https://nodejs.org/en/download/)
* [npm installation](https://www.npmjs.com/get-npm)

#### Attention: It is necessary that the machine has all dependencies installed:

* Open the terminal;
* Perform global test framework installation with the command: `npm install -g protractor`;
* Still in the terminal, access the `estrategia/e2e` directory;
* Use the `npm install` command where the `package.json` file is found.

## Updating webdriver

* In the `strategia/e2e` directory, use the commands below:

`npm run webdriver-update` -> This command will update the webdriver

`npm run webdriver-start` -> This command will start the webdriver

## Running the ui tests

* In the `strategia/e2e` directory, use the command below:

`npm run test`

## Viewing detailed test execution report

* After running the tests, a report will be generated in the `estrategia/e2e/reports` directory;
* In this directory there will be subfolders with the test execution date and time;
* After accessing the runtime, just open the `index.html` file

## Summarizing the project

* Inside the `estrategia/e2e` folder we have the following folders: `features`, `steps`, `hooks`, `pages` and `reports`;

* In the `features` folder contains the `.feature` file(s) which contains the step description;

* In the `specs` folder are the `spec.js` files that contain the executed test scenarios;

* In the `hooks` folder we have the `hooks.js` file which contains the execution calls: before (Before) and after (After) the tests;

* In the `pages` folder we have the `.js` files with all the functions that will be executed during the tests.

* In the `reports` folder we will have the test execution files that will be generated automatically;

* In the project root it is also possible to view the following files:

  * `package.json` and `package-lock.json` file with our dependencies and scripts
  * `conf.js` which contains the test execution parameters
