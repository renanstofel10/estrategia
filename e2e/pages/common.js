'use strict';
let EC = protractor.ExpectedConditions;

class CommonPage {
  async openUrl(url, duration) {
    await browser.get(url);
    return await browser.sleep(duration)
  }

  async scrollElement(element, duration) {
    await browser.wait(EC.presenceOf(element), 10000);
    await browser.executeScript("arguments[0].click();", element.getWebElement());
    return await browser.sleep(duration);
  }

  async checkTextPresent(element, text) {
    try { await browser.wait(EC.textToBePresentInElement(element, text), 10000); } 
    catch (e) { throw (`O texto "${text}" não foi encontrado na página!`) }
    return
  }

  async clickElement(element, duration) {
    await browser.wait(EC.elementToBeClickable(element), 10000);
    await element.click();
    return await browser.sleep(duration);
  }

  async fillElement(element, text) {
    await browser.wait(EC.elementToBeClickable(element));
    await element.clear();
    await element.sendKeys(text);
    return await browser.sleep(500);
  }

  async invisibilityElement(element, duration) {
    await browser.wait(EC.not(EC.visibilityOf(element)), 10000);
    return await browser.sleep(duration);
  }

  async loadingElement(element, duration) {
    await browser.wait(EC.presenceOf(element), 10000);
    return await browser.sleep(duration);
  }
}

module.exports = CommonPage;