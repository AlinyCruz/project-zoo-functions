const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const localizaAnimais = employees.find((employee) => employee
    .id === id).responsibleFor[0];
  // retorna o ID's do 1º animail do funcionário.

  // retorna um array de objs com os dados dos animais do funcionário.
  const animalMaisVelho = species.find((animal) => animal.id === localizaAnimais).residents
    .reduce((acumulador, valorCorrente) => {
      let retornaIdade;
      if (acumulador.age > valorCorrente.age) {
        retornaIdade = acumulador;
        return retornaIdade;
      }
      retornaIdade = valorCorrente;
      return retornaIdade;
    });
  return Object.values(animalMaisVelho);
}

getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2');

module.exports = getOldestFromFirstSpecies;
