const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const manager = employees.some((employee) => employee.managers.includes(id));
  return manager;
}
isManager('9e7d4524-363c-416a-8759-8aa7e50c0992');

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const relatedEmployees = employees
      .filter((employee) => employee.managers.includes(managerId));
    return relatedEmployees.map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
