'use strict';
const { element } = require('protractor');
const pageCommon = require('./common.js'); const common = new pageCommon();
class CursosPage {
  //Elements
  btnDetalhes(nome) { return element(by.xpath(`//*[text()="${nome}"]/../..//a[text()="Detalhes"]`)); }
  viewCargaHoraria() { return element(by.xpath('//div[@class="content"]//div[contains(text(),"horas")]')); }
  viewCronograma() { return element(by.xpath('//div[@class="content"]//div[contains(text(),"Vendas até")]')); }
  viewDetalhes() { return element(by.xpath('//h1[@class="cur-details-info-title"]')); }
  viewCursos(professor) { return element(by.xpath(`//h1[contains(text(), "${professor}")]`)); }
  viewQuantidadeCursos(professor) { return element(by.xpath(`//h1[contains(text(), "${professor}")]/../..//span[@class="text"]`)); }
  viewValoresCurso(curso) { return element(by.xpath(`//*[text()="${curso}"]/../..//div`)); }
  viewValoresPacote(pacote) { return element(by.xpath(`//*[text()="${pacote}"]/../..//span`)); }
  viewValorTotal() { return element(by.xpath('//div[@class="value"]')); }

  //Functions
  async checkValoresCurso(curso, parcelas, valor) {
    await common.checkTextPresent(this.viewValoresCurso(curso), parcelas);
    return await common.checkTextPresent(this.viewValoresCurso(curso), valor);
  }

  async checkValoresPacote(pacote, parcelas, valor) {
    await common.checkTextPresent(this.viewValoresPacote(pacote), parcelas);
    return await common.checkTextPresent(this.viewValoresPacote(pacote), valor);
  }
}

module.exports = CursosPage;