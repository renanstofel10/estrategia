'use strict';
const { element } = require('protractor');
const pageCommon = require('./common.js'); const common = new pageCommon();

class HomePage {
  //elements
  btnAllowNotification() { return element(by.id('onesignal-slidedown-allow-button')); }
  btnClosePopUp() { return element(by.id("getsitecontrol-140168")).element(by.css_sr('::sr button'));; }
  btnConfirmCookies() { return element(by.id("getsitecontrol-44266")).element(by.css_sr('::sr span'));; }
  btnFiltrarPequisa() { return element(by.xpath('//button[@class="search-input-icon"]')); }
  btnTipoPesquisa(tipoPesquisa) { return element(by.xpath(`//a[text()="${tipoPesquisa}"]`)); }
  viewAlertDialog() { return element(by.id('onesignal-slidedown-dialog')); }
  viewFiltroPesquisa() { return element(by.xpath('//input[@placeholder="Qual curso você está procurando? Ex.: Polícia Militar"]')); }
  viewHomePage() { return element(by.id('b_home')); }

  //functions  
  async closeAlerts() {
    await common.loadingElement(this.viewAlertDialog(), 300);
    await common.clickElement(this.btnAllowNotification(), 300);
    await common.clickElement(this.btnClosePopUp(), 300);
    return await common.clickElement(this.btnConfirmCookies(), 300);
  }
}

module.exports = HomePage;