'use strict';
const { Given, When, Then, setDefaultTimeout } = require('cucumber');

//Instances
const pageCommon = require('../pages/common.js'); const common = new pageCommon();
const pageHome = require('../pages/home.js'); const home = new pageHome();
const pageBusca = require('../pages/busca.js'); const busca = new pageBusca();
const pageCursos = require('../pages/cursos.js'); const cursos = new pageCursos();

setDefaultTimeout(30000);

//When steps
Given('que usuário esteja na homepage {string}', async (url) => { 
  await common.openUrl(url);
  await common.loadingElement(home.viewHomePage());
});

When('eu selecionar a pesquisa {string}', async (tipoPesquisa) => { 
  await common.clickElement(home.btnTipoPesquisa(tipoPesquisa));
});

When('eu consultar os cursos do professor {string} com {string} cursos disponíveis', async (professor, totalCursos) => {
  await common.loadingElement(busca.viewListaCompleta());
  await common.checkTextPresent(busca.viewTotalCursos(professor), totalCursos);
  await common.clickElement(busca.btnDetalhesCursos(professor));
});

When('eu selecionar o curso {string} com {string} parcelas de {string}', async (curso, parcelas, valor) => { 
  await cursos.checkValoresCurso(curso, parcelas, valor);
  await common.clickElement(cursos.btnDetalhes(curso));
});

When('eu selecionar o pacote {string} com {string} parcelas de {string}', async (pacote, parcelas, valor) => { 
  await cursos.checkValoresPacote(pacote, parcelas, valor);
  await common.clickElement(cursos.btnDetalhes(pacote));
});

When('eu filtrar os cursos pela palavara chave {string}', async (filtro) => { 
  await common.fillElement(busca.viewFiltroCurso(), filtro);
});

When('eu pesquisar o curso pela palavra chave {string}', async (filtro) => {
  await common.fillElement(home.viewFiltroPesquisa(), filtro);
  await common.clickElement(home.btnFiltrarPequisa());
});

Then('sistema exibe a página de consulta de cursos {string}', async (tipoConsulta) => { 
  await common.loadingElement(busca.viewTipoConsulta());
  await common.checkTextPresent(busca.viewTipoConsulta(), tipoConsulta.toLowerCase());
});

Then('sistema exibe os cursos do professor {string} com {string} cursos disponíveis', async (professor, totalCursos) => { 
  await common.loadingElement(cursos.viewCursos(professor));
  await common.checkTextPresent(cursos.viewQuantidadeCursos(professor), totalCursos);
});

Then('sistema exibe detalhes do curso {string} no valor total de {string}', async (curso, valorTotal) => { 
  await common.loadingElement(cursos.viewDetalhes());
  await common.checkTextPresent(cursos.viewDetalhes(), curso);
  await common.checkTextPresent(cursos.viewValorTotal(), valorTotal);
});

Then('sistema exibe detalhes do pacote {string} no valor total de {string}', async (pacote, valorTotal) => { 
  await common.loadingElement(cursos.viewDetalhes());
  await common.checkTextPresent(cursos.viewDetalhes(), pacote);
  await common.checkTextPresent(cursos.viewValorTotal(), valorTotal);
});

Then('verifico o cronograma de vendas até a data {string}', async (data) => { 
  await common.checkTextPresent(cursos.viewCronograma(), data);
});

Then('verifico o cronograma de acesso até a data {string}', async (data) => { 
  await common.checkTextPresent(cursos.viewCronograma(), data);
});

Then('verifico a carga horária do curso de {string} horas', async (duracao) => { 
  await common.checkTextPresent(cursos.viewCargaHoraria(), duracao);
});

Then('sistema exibe na listagem os resultados {string}', async (cursos) => {
  let cursosArray = cursos.split("; ");
  await busca.checkListagemCursos(cursosArray);
});

Then('sistema exibe o total de {string} resultados encontrados para a pesquisa {string}', async (total, filtro) => { 
  await common.loadingElement(busca.viewResultadosBuscaPage());
  await common.checkTextPresent(busca.viewInfoBusca(), total);
  await common.checkTextPresent(busca.viewInfoBusca(), filtro);
});