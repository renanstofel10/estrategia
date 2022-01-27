'use strict';

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0');
var yyyy = date.getFullYear();
var hh = date.getHours();
var today = `${yyyy}-${mm}-${dd}`;
var minutes = date.getMinutes();
if (minutes < 10) { minutes = '0' + minutes };

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  getPageTimeout: 600000,
  allScriptsTimeout: 30000,
  restartBrowserBetweenTests: false,
  rootElement: '*[ng-app]',
  params: {
    environment: null
  },
  specs: [
    'features/*.feature'
  ],
  cucumberOpts: {
    require: [
      'steps/*.steps.js',
      'hooks/hooks.js'
    ],
    tags: [
      '@smoketest'
    ],
    format: `json:${__dirname}/reports/results.json`,
    profile: false,
    'no-source': true
  },
  capabilities: {
    recordVideo: true,
    name: 'Protractor - Estratégia Educacional',
    shardTestFiles: true,
    maxInstances: 1,
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--incognito',
        '--start-fullscreen',
        'no-sandbox',
        'disable-infobars',
      ]
    }
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options:{
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true,
      displayDuration: true,
      disableLog: true,
      reportName: 'TEST RESULTS - ESTRATÉGIA EDUCACIONAL',
      pageTitle: 'TEST RESULTS - ESTRATÉGIA EDUCACIONAL',
      jsonOutputPath: `${__dirname}/reports/${today}/${hh}h${minutes}m/json`,
      reportPath: `${__dirname}/reports/${today}/${hh}h${minutes}m`,
      customData: {
        title: 'Info',
        data: [
          {label: 'Project', value: 'ESTRATÉGIA EDUCACIONAL'},
          {label: 'Local', value: 'WEB'},
          {label: 'Browser', value: 'Chrome'},
          {label: 'Execution date', value: `${dd}/${mm}/${yyyy}`},
          {label: 'Execution hour', value: `${hh}h:${minutes}m`}
        ],
      }
    }
  }],
  beforeLaunch: function () {
    SELENIUM_PROMISE_MANAGER: false;
  },
  onPrepare: function () {
    browser.ignoreSynchronization = true;
    browser.executeScript(function () {});
    require('./pages/locators.js').addShadowRootLocator();
  }
}