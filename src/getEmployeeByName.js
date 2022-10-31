const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return { };
  }

  const colaborador = employees.find((pessoa) => pessoa
    .firstName === employeeName || pessoa.lastName === employeeName);
  return colaborador;
}
getEmployeeByName();

module.exports = getEmployeeByName;
