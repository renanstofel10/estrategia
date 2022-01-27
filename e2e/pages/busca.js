'use strict';
const { element } = require('protractor');
const pageCommon = require('./common.js'); const common = new pageCommon();

class BuscaPage {
  //Elements 
  btnDetalhesCursos(professor) { return element(by.xpath(`//a[text()="${professor}"]/../..//a[@class="card-prod-details -blue"]`)); } 
  viewCursoLista(curso) { return element(by.xpath(`//section[@class="card-prod || js-card-prod"]//a[text()="${curso}"]`)); }
  viewFiltroCurso() { return element(by.xpath('//input[@placeholder="Filtrar"]')); }
  viewInfoBusca() { return element(by.xpath('//p[@data-result-text]')); }
  viewListaCompleta() { return element(by.xpath('//*[text()="Todos os resultados foram carregados"]')); }
  viewResultadosBuscaPage() { return element(by.xpath('//h1[text()="Resultado da busca"]')); }
  viewTipoConsulta() { return element(by.xpath('//ul[@class="page-header-breadcrumb"]//span')); }
  viewTotalCursos(professor) { return element(by.xpath(`//a[text()="${professor}"]/../..//div[@class="card-prod-available"]`)); }

  //functions
  async checkListagemCursos(cursos) {
    for (let i=0; i < cursos.length; i++) {
      await common.loadingElement(this.viewCursoLista(cursos[i]));
    }
    return
  }
}

module.exports = BuscaPage;