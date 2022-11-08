/* eslint-disable sonarjs/no-extra-arguments */
const { employees, species } = require('../data/zoo_data');

const idFuncionario = (param) => employees
  .find(({ id, firstName, lastName }) => param.id === id || param.name
    === firstName || param.name === lastName); // retorna objeto com os dados do funcionário

// console.log(idFuncionario({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

const nomeFuncionario = (parametro) => employees
  .find(({ id, firstName, lastName }) => parametro.id === id || parametro.name
  === firstName || parametro.name === lastName).firstName;// retorna nome do funcionário

const sobrenomeFuncionario = (parametro) => employees
  .find(({ id, firstName, lastName }) => parametro.id === id || parametro.name
=== firstName || parametro.name === lastName).lastName;// retorna sobrenome do funcionário

// console.log(nomeFuncionario({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
// console.log(sobrenomeFuncionario({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

const idsAnimaisFuncionario = (parametro) => employees
  .find(({ id, firstName, lastName }) => parametro.id === id || parametro.name
  === firstName || parametro.name === lastName).responsibleFor
  .map((animal) => species.find((specie) => specie.id === animal).name); // retorna o nome do animal ref. ao funcionario

// console.log(idsAnimaisFuncionario({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

const locationAnimaisFuncionario = (parametro) => employees
  .find(({ id, firstName, lastName }) => parametro.id === id || parametro.name
  === firstName || parametro.name === lastName).responsibleFor
  .map((animal) => species.find((specie) => specie.id === animal).location); // retorna a localidade do animal ref. ao funcionario

// console.log(locationAnimaisFuncionario({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

const objeto = () => employees.map((param) => ({
  id: param.id,
  fullName: `${param.firstName} ${param.lastName}`,
  species: param.responsibleFor.map((animal) => species
    .find((specie) => specie.id === animal).name),
  locations: param.responsibleFor.map((animal) => species
    .find((specie) => specie.id === animal).location),
}));

// console.log(objeto({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

function getEmployeesCoverage(param) {
  if (!param) {
    return objeto();
  }
  if (idFuncionario(param)) {
    const objetoEmployeesCoverage = {
      id: idFuncionario(param).id,
      fullName: `${nomeFuncionario(param)} ${sobrenomeFuncionario(param)}`,
      species: idsAnimaisFuncionario(param),
      locations: locationAnimaisFuncionario(param),
    };
    return objetoEmployeesCoverage;
  }
  throw new Error('Informações inválidas');
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
