'use strict';
const { After, Status, BeforeAll, setDefaultTimeout } = require('cucumber');

const pageCommon = require('../pages/common.js');
const common = new pageCommon();

const pageHome = require('../pages/home.js');
const home = new pageHome();

setDefaultTimeout(60000);

BeforeAll(async function() {
  await common.openUrl('https://www.estrategiaconcursos.com.br/', 300);
  await home.closeAlerts();
  await common.loadingElement(home.viewHomePage(), 300);
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    let world = this;
    return await browser.takeScreenshot().then(function (data) {
      return world.attach(data, "image/png");
    });
  }
});