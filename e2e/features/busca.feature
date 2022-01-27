#language: pt

Funcionalidade: Busca e visualização de cursos
  Como um usuário
  Desejo consultar cursos por diferentes tipos de filtros
  Para visualizar as informações dos cursos

Contexto: Acessar pagina inicial da estratégia educacional
  Dado que usuário esteja na homepage "https://www.estrategiaconcursos.com.br/"

@smoketest
Esquema do Cenário: Consultar detalhes de curso por professor
  Quando eu selecionar a pesquisa "Por professor"
  Entao sistema exibe a página de consulta de cursos "Por professor"
  Quando eu consultar os cursos do professor "<nome>" com "<quantidade>" cursos disponíveis
  Entao sistema exibe os cursos do professor "<nome>" com "<quantidade>" cursos disponíveis
  Quando eu selecionar o curso "<curso>" com "<parcelas>" parcelas de "<valor>"
  Entao sistema exibe detalhes do curso "<curso>" no valor total de "<total>"
  Entao verifico o cronograma de vendas até a data "<data_vendas>"
  Entao verifico o cronograma de acesso até a data "<data_acesso>"
  Entao verifico a carga horária do curso de "<duracao>" horas

  Exemplos:
  | nome          | quantidade | curso                                                       | parcelas | valor  | total | duracao | data_vendas | data_acesso |
  | Adriane Fauth | 4          | Esquadrão de Elite: Presencial Online PF                    | 12       | 10,75  | 129   | 140     | 01/06/2022  | 30/11/2022  |
  | Carla Abreu   | 86         | EBSERH (Pedagogo) Conhecimentos Básicos - 2022 (Pós-Edital) | 12       | 15,83  | 190   | 16      | 10/04/2022  | 11/01/2023  |


@smoketest
Esquema do Cenário: Filtrar cursos disponíveis na listagem do professor
  Quando eu selecionar a pesquisa "Por professor"
  Entao sistema exibe a página de consulta de cursos "Por professor"
  Quando eu consultar os cursos do professor "<nome>" com "<quantidade>" cursos disponíveis
  Entao sistema exibe os cursos do professor "<nome>" com "<quantidade>" cursos disponíveis
  Quando eu filtrar os cursos pela palavara chave "<filtro>"
  Entao sistema exibe na listagem os resultados "<resultados>"

  Exemplos:
  | nome                 | quantidade | filtro              | resultados                                                                                                                                                                        | 
  | Aieska Monfardini    | 55         | CBM-BA              | CBM-BA - Correção Analítica de Redação (3 Correções por aluno) - 2021 (Pré-Edital); CBM-BA - Redação (3 Correções por aluno) - 2021 (Pré-Edital)                                  |
  | Juliano de Pelegrin  | 75         | Cartórios do TJ-SP  | Cartórios do TJ-SP - Como Estudar - 2021 (Pós-Edital); Cartórios do TJ-SP - Plano de Estudos - 2021 (Pós-Edital); Cartórios do TJ-SP - Vade-Mécum Estratégico - 2021 (Pós-Edital) |

@smoketest
Esquema do Cenário: Consultar pacote de cursos através da pesquisa por palavra chave
  Quando eu pesquisar o curso pela palavra chave "<pesquisa>"
  Entao sistema exibe o total de "<encontrados>" resultados encontrados para a pesquisa "<pesquisa>"
  Quando eu selecionar o pacote "<pacote>" com "<parcelas>" parcelas de "<valor>"
  Entao sistema exibe detalhes do pacote "<pacote>" no valor total de "<total>"
  Entao verifico o cronograma de vendas até a data "<data_vendas>"
  Entao verifico o cronograma de acesso até a data "<data_acesso>"
  Entao verifico a carga horária do curso de "<duracao>" horas

  Exemplos:
  | pesquisa                 | encontrados   | pacote                                                                         | parcelas | valor  | total    | duracao | data_vendas | data_acesso |
  | Tecnologia da informação | 15            | SUSEP (Analista Técnico - Tecnologia da Informação) Pacote - 2021 (Pós-Edital) | 12       | 64,90  | 778,80   | 694     | 01/05/2022  | 01/10/2022  |
  | Medicina                 | 8             | IFCE (Professor - Medicina Veterinária) Pacote - 2021 (Pré-Edital)             | 12       | 39,90  | 478,80   | 157     | 15/07/2022  | 15/12/2022  |